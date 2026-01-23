"use client";

import { PlayOn } from "./home.play-on";

const GAMES = [
  {
    title: "Slay to Earn",
    subtitle: "Slay Enemies. Earn Rewards.",
    logo: "https://assets.foundly.dev/slay/logo/logo_256.png",
    url: "https://farcaster.xyz/miniapps/LKH4wBsF1zYm/slay-to-earn",
  },
  {
    title: "FarPets",
    subtitle: "Hatch your own FarPet!",
    logo: "https://farpets.com/logo/logo_256.png",
    url: "https://farcaster.xyz/miniapps/PxBmrtUbCGLI/farpets",
  },
];

export const HomeGames = () => {
  return (
    <section className="relative z-10 -mt-32 flex w-full flex-col items-center gap-4 px-4 pb-8">
      <div className="flex w-full max-w-2xl gap-4">
        {GAMES.map((game) => (
          <div
            key={game.title}
            className="flex flex-1 flex-col items-center gap-3 rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur-md"
          >
            <img
              src={game.logo}
              alt={game.title}
              className="size-16 rounded-lg"
            />
            <div className="flex flex-col items-center gap-0.5 text-center">
              <h3 className="text-base font-bold text-white">{game.title}</h3>
              <p className="text-xs text-white/60">{game.subtitle}</p>
            </div>
            <PlayOn linkType="farcaster" url={game.url} />
          </div>
        ))}
      </div>
    </section>
  );
};
