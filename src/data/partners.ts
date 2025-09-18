// Link types for the dynamic links system
export type LinkType =
  | "farcaster"
  | "channel"
  | "x"
  | "website"
  | "miniapp"
  | "empire";

export interface PartnerLink {
  type: LinkType;
  label: string;
  url: string;
  icon?: string;
  miniappUrl?: string; // Optional actual app URL for mini apps
  fid?: number; // Optional FID for Farcaster profiles
}

export interface PartnerOwner {
  fid: number;
  username: string;
  avatar: string;
}

export interface Partner {
  title: string;
  description: string;
  image: string;
  owners: PartnerOwner[];
  links?: PartnerLink[];
}

export const partners: Partner[] = [
  {
    title: "Master Grief",
    description:
      "AI troll patrolling FC and X, supporting his favorite projects and dunking on everything else. Always providing some comedic relief to the timeline. Who knows what he will do next.",
    image:
      "https://res.cloudinary.com/tinyagents/image/upload/v1752856127/agent-avatars/fcf4uo15eyt1qk9iwvv5.jpg",
    owners: [
      {
        fid: 957217,
        username: "mastergrief",
        avatar:
          "https://res.cloudinary.com/tinyagents/image/upload/v1752856127/agent-avatars/fcf4uo15eyt1qk9iwvv5.jpg",
      },
    ],
    links: [
      {
        type: "farcaster",
        label: "@mastergrief",
        url: "https://farcaster.xyz/mastergrief",
        fid: 957217,
      },
      {
        type: "channel",
        label: "/spartan",
        url: "https://farcaster.xyz/~/channel/spartan",
      },
      {
        type: "x",
        label: "Follow on X",
        url: "https://x.com/mastergrief_ai?s=09",
      },
      {
        type: "miniapp",
        label: "Spartan Barracks",
        url: "https://farcaster.xyz/miniapps/S_tSgXH-z_50/spartan-barracks",
        miniappUrl:
          "https://farcaster.xyz/miniapps/S_tSgXH-z_50/spartan-barracks", // TODO: Update with actual app URL
      },
      {
        type: "empire",
        label: "Empire Builder",
        url: "https://www.empirebuilder.world/empire/0x1dE745837bb0564f3aD1b43ce7BcF8924f5B6b07",
      },
    ],
  },
  {
    title: "HAMBIT $hmbt",
    description:
      "HAMBIT aka $hmbt is a communitypowered token deployed via bankr! Emerged from a design contest and voted by a community poll it's set to fuel digital artists and projects with the /glanker integration for rewards! The more $hmbt you hold the more you'll get distributed!!",
    image:
      "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/f6b2bccd-6bb5-4024-f32b-1007c2428a00/original",
    owners: [
      {
        fid: 273708,
        username: "siadude",
        avatar:
          "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/374aadd3-7afe-4f70-ade4-86778c3a5100/original",
      },
      {
        fid: 318908,
        username: "ronwest",
        avatar:
          "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/a51530b6-0daa-40a4-51ab-c1866826af00/original",
      },
    ],
    links: [
      {
        type: "farcaster",
        label: "@siadude",
        fid: 273708,
        url: "https://farcaster.xyz/siadude",
      },
      {
        type: "farcaster",
        label: "@ronwest",
        fid: 318908,
        url: "https://farcaster.xyz/ronwest",
      },
      {
        type: "channel",
        label: "/hambit",
        url: "https://farcaster.xyz/~/channel/hambit",
      },
      {
        type: "empire",
        label: "Empire Builder",
        url: "https://www.empirebuilder.world/empire/0x0c22b5e951683f6fadebdcb931cdf801d2aaa70e?cache_bust=1758158305792",
      },
    ],
  },
  {
    title: "Birthday App",
    description: "Track birthdays onchain",
    image: "https://fcbirthday-main.vercel.app/icon.png",
    owners: [
      {
        fid: 217261,
        username: "altagers.eth",
        avatar:
          "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/a5837154-fc70-406a-cff2-3f20d73f7400/original",
      },
    ],
    links: [
      {
        type: "farcaster",
        label: "@altagers.eth",
        fid: 217261,
        url: "https://farcaster.xyz/altagers.eth",
      },
      {
        type: "miniapp",
        label: "Birthday App",
        url: "https://farcaster.xyz/miniapps/CpiCOnz2pNDx/birthday-app",
        miniappUrl: "https://fcbirthday-main.vercel.app/",
      },
    ],
  },
  {
    title: "Foundly Labs",
    description:
      "At Foundly Labs, our mission is to empower creators and users with cutting-edge software solutions. We are committed to pioneering visionary ideas through innovative technology, expert craftsmanship, and unwavering dedication.",
    image: "https://foundly.dev/logo.svg",
    owners: [
      {
        fid: 385651,
        username: "mfbevan.eth",
        avatar: "https://i.imgur.com/4kjhzdW.jpg",
      },
    ],
    links: [
      {
        type: "x",
        label: "Follow on X",
        url: "https://x.com/foundlylabs",
      },
      {
        type: "website",
        label: "Visit Website",
        url: "https://foundly.dev/",
      },
    ],
  },
];
