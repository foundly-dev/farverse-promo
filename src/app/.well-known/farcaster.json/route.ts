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
      payload: "eyJkb21haW4iOiJmYXJ2ZXJzZS5nYW1lcyJ9",
      signature:
        "vhGjD+Hgmw1/8VrQRMB9d3usf0giZxEy3cF8rnQRRi1XZ8DrN0+lyn5i3W28UzkxWkbAYRxQCjg/6vnZzAJJiBs=",
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
