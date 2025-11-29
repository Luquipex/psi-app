import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Layout from '../components/layout/Layout';
import ResultCard from '../features/results/ResultCard';
import { useDiagnostic } from '../hooks/useDiagnostic';
import { INTERVENTIONS } from '../data/interventions';

const ResultPage = () => {
    const navigate = useNavigate();
    const { results, goBack } = useDiagnostic();

    // Si no hay resultado, redirigir al inicio
    if (!results.resultId || !results.intensity) {
        navigate('/');
        return null;
    }

    const interventionData = INTERVENTIONS[results.resultId];

    if (!interventionData) {
        navigate('/');
        return null;
    }

    const handleBack = () => {
        goBack();
        navigate('/quiz');
    };

    return (
        <Layout>
            <div className="flex-1 p-6 w-full">
                {/* Botón de retroceso */}
                <div className="w-full mb-6">
                    <button
                        onClick={handleBack}
                        className="flex items-center gap-2 text-ui-secondary hover:text-text-primary transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/50"
                    >
                        <ArrowLeft size={16} /> Volver a la pregunta anterior
                    </button>
                </div>

                {/* Tarjeta de resultados */}
                <div className="bg-white rounded-3xl shadow-warm-xl border border-ui-secondary/20 overflow-hidden p-8 md:p-10">
                    <ResultCard
                        data={interventionData}
                        intensity={results.intensity}
                    />
                </div>

                {/* Disclaimer */}
                <div className="mt-8 border-t border-slate-100 pt-6 text-center">
                    <p className="text-xs text-ui-secondary max-w-2xl mx-auto">
                        * Esta herramienta es educativa y no reemplaza un diagnóstico profesional.
                        Si experimentas síntomas graves, por favor consulta con un profesional de salud mental.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default ResultPage;
