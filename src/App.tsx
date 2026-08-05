import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CodePreview } from "@/components/marketing/CodePreview";
import { CTASection } from "@/components/marketing/CTASection";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { Hero } from "@/components/marketing/Hero";
import { ProvidersSection } from "@/components/marketing/ProvidersSection";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function App() {
  const ref = useScrollReveal();

  return (
    <div id="top" ref={ref} className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <CodePreview />
        <ProvidersSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
