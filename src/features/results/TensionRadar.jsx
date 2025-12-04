import React from 'react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer
} from 'recharts';

const TensionRadar = ({ profileId, intensity }) => {
    // 1. Mapeo de Perfiles a Ejes
    const axisMapping = {
        "Foco & Ejecución": ["shiny_object", "brain_fog", "paralysis"],
        "Regulación de Impulsos": ["dopamine_loop", "short_term", "impulsivity"],
        "Estabilidad Anímica": ["negative_triad", "emptiness", "languishing"],
        "Calma & Seguridad": ["panic", "gad", "burnout"],
        "Conexión Social": ["impostor", "pleasing", "control"]
    };

    // 2. Determinar valor según intensidad
    const intensityValues = {
        "friction": 50,
        "loss": 75,
        "health": 95
    };
    const mainValue = intensityValues[intensity] || 50;
    const baseValue = 25;

    // 3. Construir datos para el gráfico
    const data = Object.keys(axisMapping).map(axis => {
        const profiles = axisMapping[axis];
        const isMainAxis = profiles.includes(profileId);

        return {
            subject: axis,
            A: isMainAxis ? mainValue : baseValue,
            fullMark: 100
        };
    });

    return (
        <div className="w-full h-[300px] -ml-4">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                    <PolarGrid stroke="#e2e8f0" />
                    <PolarAngleAxis
                        dataKey="subject"
                        tick={{ fill: '#64748b', fontSize: 11, fontWeight: 500 }}
                    />
                    <Radar
                        name="Tensión Psicológica"
                        dataKey="A"
                        stroke="#4f46e5"
                        strokeWidth={2}
                        fill="#4f46e5"
                        fillOpacity={0.4}
                    />
                </RadarChart>
            </ResponsiveContainer>
            <p className="text-center text-xs text-ui-secondary mt-[-20px]">
                Mapa de Tensión Psicológica
            </p>
        </div>
    );
};

export default TensionRadar;
