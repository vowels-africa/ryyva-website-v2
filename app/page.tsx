import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WhatWeDo from "@/components/WhatWeDo";
import Platform from "@/components/Platform";
import Flint from "@/components/Flint";
import Work from "@/components/Work";
import WhyRyyva from "@/components/WhyRyyva";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <Problem />

      <WhatWeDo />

      <Platform />

      <Flint />

      <Work />

      <WhyRyyva />

      <CTA />

      <Contact />

      <Footer />
    </main>
  );
}