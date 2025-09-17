import { createAssetUrl } from "~/services/image.service";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const farverseRouter = createTRPCRouter({
  getToken: publicProcedure.query(async ({ ctx }) => {
    const price = 0.000012345;
    const tvl = 123456789;
    const priceChange = 5.23;

    return {
      name: "Farverse",
      symbol: "$FARVERSE",
      price,
      tvl,
      priceChange,
      icon: createAssetUrl("/logos/farverse_512.png"),
      address: "0x2EE6Ae6DC51715b286bD20c623573759F4A24b07",
    };
  }),
});
