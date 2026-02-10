import sdk from "@farcaster/miniapp-sdk";
import type { PlayOnType } from "~/app/_components/home.play-on";
import { farverseLogoImage } from "~/lib/url";
import { createAssetUrl } from "~/services/image.service";

export interface PlayOnConfig {
  type: PlayOnType;
  url: string;
  isComingSoon?: boolean;
  browserOnly?: boolean;
}

export interface ContentItem {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  screenshots?: string[];
  background?: string;
  playOn?: PlayOnConfig[];
  miniAppUrl?: string;
  onClick?: () => void;
}

export const apps: ContentItem[] = [
  {
    title: "Farverse",
    subtitle: "Welcome to the Farverse",
    description:
      "An interconnected universe of onchain and online games built on Farcaster and Base. Explore, compete, and earn across multiple worlds — each game is connected through shared lore, tokens, and rewards.",
    image: farverseLogoImage("256"),
    background: createAssetUrl("/fv_bg.png"),
  },
  {
    title: "Warptown",
    subtitle: "A Pixel RPG",
    description:
      "Somewhere deep in the Farverse is an island. At the center of that island is a town. That town is Warptown: a safe haven where friends meet, travellers trade and adventurers prepare for their journeys to the far reaches of the world.",
    image: "https://cdn.warptown.com/app/logo_256.png",
    background: "/warptown_bg.jpeg",
    playOn: [
      {
        type: "farcaster",
        url: "https://farcaster.xyz/miniapps/yzTCzYrtW8z9/warptown",
      },
      {
        type: "base",
        url: "https://base.app/app/https:/warptown.com",
      },
      {
        type: "chrome",
        url: "https://warptown.com",
        browserOnly: true,
      },
    ],
    miniAppUrl: "https://warptown.com",
  },
  {
    title: "Slay to Earn",
    subtitle: "Slay Enemies. Earn Rewards.",
    description:
      "An onchain enemy slaying game, set in the Farverse. Collect items, slay enemies, and earn rewards instantly.",
    image: "https://assets.foundly.dev/slay/logo/logo_256.png",
    background: "/slay_bg.jpeg",
    playOn: [
      {
        type: "farcaster",
        url: "https://farcaster.xyz/miniapps/LKH4wBsF1zYm/slay-to-earn",
      },
      {
        type: "base",
        url: "https://base.app/app/https:/slay.farverse.games",
      },
    ],
    miniAppUrl: "https://slay.farverse.games",
  },
  {
    title: "FarPets",
    subtitle: "Hatch your own FarPet!",
    description:
      "A collectible pets game. Mint yourself a Warp Egg and hatch it into one of 48 unique Farpets. Come back every day to care for your pet, and bring them along with you to other Farverse games.",
    image: "https://farpets.com/logo/logo_256.png",
    background: "/farpets_bg.jpeg",
    playOn: [
      {
        type: "farcaster",
        url: "https://farcaster.xyz/miniapps/PxBmrtUbCGLI/farpets",
      },
      { type: "base", url: "https://base.app/app/https:/farpets.com" },
    ],
    miniAppUrl: "https://farpets.com",
  },
  {
    title: "Warplets",
    subtitle: "The (Un)official Warplets Game",
    description:
      "The Warplets is an NFT Collection by the legendary @sayangel. This is an unofficial game built on the collection including Warplet feeding and Baby Warplette breeding.",
    image: "https://assets.foundly.dev/warplets/logos/warplets_256.png",
    background: "https://assets.foundly.dev/warplets/portal.jpeg",
    playOn: [
      {
        type: "farcaster",
        url: "https://farcaster.xyz/miniapps/KH-o4UEKbdpz/warplets",
      },
      {
        type: "base",
        url: "https://base.app/app/https:/warplets.farverse.games",
      },
    ],
    miniAppUrl: "https://warplets.farverse.games",
  },
  {
    title: "More Coming Soon",
    subtitle: "The Farverse is expanding",
    description:
      "We have multiple new mini apps and games currently in development. Stay tuned for new additions to the Farverse universe.",
    background: createAssetUrl("/fv_bg.png"),
  },
];
