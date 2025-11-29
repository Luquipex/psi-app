import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const QuizCard = ({ question, description, options, onSelect }) => {
    return (
        <div className="w-full max-w-2xl mx-auto p-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
            >
                <h2 className="text-section text-text-primary mb-3 text-center">
                    {question}
                </h2>
                {description && (
                    <p className="text-body text-text-secondary mb-8 text-center">
                        {description}
                    </p>
                )}

                <div className="grid gap-4 w-full">
                    {options.map((opt, idx) => {
                        const Icon = opt.icon || ChevronRight;

                        return (
                            <motion.button
                                key={opt.value}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                onClick={() => onSelect(opt)}
                                className="flex items-center p-5 bg-white border border-ui-secondary/20 rounded-xl hover:border-brand-primary hover:shadow-warm-md transition-all text-left group"
                            >
                                <div className="mr-4 bg-bg-primary p-3 rounded-lg text-ui-secondary group-hover:text-brand-primary group-hover:bg-brand-primary/10 transition-colors">
                                    <Icon size={24} />
                                </div>
                                <span className="text-body font-bold text-text-primary group-hover:text-text-primary flex-1">
                                    {opt.label}
                                </span>
                                <ChevronRight className="text-ui-secondary/50 group-hover:text-brand-primary" />
                            </motion.button>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
};

export default QuizCard;
