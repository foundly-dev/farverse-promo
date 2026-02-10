"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { PlayOn } from "~/app/_components/home.play-on";
import { useIsMiniApp } from "~/components/farcaster/farcaster.hooks";
import { Button } from "~/components/ui/button";
import { Discord } from "~/components/ui/svgs/discord";
import { FarcasterIcon } from "~/components/ui/svgs/farcaster.icon";
import { XDark } from "~/components/ui/svgs/xDark";
import { useLanderStore } from "~/stores/lander.store";

const socials = [
  {
    icon: <FarcasterIcon className="size-4 text-white" />,
    href: "https://farcaster.xyz/~/channel/farverse",
    label: "/farverse",
  },
  {
    icon: <FarcasterIcon className="size-4 text-white" />,
    href: "https://farcaster.xyz/~/mfbevan",
    label: "mfbevan.eth",
  },
  {
    icon: <XDark className="size-4" />,
    href: "https://x.com/farversegames",
    label: "Twitter / X",
  },
  {
    icon: <Discord className="size-4 text-white" />,
    href: "https://discord.gg/s45DNrBSxu",
    label: "Discord",
  },
];

export const LanderCenterContent = () => {
  const selectedApp = useLanderStore((s) => s.selectedApp);
  const [isMiniApp] = useIsMiniApp();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={selectedApp.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="flex max-w-xl flex-col items-center gap-6 text-center md:gap-8"
      >
        {selectedApp.image && (
          <Image
            src={selectedApp.image}
            alt={selectedApp.title}
            width={96}
            height={96}
            className="h-20 w-20 rounded-2xl md:h-24 md:w-24"
          />
        )}

        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold text-white md:text-5xl">
            {selectedApp.title}
          </h1>
          <p className="text-base font-medium text-white/70 md:text-lg">
            {selectedApp.subtitle}
          </p>
        </div>

        <p className="max-w-md text-sm leading-relaxed text-white/60 md:text-base">
          {selectedApp.description}
        </p>

        {selectedApp.playOn && selectedApp.playOn.length > 0 ? (
          <div className="flex flex-wrap items-center justify-center gap-3">
            {selectedApp.playOn
              .filter((config) => !isMiniApp || !config.browserOnly)
              .map((config) => (
                <PlayOn
                  key={config.type}
                  linkType={config.type}
                  url={config.url}
                  miniappUrl={selectedApp.miniAppUrl}
                  isComingSoon={config.isComingSoon}
                />
              ))}
          </div>
        ) : (
          !selectedApp.image && (
            <div className="flex flex-wrap items-center justify-center gap-3">
              {socials.map((social) => (
                <Button
                  key={social.label}
                  variant="glass"
                  size="default"
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    {social.icon}
                    <span>{social.label}</span>
                  </a>
                </Button>
              ))}
            </div>
          )
        )}
      </motion.div>
    </AnimatePresence>
  );
};
