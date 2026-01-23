"use client";

import { Button } from "~/components/ui/button";
import { FarcasterIcon } from "~/components/farcaster/farcaster.icon";
import { createAssetUrl } from "~/lib/url";
import { Landmark, Rocket } from "lucide-react";
import { PlayOn } from "./home.play-on";

const XIcon = ({ className }: { className?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const SOCIAL_LINKS = [
  {
    label: "Farcaster",
    url: "https://farcaster.xyz/~/channel/farverse",
    icon: FarcasterIcon,
  },
  {
    label: "X/Twitter",
    url: "https://x.com/0xmfbevan",
    icon: XIcon,
  },
  {
    label: "Empire",
    url: "https://www.empirebuilder.world/empire/0xdFE23E2c07f8edF23ebA9c9a45E23303417C6B07",
    icon: Landmark,
  },
  {
    label: "Foundly",
    url: "https://foundly.dev",
    icon: () => <Rocket fill="currentColor" />,
  },
];

const GAMES = [
  // {
  //   title: "Warptown",
  //   description: "A Pixel RPG",
  //   logo: "https://warptown.com/favicon.ico",
  //   farcasterUrl: "https://farcaster.xyz/miniapps/LKH4wBsF1zYm/slay-to-earn",
  //   baseUrl: "https://base.app/app/https://warptown.com",
  // },
  {
    title: "Slay to Earn",
    description: "Slay Enemies. Earn Rewards.",
    logo: "https://assets.foundly.dev/slay/logo/logo_256.png",
    farcasterUrl: "https://farcaster.xyz/miniapps/LKH4wBsF1zYm/slay-to-earn",
    baseUrl: "https://base.app/app/https://slay.farverse.games",
  },
  {
    title: "FarPets",
    description: "Hatch your own FarPet!",
    logo: "https://farpets.com/logo/logo_256.png",
    farcasterUrl: "https://farcaster.xyz/miniapps/PxBmrtUbCGLI/farpets",
    baseUrl: "https://base.org/name/https://farpets.com",
  },
];

export const HomeHero = () => {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src={createAssetUrl("/fv_bg.png")}
          alt="Farverse Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-violet-950/60" />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-6 px-4">
        {/* Logo */}
        <img
          src={createAssetUrl("/text_logo.png")}
          alt="Farverse"
          className="h-auto w-48 md:w-72"
        />

        {/* Tagline */}
        <p className="text-center text-base font-light tracking-wide text-white/90 md:text-lg">
          An Onchain Gaming Universe
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-2">
          {SOCIAL_LINKS.map((link) => (
            <Button
              key={link.label}
              variant="glass"
              size="icon"
              onClick={() => window.open(link.url, "_blank")}
              aria-label={link.label}
            >
              <link.icon className="size-5 text-white" />
            </Button>
          ))}
        </div>

        {/* Games */}
        <div className="mt-2 grid w-full max-w-2xl grid-cols-1 gap-3 md:grid-cols-2">
          {GAMES.map((game) => (
            <div
              key={game.title}
              className="flex flex-col gap-3 rounded-xl border border-white/10 bg-black/20 p-4 backdrop-blur-md"
            >
              <div className="flex items-center gap-3">
                <img
                  src={game.logo}
                  alt={game.title}
                  className="size-10 shrink-0 rounded-lg"
                />
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-white">{game.title}</h3>
                  <p className="truncate text-xs text-white/60">
                    {game.description}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <PlayOn
                  linkType="farcaster"
                  url={game.farcasterUrl}
                  className="flex-1"
                />
                <PlayOn linkType="base" url={game.baseUrl} className="flex-1" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <p className="absolute bottom-4 text-xs text-white/40">
        &copy; 2026 Foundly Labs
      </p>
    </section>
  );
};
