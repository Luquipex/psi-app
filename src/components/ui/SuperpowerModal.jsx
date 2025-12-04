import React from 'react';
import { X } from 'lucide-react';

const SuperpowerModal = ({ isOpen, onClose, content }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl shadow-warm-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-in slide-in-from-bottom duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="sticky top-0 bg-white border-b border-ui-secondary/20 p-4 flex justify-between items-center">
                    <h3 className="font-bold text-lg text-text-primary">Tu Superpoder Oculto</h3>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-ui-secondary/10 rounded-lg transition-colors"
                    >
                        <X size={20} className="text-ui-secondary" />
                    </button>
                </div>
                <div className="p-6">
                    <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                        {content}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SuperpowerModal;
