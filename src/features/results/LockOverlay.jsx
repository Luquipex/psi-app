import React, { useState, useEffect } from 'react';
import { Lock, Phone, AlertTriangle, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const LockOverlay = ({
    intensity,
    resultId,
    toolName,
    onUnlock
}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [configError, setConfigError] = useState(false);

    const { signup } = useAuth();
    const navigate = useNavigate();

    // Verificar configuración al montar
    useEffect(() => {
        if (!import.meta.env.VITE_FIREBASE_API_KEY) {
            setConfigError(true);
            setError("Error de configuración: Faltan credenciales de Firebase (.env)");
        }
    }, []);

    // Lógica de textos según intensidad
    let overlayTitle = "";
    let submitButtonText = "Crear Cuenta y Ver Resultados";
    let showSupportCTA = false;

    if (intensity === 'friction') {
        overlayTitle = "Crea tu cuenta gratis para ver tu explicación neurocientífica";
    } else if (intensity === 'loss') {
        overlayTitle = `Regístrate para guardar tu herramienta: "${toolName}"`;
    } else if (intensity === 'health') {
        overlayTitle = "Guarda tu perfil completo creando una cuenta";
        showSupportCTA = true;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (configError) {
            setError("No se puede crear cuenta: Falta configuración del sistema.");
            return;
        }
        if (!email || !password) return;
        if (password.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres");
            return;
        }

        setLoading(true);
        setError('');

        // Safety timeout para evitar hang infinito
        const timeoutId = setTimeout(() => {
            if (loading) {
                setLoading(false);
                setError("La solicitud está tardando demasiado. Verifica tu conexión.");
            }
        }, 10000);

        try {
            // Crear usuario y guardar perfil con el resultado del quiz
            await signup(email, password, {
                archetypeId: resultId,
                intensity: intensity,
                toolName: toolName,
                source: 'psi_app_beta'
            });

            clearTimeout(timeoutId);
            // Redirigir al dashboard para confirmar la creación de cuenta
            navigate('/dashboard');

        } catch (err) {
            clearTimeout(timeoutId);
            console.error("Signup error:", err);
            if (err.code === 'auth/email-already-in-use') {
                setError("Este email ya está registrado. Intenta iniciar sesión.");
            } else if (err.message === "Auth not configured") {
                setError("Error de sistema: Firebase no está configurado.");
            } else {
                setError("Error al crear cuenta. Intenta nuevamente.");
            }
            setLoading(false);
        }
    };

    return (
        <div className="relative rounded-2xl overflow-hidden border border-ui-secondary/20 mt-8">
            {showSupportCTA && (
                <div className="bg-red-50 border-b border-red-100 p-4 flex justify-between items-center relative z-20">
                    <div className="flex items-center gap-2 text-red-700 font-bold">
                        <AlertTriangle size={20} />
                        <span className="text-sm">Recomendación Prioritaria</span>
                    </div>
                    <button
                        onClick={() => window.open("https://wa.me/5493764669759?text=Hola,%20acabo%20de%20realizar%20mi%20diagnostico%20en%20Psiapp%20y%20me%20gustaria%20profundizar%20en%20mi%20perfil", "_blank")}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-2"
                    >
                        <Phone size={14} /> Habla con un especialista
                    </button>
                </div>
            )}

            {/* Contenido "Fake" de fondo borroso - Ahora Absolute */}
            <div className="absolute inset-0 bg-bg-primary p-6 min-h-[400px] filter blur-sm select-none opacity-50 pointer-events-none">
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

            {/* Overlay con Formulario - Ahora Relative para empujar la altura */}
            <div className="relative bg-bg-primary/90 backdrop-blur-md flex flex-col items-center justify-center p-6 pb-12 text-center z-10 w-full">
                <div className="bg-brand-primary/10 p-4 rounded-full mb-4 text-brand-primary shadow-warm">
                    <Lock size={32} />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2 max-w-xs mx-auto leading-tight">
                    {overlayTitle}
                </h3>

                <p className="text-sm text-text-secondary mb-6 max-w-xs mx-auto">
                    Únete a Psi.app para guardar tu progreso y acceder a tu dashboard personal.
                </p>

                <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col gap-3">
                    {error && (
                        <div className="text-xs text-red-600 bg-red-50 p-2 rounded border border-red-100">
                            {error}
                        </div>
                    )}

                    <input
                        type="email"
                        placeholder="Tu correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-ui-secondary/30 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none"
                        required
                        disabled={loading}
                    />

                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Crea una contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 border border-ui-secondary/30 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none"
                            required
                            minLength={6}
                            disabled={loading}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-ui-secondary hover:text-text-primary"
                            disabled={loading}
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    <button
                        type="submit"
                        disabled={loading || configError}
                        className="w-full bg-brand-primary text-white font-bold py-3 rounded-lg hover:bg-brand-hover transition-all shadow-warm-lg flex justify-center items-center gap-2 disabled:opacity-70 mt-2"
                    >
                        {loading ? "Creando cuenta..." : submitButtonText}
                    </button>
                </form>

                <div className="mt-6 block text-xs text-text-secondary">
                    ¿Ya tienes cuenta?{' '}
                    <button
                        onClick={() => navigate('/login')}
                        className="text-brand-primary font-bold hover:underline"
                    >
                        Iniciar Sesión
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LockOverlay;
