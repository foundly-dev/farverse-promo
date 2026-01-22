"use client";

import { BaseIcon } from "~/components/farcaster/base.icon";
import { FarcasterIcon } from "~/components/farcaster/farcaster.icon";
import { Button, type ButtonProps } from "~/components/ui/button";
import { cn } from "~/lib/utils";

type PlayOnType = "farcaster" | "base";

const getPlayParts = (type: PlayOnType) => {
  switch (type) {
    case "farcaster":
      return {
        title: "Farcaster",
        subtitle: "Play now on",
        icon: () => FarcasterIcon({ className: "text-white" }),
        className: "bg-farcaster-500 hover:bg-farcaster-600",
      };
    case "base":
      return {
        title: "Base App",
        subtitle: "Play now on",
        icon: () => BaseIcon({ className: "text-white" }),
        className: "bg-base-500 hover:bg-base-600",
      };
  }
};

interface PlayOnProps extends ButtonProps {
  linkType: PlayOnType;
  url: string;
  size?: "icon" | "default";
}

export const PlayOn = ({ linkType, url, size, ...props }: PlayOnProps) => {
  const { title, subtitle, className, icon: Icon } = getPlayParts(linkType);

  const isIcon = size === "icon";

  const onClick = () => {
    window.open(url, "_blank");
  };

  return (
    <Button
      size={size}
      {...props}
      className={cn(
        "light gap-2",
        isIcon ? "" : "pl-3",
        !isIcon && className ? className : "bg-zinc-800 hover:bg-zinc-900",
      )}
      onClick={onClick}
    >
      {/* <a href={url} target="_blank"> */}
      <div className="flex w-full items-center justify-center gap-2">
        <Icon />
        {!isIcon && (
          <div className="flex flex-col items-start gap-0 text-white dark:text-white">
            <p className="text-[8px] leading-none uppercase">{subtitle}</p>
            <p className="text-sm leading-none font-semibold">{title}</p>
          </div>
        )}
      </div>
      {/* </a> */}
    </Button>
  );
};
