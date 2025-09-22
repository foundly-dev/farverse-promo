"use client";

import { apps, socials } from "~/data/content";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { ImageCarousel } from "~/components/ui/image-carousel";
import { Button } from "~/components/ui/button";
import { useIsMiniApp } from "~/components/farcaster/farcaster.hooks";
import { cn } from "~/lib/utils";
import { ExternalLink, Gamepad2 } from "lucide-react";
import { icons } from "~/services/image.service";
import { Docs } from "./home.docs";

export const Apps = () => {
  return (
    <div className="md: flex flex-col pt-4 pt-8 md:flex-row md:gap-8">
      <div className="flex flex-col md:w-1/2">
        <h3 className="pl-2 text-2xl font-bold">
          <Gamepad2 className="mr-1 inline-block size-5 -translate-y-0.5" />{" "}
          Farverse Games
        </h3>
        <p className="pl-2 text-xs">One Universe. Many Games.</p>

        <div className="grid grid-cols-3 gap-6 pt-4 sm:grid-cols-3">
          {apps.map((item) => (
            <ContentItem key={item.title} item={item} />
          ))}
        </div>

        <Docs className="mt-4 md:hidden" />
      </div>
      <div className="flex flex-col md:w-1/2">
        <h3 className="pt-4 pl-2 text-2xl font-bold md:pt-0">
          <img
            src={icons.farcaster}
            alt="Farcaster"
            className="mr-1 inline-block size-5 -translate-y-0.5"
          />{" "}
          Community
        </h3>
        <p className="pl-2 text-xs">
          Follow to to stay up to date and join the Farverse Empire to earn
          rewards!
        </p>
        <div className="grid grid-cols-3 gap-6 pt-4 sm:grid-cols-3">
          {socials.map((item) => (
            <ContentItem key={item.title} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ContentItem = ({ item }: { item: (typeof apps)[number] }) => {
  const [isMiniApp] = useIsMiniApp();

  return (
    <Drawer key={item.title}>
      <DrawerTrigger asChild>
        <button className="group flex w-full flex-col items-center space-y-2 transition-transform hover:scale-105">
          <div className="relative aspect-square w-full overflow-hidden rounded-xl border shadow-md transition-shadow group-hover:shadow-lg">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-contain"
            />
          </div>
          <span className="line-clamp-1 text-center text-xs font-medium">
            {item.title}
          </span>
        </button>
      </DrawerTrigger>
      <DrawerContent className="min-h-96">
        <DrawerHeader className="space-y-4">
          <div className="flex items-start space-x-4">
            <img
              src={item.image}
              alt={item.title}
              className="size-16 rounded-lg border object-contain"
            />
            <div className="flex flex-col items-start">
              <DrawerTitle className="text-2xl font-bold">
                {item.title}
              </DrawerTitle>
              <span className="text-muted-foreground text-left text-base font-medium">
                {item.subtitle}
              </span>
            </div>
          </div>

          {item.stats && item.stats.length > 0 && (
            <div className="flex">
              {item.stats.map((stat) => (
                <div
                  key={stat.label}
                  className={cn("flex w-full flex-col items-center")}
                >
                  <span className="text-center text-lg font-bold">
                    {stat.value}
                  </span>

                  <span className="text-muted-foreground text-center text-xs font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          <div>
            <Button
              className="w-full"
              onClick={isMiniApp ? item.onMiniAppClick : item.onClick}
            >
              {item.action} <ExternalLink className="size-4" />
            </Button>
          </div>

          <span className="text-muted-foreground text-left text-sm leading-tight">
            {item.description}
          </span>

          {item.screenshots && item.screenshots.length > 0 && (
            <div>
              <ImageCarousel images={item.screenshots} alt={item.title} />
            </div>
          )}
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};
