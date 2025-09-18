"use client";

import { sdk } from "@farcaster/miniapp-sdk";
import { useEffect, useState } from "react";

export const SetupFrame = () => {
  const [isFrameSetup, setIsFrameSetup] = useState(false);

  useEffect(() => {
    if (!isFrameSetup) {
      setIsFrameSetup(true);
      void sdk.actions.ready({ disableNativeGestures: false }).then(() => {
        void sdk.wallet.ethProvider;
      });
    }
  }, [isFrameSetup]);

  return null;
};
