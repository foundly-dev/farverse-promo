"use client";

import sdk from "@farcaster/miniapp-sdk";
import { toast } from "sonner";
import { useIsMiniApp } from "~/components/farcaster/farcaster.hooks";

import { Button, type ButtonProps } from "~/components/ui/button";
import { AppleDark } from "~/components/ui/svgs/appleDark";
import { BaseIcon } from "~/components/ui/svgs/base.icon";
import { FarcasterIcon } from "~/components/ui/svgs/farcaster.icon";
import { GoogleChromeIcon } from "~/components/ui/svgs/google-chrome";
import { GooglePlayIcon } from "~/components/ui/svgs/google-play";
import { TelegramLiteIcon } from "~/components/ui/svgs/telegram.icon";
import { WindowsIcon } from "~/components/ui/svgs/window";
import { cn } from "~/lib/utils";

export type PlayOnType =
  | "google"
  | "apple"
  | "farcaster"
  | "base"
  | "windows"
  | "chrome"
  | "macos"
  | "telegram";

const getPlayParts = (type: PlayOnType) => {
  switch (type) {
    case "google":
      return {
        title: "Google Play",
        subtitle: "Get it on",
        icon: GooglePlayIcon,
      };
    case "apple":
      return {
        title: "App Store",
        subtitle: "Download on the",
        icon: AppleDark,
      };
    case "macos":
      return {
        title: "MacOS",
        subtitle: "Download on",
        icon: AppleDark,
      };
    case "windows":
      return {
        title: "Windows",
        subtitle: "Download on",
        icon: WindowsIcon,
      };
    case "chrome":
      return {
        title: "Browser",
        subtitle: "Play now in",
        icon: GoogleChromeIcon,
      };
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
    case "telegram":
      return {
        title: "Telegram",
        subtitle: "Play now on",
        icon: TelegramLiteIcon,
        className: "bg-telegram-500 hover:bg-telegram-600",
      };
  }
};

interface PlayOnProps extends ButtonProps {
  linkType: PlayOnType;
  url: string;
  miniappUrl?: string;
  size?: "icon" | "default";
  isComingSoon?: boolean;
}

export const PlayOn = ({
  linkType,
  url,
  miniappUrl,
  size,
  isComingSoon,
  ...props
}: PlayOnProps) => {
  const [isMiniApp] = useIsMiniApp();
  const { title, subtitle, className, icon: Icon } = getPlayParts(linkType);

  const isIcon = size === "icon";

  const onClick = () => {
    switch (linkType) {
      case "farcaster":
      case "base":
        if (isMiniApp) {
          void sdk.actions.openMiniApp({ url: miniappUrl! });
          return;
        }
        window.open(url, "_blank");
        break;
      case "telegram":
        toast.info("Telegram Mini App Coming Soon", {
          style: { backgroundColor: "var(--color-telegram-500)" },
        });
        break;
      case "google":
        toast.info("Android Coming Soon", {
          style: { backgroundColor: "var(--color-green-500)" },
        });
        break;
      case "apple":
        toast.info("iOS Coming Soon");
        break;
      case "windows":
        toast.info("Desktop Coming Soon", {
          style: { backgroundColor: "var(--color-sky-300)" },
        });
        break;
      case "chrome":
        window.open(url, "_blank");
        break;
    }
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
        <Icon className="size-4" />
        {!isIcon && (
          <div className="flex flex-col items-start gap-0 text-white dark:text-white">
            <p className="text-[8px] leading-none uppercase">
              {isComingSoon ? "Coming Soon to" : subtitle}
            </p>
            <p className="text-sm leading-none font-semibold">{title}</p>
          </div>
        )}
      </div>
      {/* </a> */}
    </Button>
  );
};
