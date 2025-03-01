import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: 'class',  // Wichtig für manuellen Dark Mode
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Optionale benutzerdefinierte Farben
                primary: {
                    light: '#3B82F6', // Blue-500
                    DEFAULT: '#2563EB', // Blue-600
                    dark: '#1D4ED8', // Blue-700
                },
            },
        },
    },
    plugins: [],
};

export default config;