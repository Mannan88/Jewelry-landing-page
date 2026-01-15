import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LiquidEther from "@/components/LiquidEther";
import { useRef } from "react";

const HeroSection = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      { filter: "blur(20px)", opacity: 0 },
      { filter: "blur(0px)", opacity: 1, duration: 2, ease: "circ.inOut" }
    );

    gsap.fromTo(
      ".hero-img",
      { y: 20 },
      { y: 0, duration: 2, ease: "power1.inOut" }
    );

    gsap.fromTo(
      ".hero-bottom",
      { filter: "blur(20px)", opacity: 0 },
      { filter: "blur(0px)", opacity: 1, duration: 2, ease: "circ.inOut" }
    );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin:".hero-content"
      },
    });

    heroTl.to(".hero-container", {
      scale: 0.9,
      borderRadius: "20px",
      ease: "power1.inOut",
    });
  });

  return (

    <section className="hero-container relative overflow-hidden">
      <div className="hero-bg absolute inset-0 z-0">
        <LiquidEther
          colors={["#0c0c0c", "#f6f1e7", "#dddbd6"]}
          mouseForce={10}
          cursorSize={100}
          isBounce
          autoSpeed={0.2}
          autoIntensity={1.6}
        />
      </div>

      <div className="hero-content relative z-10 size-full">

        <div ref={textRef} className="hero-title">
          <h1>Elegance.</h1>
        </div>

        <div className="hero-bottom">
          <div className="hero-sub-title">
            <p>Accessories designed to Endure.</p>
          </div>

          <div className="hero-cta-div">
            <button className="hero-cta">Shop now</button>
            <img
              src="images/svg/up-right-arrow.svg"
              alt="shop-now"
              className="size-6"
            />
          </div>
        </div>

        <div className="hero-img-wrapper absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
          <img
            src="images/hero-model-img.png"
            alt="model-img"
            className="hero-img h-[80vh]"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
