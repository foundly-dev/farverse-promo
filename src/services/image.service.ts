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
