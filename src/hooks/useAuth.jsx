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
                // Cargar perfil adicional si existe
                try {
                    if (db) {
                        const docRef = doc(db, "users", currentUser.uid);
                        const docSnap = await getDoc(docRef);
                        if (docSnap.exists()) {
                            setUserProfile(docSnap.data());
                        }
                    }
                } catch (error) {
                    console.error("Error fetching user profile:", error);
                }
            } else {
                setUserProfile(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // Registro + Creación de Perfil en Firestore
    const signup = async (email, password, additionalData = {}) => {
        if (!auth) throw new Error("Auth not configured");

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const newUser = userCredential.user;

        // Crear documento de usuario en Firestore
        try {
            if (db) {
                await setDoc(doc(db, "users", newUser.uid), {
                    email: newUser.email,
                    createdAt: new Date(),
                    ...additionalData // Aquí guardaremos el arquetipo/resultado
                });
                // Actualizar estado local
                setUserProfile({ email: newUser.email, ...additionalData });
            }
        } catch (error) {
            console.error("Error creating user profile:", error);
            // No bloqueamos el flujo si falla Firestore, pero logueamos
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
