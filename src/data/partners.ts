// Link types for the dynamic links system
export type LinkType = "farcaster" | "channel" | "x" | "website" | "miniapp";

export interface PartnerLink {
  type: LinkType;
  label: string;
  url: string;
  icon?: string; // Optional custom icon URL
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
