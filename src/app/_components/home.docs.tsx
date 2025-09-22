"use client";

import { LibrarySquare } from "lucide-react";
import { Card } from "~/components/ui/card";
import { cn } from "~/lib/utils";
import { useIsMiniApp } from "~/components/farcaster/farcaster.hooks";
import { sdk } from "@farcaster/miniapp-sdk";

export const Docs = ({ className }: { className?: string }) => {
  const [isMiniApp] = useIsMiniApp();
  return (
    <Card
      className={cn(
        "bg-card/10 mx-auto w-full max-w-md cursor-pointer gap-2 p-4 backdrop-blur-md transition-all duration-300 hover:scale-102 md:max-w-xs",
        className,
      )}
      onClick={() => {
        if (isMiniApp) {
          void sdk.actions.openUrl("https://docs.farverse.games");
        } else {
          void window.open("https://docs.farverse.games", "_blank");
        }
      }}
    >
      <div className="flex items-center gap-2">
        <LibrarySquare className="size-5" />
        <h3 className="text-lg font-bold">Documentation</h3>
      </div>
      <p className="text-xs">Learn more about the Farverse and how to play</p>
    </Card>
  );
};
