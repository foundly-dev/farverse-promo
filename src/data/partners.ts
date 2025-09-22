import { m } from "framer-motion";

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
    title: "Empire Builder",
    description:
      "The ultimate tool for Utility-pilling your tokens. Distribute rewards, perform airdrops, and raffle prizes to your token holders in just a few clicks.",
    image: "https://www.empirebuilder.world/EBblackjpg2.jpg",
    owners: [
      {
        fid: 369863,
        username: "diviflyy",
        avatar:
          "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/68486cbd-1549-4c14-f092-bdcbcfc1d900/original",
      },
      {
        fid: 409857,
        username: "yerbearserker",
        avatar:
          "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/2e2e66dd-30c0-4b05-5a05-163fc8dbec00/original",
      },
    ],
    links: [
      {
        type: "miniapp",
        label: "Empire Builder",
        url: "https://www.empirebuilder.world/",
        miniappUrl: "https://www.empirebuilder.world/",
      },
      {
        type: "farcaster",
        label: "yerbearserker",
        url: "https://farcaster.xyz/yerbearserker",
        fid: 409857,
      },
      {
        type: "farcaster",
        label: "diviflyy",
        url: "https://farcaster.xyz/diviflyy",
        fid: 369863,
      },
      {
        type: "empire",
        label: "Glanker Empire",
        url: "https://www.empirebuilder.world/empire/0x33ac788bc9ccb27e9ec558fb2bde79950a6b9d5b",
      },
    ],
  },
  {
    title: "World of PANGEA",
    description:
      "Enter a realm where ancient kingdoms clash with mystical forces, and legends are forged in the crucible of war and magic. This immersive medieval fantasy universe brings together epic storytelling, rich lore, and cutting-edge blockchain technology. Discover kingdoms, heroes, and dark secrets in a world where every tale becomes part of the onchain legend, and where the community shapes the destiny of entire civilizations.",
    image:
      "https://proxy.wrpcd.net/?url=https%3A%2F%2Fworldofpangea.io%2Fimages%2Ficon.png&s=f14e531602bdca13113c50f85d39e537aa02d6f20d9cae39fe7d536c5587ac9a",
    owners: [
      {
        fid: 1112538,
        username: "mikesmillerart",
        avatar:
          "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/00099246-fdec-4872-3b57-92769e88e600/original",
      },
      {
        fid: 409857,
        username: "yerbearserker",
        avatar:
          "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/2e2e66dd-30c0-4b05-5a05-163fc8dbec00/original",
      },
    ],
    links: [
      {
        type: "miniapp",
        label: "World of PANGEA",
        url: "https://farcaster.xyz/miniapps/D7I4i18BoQw7/world-of-pangea",
        miniappUrl:
          "https://farcaster.xyz/miniapps/D7I4i18BoQw7/world-of-pangea",
      },
      {
        type: "farcaster",
        label: "mikesmillerart",
        url: "https://farcaster.xyz/mikesmillerart",
        fid: 1112538,
      },
      {
        type: "farcaster",
        label: "yerbearserker",
        url: "https://farcaster.xyz/yerbearserker",
        fid: 409857,
      },
      {
        type: "empire",
        label: "PANGEA Empire",
        url: "https://www.empirebuilder.world/empire/0xD8b399e0Fc958B12Cb7841480E6054a30d674b07",
      },
    ],
  },
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
    title: "BizarreBeasts",
    description:
      "BizarreBeasts is a notorious, art-powered ecosystem featuring hand-illustrated characters, animations, NFTs, and web3 games! With 8 games played over 140,000 times and achieving #1 trending on Remix and TheBaseApp, BizarreBeasts has built a notorious community of 4,400+ token holders GOING BIZARRE.",
    image:
      "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/6f2cca88-a12a-4b50-8e70-08d7a8fd7c00/original",
    owners: [
      {
        fid: 357897,
        username: "bizarrebeast",
        avatar:
          "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/6f2cca88-a12a-4b50-8e70-08d7a8fd7c00/original",
      },
    ],
    links: [
      {
        type: "channel",
        label: "Farcaster $BB Community",
        url: "https://farcaster.xyz/~/channel/bizarrebeasts",
      },
      {
        type: "channel",
        label: "Farcaster $BB Art",
        url: "https://farcaster.xyz/~/channel/bizarrebeastsart",
      },
      {
        type: "x",
        label: "Follow on X",
        url: "https://x.com/bizarrebeasts_",
      },
      {
        type: "miniapp",
        label: "BizarreBeasts Miniapp",
        url: "https://bbapp.bizarrebeasts.io",
        miniappUrl: "https://bbapp.bizarrebeasts.io",
      },
      {
        type: "empire",
        label: "$BB Empire",
        url: "https://empire/empire.bizarrebeasts.io",
      },
      {
        type: "website",
        label: "Highlight",
        url: "https://highlight.xyz/user/@bizarrebeasts.eth",
      },
      {
        type: "website",
        label: "VibeMarket",
        url: "https://vibechain.com/market/bizarrebeasts?ref=BJT4EJBY0SJP&pnlId=6b6e45fc",
      },
      {
        type: "website",
        label: "Treasure Quest",
        url: "https://treasure-quest.remix.gg",
      },
      {
        type: "website",
        label: "BizarreBounce",
        url: "https://bizarre-bounce.remix.gg",
      },
      {
        type: "website",
        label: "Munchies Climb",
        url: "https://munchies-climb.remix.gg",
      },
      {
        type: "website",
        label: "Head Crush",
        url: "https://bizarrebeasts-head-crush.remix.gg",
      },
      {
        type: "website",
        label: "Memory Game",
        url: "https://bizarrebeasts-memory-game.remix.gg",
      },
      {
        type: "website",
        label: "TicTacToe",
        url: "https://bizarrebeasts-tictactoe.remix.gg",
      },
      {
        type: "website",
        label: "Checkers",
        url: "https://bizarrebeasts-checkerz.remix.gg",
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
  // {
  //   title: "Foundly Labs",
  //   description:
  //     "At Foundly Labs, our mission is to empower creators and users with cutting-edge software solutions. We are committed to pioneering visionary ideas through innovative technology, expert craftsmanship, and unwavering dedication.",
  //   image: "https://foundly.dev/logo.svg",
  //   owners: [
  //     {
  //       fid: 385651,
  //       username: "mfbevan.eth",
  //       avatar: "https://i.imgur.com/4kjhzdW.jpg",
  //     },
  //   ],
  //   links: [
  //     {
  //       type: "x",
  //       label: "Follow on X",
  //       url: "https://x.com/foundlylabs",
  //     },
  //     {
  //       type: "website",
  //       label: "Visit Website",
  //       url: "https://foundly.dev/",
  //     },
  //   ],
  // },
];
