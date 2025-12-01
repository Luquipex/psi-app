import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Layout from '../components/layout/Layout';
import { ArrowRight, AlertCircle } from 'lucide-react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            await login(email, password);
            navigate('/dashboard');
        } catch (err) {
            console.error("Login error:", err);
            setError('Email o contraseña incorrectos.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <div className="flex-1 flex flex-col items-center justify-center p-6 pb-12 w-full max-w-md mx-auto min-h-screen py-10">
                <h1 className="text-3xl font-bold text-text-primary mb-2 text-center">
                    Bienvenido de nuevo
                </h1>
                <p className="text-text-secondary mb-8 text-center">
                    Ingresa a tu espacio personal en Psi.app
                </p>

                <form onSubmit={handleSubmit} className="w-full space-y-4">
                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm flex items-center gap-2 border border-red-100">
                            <AlertCircle size={16} /> {error}
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-bold text-text-primary mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 border border-ui-secondary/30 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                            placeholder="tu@email.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-text-primary mb-1">Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 border border-ui-secondary/30 rounded-xl focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-brand-primary text-white font-bold py-4 rounded-xl shadow-warm hover:bg-brand-hover transition-all flex justify-center items-center gap-2 disabled:opacity-70 mt-4"
                    >
                        {loading ? 'Ingresando...' : (
                            <>Ingresar <ArrowRight size={20} /></>
                        )}
                    </button>
                </form>

                <div className="mt-6 block text-center">
                    <p className="text-sm text-text-secondary">
                        ¿Aún no tienes cuenta?{' '}
                        <button
                            onClick={() => navigate('/')}
                            className="text-brand-primary font-bold hover:underline"
                        >
                            Realizar Diagnóstico
                        </button>
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default LoginPage;
