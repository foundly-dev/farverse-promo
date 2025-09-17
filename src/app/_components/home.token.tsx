"use client";
import { sdk } from "@farcaster/miniapp-sdk";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import { cn } from "~/lib/utils";
import { useToken } from "./home.hooks";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { ChartDialog } from "./home.chart-dialog";
import { formatSmallPrice } from "~/lib/format";

export const HomeToken = () => {
  const [{ icon, symbol, price, tvl, priceChange, token, name }] = useToken();

  const formatPrice = (price: number) => {
    if (price < 0.000001) {
      return price.toExponential(2);
    }
    if (price < 0.01) {
      return price.toFixed(6);
    }
    if (price < 1) {
      return price.toFixed(4);
    }
    return price.toFixed(2);
  };

  const formatTVL = (tvl: number) => {
    if (tvl >= 1e9) {
      return `$${(tvl / 1e9).toFixed(1)}B`;
    }
    if (tvl >= 1e6) {
      return `$${(tvl / 1e6).toFixed(1)}M`;
    }
    if (tvl >= 1e3) {
      return `$${(tvl / 1e3).toFixed(1)}K`;
    }
    return `$${tvl.toFixed(0)}`;
  };

  return (
    <Card
      className={cn(
        "bg-card/10 mx-auto w-full max-w-sm gap-2 backdrop-blur-md",
      )}
    >
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={icon}
              alt={`${symbol} token icon`}
              className="h-10 w-10 rounded-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-foreground text-lg font-bold">{symbol}</h3>
            <p className="text-xs">{name}</p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-2">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">Price</span>
            <span className="text-foreground text-lg font-semibold">
              {formatSmallPrice(price)}
            </span>
          </div>

          {priceChange !== undefined && (
            <div className="flex items-center justify-between">
              <span className="text-sm">24h Change</span>
              <span
                className={cn(
                  "text-sm font-medium",
                  priceChange >= 0 ? "text-green-600" : "text-red-600",
                )}
              >
                {priceChange >= 0 ? "+" : ""}
                {priceChange.toFixed(2)}%
              </span>
            </div>
          )}

          {tvl && (
            <div className="flex items-center justify-between">
              <span className="text-sm">TVL</span>
              <span className="text-foreground text-sm font-medium">
                {formatTVL(tvl)}
              </span>
            </div>
          )}
        </div>
      </CardContent>

      <Separator className="my-3" />

      <CardFooter className="flex gap-4">
        <ChartDialog>
          <Button className="flex-1" variant="outline">
            Chart
          </Button>
        </ChartDialog>
        <Button
          className="flex-1"
          onClick={() => {
            void sdk.actions.viewToken({ token });
          }}
        >
          Buy
        </Button>
      </CardFooter>
    </Card>
  );
};
