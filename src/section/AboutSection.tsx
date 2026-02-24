import { useGSAP } from "@gsap/react";
import gsap from "gsap"

const AboutSection = () => {

  useGSAP(() => {
    const texts = gsap.utils.toArray<HTMLElement>(".scroll-text");
    const leftImgs = gsap.utils.toArray<HTMLElement>(".left-stage .scroll-img");
    const rightImgs = gsap.utils.toArray<HTMLElement>(".right-stage .scroll-img");

    gsap.set([...texts, ...leftImgs, ...rightImgs], {
      opacity: 0,
      y: 10
    });
    gsap.set([...leftImgs], {
      x: -12
    })
    gsap.set([...rightImgs], {
      x: 12
    })
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-container",
        start: "top top",
        end: "+=300%",
        pin: ".scroll-section",
        scrub: 0.8, // smoother than true
      }
    });
    texts.forEach((text, i) => {
      tl.to(text, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
        .to(leftImgs[i], { opacity: 1, y: 0, x: 0, duration: 0.6, ease: "power2.out" }, "<")
        .to(rightImgs[i], {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.6,
          ease: "power2.out"
        }, "<")

        .to({}, { duration: 0.4 })

        .to(text, {
          opacity: 0,
          y: -8,
          duration: 0.4,
          ease: "power2.in"
        })
        .to(leftImgs[i], {
          opacity: 0,
          y: -8,
          duration: 0.4,
          ease: "power2.in"
        }, "<")
        .to(rightImgs[i], {
          opacity: 0,
          y: -8,
          duration: 0.4,
          ease: "power2.in"
        }, "<");
    });

  });


  return (
    <section className="about-container h-[400dvh] relative">
      <div className="scroll-section relative h-screen w-full bg-(--cool-black)">

        {/* CENTER TEXT STAGE */}
        <div className="center-stage absolute inset-0 md:mt-0 mt-6 flex flex-col items-center lg:justify-center text-center pointer-events-none z-100">
          <h2
            className="static-title md:text-[5em] text-[3em]  tracking-wide text-[var(--plain-gold)] bg-(--cool-black) px-4 rounded-lg"
            style={{ fontFamily: "'FunnelDisplay',monospace" }}
          >
            We offer.
          </h2>

          <div
            style={{ fontFamily: "'Tangerine', cursive" }}
            className="dynamic-text relative h-[4em] w-[20em] flex items-center justify-center"
          >
            <p className="scroll-text text-[var(--warm-white)] mt-2 absolute text-[4em] leading-none whitespace-nowrap opacity-0">
              Refined Purity.
            </p>
            <p className="scroll-text text-[var(--warm-white)] mt-2 absolute text-[4em] leading-none whitespace-nowrap opacity-0">
              Hand-finish.
            </p>
            <p className="scroll-text text-[var(--warm-white)] mt-2 absolute text-[4em] leading-none whitespace-nowrap opacity-0">
              Quality Materials.
            </p>
          </div>
        </div>

        {/* IMAGE CONTAINER */}
        <div className="about-img-container relative h-dvh mt-8 mx-auto w-full flex justify-around">

          {/* LEFT IMAGES */}
          <div className="side-stage lg:w-[28em] lg:h-[40em] w-[19em] h-[30em] left-stage absolute lg:left-8 sm:left-10 lg:top-8 bottom-8
          left-1/2 -translate-x-1/2 sm:translate-x-0">
            <img src="images/purity1.avif" className="scroll-img absolute h-full w-full object-cover opacity-0 rounded-xl" />
            <img src="images/hand-finish1.avif" className="scroll-img absolute h-full w-full object-cover opacity-0 rounded-xl" />
            <img src="images/quality1.avif" className="scroll-img absolute h-full w-full object-cover opacity-0 rounded-xl" />
          </div>

          {/* RIGHT IMAGES */}
          <div className="side-stage lg:w-[28em] lg:h-[40em] w-[19em] h-[30em] right-stage absolute lg:right-8 sm:right-10  lg:top-8 bottom-8 sm:opacity-100 opacity-0">
            <img src="images/purity2.avif" className="scroll-img absolute h-full w-full object-cover opacity-0 rounded-xl" />
            <img src="images/hand-finish2.avif" className="scroll-img absolute h-full w-full object-cover opacity-0 rounded-xl" />
            <img src="images/quality2.avif" className="scroll-img brightness-75 absolute h-full w-full object-cover opacity-0 rounded-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection