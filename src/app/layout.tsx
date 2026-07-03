import type { Metadata } from "next";
import { Bebas_Neue, Fredoka, Archivo_Black } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-fredoka",
});

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://los-sudaditos.vercel.app"),
  title: "Tacos al Vapor · Los Sudaditos — Cd. Juárez",
  description:
    "Los mejores tacos al vapor de la esquina del Superette. Frijol, chicharrón y picadillo. Orden de 4 tacos $45. Calle Durango y Santiago Troncoso, Cd. Juárez.",
  openGraph: {
    title: "Tacos al Vapor · Los Sudaditos — Cd. Juárez",
    description:
      "Los mejores tacos al vapor de la esquina del Superette. Frijol, chicharrón y picadillo. Orden de 4 tacos $45. Calle Durango y Santiago Troncoso, Cd. Juárez.",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/logo-sudaditos.png",
        width: 780,
        height: 593,
        alt: "Tacos al Vapor · Los Sudaditos",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body
        className={`${bebas.variable} ${fredoka.variable} ${archivoBlack.variable} font-fredoka bg-crema text-tinta antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
