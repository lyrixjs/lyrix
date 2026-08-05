import type { CSSProperties } from "react";
import { features } from "@/data/features";
import { FeatureCard } from "./FeatureCard";
import { SectionHeading } from "./SectionHeading";

export function FeatureGrid() {
  return (
    <section id="features" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to ship lyrics"
          description="A focused, type-safe toolkit that handles metadata, providers, syncing, translation, and caching, so you can build the player."
          className="mx-auto mb-14 scroll-reveal"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className="scroll-reveal"
              style={{ transitionDelay: `${i * 70}ms` } as CSSProperties}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
