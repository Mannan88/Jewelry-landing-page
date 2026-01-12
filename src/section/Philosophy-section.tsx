import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Philosophy = () => {
  useGSAP(() => {
    const philosophyTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".philosophy-container",
        start: "top top",
        end: "+=400%",
        scrub: 0.8,
        markers: true,
        pin: ".philosophy-container",
      },
    });

    philosophyTl.fromTo(
      ".ph-text",
      {
        clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
        filter: "blur(2px)",
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        filter: "blur(0px)",
        ease: "circ.inOut",
      }
    );

    const phrases = gsap.utils.toArray<HTMLElement>(".ph-scroll-text");
    gsap.set(phrases,{
        opacity:0,
        y:20
    })
    phrases.forEach((phrase) => {
      philosophyTl.to(
        phrase,
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
      .to({},{duration:0.2})
      .to(phrase, { opacity: 0, y: -20, duration: 1, ease: "power2.in" });
    });
  });

  return (
    <section className="philosophy-container">
      <div className="philosophy-bg">
        <div className="ph-text">
          <h2 className="ph-reveal-text">It isn't just an accessory.</h2>
          <div className="ph-dynamic-text ">
            <h2 className="ph-scroll-text">Its Expression.</h2>
            <h2 className="ph-scroll-text">Its Identity.</h2>
            <h2 className="ph-scroll-text">Its Confidence.</h2>
            <h2 className="ph-scroll-text">Its You.</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;