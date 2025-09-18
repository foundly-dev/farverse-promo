import type { Chain } from "thirdweb";

import { resolveChain, type RawChain } from "./chains.service";

const FARCASTER_URL = "https://farcaster.xyz";

export const createFollowersUrl = (username?: string) => {
  if (!username) return FARCASTER_URL;
  return `${FARCASTER_URL}/${username}/followers`;
};

export const createFollowingUrl = (username?: string) => {
  if (!username) return FARCASTER_URL;
  return `${FARCASTER_URL}/${username}/following`;
};

export const channelUrl = () => {
  return "https://farcaster.xyz/~/channel/farverse";
};

export const createExplorerTxUrl = ({
  chain = "base",
  txHash,
}: {
  chain: RawChain;
  txHash: string;
}) => {
  const { blockExplorers } = resolveChain(chain);
  return `${blockExplorers?.[0]?.url}/tx/${txHash}`;
};

export const createExplorerAddressUrl = ({
  chain = "base",
  address,
}: {
  chain?: Chain | string | number;
  address?: string;
}) => {
  const { blockExplorers } = resolveChain(chain);
  return `${blockExplorers?.[0]?.url}/address/${address}`;
};

interface CreateCoinLinkProps {
  address?: string;
  chain?: Chain | string | number;
}

export const createUniswapCoinLink = ({
  address,
  chain = "base",
}: CreateCoinLinkProps) => {
  const { name } = resolveChain(chain);
  return `https://app.uniswap.org/explore/tokens/${name?.toLowerCase()}/${address}`;
};

export const createZoraCoinLink = ({
  address,
  chain = "base",
}: CreateCoinLinkProps) => {
  const { name } = resolveChain(chain);
  return `https://zora.co/coin/${name?.toLowerCase()}:${address}`;
};

export const createDexScreenerCoinLink = ({
  address,
  chain = "base",
}: CreateCoinLinkProps) => {
  const { name } = resolveChain(chain);
  return `https://dexscreener.com/${name?.toLowerCase()}/${address}`;
};

export const createClankerCoinLink = ({ address }: CreateCoinLinkProps) => {
  return `https://www.clanker.world/clanker/${address}`;
};

export const createGeckoTerminalEmbedLink = ({
  address,
  chain = "base",
}: {
  address?: string;
  chain?: Chain | string | number;
}) => {
  const { name } = resolveChain(chain);
  return `https://dexscreener.com/${name?.toLowerCase()}/${address}?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartTimeframesToolbar=0&loadChartSettings=0&chartTheme=dark&theme=dark&chartStyle=1&chartType=usd&interval=15`;
};

export const createDexScreenerEmbedLink = ({
  address,
  chain = "base",
}: {
  address?: string | null;
  chain?: Chain | string | number;
}) => {
  const { name } = resolveChain(chain);
  return `https://dexscreener.com/${name?.toLowerCase()}/${address}?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartTimeframesToolbar=0&loadChartSettings=0&chartTheme=light&theme=light&chartStyle=0&chartType=usd&interval=15`;
};

export const createMagicEdenLink = ({
  chain,
  address,
  tokenId,
}: {
  chain: RawChain;
  address: string;
  tokenId: string | number;
}) => {
  const { name } = resolveChain(chain);

  return `https://magiceden.io/item-details/${name?.toLowerCase()}/${address}/${tokenId}`;
};

export const createOpenSeaLink = ({
  chain,
  address,
  tokenId,
}: {
  chain: RawChain;
  address: string;
  tokenId: string | number;
}) => {
  const { name } = resolveChain(chain);

  return `https://opensea.io/assets/${name?.toLowerCase()}/${address}/${tokenId}`;
};
