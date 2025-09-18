const DIRECTORY = "farverse";

export const createAssetUrl = (url: string) => {
  const _url = new URL("https://assets.foundly.dev");
  if (url.startsWith(`/${DIRECTORY}`) || url.startsWith(DIRECTORY)) {
    _url.pathname = url.startsWith("/") ? url.slice(1) : url;
    return _url.toString();
  }

  _url.pathname = `/${DIRECTORY}/${url.startsWith("/") ? url.slice(1) : url}`;
  return _url.toString();
};

export const icons = {
  uniswap: createAssetUrl("/icons/uniswap.png"),
  clanker: createAssetUrl("/icons/clanker.png"),
  dexscreener: createAssetUrl("/icons/dexscreener.webp"),
  farcaster: createAssetUrl("/icons/farcaster_white.png"),
  magicEden: createAssetUrl("/icons/magiceden.jpg"),
  basescan: createAssetUrl("/icons/basescan.png"),
  zora: createAssetUrl("/icons/zora.png"),
};
