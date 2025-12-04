import React from 'react';
import logo from '../../assets/logo.png';

const Layout = ({ children, showHeader = true }) => {
    return (
        <div className="min-h-screen bg-bg-primary font-sans text-text-primary flex flex-col">
            {showHeader && (
                <header className="w-full py-4 px-6 bg-bg-primary/80 backdrop-blur-md sticky top-0 z-20 flex justify-between items-center border-b border-ui-secondary/20">
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="Psi.app Logo" className="h-8 w-auto object-contain" />
                    </div>
                </header>
            )}
            <main className="flex-1 flex flex-col w-full max-w-4xl mx-auto overflow-y-auto pb-12">
                {children}
            </main>
        </div>
    );
};

export default Layout;
