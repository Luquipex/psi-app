import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Layout from '../components/layout/Layout';
import QuizCard from '../features/diagnostic/QuizCard';
import { useDiagnostic } from '../hooks/useDiagnostic';

const QuizPage = () => {
    const navigate = useNavigate();
    const {
        currentNode,
        currentNodeId,
        history,
        results,
        answerQuestion,
        goBack,
        totalSteps
    } = useDiagnostic();

    // Redirigir a resultados cuando se complete el diagnóstico
    useEffect(() => {
        if (results.isFinished) {
            navigate('/result');
        }
    }, [results.isFinished, navigate]);

    const handleBack = () => {
        if (history.length === 0) {
            navigate('/');
        } else {
            goBack();
        }
    };

    // Calcular progreso (aproximado)
    const progress = Math.min(((history.length + 1) / totalSteps) * 100, 100);

    return (
        <Layout>
            {/* Barra de progreso */}
            <div className="w-full h-1 bg-ui-secondary/10 sticky top-[60px] z-10">
                <div
                    className="h-full bg-brand-primary transition-all duration-700 ease-out shadow-[0_0_10px_rgba(249,115,22,0.5)]"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <div className="flex-1 flex flex-col items-center justify-start pt-12 p-6 w-full">
                {/* Header con botón de retroceso */}
                <div className="w-full max-w-2xl flex justify-between items-center mb-6">
                    <button
                        onClick={handleBack}
                        className="flex items-center gap-2 text-ui-secondary hover:text-text-primary transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/50"
                    >
                        <ArrowLeft size={16} />
                        {history.length === 0 ? "Inicio" : "Atrás"}
                    </button>
                    <div className="text-xs font-semibold text-brand-primary uppercase tracking-wider">
                        Paso {history.length + 1}
                    </div>
                </div>

                {/* Tarjeta de pregunta */}
                {currentNode && (
                    <QuizCard
                        question={currentNode.question}
                        description={currentNode.description}
                        options={currentNode.options}
                        onSelect={answerQuestion}
                    />
                )}
            </div>
        </Layout>
    );
};

export default QuizPage;
