import { createAssetUrl } from "~/services/image.service";

export const HomeBanner = () => {
  return (
    <div className="flex h-full w-full max-w-screen-sm flex-col items-center px-8 py-4">
      <img
        src={createAssetUrl("/text_logo.png")}
        alt="Farverse Logo"
        className="h-full w-full object-contain"
      />

      <span className="font-jersey text-center text-xl uppercase">
        An Onchain Gaming Universe
      </span>
    </div>
  );
};
