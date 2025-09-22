import sdk from "@farcaster/miniapp-sdk";
import { farverseLogoImage } from "~/lib/url";
import { createAssetUrl } from "~/services/image.service";

export interface ContentItem {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  stats?: { label: string; value: string }[];
  screenshots?: string[];
  action: string;
  onClick: () => void;
  onMiniAppClick: () => void;
}

export const apps: ContentItem[] = [
  {
    title: "Slay to Earn",
    subtitle: "Slay Enemies. Earn Rewards.",
    description:
      "An onchain enemy slaying game, set in the Farverse. Collect items, slay enemies, and earn rewards instantly.",
    image: "https://assets.foundly.dev/slay/logo/logo_256.png",
    stats: [
      {
        label: "Players",
        value: "3K+",
      },
      {
        label: "Rewards",
        value: "$$$",
      },
      {
        label: "Peak Trending",
        value: "#9",
      },
    ],
    screenshots: [
      createAssetUrl("/screenshots/slay_1.png"),
      createAssetUrl("/screenshots/slay_2.png"),
      createAssetUrl("/screenshots/slay_3.png"),
      createAssetUrl("/screenshots/slay_4.png"),
    ],
    action: "Play Now",
    onClick: () => {
      void window.open(
        "https://farcaster.xyz/miniapps/LKH4wBsF1zYm/slay-to-earn",
        "_blank",
      );
    },
    onMiniAppClick: () => {
      void sdk.actions.openMiniApp({ url: "https://slay.farverse.games" });
    },
  },
  {
    title: "FarPets",
    subtitle: "Hatch your own FarPet!",
    description:
      "A collectible pets game. Mint yourself a Warp Egg and hatch it into one of 48 unique Farpets. Come back every day to care for your pet, and bring them along with you to other Farverse games.",
    image: "https://farpets.com/logo/logo_256.png",
    stats: [
      {
        label: "Players",
        value: "3.8K+",
      },
      {
        label: "FarPets",
        value: "11K+",
      },
      {
        label: "Peak Trending",
        value: "#2",
      },
    ],
    screenshots: [
      createAssetUrl("/screenshots/farpets_1.png"),
      createAssetUrl("/screenshots/farpets_2.png"),
      createAssetUrl("/screenshots/farpets_3.png"),
      createAssetUrl("/screenshots/farpets_4.png"),
    ],
    action: "Play Now",
    onClick: () => {
      void window.open(
        "https://farcaster.xyz/miniapps/PxBmrtUbCGLI/farpets",
        "_blank",
      );
    },
    onMiniAppClick: () => {
      void sdk.actions.openMiniApp({ url: "https://farpets.com" });
    },
  },
  {
    title: "Democracy",
    subtitle: "Vox Populi. Vox Machinae.",
    description:
      "An onchain strategy simulation game. Become a citizen, vote on policies proposed by agentic leaders, and navigate dynamic world events. Become the most democractic country in the world!",
    image: "https://assets.foundly.dev/democracy/logo/logo_256.png",
    stats: [
      {
        label: "Players",
        value: "300+",
      },
      {
        label: "Democracies",
        value: "15",
      },
      {
        label: "Peak Trending",
        value: "#10",
      },
    ],
    screenshots: [
      createAssetUrl("/screenshots/democracy_1.png"),
      createAssetUrl("/screenshots/democracy_2.png"),
      createAssetUrl("/screenshots/democracy_3.png"),
      createAssetUrl("/screenshots/democracy_4.png"),
    ],
    action: "Play Now",
    onClick: () => {
      void window.open(
        "https://farcaster.xyz/miniapps/EQTEopy6Rl8l/democracy",
        "_blank",
      );
    },
    onMiniAppClick: () => {
      void sdk.actions.openMiniApp({ url: "https://democracyga.me" });
    },
  },
];

export const socials: ContentItem[] = [
  {
    title: "mfbevan.eth",
    subtitle: "Developer",
    description:
      "Solo developer currently building the Farverse and its many games.",
    image: "https://i.imgur.com/4kjhzdW.jpg",
    screenshots: [],
    action: "View Profile",
    onClick: () => {
      void window.open("https://farcaster.xyz/~/mfbevan", "_blank");
    },
    onMiniAppClick: () => {
      void sdk.actions.viewProfile({ fid: 385651 });
    },
  },

  {
    title: "/farverse",
    subtitle: "Farcaster Channel",
    description:
      "The official Farverse channel on Farcaster. Follow to stay in the loop for the latest news and updates.",
    image: farverseLogoImage("256"),
    screenshots: [],
    action: "View Channel",
    onClick: () => {
      void window.open("https://farcaster.xyz/~/channel/farverse", "_blank");
    },
    onMiniAppClick: () => {
      void sdk.actions.openUrl("https://farcaster.xyz/~/channel/farverse");
    },
  },
  {
    title: "Empire",
    subtitle: "Farverse Empire",
    description:
      "Join the Farverse Empire in Empire Builder to see where you rank on the Farverse leaderboards, and earn rewards for your contributions.",
    image: "https://www.empirebuilder.world/EBblackjpg2.jpg",
    screenshots: [],
    action: "Join the Empire",
    onClick: () => {
      void window.open(
        "https://www.empirebuilder.world/empire/0xdFE23E2c07f8edF23ebA9c9a45E23303417C6B07",
        "_blank",
      );
    },
    onMiniAppClick: () => {
      void sdk.actions.openUrl(
        "https://www.empirebuilder.world/empire/0xdFE23E2c07f8edF23ebA9c9a45E23303417C6B07",
      );
    },
  },
];
