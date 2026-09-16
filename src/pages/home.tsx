import Layout from "@/components/layout";
import Features from "@/components/sections/home/features";
import Hero from "@/components/sections/home/hero";
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

  return (
    <>
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