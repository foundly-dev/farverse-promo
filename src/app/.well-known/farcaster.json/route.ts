import {
  defaultUrl,
  defaultTitle,
  defaultDescription,
  defaultSubtitle,
  defaultColor,
  defaultEmbedImage,
  defaultIconPath,
  defaultImagePath,
  defaultSplashImage,
} from "~/lib/metadata";

export async function GET() {
  return Response.json({
    accountAssociation: {
      header:
        "eyJmaWQiOjM4NTY1MSwidHlwZSI6ImF1dGgiLCJrZXkiOiIweGJDZTFmZEQ2QzU3ZDdFRWZiNjMxMTg0NTRiNjEzZjhjMzBhQzQ0QTUifQ",
      payload: "eyJkb21haW4iOiJzbGF5LmZhcnZlcnNlLmdhbWVzIn0",
      signature:
        "791EM5EvknEOd8Di18ijn3kXC3PbXEw3MykOGcLg3mZj3bha0Wh2r2MWkMliY4fMGVqciFECJj02MFS/6RYEfhw=",
    },
    baseBuilder: {
      allowedAddresses: ["0xeAbEc05d7c47EFf16c279d9091F4008324c693cC"],
    },
    frame: {
      version: "next",
      name: defaultTitle,
      subtitle: defaultSubtitle,
      description: defaultDescription,
      homeUrl: defaultUrl,
      iconUrl: defaultIconPath,
      imageUrl: defaultEmbedImage,
      heroImageUrl: defaultEmbedImage,
      buttonTitle: "Enter the Farverse",
      tagline: defaultSubtitle,
      splashImageUrl: defaultSplashImage,
      splashBackgroundColor: defaultColor,
      // webhookUrl: createLiveUrl(`/api/webhook`),
      primaryCategory: "games",
      tags: ["farverse", "games", "rewards"],
      ogTitle: defaultTitle,
      ogDescription: defaultDescription,
      ogImageUrl: defaultImagePath,
    },
  });
}
