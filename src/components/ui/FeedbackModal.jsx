import React, { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { saveCustomCase } from '../../services/feedbackService';

const FeedbackModal = ({ isOpen, onClose, archetypeId, intensity }) => {
    const { user } = useAuth();
    const [email, setEmail] = useState(user?.email || '');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !message) {
            setError('Por favor completa todos los campos');
            return;
        }

        setLoading(true);
        setError('');

        try {
            await saveCustomCase(email, message, {
                archetypeId,
                intensity,
                userId: user?.uid || null,
                source: 'feedback_modal'
            });

            setSuccess(true);

            // Close modal after 2 seconds
            setTimeout(() => {
                onClose();
                setSuccess(false);
                setMessage('');
                setEmail(user?.email || '');
            }, 2000);
        } catch (err) {
            console.error('Error submitting feedback:', err);
            setError('Hubo un error al enviar tu mensaje. Por favor intenta nuevamente.');
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-3xl shadow-warm-xl max-w-lg w-full p-8 relative animate-in slide-in-from-bottom-4">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-ui-secondary hover:text-text-primary transition-colors"
                    aria-label="Cerrar"
                >
                    <X size={24} />
                </button>

                {!success ? (
                    <>
                        {/* Header */}
                        <h3 className="text-section text-text-primary mb-2">
                            ¿No te sientes identificado?
                        </h3>
                        <p className="text-body text-text-secondary mb-6">
                            Cuéntanos más sobre tu experiencia. Un especialista revisará tu caso personalmente.
                        </p>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {error && (
                                <div className="text-xs text-red-600 bg-red-50 p-3 rounded-lg border border-red-100">
                                    {error}
                                </div>
                            )}

                            <div>
                                <label htmlFor="feedback-email" className="block text-sm font-medium text-text-primary mb-2">
                                    Tu correo electrónico
                                </label>
                                <input
                                    id="feedback-email"
                                    type="email"
                                    placeholder="ejemplo@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 border border-ui-secondary/30 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none transition-all"
                                    required
                                    disabled={loading}
                                />
                            </div>

                            <div>
                                <label htmlFor="feedback-message" className="block text-sm font-medium text-text-primary mb-2">
                                    Tu mensaje
                                </label>
                                <textarea
                                    id="feedback-message"
                                    placeholder="Cuéntanos qué no resuena contigo o qué esperabas encontrar..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows={5}
                                    className="w-full px-4 py-3 border border-ui-secondary/30 rounded-lg focus:ring-2 focus:ring-brand-primary outline-none resize-none transition-all"
                                    required
                                    disabled={loading}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-brand-primary text-white text-button py-3 px-6 rounded-xl hover:bg-brand-hover transition-all shadow-warm-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    'Enviando...'
                                ) : (
                                    <>
                                        <Send size={18} />
                                        Enviar Feedback
                                    </>
                                )}
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="text-center py-8 animate-in fade-in slide-in-from-bottom-4">
                        <div className="bg-green-100 text-green-600 p-4 rounded-full inline-block mb-4">
                            <CheckCircle size={48} />
                        </div>
                        <h3 className="text-section text-text-primary mb-2">
                            ¡Gracias!
                        </h3>
                        <p className="text-body text-text-secondary">
                            Un especialista revisará tu caso y te contactará pronto.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FeedbackModal;
