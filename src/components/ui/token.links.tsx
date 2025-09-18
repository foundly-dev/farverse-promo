"use client";

import { Button } from "../ui/button";

import { icons } from "~/services/image.service";
import {
  createExplorerAddressUrl,
  createClankerCoinLink,
  createUniswapCoinLink,
  createDexScreenerCoinLink,
  createZoraCoinLink,
} from "~/services/linker.service";

export const TokenLinks = ({
  token,
}: {
  token: { address?: string; type?: string };
}) => {
  const externalLinks = [
    {
      name: "Basescan",
      href: createExplorerAddressUrl({ address: token.address }),
      icon: icons.basescan,
      hoverClass: "hover:!bg-blue-500/20",
      enabled: true,
    },
    {
      name: "Clanker",
      href: createClankerCoinLink({ address: token.address }),
      icon: icons.clanker,
      hoverClass: "hover:!bg-purple-500/20",
      enabled: token.type === "clanker",
    },
    {
      name: "Zora",
      href: createZoraCoinLink({ address: token.address }),
      icon: icons.zora,
      hoverClass: "hover:!bg-zinc-500/20",
      enabled: token.type === "zora",
    },
    {
      name: "Uniswap",
      href: createUniswapCoinLink({ address: token.address }),
      icon: icons.uniswap,
      hoverClass: "hover:!bg-pink-500/20",
      enabled: true,
    },
    {
      name: "DexScreener",
      href: createDexScreenerCoinLink({ address: token.address }),
      icon: icons.dexscreener,
      hoverClass: "hover:!bg-zinc-500/20",
      enabled: true,
    },
  ].filter((link) => link.enabled);

  if (!token.address) return null;

  return (
    <div className="flex items-center justify-end gap-1">
      {/* Desktop Button List */}
      <div className="flex items-center justify-end gap-1">
        {externalLinks.map((link) => (
          <Button
            key={link.name}
            variant="ghost"
            size="icon"
            className={`!rounded-full ${link.hoverClass}`}
            asChild
          >
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <img
                src={link.icon}
                alt={link.name}
                width={20}
                height={20}
                className={link.name === "Clanker" ? "!rounded-full" : ""}
              />
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
};
