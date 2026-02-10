import { createAssetUrl } from "~/services/image.service";
import { publicProcedure } from "../../trpc";

export const getToken = publicProcedure.query(async () => {
  const address = "0xdFE23E2c07f8edF23ebA9c9a45E23303417C6B07";
  const poolAddress =
    "0x313a74e19d6572b5a911c3ece412228235f39ce21f57c7cea89fc01951642401";
  const token = `eip155:8453/erc20:${address}`;

  const priceData = await getPrice("base", address).catch(() => ({
    price: 0,
    marketCap: 0,
    volume: 0,
    priceChange: 0,
    reserve: 0,
  }));

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
    { next: { revalidate: 300 } },
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
