import "~/styles/globals.css";

import { TRPCReactProvider } from "~/trpc/react";

import { Geist, Jersey_15 } from "next/font/google";
import { SetupFrame } from "~/components/farcaster/farcaster.frame";

const jersey15 = Jersey_15({
  subsets: ["latin"],
  variable: "--font-jersey-15",
  weight: ["400"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${geist.variable} ${jersey15.variable}`}>
      <body>
        <TRPCReactProvider>
          <SetupFrame />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
