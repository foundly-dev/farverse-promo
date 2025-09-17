"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";

interface ChartDialogProps {
  children?: React.ReactNode;
  title?: string;
}

export function ChartDialog({
  children,
  title = "Chart View",
}: ChartDialogProps) {
  const [open, setOpen] = useState(false);

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
              src="https://dexscreener.com/base/0x8d74383e1FF239d74Db79339B626E37b60cb1692?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartTimeframesToolbar=0&loadChartSettings=0&chartTheme=dark&theme=dark&chartStyle=1&chartType=usd&interval=15"
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
