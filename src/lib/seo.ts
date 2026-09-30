import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

export interface GenerateMetadataProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
}

export function constructMetadata({
  title,
  description,
  path = "",
  image = "/assets/images/hero_shakes_teas.jpg",
  keywords,
  type = "website",
}: GenerateMetadataProps): Metadata {
  const url = `${SITE_CONFIG.url}${path.startsWith("/") ? path : `/${path}`}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_CONFIG.url}${image.startsWith("/") ? image : `/${image}`}`;

  const defaultKeywords = [
    "Smart Snack Nutrition",
    "Pembroke Pines",
    "Pines Boulevard",
    "local nutrition",
    "protein shakes",
    "protein shakes Pembroke Pines",
    "energy teas",
    "energy tea Pembroke Pines",
    "healthy snacks",
    "healthy snacks Pembroke Pines",
    "açaí",
    "acai bowls Pembroke Pines",
    "wellness",
    "nutrition club Pembroke Pines",
  ];

  return {
    title,
    description,
    keywords: keywords || defaultKeywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      locale: "en_US",
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} — Smart Snack Nutrition Pembroke Pines, FL`,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: "@smartsnacknutrition",
      site: "@smartsnacknutrition",
    },
    other: {
      "geo.region": "US-FL",
      "geo.placename": "Pembroke Pines",
      "geo.position": "26.0123;-80.3421",
      ICBM: "26.0123, -80.3421",
    },
  };
}
