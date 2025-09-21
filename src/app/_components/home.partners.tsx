"use client";

import { partners } from "~/data/partners";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { PartnerLinkComponent } from "~/components/ui/partner-link";
import { Landmark } from "lucide-react";

export const Partners = () => {
  return (
    <div className="flex flex-col pt-6">
      <h3 className="pl-2 text-2xl font-bold">
        <Landmark className="mr-2 inline-block size-5 -translate-y-0.5" />
        Partners
      </h3>
      <p className="pl-2 text-xs">
        The Farverse is bigger than just its games. These are some of the
        awesome people and projects that we&apos;re working with.
      </p>
      <div className="grid grid-cols-3 gap-6 pt-4 md:grid-cols-6">
        {partners.map((item) => (
          <Drawer key={item.title}>
            <DrawerTrigger asChild>
              <button className="group flex w-full flex-col items-center space-y-2 transition-transform hover:scale-105">
                <div className="relative aspect-square w-full overflow-hidden rounded-xl shadow-md transition-shadow group-hover:shadow-lg">
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
              <DrawerHeader>
                <div className="flex items-start space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="size-16 rounded-lg border object-contain"
                  />
                  <div className="flex flex-col">
                    <DrawerTitle className="text-left text-2xl font-bold">
                      {item.title}
                    </DrawerTitle>
                    <div className="flex flex-wrap items-center gap-2">
                      {item.owners.map((owner, index) => (
                        <div
                          key={owner.fid}
                          className="flex items-center space-x-1"
                        >
                          <img
                            src={owner.avatar}
                            alt={owner.username}
                            className="size-5 rounded-full"
                          />
                          <span className="text-base font-medium">
                            {owner.username}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mt-3 text-left text-sm">
                  {item.description}
                </p>
                {item.links && item.links.length > 0 && (
                  <div className="mt-2 space-y-2">
                    <div className="grid grid-cols-1 gap-2">
                      {item.links.map((link, index) => (
                        <PartnerLinkComponent key={index} link={link} />
                      ))}
                    </div>
                  </div>
                )}
              </DrawerHeader>
            </DrawerContent>
          </Drawer>
        ))}
      </div>
    </div>
  );
};
