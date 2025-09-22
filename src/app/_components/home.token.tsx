"use client";

import { sdk } from "@farcaster/miniapp-sdk";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardFooter, CardHeader } from "~/components/ui/card";
import { cn } from "~/lib/utils";
import { useToken } from "./home.hooks";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { ChartDialog } from "./home.chart-dialog";
import { formatSmallPrice, formatMarketCap } from "~/lib/format";
import { useIsMiniApp } from "~/components/farcaster/farcaster.hooks";

import { TokenLinks } from "~/components/ui/token.links";

export const HomeToken = () => {
  const [isInMiniApp] = useIsMiniApp();
  const [
    { icon, symbol, price, marketCap, address, priceChange, token, name },
  ] = useToken();

  const [showPrice, setShowPrice] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPrice((prev) => !prev);
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Card
      className={cn(
        "bg-card/10 mx-auto w-full gap-2 pt-5 pb-4 backdrop-blur-md md:max-w-sm",
      )}
    >
      <CardHeader className="px-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="relative rounded-full border">
              <img
                src={icon}
                alt={`${symbol} token icon`}
                className="h-10 w-10 rounded-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-foreground text-lg leading-tight font-bold">
                {symbol}
              </h3>
              <p className="text-xs leading-tight opacity-80">{name}</p>
            </div>
          </div>

          <div className="flex flex-col items-end justify-self-end">
            <span
              className={cn(
                "text-xs leading-tight font-medium",
                priceChange >= 0 ? "text-lime-500" : "text-rose-500",
              )}
            >
              {priceChange >= 0 ? "+" : ""}
              {priceChange.toFixed(2)}%
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={showPrice ? "price" : "marketcap"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-foreground text-lg leading-tight font-semibold"
              >
                {showPrice
                  ? formatSmallPrice(price) || "$0.00"
                  : formatMarketCap(marketCap) || "$0"}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <TokenLinks token={{ address, type: "clanker", token }} />
        </div>
      </CardHeader>

      <Separator className="mt-1 mb-2" />

      <CardFooter className="flex gap-4 px-4">
        <ChartDialog>
          <Button variant="outline" className="flex-1">
            Chart
          </Button>
        </ChartDialog>

        <Button
          className="flex-1"
          onClick={() => {
            if (isInMiniApp) {
              void sdk.actions.swapToken({ buyToken: token });
            } else {
              void window.open(
                `https://app.uniswap.org/explore/tokens/base/${address}`,
                "_blank",
              );
            }
          }}
        >
          Buy
        </Button>
      </CardFooter>
    </Card>
  );
};
