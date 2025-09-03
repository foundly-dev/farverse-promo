import type { Metadata } from "next";
import { createAssetUrl } from "~/services/image.service";

export const defaultUrl = "/";
export const defaultTitle = "Farverse";
export const defaultDescription =
  "An onchain gaming universe built on Farcaster";
export const defaultSubtitle = "Built on Farcaster";
export const defaultImagePath = createAssetUrl("/fv_preview.png");
export const defaultEmbedImage = createAssetUrl("/embed.png");
export const defaultIconPath = createAssetUrl("/logo/logo_256.png");
export const defaultImageAlt = "Farverse";
export const defaultCanonicalUrl = defaultUrl;
export const defaultKeywords = ["Farverse", "Farcaster", "Onchain", "Gaming"];
export const defaultTwitterCreator = "@0xmfbevan";
export const defaultPublisher = "Farverse";
export const defaultApplicationName = "Farverse";
export const defaultColor = "#1d0d28";

export const createMetadata = (config: {
  title?: string;
  description?: string;
  imagePath?: string;
  imageAlt?: string;
  canonicalUrl?: string;
  keywords?: string[];
  twitterCreator?: string;
  twitterCreatorId?: string;
  publisher?: string;
  applicationName?: string;
}): Metadata => {
  const {
    title = defaultTitle,
    description = defaultDescription,
    imagePath = defaultImagePath,
    imageAlt = defaultImageAlt,
    canonicalUrl = defaultCanonicalUrl,
    keywords = defaultKeywords,
    twitterCreator = defaultTwitterCreator,
    publisher = defaultPublisher,
    applicationName = defaultApplicationName,
  } = config;

  return {
    title: {
      default: defaultTitle,
      template: `%s | ${defaultTitle}`,
    },
    description: description || defaultDescription,
    keywords: keywords,
    authors: [{ name: publisher, url: canonicalUrl }],
    creator: publisher,
    publisher: publisher,
    applicationName: applicationName,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: title || defaultTitle,
      description: description || defaultDescription,
      url: canonicalUrl,
      siteName: applicationName,
      images: [
        {
          url: imagePath,
          width: 1200,
          height: 630,
          alt: imageAlt,
          type: "image/jpeg",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title || defaultTitle,
      description: description || defaultDescription,
      creator: twitterCreator,
      images: [
        {
          url: imagePath,
          alt: imageAlt,
        },
      ],
      site: twitterCreator,
    },
    appleWebApp: {
      capable: true,
      title: applicationName,
      statusBarStyle: "black-translucent",
    },
    formatDetection: {
      telephone: false,
    },
  };
};
