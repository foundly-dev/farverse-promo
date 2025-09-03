import { createAssetUrl } from "~/services/image.service";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { Globe2, PawPrint, Swords } from "lucide-react";
import { createMetadata } from "~/lib/metadata";
import type { Metadata } from "next";

const links = [
  {
    label: "FarPets",
    href: "https://farcaster.xyz/miniapps/PxBmrtUbCGLI/farpets",
    icon: PawPrint,
  },

  {
    label: "Democracy",
    href: "https://farcaster.xyz/miniapps/EQTEopy6Rl8l/democracy",
    icon: Globe2,
  },
  {
    label: "Slay to Earn",
    href: "https://farcaster.xyz/miniapps/LKH4wBsF1zYm/slay-to-earn",
    icon: Swords,
  },
];

export const metadata: Metadata = createMetadata({});

export default async function Home() {
  return (
    <main
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center",
      )}
    >
      <img
        src={createAssetUrl("/fv_bg.png")}
        alt="Farverse Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-violet-950/50" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="font-jersey drop-shadow-box-black text-8xl font-bold text-white">
          FARVERSE
        </h1>

        <p className="font-vt text-2xl leading-none text-white uppercase drop-shadow-lg">
          An onchain gaming universe
        </p>
        <p className="font-vt text-2xl leading-none text-white uppercase drop-shadow-lg">
          Built on Farcaster
        </p>

        <div className="font-jersey flex flex-col space-y-4 pt-8 sm:flex-row sm:space-y-0 sm:space-x-6">
          {links.map((link) => (
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <Button className="w-36 uppercase">
                <link.icon className="size-4" />
                {link.label}
              </Button>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
