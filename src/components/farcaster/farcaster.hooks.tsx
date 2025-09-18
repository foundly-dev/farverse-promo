import sdk from "@farcaster/miniapp-sdk";
import { useQuery } from "@tanstack/react-query";

const isClient = typeof window !== "undefined" && !!sdk;

export const useFarcasterContext = () => {
  const query = useQuery({
    queryKey: ["farcaster-ctx", isClient],
    queryFn: async () => {
      const ctx = await sdk.context;
      return ctx ?? null;
    },
    retry: false,
  });

  return {
    ...query,
    user: query.data?.user,
  };
};

export const useIsMiniApp = () => {
  const ctx = useFarcasterContext();

  const query = useQuery({
    queryKey: ["is-in-mini-app", isClient, ctx.data?.client.clientFid],
    queryFn: async () => {
      const isFarcasterMiniApp = await sdk.isInMiniApp();
      const isCoinbaseMiniApp = !!ctx.data?.client.clientFid;
      const isMiniApp = isFarcasterMiniApp || isCoinbaseMiniApp;
      if (!isMiniApp) throw new Error("Only Mini App Supported");
      return isMiniApp;
    },
    retryDelay: 3000,
    retry: 5,
  });

  return [query.data, query] as const;
};
