import ButtonFp from "@/components/ButtonFp";
import ImageCard from "@/components/ImageCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
const FeaturedPieces = () => {
  const btnRefs = useRef<HTMLButtonElement[]>([]);
  useGSAP(() => {
    const grids = gsap.utils.toArray<HTMLElement>(".img-grid");

    gsap.set(grids, {
      opacity: 0,
      y: 20
    });
   gsap.from(".featured-bg",{
    scrollTrigger:{
      trigger:".featured-container",
      start:"top center",
      end:"+=100%",
      scrub:true,
    },
    scale:0.9,
    borderRadius:"40px"
   })
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".featured-container",
        start: "top top",
        end: "+=400%",
        pin: ".featured-pin",
        scrub: 0.8,
      }
    });
    grids.forEach((grid, i) => {

      tl.to(btnRefs.current[i], {backgroundImage: "linear-gradient(to left, transparent, var(--plain-gold))",duration: 0.8, ease: "power1.inOut"})
        .to(grid, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "<")

        .to({}, { duration: 0.6 })

        .to(btnRefs.current[i], { backgroundImage: "none", duration: 0.6 })
        .to(grid, { opacity: 0, y: -20, duration: 0.6, ease: "power2.in" }, "<")
    });

  });

  return (
    <section className="featured-container h-[500dvh] w-full relative">
      <div className="  featured-bg bg-(--plain-gray) size-full text-(--warm-white)">
        <div className="featured-pin size-full relative overflow-hidden">


          <div className=" py-20 px-12 text-5xl justify-between">
            <h2 className="text-8xl text-(--plain-gold)">Featured Pieces.</h2>
            <ButtonFp ref={(el) => { if (el) btnRefs.current[0] = el }} btntext="Rings" />
            <ButtonFp ref={(el) => { if (el) btnRefs.current[1] = el }} btntext="Earrings" />
            <ButtonFp ref={(el) => { if (el) btnRefs.current[2] = el }} btntext="Necklaces" />
            <ButtonFp ref={(el) => { if (el) btnRefs.current[3] = el }} btntext="Bracelets" />

          </div>

          <div className="">
            <div className="img-grid absolute top-0 right-0 grid grid-cols-2 grid-rows-2 h-dvh p-12 gap-6">
              <ImageCard url="images/ring1.avif"
                altText="Ring-Showcase-1"
                sizing="col-span-2 row-span-1 object-cover w-full h-full rounded-md" />
              <ImageCard url="images/ring2.avif"
                altText="Ring-Showcase-2"
                sizing="object-cover w-full h-full rounded-md" />
              <ImageCard url="images/ring3.avif"
                altText="Ring-Showcase-3"
                sizing="object-cover w-full h-full rounded-md" />
            </div>
            <div className="img-grid absolute top-0 right-0 grid grid-cols-2 grid-rows-2 h-dvh p-12 gap-6">
              <ImageCard url="images/earring1.avif"
                altText="earring-Showcase-1"
                sizing="col-span-2 row-span-1 object-cover w-full h-full rounded-md" />
              <ImageCard url="images/earring2.avif"
                altText="earring-Showcase-2"
                sizing="object-cover w-full h-full rounded-md" />
              <ImageCard url="images/earring3.avif"
                altText="earring-Showcase-3"
                sizing="object-cover w-full h-full rounded-md" />
            </div>
            <div className="img-grid absolute top-0 right-0 grid grid-cols-2 grid-rows-2 h-dvh p-12 gap-6">
              <ImageCard url="images/necklace1.avif"
                altText="necklace-Showcase-1"
                sizing="col-span-2 row-span-1 object-cover w-full h-full rounded-md" />
              <ImageCard url="images/necklace2.avif"
                altText="necklace-Showcase-2"
                sizing="object-cover w-full h-full rounded-md" />
              <ImageCard url="images/necklace3.avif"
                altText="necklace-Showcase-3"
                sizing="object-cover w-full h-full rounded-md" />
            </div>
            <div className="img-grid absolute top-0 right-0 grid grid-cols-2 grid-rows-2 h-dvh p-12 gap-6">
              <ImageCard url="images/bracelet1.avif"
                altText="bracelet-Showcase-1"
                sizing="col-span-2 row-span-1 object-cover w-full h-full rounded-md" />
              <ImageCard url="images/bracelet2.avif"
                altText="bracelet-Showcase-2"
                sizing="object-cover w-full h-full rounded-md" />
              <ImageCard url="images/bracelet3.avif"
                altText="bracelet-Showcase-3"
                sizing="object-cover w-full h-full rounded-md" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedPieces;
