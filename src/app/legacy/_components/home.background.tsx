import { createAssetUrl } from "~/services/image.service";

export const HomeBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1]">
      <img
        src={createAssetUrl("/fv_bg.png")}
        alt="Farverse Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-violet-950/80" />
    </div>
  );
};
