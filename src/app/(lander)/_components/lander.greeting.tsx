"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { useFarcasterContext } from "~/components/farcaster/farcaster.hooks";

export const LanderGreeting = () => {
  const { user } = useFarcasterContext();
  const [dismissed, setDismissed] = useState(false);

  if (!user || dismissed) return null;

  const displayName = user.username ?? user.displayName ?? "traveller";

  return (
    <div className="flex justify-center pb-4">
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/20 py-1.5 pr-1.5 pl-3 backdrop-blur-md">
        <img
          src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif"
          alt="wave"
          className="h-5 w-5"
        />
        <span className="text-xs text-white/70">
          Hey <span className="font-medium text-white">{displayName}</span>,
          welcome to the Farverse!
        </span>
        <button
          onClick={() => setDismissed(true)}
          className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full text-white/40 transition-colors hover:text-white/70"
        >
          <X className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
};
