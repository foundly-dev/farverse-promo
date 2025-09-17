import { env } from "~/env";

export const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  if (env.VERCEL_ENV === "production") {
    return `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (env.VERCEL_URL) {
    return `https://${env.VERCEL_URL}`;
  }

  return `http://localhost:3000`;
};

export const createLiveUrl = (url: string) => {
  const _url = url.startsWith("/") ? url.slice(1) : url;

  return `https://farverse.games/${_url}`;
};

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

export const farverseLogoImage = (
  size: "512" | "256" | "128" | "64" | "transparent" | "dark" = "64",
  type: "png" = "png",
) => {
  return `https://assets.foundly.dev/farverse/logos/farverse_${size}.${type}`;
};
