"use client";

import { useRef, useState, useEffect } from "react";
import sdk from "@farcaster/miniapp-sdk";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useToken } from "~/app/_components/home.hooks";
import { useIsMiniApp } from "~/components/farcaster/farcaster.hooks";
import { Button } from "~/components/ui/button";
import { formatSmallPrice } from "~/lib/format";
import { cn } from "~/lib/utils";
import {
  createUniswapCoinLink,
  createEmpireBuilderCoinLink,
} from "~/services/linker.service";

const COINGECKO_URL = "https://www.coingecko.com/en/coins/farverse";

export const LanderTokenTicker = () => {
  const [{ icon, symbol, price, priceChange, address, token }] = useToken();
  const [isMiniApp] = useIsMiniApp();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const links = [
    {
      name: "CoinGecko",
      href: COINGECKO_URL,
      icon: "https://www.coingecko.com/favicon.ico",
    },
    {
      name: "GeckoTerminal",
      href: "https://www.geckoterminal.com/base/pools/0x313a74e19d6572b5a911c3ece412228235f39ce21f57c7cea89fc01951642401",
      icon: "https://www.geckoterminal.com/favicon.ico",
    },
    {
      name: "Uniswap",
      href: createUniswapCoinLink({ address }),
      icon: "https://app.uniswap.org/favicon.ico",
    },
    {
      name: "Empire",
      href: createEmpireBuilderCoinLink({ address }),
      icon: "https://www.empirebuilder.world/favicon.ico",
    },
  ];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-black/20 py-1.5 pr-3 pl-2 backdrop-blur-md transition-colors hover:bg-black/30"
      >
        <Image
          src={icon}
          alt={symbol}
          width={20}
          height={20}
          className="h-5 w-5 rounded-full object-cover"
        />
        <span className="text-sm font-medium text-white">
          {formatSmallPrice(price)}
        </span>
        <span
          className={cn(
            "text-xs font-medium",
            priceChange >= 0 ? "text-lime-400" : "text-rose-400",
          )}
        >
          {priceChange >= 0 ? "+" : ""}
          {priceChange.toFixed(2)}%
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 z-50 mt-2 flex flex-col overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <img
                  src={link.icon}
                  alt={link.name}
                  className="h-4 w-4 rounded-sm"
                />
                {link.name}
              </a>
            ))}
            {isMiniApp && (
              <div className="border-t border-white/10 p-1.5">
                <Button
                  variant="glass"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    void sdk.actions.swapToken({ buyToken: token });
                    setOpen(false);
                  }}
                >
                  Buy Now
                </Button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
