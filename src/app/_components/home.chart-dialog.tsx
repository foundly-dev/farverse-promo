"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import { useToken } from "./home.hooks";
import { createGeckoTerminalEmbedLink } from "~/services/linker.service";

interface ChartDialogProps {
  children?: React.ReactNode;
}

export function ChartDialog({ children }: ChartDialogProps) {
  const [{ poolAddress }] = useToken();
  const [open, setOpen] = useState(false);

  if (!poolAddress) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children ?? (
          <Button variant="outline" size="sm">
            View Chart
          </Button>
        )}
      </DialogTrigger>
      <DialogContent
        className="h-full max-h-[100dvh] w-full max-w-[100vw] border-none bg-transparent p-0 shadow-none"
        showCloseButton={false}
      >
        <DialogTitle className="hidden">Chart</DialogTitle>
        <DialogDescription className="hidden">Chart</DialogDescription>
        <div className="flex w-full flex-col items-center justify-center gap-2 p-4">
          <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border backdrop-blur-md">
            <iframe
              src={createGeckoTerminalEmbedLink({
                address: poolAddress,
                chain: "base",
              })}
              className="h-full w-full border-0 opacity-80"
            />
          </div>
          <Button
            variant="outline"
            className="w-full backdrop-blur-md"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
