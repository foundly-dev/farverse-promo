"use client";

import { Button } from "~/components/ui/button";
import { XDark } from "~/components/ui/svgs/xDark";
import { FarcasterIcon } from "~/components/ui/svgs/farcaster.icon";
import { Discord } from "~/components/ui/svgs/discord";

const links = [
  {
    icon: <XDark className="size-4" />,
    href: "https://x.com/farversegames",
    label: "X",
  },
  {
    icon: <FarcasterIcon className="size-4 text-white" />,
    href: "https://farcaster.xyz/~/channel/farverse",
    label: "Farcaster",
  },
  {
    icon: <Discord className="size-4 text-white" />,
    href: "https://discord.gg/s45DNrBSxu",
    label: "Discord",
  },
];

export const LanderSocialLinks = () => {
  return (
    <div className="flex items-center gap-1">
      {links.map((link) => (
        <Button
          key={link.label}
          variant="ghost"
          size="icon"
          className="backdrop-blur-sm hover:bg-white/10"
          asChild
        >
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        </Button>
      ))}
    </div>
  );
};
