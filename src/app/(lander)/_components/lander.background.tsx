"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLanderStore } from "~/stores/lander.store";
import { createAssetUrl } from "~/services/image.service";

const fallbackBg = createAssetUrl("/fv_bg.png");

export const LanderBackground = () => {
  const selectedApp = useLanderStore((s) => s.selectedApp);
  const bgUrl = selectedApp.background ?? fallbackBg;

  return (
    <div className="absolute inset-0 z-0">
      <AnimatePresence>
        <motion.img
          key={bgUrl}
          src={bgUrl}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
    </div>
  );
};
