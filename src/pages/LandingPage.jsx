import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { useDiagnostic } from '../hooks/useDiagnostic';

const LandingPage = () => {
    const navigate = useNavigate();
    const { resetDiagnostic } = useDiagnostic();

    const handleStart = () => {
        resetDiagnostic();
        navigate('/quiz');
    };

    return (
        <Layout>
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center min-h-[80vh]">
                <h1 className="text-hero text-text-primary mb-6 leading-tight">
                    Convertite en tu{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-hover">
                        mejor versión
                    </span>
                </h1>
                <p className="text-body text-text-secondary mb-10 max-w-2xl">
                    Un diagnóstico dinámico basado en evidencia para identificar y
                    desbloquear tus barreras de rendimiento en menos de 2 minutos.
                </p>
                <button
                    onClick={handleStart}
                    className="bg-brand-primary text-white text-button py-4 px-8 rounded-xl shadow-warm-xl hover:bg-brand-hover transition-all flex items-center gap-2 transform hover:scale-105 active:scale-95"
                >
                    Comenzar Diagnóstico <ArrowRight size={20} />
                </button>

                <div className="mt-12 flex gap-8 text-sm text-ui-secondary font-medium">
                    <span>⚡️ Rápido</span>
                    <span>🧠 Científico</span>
                    <span>🔒 Privado</span>
                </div>
            </div>
        </Layout>
    );
};

export default LandingPage;
