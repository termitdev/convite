import Layout from "@/components/layout";
import Features from "@/components/sections/home/features";
import Hero from "@/components/sections/home/hero";
import SEO from "@/components/seo";
import { appConfig } from "@/utils/app-config";
import { lazy, Suspense, useRef } from "react";

// Lazy load below-the-fold components for code splitting
const Blog = lazy(() => import("@/components/sections/home/blog"));
const BusinessAccount = lazy(
  () => import("@/components/sections/home/business-account")
);
const CoreFeatures = lazy(
  () => import("@/components/sections/home/core-features")
);
const Integrations = lazy(
  () => import("@/components/sections/home/integrations")
);
const MobileApp = lazy(
  () => import("@/components/sections/home/mobile-app")
);
const SecurityCompliance = lazy(
  () => import("@/components/sections/home/security-compliance")
);
const Testimonials = lazy(
  () => import("@/components/sections/home/testimonials")
);

const Home = () => {
  const heroRef = useRef<HTMLElement>(null);

  const metaTitle = "Um convite Literare Books para autores da casa";

  const metaDescription =
    "Você já publicou com a Literare Books. A porta continua aberta para escrever um novo capítulo, quando fizer sentido para você.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": metaTitle,
    "description": metaDescription,
    "url": appConfig.url,
    "publisher": {
      "@type": "Organization",
      "name": "Literare Books International"
    }
  };

  return (
    <>
      <SEO
        title={metaTitle}
        description={metaDescription}
        canonicalUrl="/"
        ogType="website"
        jsonLd={jsonLd}
      />

      <Layout>
        <Hero heroRef={heroRef} />

        <Features heroRef={heroRef} />

        <Suspense fallback={null}>
          <CoreFeatures />
        </Suspense>

        <Suspense fallback={null}>
          <MobileApp />
        </Suspense>

        <Suspense fallback={null}>
          <BusinessAccount />
        </Suspense>

        <Suspense fallback={null}>
          <Integrations />
        </Suspense>

        <Suspense fallback={null}>
          <SecurityCompliance />
        </Suspense>

        <Suspense fallback={null}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={null}>
          <Blog />
        </Suspense>
      </Layout>
    </>
  );
};

export default Home;