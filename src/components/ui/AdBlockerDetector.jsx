import React, { useEffect, useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';
import { db } from '../../services/firebase';
import { doc, getDoc } from 'firebase/firestore';

const AdBlockerDetector = () => {
    const [isBlocked, setIsBlocked] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        const detectAdBlocker = async () => {
            // Intentar una operación simple de Firestore
            if (!db) {
                setIsBlocked(true);
                return;
            }

            try {
                // Intentar leer un documento que no existe (solo para testear conexión)
                const testRef = doc(db, '_test_connection_', 'test');
                const timeoutPromise = new Promise((_, reject) =>
                    setTimeout(() => reject(new Error('timeout')), 3000)
                );

                await Promise.race([
                    getDoc(testRef),
                    timeoutPromise
                ]);

                // Si llegamos aquí, Firestore está funcionando
                setIsBlocked(false);
            } catch (error) {
                // Si falla (timeout, blocked, etc), asumimos que está bloqueado
                console.warn('Firestore connection blocked:', error);
                setIsBlocked(true);
            }
        };

        // Detectar después de un breve delay para que la app cargue
        const timer = setTimeout(detectAdBlocker, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (!isBlocked || dismissed) return null;

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white p-4 shadow-lg animate-in slide-in-from-top duration-300">
            <div className="max-w-4xl mx-auto flex items-start gap-4">
                <AlertTriangle className="flex-shrink-0 mt-1" size={24} />
                <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">
                        Ad Blocker Detectado
                    </h3>
                    <p className="text-sm text-white/90 mb-2">
                        Tu bloqueador de anuncios está impidiendo que la aplicación funcione correctamente.
                        Esto evita que podamos guardar y mostrar tu diagnóstico.
                    </p>
                    <div className="bg-white/10 rounded-lg p-3 text-sm">
                        <p className="font-bold mb-1">Para solucionar:</p>
                        <ol className="list-decimal list-inside space-y-1 text-white/90">
                            <li>Haz click en el ícono de tu ad blocker (arriba a la derecha)</li>
                            <li>Selecciona "Desactivar en este sitio" o similar</li>
                            <li>Recarga la página</li>
                        </ol>
                    </div>
                </div>
                <button
                    onClick={() => setDismissed(true)}
                    className="flex-shrink-0 p-1 hover:bg-white/20 rounded transition-colors"
                    aria-label="Cerrar"
                >
                    <X size={20} />
                </button>
            </div>
        </div>
    );
};

export default AdBlockerDetector;
