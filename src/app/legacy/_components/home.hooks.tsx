import { api } from "~/trpc/react";

export const useToken = () => {
  return api.farverse.getToken.useSuspenseQuery();
};
