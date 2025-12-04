import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../services/firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    // Cargar perfil desde localStorage al inicio (cache optimista)
    useEffect(() => {
        const cachedProfile = localStorage.getItem('psi_user_profile');
        if (cachedProfile) {
            try {
                setUserProfile(JSON.parse(cachedProfile));
            } catch (error) {
                console.error('Error parsing cached profile:', error);
            }
        }
    }, []);

    // Escuchar cambios en la sesión
    useEffect(() => {
        if (!auth) {
            console.warn("Auth not initialized (missing config).");
            setLoading(false);
            return;
        }

        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);

            if (currentUser) {
                // Primero marcamos como no-loading para permitir al usuario ver el dashboard
                // El perfil puede cargarse después
                setLoading(false);

                // Cargar perfil adicional si existe
                if (db) {
                    try {
                        const docRef = doc(db, "users", currentUser.uid);
                        const docSnap = await getDoc(docRef);

                        if (docSnap.exists()) {
                            const profileData = docSnap.data();
                            setUserProfile(profileData);
                            // Actualizar cache
                            localStorage.setItem('psi_user_profile', JSON.stringify(profileData));
                        } else {
                            console.warn("User profile document does not exist yet");
                            // Mantener el perfil del cache si existe
                        }
                    } catch (error) {
                        console.error("Error fetching user profile:", error);
                        // No bloqueamos la UI - el usuario puede seguir usando la app
                    }
                }
            } else {
                setUserProfile(null);
                setLoading(false);
                // Limpiar cache al hacer logout
                localStorage.removeItem('psi_user_profile');
            }
        });

        return () => unsubscribe();
    }, []);

    // Registro + Creación de Perfil en Firestore
    const signup = async (email, password, additionalData = {}) => {
        if (!auth) throw new Error("Auth not configured");

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const newUser = userCredential.user;

        // Crear documento de usuario en Firestore con timeout
        if (db) {
            try {
                // Agregar timeout a la operación de Firestore
                const firestoreWrite = setDoc(doc(db, "users", newUser.uid), {
                    email: newUser.email,
                    createdAt: new Date(),
                    ...additionalData
                });

                const timeout = new Promise((_, reject) =>
                    setTimeout(() => reject(new Error("Firestore timeout")), 5000)
                );

                await Promise.race([firestoreWrite, timeout]);

                // Actualizar estado local solo si la escritura fue exitosa
                const profileData = { email: newUser.email, ...additionalData };
                setUserProfile(profileData);
                // Guardar en localStorage para acceso inmediato
                localStorage.setItem('psi_user_profile', JSON.stringify(profileData));
            } catch (error) {
                console.error("Error creating user profile:", error);
                // No bloqueamos el flujo si falla Firestore
                // El usuario aún está autenticado, solo falta el perfil completo
            }
        }

        return newUser;
    };

    // Actualizar perfil de usuario existente
    const updateUserProfile = async (data) => {
        if (!auth.currentUser || !db) return;

        try {
            const userRef = doc(db, "users", auth.currentUser.uid);
            await updateDoc(userRef, data);

            // Actualizar estado local
            setUserProfile(prev => ({ ...prev, ...data }));
            return true;
        } catch (error) {
            console.error("Error updating user profile:", error);
            return false;
        }
    };

    const login = (email, password) => {
        if (!auth) throw new Error("Auth not configured");
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        if (!auth) return Promise.resolve();
        return signOut(auth);
    };

    const value = {
        user,
        userProfile,
        signup,
        updateUserProfile,
        login,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
