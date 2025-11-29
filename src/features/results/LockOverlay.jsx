import React, { useState } from 'react';
import { Lock, Phone, AlertTriangle } from 'lucide-react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../services/firebase';

const LockOverlay = ({
    intensity,
    resultId,
    toolName,
    onUnlock
}) => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    // Lógica de textos según intensidad
    let overlayTitle = "";
    let submitButtonText = "Enviar y Desbloquear";
    let showSupportCTA = false;

    if (intensity === 'friction') {
        overlayTitle = "Desbloquea la Explicación Neurocientífica";
        submitButtonText = "Enviar y Desbloquear la Ciencia";
    } else if (intensity === 'loss') {
        overlayTitle = `Desbloquea tu Diagnóstico y la Herramienta: "${toolName}"`;
        submitButtonText = "Enviar y Desbloquear la Herramienta";
    } else if (intensity === 'health') {
        overlayTitle = "Obtén la Guía Completa de tu Perfil";
        submitButtonText = "Enviar y Desbloquear la Guía";
        showSupportCTA = true;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;

        setLoading(true);
        try {
            if (db) {
                await addDoc(collection(db, 'leads'), {
                    email,
                    resultId,
                    intensity,
                    createdAt: serverTimestamp(),
                    source: 'psi_app_beta'
                });
            } else {
                console.warn("Database not configured, lead not saved.");
            }
            onUnlock();
        } catch (error) {
            console.error("Error saving lead:", error);
            onUnlock(); // Fallback
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative rounded-2xl overflow-hidden border border-ui-secondary/20 mt-8">
            {showSupportCTA && (
                <div className="bg-red-50 border-b border-red-100 p-4 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-red-700 font-bold">
                        <AlertTriangle size={20} />
                        <span className="text-sm">Recomendación Prioritaria</span>
                    </div>
                    <button
                        onClick={() => alert("Por favor contacta a un profesional de salud mental.")}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-2"
                    >
                        <Phone size={14} /> Buscar Soporte
                    </button>
                </div>
            )}

            {/* Contenido "Fake" de fondo borroso */}
            <div className="bg-bg-primary p-6 min-h-[400px] filter blur-sm select-none opacity-50 pointer-events-none">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-text-primary">Protocolo Avanzado</h3>
                    <p className="text-text-secondary">
                        Esta sección contiene la explicación neurocientífica detallada y el protocolo paso a paso para tu perfil...
                    </p>
                    <div className="space-y-2 mt-4">
                        <div className="h-4 w-3/4 bg-ui-secondary/20 rounded"></div>
                        <div className="h-4 w-1/2 bg-ui-secondary/20 rounded"></div>
                        <div className="h-4 w-5/6 bg-ui-secondary/20 rounded"></div>
                        <div className="h-4 w-full bg-ui-secondary/20 rounded"></div>
                    </div>
                </div>
            </div>

            {/* Overlay con Formulario */}
            <div className="absolute inset-0 bg-bg-primary/60 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center">
                <div className="bg-brand-primary/10 p-4 rounded-full mb-4 text-brand-primary shadow-warm">
                    <Lock size={32} />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2 max-w-xs mx-auto leading-tight">
                    {overlayTitle}
                </h3>

                <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col gap-3 mt-4">
                    <input
                        type="email"
                        placeholder="Tu correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-ui-secondary/30 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none text-center"
                        required
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-brand-primary text-white font-bold py-3 rounded-lg hover:bg-brand-hover transition-all shadow-warm-lg flex justify-center items-center gap-2 disabled:opacity-70"
                    >
                        {loading ? "Procesando..." : submitButtonText}
                    </button>
                </form>
                <p className="text-[10px] text-ui-secondary mt-4 uppercase tracking-wide">
                    100% Seguro & Sin Spam
                </p>
            </div>
        </div>
    );
};

export default LockOverlay;
