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
        end: "+=100%",
        scrub: 0.8,
        pin: true,
        pinSpacing: true,
        onScrubComplete:()=>{
          wordTimeline.play()
        }
      },
    });

    philosophyTl
      .fromTo(
        ".ph-text",
        {
          clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
          filter: "blur(2px)",
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          filter: "blur(0px)",
          ease: "circ.inOut",
          duration: 2,
        }
      )
      .to({}, { duration: 0.2 });

    const phrases = gsap.utils.toArray<HTMLElement>(".ph-scroll-text");
    const progressBars = gsap.utils.toArray<HTMLElement>(".progress-segment");
    
    gsap.set(phrases, {
      opacity: 0,
      y: 20,
      position: "absolute",
    });

    const wordTimeline = gsap.timeline({
      repeat: -1,
     paused:true
    });

    phrases.forEach((phrase, index) => {
      wordTimeline
        .to(phrase, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        })
        .to(
          progressBars[index],
          {
            scaleX: 1,
            duration: 1.5,
            ease: "none",
          },
          "<"
        )
        .to({}, { duration: 0.5 })
        .to(phrase, {
          opacity: 0,
          y: -20,
          duration: 0.5,
          ease: "power2.in",
        })
        .set(progressBars[index], { scaleX: 0 });
    });
  });

  const words = ["Expression", "Identity", "Confidence", "You"];

  return (
    <section className="philosophy-container relative w-screen h-dvh bg-[var(--dark-gray)] overflow-hidden text-[var(--warm-white)]">
     
       <video
          src="video/ph-bg-vid.mp4"
          className="w-full h-full absolute inset-0 object-cover brightness-75 blur-md"
          autoPlay
          playsInline
          muted
          loop
        />
      <div
        style={{ fontFamily: "'FunnelDisplay', monospace" }}
        className="philosophy-pin relative z-10"
      >
        <div className="philosophy-bg h-dvh w-full">
          <div className="ph-text absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 justify-center w-[30em] h-[4em] flex gap-4 text-4xl leading-[9vw] items-center">
            <h2 className="ph-reveal-text">It isn't just an accessory.</h2>

            <div className="ph-dynamic-text relative h-[4em] w-[6em] flex justify-start items-center">
              {words.map((word, index) => (
                <h2 key={index} className="ph-scroll-text">
                  Its {word}.
                </h2>
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 w-64">
            {words.map((_, index) => (
              <div
                key={index}
                className="h-1 flex-1 bg-[var(--warm-white)]/20 rounded-full overflow-hidden"
              >
                <div
                  className="progress-segment h-full bg-[var(--plain-gold)] origin-left rounded-full"
                  style={{ transform: "scaleX(0)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;