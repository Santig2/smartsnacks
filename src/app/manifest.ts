import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.name,
    short_name: "Smart Snack",
    description: SITE_CONFIG.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAF9",
    theme_color: "#10B981",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  };
}
