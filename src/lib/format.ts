import { formatNumber, shortenLargeNumber, toEther } from "thirdweb/utils";

export const formatPrice = (price?: string | number) => {
  return Number(price ?? 0).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const formatSmallPrice = (price?: string | number, totalLength = 8) => {
  const num = Number(price ?? 0);
  if (num >= 0.01) {
    // For larger prices, use normal formatting
    return num.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  // Convert to string and split at the decimal
  const [whole, decimal = ""] = num.toFixed(10).split(".");
  // Count leading zeros after the decimal
  const match = /^(0+)/.exec(decimal);
  const zeroCount = match ? match[1]?.length : 0;

  // Subscript numbers 0-9
  const subscripts = "₀₁₂₃₄₅₆₇₈₉";
  const subscript =
    zeroCount && zeroCount > 0
      ? Array.from(String(zeroCount))
          .map((d) => subscripts[+d])
          .join("")
      : "";

  // Remove leading zeros for the rest of the decimal
  const rest = decimal.slice(zeroCount);

  // Remove trailing zeros for display
  const trimmedRest = rest.replace(/0+$/, "");
  const str = `$${whole}.0${subscript}${trimmedRest}`.slice(0, totalLength);

  return str;
};

export const formatBigIntToEtherString = (amount?: bigint) => {
  if (!amount) return "0";
  return formatNumber(Number(toEther(amount)), 0).toLocaleString("en-US", {});
};

export const formatMarketCap = (marketCap?: string | number) => {
  const num = Number(marketCap ?? 0);

  return `$${shortenLargeNumber(num)} MC`;
};
