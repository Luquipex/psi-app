import { Target, Zap, Brain, CheckCircle, Flame, BarChart, Shield, Eye, Key, Battery, Activity, Users, AlertTriangle } from 'lucide-react';

// Nota para el programador: Los iconos se exportan aquí para uso directo si el archivo es .jsx,
// o se pueden mapear en el componente UI usando un diccionario si es .js puro.
// En este archivo mantenemos la referencia 'component' o 'iconName'.

export const decisionTree = {
    root: {
        question: "¿Qué área de tu vida sientes más bloqueada hoy?",
        description: "Vamos a encontrar la raíz del problema, no solo el síntoma.",
        options: [
            { label: "Mi productividad, foco y capacidad de logro", value: "productivity", next: "productivity_branch", icon: "Target" },
            { label: "Mi control sobre impulsos (hábitos, placeres)", value: "volition", next: "volition_branch", icon: "Flame" },
            { label: "Mi estado de ánimo y visión del futuro", value: "mood", next: "mood_branch", icon: "Eye" },
            { label: "Mis niveles de estrés y ansiedad", value: "anxiety", next: "anxiety_branch", icon: "Activity" },
            { label: "Mis relaciones, liderazgo o autoimagen", value: "social", next: "social_branch", icon: "Users" },
        ]
    },

    // --- RAMA 1: PRODUCTIVIDAD ---
    productivity_branch: {
        question: "¿Cuál es el patrón exacto que frena tu avance?",
        options: [
            { label: "Empiezo muchas cosas con entusiasmo pero abandono rápido", value: "shiny_object", next: "impact_level", icon: "Zap" },
            { label: "Siento la mente nublada, lenta y me cuesta priorizar", value: "brain_fog", next: "impact_level", icon: "Brain" },
            { label: "Postergo por miedo a que no quede perfecto", value: "paralysis", next: "impact_level", icon: "CheckCircle" }
        ]
    },

    // --- RAMA 2: VOLUNTAD ---
    volition_branch: {
        question: "¿Qué sucede cuando intentas controlarte?",
        options: [
            { label: "Busco placer inmediato y luego me arrepiento", value: "dopamine_loop", next: "impact_level", icon: "Flame" },
            { label: "Me cuesta sacrificar el hoy por beneficios futuros", value: "short_term", next: "impact_level", icon: "BarChart" },
            { label: "Actúo sin pensar en las consecuencias", value: "impulsivity", next: "impact_level", icon: "Shield" }
        ]
    },

    // --- RAMA 3: ÁNIMO ---
    mood_branch: {
        question: "¿Cómo describirías tu diálogo interno?",
        options: [
            { label: "Siento que yo fallo y nada cambiará", value: "negative_triad", next: "impact_level", icon: "Eye" },
            { label: "Tengo éxito externo pero siento un vacío interno", value: "emptiness", next: "impact_level", icon: "Key" },
            { label: "Me siento desconectado, en 'piloto automático'", value: "languishing", next: "impact_level", icon: "Battery" }
        ]
    },

    // --- RAMA 4: ANSIEDAD ---
    anxiety_branch: {
        question: "¿Cómo se manifiesta tu malestar?",
        options: [
            { label: "Síntomas físicos intensos o pánico", value: "panic", next: "impact_level", icon: "Activity" },
            { label: "Preocupación constante ('¿Y si pasa algo?')", value: "gad", next: "impact_level", icon: "Brain" },
            { label: "No puedo parar de trabajar, siento culpa si descanso", value: "burnout", next: "impact_level", icon: "Battery" }
        ]
    },

    // --- RAMA 5: SOCIAL ---
    social_branch: {
        question: "¿Cuál es tu mayor fricción con los demás?",
        options: [
            { label: "Siento que soy un fraude y me van a descubrir", value: "impostor", next: "impact_level", icon: "Shield" },
            { label: "Me cuesta decir 'no' y pongo a otros antes que a mí", value: "pleasing", next: "impact_level", icon: "Users" },
            { label: "Me cuesta delegar, nadie lo hace como yo", value: "control", next: "impact_level", icon: "Target" }
        ]
    },

    // --- NIVEL DE IMPACTO (Cierre) ---
    impact_level: {
        question: "¿Cuánto te está costando esto hoy?",
        description: "Esta respuesta adapta tu plan de acción.",
        options: [
            { label: "Me genera fricción y cansancio, pero cumplo", value: "friction", next: "capture_lead", icon: "Activity" },
            { label: "Estoy perdiendo oportunidades o dinero", value: "loss", next: "capture_lead", icon: "BarChart" },
            { label: "Afecta mi salud física o mis relaciones", value: "health", next: "capture_lead", icon: "AlertTriangle" },
        ]
    }
};
