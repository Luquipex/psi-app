import React, { createContext, useContext, useState, useMemo } from 'react';
import { decisionTree } from '../data/decisionTree';
import { INTERVENTIONS } from '../data/interventions';
import { getIcon } from '../utils/iconMap';

const DiagnosticContext = createContext();

export const DiagnosticProvider = ({ children }) => {
    const [history, setHistory] = useState([]);
    const [currentNodeId, setCurrentNodeId] = useState('root');
    const [results, setResults] = useState({
        resultId: null,     // ID del perfil (ej: 'shiny_object')
        intensity: null,    // 'friction', 'loss', 'health'
        isFinished: false
    });

    // Reiniciar el test
    const resetDiagnostic = () => {
        setHistory([]);
        setCurrentNodeId('root');
        setResults({ resultId: null, intensity: null, isFinished: false });
    };

    // Responder una pregunta
    const answerQuestion = (option) => {
        // 1. Guardar en historial
        const newEntry = {
            stepId: currentNodeId,
            question: decisionTree[currentNodeId].question,
            answer: option.label,
            value: option.value
        };
        setHistory(prev => [...prev, newEntry]);

        // 2. Detectar si es un nodo final de perfil (Rama -> Perfil)
        if (INTERVENTIONS[option.value]) {
            setResults(prev => ({ ...prev, resultId: option.value }));
        }

        // 3. Detectar intensidad (Nivel de Impacto)
        if (currentNodeId === 'impact_level') {
            setResults(prev => ({
                ...prev,
                intensity: option.value,
                isFinished: true
            }));
        } else {
            // 4. Avanzar al siguiente nodo
            if (option.next && option.next !== 'capture_lead') {
                setCurrentNodeId(option.next);
            }
        }
    };

    // Volver atrás
    const goBack = () => {
        if (history.length === 0) return;

        const previousHistory = [...history];
        const lastEntry = previousHistory.pop();

        setHistory(previousHistory);
        setCurrentNodeId(lastEntry.stepId);

        // Si volvemos de resultados, limpiar estado de finalización
        if (results.isFinished) {
            setResults(prev => ({ ...prev, isFinished: false }));
        }
    };

    // Mapear iconos de string a componentes React
    const currentNodeWithIcons = useMemo(() => {
        if (!currentNodeId || !decisionTree[currentNodeId]) return null;

        return {
            ...decisionTree[currentNodeId],
            options: decisionTree[currentNodeId].options?.map(opt => ({
                ...opt,
                icon: typeof opt.icon === 'string' ? getIcon(opt.icon) : opt.icon
            }))
        };
    }, [currentNodeId]);

    const value = {
        currentNode: currentNodeWithIcons,
        currentNodeId,
        history,
        results,
        answerQuestion,
        goBack,
        resetDiagnostic,
        totalSteps: 3 // Estimado para la barra de progreso
    };

    return (
        <DiagnosticContext.Provider value={value}>
            {children}
        </DiagnosticContext.Provider>
    );
};

export const useDiagnostic = () => {
    const context = useContext(DiagnosticContext);
    if (!context) {
        throw new Error('useDiagnostic debe usarse dentro de un DiagnosticProvider');
    }
    return context;
};
