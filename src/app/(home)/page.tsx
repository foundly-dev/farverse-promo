import { createMetadata } from "~/lib/metadata";
import type { Metadata } from "next";
import { HomeBackground } from "../_components/home.background";
import { HomeBanner } from "../_components/home.banner";
import { HomeToken } from "../_components/home.token";
import { cn } from "~/lib/utils";
import { api, HydrateClient } from "~/trpc/server";
import { Footer } from "../_components/home.footer";
import { Apps } from "../_components/home.apps";
import { Partners } from "../_components/home.partners";

export const dynamic = "force-dynamic";

export const metadata: Metadata = createMetadata({});

export default async function Home() {
  await api.farverse.getToken.prefetch();

  return (
    <main
      className={cn("relative flex min-h-screen flex-col items-center p-4")}
    >
      <HydrateClient>
        <HomeBackground />
        <div className="flex max-w-sm flex-col items-center">
          {/* <HomeBanner /> */}
          {/* <HomeToken /> */}
          <Apps />
          <Partners />
          <Footer />
        </div>
      </HydrateClient>
    </main>
  );
}
