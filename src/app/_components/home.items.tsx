import { Globe2, PawPrint, Swords } from "lucide-react";
import { Button } from "~/components/ui/button";

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

export const HomeItems = () => {
  return (
    <div className="font-jersey flex flex-col space-y-4 pt-8 sm:flex-row sm:space-y-0 sm:space-x-6">
      {links.map((link) => (
        <a
          href={link.href}
          key={link.label}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-36 uppercase">
            <link.icon className="size-4" />
            {link.label}
          </Button>
        </a>
      ))}
    </div>
  );
};
