import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Privacy First Setup",
    short_name: "PrivacySetup",
    description:
      "Guía interactiva y Privacy Score open-source para configurar una wallet Bitcoin con buenas prácticas de privacidad. Funciona sin conexión.",
    start_url: "/",
    display: "standalone",
    background_color: "#1e1b16",
    theme_color: "#1e1b16",
    lang: "es",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
