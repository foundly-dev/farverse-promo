import {
  base as baseThirdweb,
  baseSepolia as baseSepoliaThirdweb,
  type Chain as ThirdwebChain,
} from "thirdweb/chains";

export type RawChain = ThirdwebChain | string | number;

export const resolveChain = (rawChain?: RawChain) => {
  if (!rawChain) throw new Error("Chain not found");

  if (typeof rawChain === "string" || typeof rawChain === "number") {
    const chain = rawChain.toString();

    if (chain === "base" || chain === "8453") return baseThirdweb;
    if (chain === "base-sepolia" || chain === "84532")
      return baseSepoliaThirdweb;

    throw new Error(`Chain ${chain} not found`);
  }

  return rawChain;
};
