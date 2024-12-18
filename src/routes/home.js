import React, { Suspense, useRef, useEffect, lazy } from "react";

const Navbar = lazy(() => import("../components/Navbar"));
const Slider = lazy(() => import("../components/Slider"));
const Company = lazy(() => import("../components/company"));
const OurServices = lazy(() => import("../components/services"));
const WhyUs = lazy(() => import("../components/whyUs"));
const Footer = lazy(() => import("../components/footer"));

function Home() {
  const footerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Slider />
      <Company />
      <OurServices />
      <WhyUs footerRef={footerRef} /> {/* Pass footerRef to WhyUs */}
      <Footer ref={footerRef} /> {/* Attach ref to Footer */}
    </Suspense>
  );
}

export default Home;
