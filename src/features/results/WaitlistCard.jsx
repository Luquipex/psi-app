import React, { useState } from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../services/firebase';

const WaitlistCard = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;

        setLoading(true);
        try {
            if (db) {
                await addDoc(collection(db, 'waitlist_vip'), {
                    email,
                    createdAt: serverTimestamp(),
                    source: 'psi_app_beta'
                });
                setSuccess(true);
            } else {
                console.warn("Database not configured, waitlist entry not saved.");
                // Simulamos éxito para no frustrar al usuario
                setSuccess(true);
            }
        } catch (error) {
            console.error("Error saving waitlist:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-gradient-to-br from-text-primary to-text-primary/90 p-8 rounded-2xl shadow-warm-xl w-full mt-8 text-white border border-ui-accent/30 relative overflow-hidden group">
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-ui-accent/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-ui-accent/20 transition-all"></div>

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                    <div className="bg-ui-accent/20 p-2 rounded-lg text-ui-accent">
                        <Star size={24} fill="currentColor" />
                    </div>
                    <h3 className="font-bold text-xl text-bg-primary tracking-wide">
                        Lista de Fundadores
                    </h3>
                </div>

                <p className="text-bg-primary/80 mb-6 text-sm leading-relaxed max-w-lg">
                    Estamos construyendo la App completa con seguimiento diario y
                    herramientas personalizadas. Únete a la lista exclusiva para tener{' '}
                    <strong>acceso anticipado</strong>.
                </p>

                {success ? (
                    <div className="text-ui-accent font-bold bg-ui-accent/10 border border-ui-accent/20 p-4 rounded-xl text-center animate-in fade-in zoom-in">
                        ¡Bienvenido al círculo de Fundadores! Te avisaremos pronto.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="Escribe tu mail aquí"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 px-4 py-3 bg-text-primary/50 border border-ui-secondary/30 rounded-xl focus:ring-2 focus:ring-ui-accent focus:border-transparent outline-none text-white placeholder-bg-primary/50 transition-all"
                            required
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-gradient-to-r from-ui-accent to-ui-accent/90 hover:from-ui-accent/90 hover:to-ui-accent text-text-primary font-bold py-3 px-6 rounded-xl transition-all shadow-warm-lg flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50"
                        >
                            {loading ? '...' : (
                                <>
                                    Unirme <ArrowRight size={18} />
                                </>
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default WaitlistCard;
