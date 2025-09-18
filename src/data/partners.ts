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
  owner: PartnerOwner;
  links?: PartnerLink[];
}

export const partners: Partner[] = [
  {
    title: "Project Name",
    description:
      "This is your project description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    image: "https://assets.foundly.dev/slay/logo/logo_256.png",
    owner: {
      fid: 385651,
      username: "mfbevan.eth",
      avatar: "https://i.imgur.com/4kjhzdW.jpg",
    },
    links: [
      {
        type: "farcaster",
        label: "Farcaster Profile",
        url: "https://warpcast.com/mfbevan.eth",
      },
      {
        type: "channel",
        label: "Farcaster Channel",
        url: "https://warpcast.com/~/channel/slay",
      },
      {
        type: "x",
        label: "Follow on X",
        url: "https://x.com/slaytoearn",
      },
      {
        type: "website",
        label: "Visit Website",
        url: "https://slaytoearn.com",
      },
      {
        type: "miniapp",
        label: "Play Game",
        url: "https://app.slaytoearn.com",
      },
    ],
  },
  {
    title: "Master Grief",
    description:
      "AI troll patrolling FC and X, supporting his favorite projects and dunking on everything else. Always providing some comedic relief to the timeline. Who knows what he will do next.",
    image:
      "https://res.cloudinary.com/tinyagents/image/upload/v1752856127/agent-avatars/fcf4uo15eyt1qk9iwvv5.jpg",
    owner: {
      fid: 957217,
      username: "mastergrief",
      avatar:
        "https://res.cloudinary.com/tinyagents/image/upload/v1752856127/agent-avatars/fcf4uo15eyt1qk9iwvv5.jpg",
    },
    links: [
      {
        type: "farcaster",
        label: "@mastergrief",
        url: "https://farcaster.xyz/~/mastergrief",
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
    title: "Foundly Labs",
    description:
      "At Foundly Labs, our mission is to empower creators and users with cutting-edge software solutions. We are committed to pioneering visionary ideas through innovative technology, expert craftsmanship, and unwavering dedication.",
    image: "https://foundly.dev/logo.svg",
    owner: {
      fid: 385651,
      username: "mfbevan.eth",
      avatar: "https://i.imgur.com/4kjhzdW.jpg",
    },
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
