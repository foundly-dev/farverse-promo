"use client";

import { Ellipsis } from "lucide-react";
import Image from "next/image";
import { apps } from "~/data/content";
import { cn } from "~/lib/utils";
import { useLanderStore } from "~/stores/lander.store";

export const LanderAppSelector = () => {
  const selectedIndex = useLanderStore((s) => s.selectedIndex);
  const setSelectedIndex = useLanderStore((s) => s.setSelectedIndex);
  const pauseAutoScroll = useLanderStore((s) => s.pauseAutoScroll);

  return (
    <div className="flex items-center justify-center gap-2 pb-[env(safe-area-inset-bottom)] md:gap-3">
      {apps.map((app, index) => {
        const isSelected = index === selectedIndex;

        return (
          <button
            key={app.title}
            onClick={() => {
              pauseAutoScroll();
              setSelectedIndex(index);
            }}
            className={cn(
              "flex cursor-pointer items-center overflow-hidden rounded-lg border border-white/10 bg-black/20 backdrop-blur-md transition-colors duration-200 md:gap-2.5 md:rounded-xl md:p-2 md:pr-4 last:md:pr-2",
              isSelected
                ? "border-white/20 bg-black/30"
                : "opacity-60 hover:opacity-80",
            )}
          >
            {app.image ? (
              <Image
                src={app.image}
                alt={app.title}
                width={80}
                height={80}
                unoptimized
                className="h-10 w-10 md:h-8 md:w-8 md:rounded-md"
              />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center md:h-8 md:w-8">
                <Ellipsis className="h-5 w-5 text-white/60" />
              </div>
            )}
            {app.image && (
              <span className="hidden text-sm font-medium text-white md:block">
                {app.title}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
