import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rojo: "#E11C22",
        "rojo-hondo": "#A01018",
        verde: "#1E8A3C",
        "verde-lima": "#8BC53F",
        "verde-hoja": "#0F6B2E",
        crema: "#FFF8E7",
        amarillo: "#FFC72C",
        tinta: "#241A10",
        papel: "#FFFDF6",
        whatsapp: "#25D366",
        "whatsapp-hondo": "#128C3E",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "sans-serif"],
        fredoka: ["var(--font-fredoka)", "sans-serif"],
        archivo: ["var(--font-archivo)", "sans-serif"],
      },
      keyframes: {
        flota: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        sube: {
          "0%": { transform: "translateY(10px) scale(.6)", opacity: "0" },
          "30%": { opacity: ".9" },
          "100%": { transform: "translateY(-26px) scale(1.4)", opacity: "0" },
        },
        pulso: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.08)" },
        },
        drift: {
          to: { backgroundPosition: "260px 260px" },
        },
      },
      animation: {
        flota: "flota 4s ease-in-out infinite",
        sube: "sube 2.4s ease-in-out infinite",
        pulso: "pulso 2.2s ease-in-out infinite",
        drift: "drift 40s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
