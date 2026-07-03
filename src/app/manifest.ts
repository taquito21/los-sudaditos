import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tacos al Vapor · Los Sudaditos",
    short_name: "Los Sudaditos",
    description:
      "Los mejores tacos al vapor de la esquina del Superette. Orden de 4 tacos $45.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFF8E7",
    theme_color: "#E11C22",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
