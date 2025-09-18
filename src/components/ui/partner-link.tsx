import { type PartnerLink } from "~/data/partners";
import { Button } from "./button";
import { Globe, Landmark, LayoutGrid } from "lucide-react";
import { icons } from "~/services/image.service";
import { useIsMiniApp } from "~/components/farcaster/farcaster.hooks";
import sdk from "@farcaster/miniapp-sdk";

interface PartnerLinkProps {
  link: PartnerLink;
}

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const getIcon = (type: PartnerLink["type"]) => {
  switch (type) {
    case "farcaster":
    case "channel":
      return <img src={icons.farcaster} alt="Farcaster" className="size-3" />;
    case "x":
      return <XIcon />;
    case "website":
      return <Globe />;
    case "empire":
      return <Landmark />;
    case "miniapp":
      return <LayoutGrid />;
    default:
      return <Globe />;
  }
};

const getTypeLabel = (type: PartnerLink["type"]) => {
  switch (type) {
    case "farcaster":
      return "Farcaster";
    case "channel":
      return "Channel";
    case "x":
      return "X";
    case "website":
      return "Website";
    case "miniapp":
      return "Mini App";
    case "empire":
      return "Empire";
    default:
      return "link";
  }
};

export const PartnerLinkComponent = ({ link }: PartnerLinkProps) => {
  const [isMiniApp] = useIsMiniApp();
  const icon = getIcon(link.type);
  const typeLabel = getTypeLabel(link.type);

  const handleClick = () => {
    if (isMiniApp) {
      switch (link.type) {
        case "miniapp":
          // Use the actual app URL if available, otherwise fall back to the discovery URL
          const appUrl = link.miniappUrl ?? link.url;
          void sdk.actions.openMiniApp({ url: appUrl });
          break;
        case "farcaster":
          // Use viewProfile if FID is available, otherwise use openUrl
          if (link.fid) {
            void sdk.actions.viewProfile({ fid: link.fid });
          } else {
            void sdk.actions.openUrl(link.url);
          }
          break;
        case "channel":
          // Use openUrl for channels
          void sdk.actions.openUrl(link.url);
          break;
        case "empire":
          // Empire Builder is a mini app, use openMiniApp
          void sdk.actions.openMiniApp({ url: link.url });
          break;
        default:
          // For other types, use openUrl
          void sdk.actions.openUrl(link.url);
          break;
      }
    } else {
      void window.open(link.url, "_blank");
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="relative w-full justify-start gap-2"
      onClick={handleClick}
    >
      {link.icon ? (
        <img src={link.icon} alt={link.type} className="size-5 rounded" />
      ) : (
        icon
      )}
      <span className="truncate">{link.label}</span>
      <span className="text-muted-foreground absolute top-1 right-1 font-mono text-[8px]">
        {typeLabel}
      </span>
    </Button>
  );
};
