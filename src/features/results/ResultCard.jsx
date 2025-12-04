import React, { useState } from 'react';
import { Brain, Key, Calendar, MessageCircle, HelpCircle, CheckCircle } from 'lucide-react';
import LockOverlay from './LockOverlay';
import WaitlistCard from './WaitlistCard';
import FeedbackModal from '../../components/ui/FeedbackModal';
import TensionRadar from './TensionRadar';
import { useAuth } from '../../hooks/useAuth';

const ResultCard = ({ data, intensity }) => {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);
    const { user, updateUserProfile } = useAuth();

    const showStepsAlways = intensity === 'friction';
    const isFullyVisible = isUnlocked || showStepsAlways;

    // Efecto: Si el usuario ya está logueado, guardar resultado y desbloquear
    React.useEffect(() => {
        if (user && data) {
            const saveResult = async () => {
                await updateUserProfile({
                    archetypeId: data.id,
                    intensity: intensity,
                    toolName: data.content.intervention.tool_name,
                    lastUpdated: new Date()
                });
                setIsUnlocked(true);
            };
            saveResult();
        }
    }, [user, data, intensity, updateUserProfile]);

    const handleShare = () => {
        const text = `Descubrí mi arquetipo mental en Psi.app. Haz el test gratuito aquí: www.psiapp.online.com`;
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* 1. Header del Perfil */}
            <div className="mb-8 text-center md:text-left">
                <h2 className="text-section text-text-primary mb-2">
                    {data.profile.marketing_name}
                </h2>
                <div className="inline-block bg-brand-primary/10 text-brand-primary text-button-caps px-3 py-1 rounded-full mb-4">
                    {data.profile.clinical_name}
                </div>
                <blockquote className="border-l-4 border-brand-primary pl-4 italic text-text-secondary text-body">
                    "{data.profile.quote}"
                </blockquote>
            </div>

            {/* 2. Radar Chart (Nuevo) */}
            <div className="mb-8 flex justify-center md:justify-start">
                <TensionRadar profileId={data.id} intensity={intensity} />
            </div>

            {/* 3. Hook Text (Siempre visible) */}
            <div className="mb-8 text-body text-text-primary leading-relaxed">
                {data.content.hook_text}
            </div>

            {/* 4. Contenido Condicional (Ciencia) */}
            {isUnlocked && (
                <div className="mb-8 bg-brand-primary/5 p-6 rounded-2xl border border-brand-primary/20 animate-in fade-in">
                    <h4 className="text-subtitle text-brand-primary mb-2 flex items-center gap-2">
                        <Brain size={20} /> La Ciencia Detrás:
                    </h4>
                    <p className="text-body text-text-primary">
                        {data.content.science_explanation}
                    </p>
                </div>
            )}

            {/* 5. Herramienta / Pasos */}
            {isFullyVisible && (
                <div className="border border-ui-secondary/20 rounded-2xl overflow-hidden mb-8 animate-in fade-in shadow-warm">
                    <div className="bg-bg-primary p-4 border-b border-ui-secondary/20 flex justify-between items-center">
                        <span className="text-subtitle text-text-primary flex items-center gap-2">
                            <Key size={18} className="text-brand-primary" />
                            Herramienta: {data.content.intervention.tool_name}
                        </span>
                        <span className="text-xs bg-white px-2 py-1 rounded border border-ui-secondary/30 text-ui-secondary">
                            {data.content.intervention.duration}
                        </span>
                    </div>
                    <div className="p-6 bg-white">
                        <ol className="space-y-4 mb-6">
                            {data.content.intervention.steps.map((step, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="bg-brand-primary text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                                        {index + 1}
                                    </div>
                                    <p className="text-body text-text-primary">{step}</p>
                                </li>
                            ))}
                        </ol>
                        <div className="text-sm bg-green-50 p-4 rounded-xl border border-green-100 text-green-800">
                            <strong>¿Por qué funciona?</strong> {data.content.intervention.why_it_works}
                        </div>
                    </div>
                </div>
            )}

            {/* 6. Bloqueo (Si no está desbloqueado) */}
            {!isUnlocked && (
                <LockOverlay
                    intensity={intensity}
                    resultId={data.id}
                    toolName={data.content.intervention.tool_name}
                    onUnlock={() => setIsUnlocked(true)}
                />
            )}

            {/* 7. Acciones Post-Desbloqueo */}
            {isUnlocked && (
                <div className="mt-12 flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-8">
                    <button
                        onClick={() => window.open("https://calendly.com", "_blank")}
                        className="bg-brand-primary text-white text-button py-4 px-8 rounded-xl shadow-warm-lg hover:bg-brand-hover transition-all w-full md:w-auto flex items-center gap-2 justify-center"
                    >
                        <Calendar size={20} /> Agendar Sesión de Profundización
                    </button>

                    <div className="bg-green-50 p-6 rounded-2xl border border-green-100 w-full text-center">
                        <h4 className="text-subtitle text-green-800 mb-2">
                            ¿Conoces a alguien así?
                        </h4>
                        <p className="text-sm text-green-700 mb-4">
                            A la gente le encanta diagnosticar a sus amigos.
                        </p>
                        <button
                            onClick={handleShare}
                            className="bg-green-600 hover:bg-green-700 text-white text-button py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 w-full md:w-auto mx-auto shadow-warm-md"
                        >
                            <MessageCircle size={20} /> Envíale este test por WhatsApp
                        </button>
                    </div>

                    <WaitlistCard />
                </div>
            )}

            {/* 8. Catch-All Feedback Button (Footer) */}
            <div className="mt-8 pt-6 border-t border-ui-secondary/20 text-center">
                <button
                    onClick={() => setShowFeedbackModal(true)}
                    className="text-sm text-ui-secondary hover:text-brand-primary transition-colors flex items-center gap-2 mx-auto font-medium"
                >
                    <HelpCircle size={18} />
                    ¿No te sientes identificado con este perfil?
                </button>
            </div>

            {/* Feedback Modal */}
            <FeedbackModal
                isOpen={showFeedbackModal}
                onClose={() => setShowFeedbackModal(false)}
                archetypeId={data.id}
                intensity={intensity}
            />
        </div>
    );
};

export default ResultCard;
