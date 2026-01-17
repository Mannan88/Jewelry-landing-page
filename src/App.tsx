import HeroSection from "./section/HeroSection";
import Loader from "./components/Loader";
import gsap from "gsap";
import { useState, useEffect } from "react";
import { ScrollTrigger, ScrollSmoother,SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import AboutSection from "./section/AboutSection";
import FeaturedPieces from "./section/FeaturedPieces";
import Philosophy from "./section/Philosophy-section";
import CTA from "./section/CTA";
import FeaturedSection from "./section/FeaturedSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother,SplitText);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 3,
      effects: true,
    });
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {loading ? (
          <Loader />
        ) : (
          <>
            <HeroSection />
            <AboutSection />
            {/* <FeaturedPieces/> */}
            <FeaturedSection/>
            <Philosophy/>
            <CTA/>
          </>
        )}
      </div>
    </div>
  );
}

export default App;