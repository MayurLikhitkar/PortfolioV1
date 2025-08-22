import type { Config } from "tailwindcss"

const config: Config = {
    darkMode: "class", // Enable class-based dark mode
    content: [
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    prefix: "",
    theme: {
        extend: {
            colors: {
                border: {
                    main: '#374151',  // Dark gray for borders
                    light: '#4b5563',
                    dark: '#1f2937'
                },
                input: {
                    main: "#1f2937",  // Dark input backgrounds
                    light: "#374151",
                    dark: "#111827"
                },
                ring: {
                    main: "#60a5fa",  // Brighter blue for focus rings
                    light: "#93c5fd",
                    dark: "#3b82f6"
                },
                background: {
                    light: "#303030",
                    main: '#181818',
                    dark: '#000000',
                },
                text: {
                    light: "#d1d5db",  // Light elements
                    main: "#bababa",
                    dark: "#9ca3af"
                },
                dark: {
                    light: "#303030",
                    main: '#181818',
                    dark: '#000000',
                },
                primary: {
                    light: "#5CFFDE",  // Teal for primary actions
                    main: "#00FFCC",
                    dark: "#00D1A7",
                },
                secondary: {
                    light: "#e0f3f2",
                    main: "#b2dfdb",
                    dark: "#8CCFC9",
                },
                success: {
                    main: "#10b981",  // Bright green for success
                    light: "#34d399",
                    dark: "#059669"
                },
                error: {
                    main: "#ef4444",  // Bright red for errors
                    light: "#f87171",
                    dark: "#dc2626"
                },
                warn: {
                    main: '#FFB62E',
                    light: '#FFC65C',
                    dark: '#FFA700'
                },
                muted: {
                    main: "#6b7280",  // Muted text
                    light: "#9ca3af",
                    dark: "#4b5563",
                },
                accent: {
                    main: "#8800FF",  // Pink accent for highlights
                    light: "#9D2EFF",
                    dark: "#7000D1",
                },
            },
        },
    },
    plugins: [
        // require("tailwindcss-animate")
    ],
} satisfies Config

export default config