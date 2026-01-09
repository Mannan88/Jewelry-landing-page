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
      tl.to(text, {opacity: 1, y: 0,duration: 0.6,ease: "power2.out" })
        .to(leftImgs[i], {opacity: 1, y: 0, duration: 0.6,  ease: "power2.out"}, "<")
        .to(rightImgs[i], {
          opacity: 1,
          y: 0,
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
    <section className="about-container ">
      <div className="scroll-section">

        {/* CENTER TEXT STAGE */}
        <div className="center-stage">
          <h2 className="static-title">We offer</h2>

          <div className="dynamic-text">
            <p className="scroll-text">Refined Purity.</p>
            <p className="scroll-text">Hand-finish.</p>
            <p className="scroll-text">Quality Materials.</p>
          </div>
        </div>

        {/* LEFT IMAGES */}
        <div className="side-stage left-stage">
          <img src="images/purity1.avif" className="scroll-img" />
          <img src="images/hand-finish1.avif" className="scroll-img" />
          <img src="images/quality1.avif" className="scroll-img brightness-75" />
        </div>

        {/* RIGHT IMAGES */}
        <div className="side-stage right-stage">
          <img src="images/purity2.avif" className="scroll-img" />
          <img src="images/hand-finish2.avif" className="scroll-img" />
          <img src="images/quality2.avif" className="scroll-img brightness-75" />
        </div>

      </div>
    </section>
  )
}

export default AboutSection