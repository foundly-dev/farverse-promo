import { createMetadata } from "~/lib/metadata";
import type { Metadata } from "next";
import { api, HydrateClient } from "~/trpc/server";
import { Lander } from "./_components/lander";

export const dynamic = "force-dynamic";

export const metadata: Metadata = createMetadata({});

export default async function LanderPage() {
  await api.farverse.getToken.prefetch();

  return (
    <HydrateClient>
      <Lander />
    </HydrateClient>
  );
}
