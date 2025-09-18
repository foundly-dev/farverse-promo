import { createAssetUrl } from "~/services/image.service";
import { publicProcedure } from "../../trpc";

export const getToken = publicProcedure.query(async () => {
  const address = "0x2EE6Ae6DC51715b286bD20c623573759F4A24b07";
  const poolAddress = "0x8d74383e1FF239d74Db79339B626E37b60cb1692";
  const token = `eip155:8453/erc20:${address}`;

  const priceData = await getPrice("base", address);

  return {
    name: "Farverse",
    symbol: "$FARVERSE",
    price: priceData.price,
    marketCap: priceData.marketCap,
    volume: priceData.volume,
    priceChange: priceData.priceChange,
    reserve: priceData.reserve,
    icon: createAssetUrl("/logos/farverse_512.png"),
    address,
    poolAddress,
    token,
  };
});

interface TokenPriceResponse {
  data: {
    id: string;
    type: string;
    attributes: {
      token_prices: Record<string, string>;
      market_cap_usd: Record<string, string>;
      h24_volume_usd: Record<string, string>;
      h24_price_change_percentage: Record<string, string>;
      total_reserve_in_usd: Record<string, string>;
    };
  };
}

const getPrice = async (
  network: string,
  address: string,
): Promise<{
  price: number;
  marketCap: number;
  volume: number;
  priceChange: number;
  reserve: number;
}> => {
  const query = new URLSearchParams({
    include_market_cap: "true",
    mcap_fdv_fallback: "true",
    include_24hr_vol: "true",
    include_24hr_price_change: "true",
    include_total_reserve_in_usd: "true",
  });

  const response = await fetch(
    `https://api.geckoterminal.com/api/v2/simple/networks/${network}/token_price/${address}?${query.toString()}`,
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch token price: ${response.status} ${response.statusText}`,
    );
  }

  const data: TokenPriceResponse = await response.json();

  // Convert address to lowercase to match API response keys
  const addressKey = address.toLowerCase();

  const getValue = (obj: Record<string, string>, key: string): number => {
    const value = obj[key] ?? "0";
    return parseFloat(value);
  };

  return {
    price: getValue(data.data.attributes.token_prices, addressKey),
    marketCap: getValue(data.data.attributes.market_cap_usd, addressKey),
    volume: getValue(data.data.attributes.h24_volume_usd, addressKey),
    priceChange: getValue(
      data.data.attributes.h24_price_change_percentage,
      addressKey,
    ),
    reserve: getValue(data.data.attributes.total_reserve_in_usd, addressKey),
  };
};
