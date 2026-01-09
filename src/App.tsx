import HeroSection from "./section/HeroSection";
import Loader from "./components/Loader";
import gsap from "gsap";
import { useState, useEffect } from "react";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import { useGSAP } from "@gsap/react";
import AboutSection from "./section/AboutSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
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
          </>
        )}
      </div>
    </div>
  );
}

export default App;