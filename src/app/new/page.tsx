import { createMetadata } from "~/lib/metadata";
import type { Metadata } from "next";
import { HomeHero } from "./_components/home.hero";

export const dynamic = "force-dynamic";

export const metadata: Metadata = createMetadata({});

export default function Home() {
  return (
    <main className="relative flex h-screen flex-col overflow-hidden">
      <HomeHero />
    </main>
  );
}
