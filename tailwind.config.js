/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Human Tech Design System
                brand: {
                    primary: '#F97316',   // Behavioral Orange - CTA principal
                    hover: '#EA580C',     // Hover state (-10% brightness)
                    accent: '#FBBF24',    // Insight Amber - Alertas/Highlights
                },
                bg: {
                    primary: '#FAFAF9',   // Warm Canvas - Fondo principal
                },
                text: {
                    primary: '#1C1917',   // Obsidian Tech - Texto principal
                    secondary: '#475569', // Logic Slate - Texto secundario
                },
                ui: {
                    secondary: '#475569', // Logic Slate - Bordes/íconos
                    accent: '#FBBF24',    // Insight Amber - Badges
                }
            },
            boxShadow: {
                // Sombras cálidas (Obsidian al 5-10% opacidad)
                'warm-sm': '0 1px 2px 0 rgba(28, 25, 23, 0.05)',
                'warm': '0 1px 3px 0 rgba(28, 25, 23, 0.08), 0 1px 2px -1px rgba(28, 25, 23, 0.08)',
                'warm-md': '0 4px 6px -1px rgba(28, 25, 23, 0.08), 0 2px 4px -2px rgba(28, 25, 23, 0.08)',
                'warm-lg': '0 10px 15px -3px rgba(28, 25, 23, 0.08), 0 4px 6px -4px rgba(28, 25, 23, 0.08)',
                'warm-xl': '0 20px 25px -5px rgba(28, 25, 23, 0.08), 0 8px 10px -6px rgba(28, 25, 23, 0.08)',
            },
            fontFamily: {
                // Display Font (Títulos)
                'display': ['Bitter', 'serif'],
                // Body Font (UI/Lectura)
                'body': ['Mulish', 'sans-serif'],
            },
            letterSpacing: {
                'tighter-custom': '-0.5px',  // Para títulos (Bitter)
                'wider-custom': '0.5px',     // Para botones/caps pequeños
            }
        },
    },
    plugins: [],
}
