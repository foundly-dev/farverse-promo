import { createAssetUrl } from "~/services/image.service";

export const HomeBanner = () => {
  return (
    <div className="flex h-full w-full max-w-screen-sm flex-col items-center px-8 py-4 md:pt-24">
      <img
        src={createAssetUrl("/text_logo.png")}
        alt="Farverse Logo"
        className="h-full w-full object-contain"
      />

      <span className="text-center text-sm font-bold uppercase md:text-3xl">
        An Onchain Gaming Universe
      </span>
    </div>
  );
};
