import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { INTERVENTIONS } from '../data/interventions';
import Layout from '../components/layout/Layout';
import { Zap, Calendar, Trophy, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DashboardPage = () => {
    const { user, userProfile, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    // Recuperar datos del arquetipo
    const archetypeId = userProfile?.archetypeId;
    const archetypeData = archetypeId ? INTERVENTIONS[archetypeId] : null;

    if (!user) {
        return (
            <Layout>
                <div className="p-6 text-center">
                    <p>Cargando sesión...</p>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="p-6 w-full max-w-4xl mx-auto animate-in fade-in duration-700">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-text-primary">
                            Hola, {user.email?.split('@')[0]}
                        </h1>
                        <p className="text-text-secondary">Bienvenido a tu espacio.</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="text-sm text-ui-secondary hover:text-brand-primary underline"
                    >
                        Cerrar Sesión
                    </button>
                </div>

                {/* 1. Tu Arquetipo Actual */}
                {archetypeData ? (
                    <div className="bg-white rounded-2xl shadow-warm-lg border border-ui-secondary/20 p-6 mb-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-brand-primary/10 text-brand-primary text-xs font-bold px-3 py-1 rounded-bl-xl">
                            ACTUAL
                        </div>
                        <h2 className="text-lg font-bold text-text-primary mb-2 flex items-center gap-2">
                            <Zap size={20} className="text-brand-primary" />
                            Tu Arquetipo
                        </h2>
                        <h3 className="text-3xl font-extrabold text-brand-primary mb-2">
                            {archetypeData.profile.marketing_name}
                        </h3>
                        <p className="text-text-secondary italic mb-4">
                            "{archetypeData.profile.quote}"
                        </p>
                        <div className="bg-bg-primary p-4 rounded-xl border border-ui-secondary/10">
                            <h4 className="font-bold text-text-primary text-sm mb-1">
                                Tu Superpoder Oculto:
                            </h4>
                            <p className="text-sm text-text-secondary">
                                {archetypeData.content.science_explanation.substring(0, 120)}...
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white rounded-2xl shadow-warm border border-ui-secondary/20 p-6 mb-8 text-center">
                        <p className="text-text-secondary mb-4">Aún no tienes un diagnóstico activo.</p>
                        <button
                            onClick={() => navigate('/quiz')}
                            className="bg-brand-primary text-white px-6 py-2 rounded-lg font-bold shadow-warm hover:bg-brand-hover transition-all"
                        >
                            Realizar Diagnóstico
                        </button>
                    </div>
                )}

                {/* 2. Herramienta del Día */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                        <Calendar size={20} className="text-ui-secondary" />
                        Tu Herramienta de Hoy
                    </h2>
                    {archetypeData ? (
                        <div className="bg-gradient-to-br from-text-primary to-text-primary/90 text-white rounded-2xl shadow-warm-xl p-6 relative overflow-hidden group cursor-pointer transition-transform hover:scale-[1.01]">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/20 rounded-full blur-3xl -mr-10 -mt-10"></div>

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="bg-white/20 px-2 py-1 rounded text-xs font-bold backdrop-blur-sm">
                                        PRÁCTICA DIARIA
                                    </span>
                                    <span className="text-brand-primary font-bold">
                                        {archetypeData.content.intervention.duration}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2">
                                    {archetypeData.content.intervention.tool_name}
                                </h3>
                                <p className="text-white/80 mb-6 text-sm max-w-lg">
                                    {archetypeData.content.intervention.steps[0]}
                                </p>
                                <button className="bg-white text-text-primary font-bold py-3 px-6 rounded-xl w-full md:w-auto hover:bg-brand-primary hover:text-white transition-colors">
                                    Comenzar Práctica
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-ui-secondary/5 border border-ui-secondary/10 rounded-2xl p-6 text-center text-text-secondary">
                            Completa tu diagnóstico para desbloquear tu herramienta diaria.
                        </div>
                    )}
                </div>

                {/* 3. Gamification Teaser (Locked) */}
                <div className="opacity-60 grayscale filter pointer-events-none relative">
                    <div className="absolute inset-0 z-10 flex items-center justify-center">
                        <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-warm border border-ui-secondary/20 flex items-center gap-2">
                            <Lock size={14} className="text-ui-secondary" />
                            <span className="text-xs font-bold text-text-primary uppercase tracking-wide">
                                Próximamente
                            </span>
                        </div>
                    </div>
                    <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
                        <Trophy size={20} className="text-ui-accent" />
                        Tu Progreso
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-2xl border border-ui-secondary/20 text-center">
                            <div className="text-3xl font-extrabold text-brand-primary mb-1">0</div>
                            <div className="text-xs text-text-secondary uppercase font-bold">Días Racha</div>
                        </div>
                        <div className="bg-white p-4 rounded-2xl border border-ui-secondary/20 text-center">
                            <div className="text-3xl font-extrabold text-ui-accent mb-1">Novato</div>
                            <div className="text-xs text-text-secondary uppercase font-bold">Nivel Actual</div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default DashboardPage;
