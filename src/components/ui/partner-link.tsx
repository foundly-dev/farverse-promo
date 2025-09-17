import { type PartnerLink } from "~/data/partners";
import { Button } from "./button";

interface PartnerLinkProps {
  link: PartnerLink;
}

// Icon components for different link types
const FarcasterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const ChannelIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const WebsiteIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
  </svg>
);

const MiniappIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
  </svg>
);

const getIcon = (type: PartnerLink["type"]) => {
  switch (type) {
    case "farcaster":
      return <FarcasterIcon />;
    case "channel":
      return <ChannelIcon />;
    case "x":
      return <XIcon />;
    case "website":
      return <WebsiteIcon />;
    case "miniapp":
      return <MiniappIcon />;
    default:
      return <WebsiteIcon />;
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
    default:
      return "link";
  }
};

export const PartnerLinkComponent = ({ link }: PartnerLinkProps) => {
  const icon = getIcon(link.type);
  const typeLabel = getTypeLabel(link.type);

  return (
    <Button
      variant="outline"
      size="sm"
      className="relative w-full justify-start gap-2"
      asChild
    >
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        {link.icon ? (
          <img src={link.icon} alt={link.type} className="size-5" />
        ) : (
          icon
        )}
        <span className="truncate">{link.label}</span>
        <span className="text-muted-foreground absolute top-1 right-1 font-mono text-[8px]">
          {typeLabel}
        </span>
      </a>
    </Button>
  );
};
