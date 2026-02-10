"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { apps } from "~/data/content";
import { useLanderStore } from "~/stores/lander.store";
import { LanderBackground } from "./lander.background";
import { LanderTokenTicker } from "./lander.token-ticker";
import { LanderSocialLinks } from "./lander.social-links";
import { LanderCenterContent } from "./lander.center-content";
import { LanderAppSelector } from "./lander.app-selector";
import { LanderGreeting } from "./lander.greeting";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export const Lander = () => {
  const advance = useLanderStore((s) => s.advance);
  const autoScrollPaused = useLanderStore((s) => s.autoScrollPaused);

  // Preload all background images on mount
  useEffect(() => {
    apps.forEach((app) => {
      if (app.background) {
        const img = new Image();
        img.src = app.background;
      }
    });
  }, []);

  // Auto-scroll every 10 seconds until user interacts
  useEffect(() => {
    if (autoScrollPaused) return;
    const interval = setInterval(advance, 10000);
    return () => clearInterval(interval);
  }, [advance, autoScrollPaused]);

  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <LanderBackground />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 flex h-full flex-col p-4 md:p-6"
      >
        <motion.div
          variants={fadeIn}
          className="flex items-start justify-between"
        >
          <LanderTokenTicker />
          <LanderSocialLinks />
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="flex flex-1 items-center justify-center"
        >
          <LanderCenterContent />
        </motion.div>

        <motion.div variants={fadeIn} className="pb-4 md:pb-6">
          <LanderGreeting />
          <LanderAppSelector />
        </motion.div>
      </motion.div>
    </main>
  );
};
