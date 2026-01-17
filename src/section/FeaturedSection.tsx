import FpCard from "@/components/FpCard"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const FeaturedSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    const cards = gsap.utils.toArray<HTMLElement>(".fp-card")

    gsap.set(cards, { opacity: 0, y: 20, scale: 0.9 })
   gsap.fromTo(".featured-pin",
  { scale: 0.9, borderRadius: "40px" },
  {
    scale: 1,
    borderRadius: "0px",
    scrollTrigger: {
      trigger: ".featured-container",
      start: "top center",
      end: "+=100%",
      scrub: true,
    }
  }
)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".featured-container",
        start: "top top",
        end: "+=200%",
        scrub: 0.8,
        pin: ".featured-pin",
      }
    })

    tl.fromTo(
      cards,
      {
        opacity: 0,
        y: 20,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power1.inOut",
      }
    )
    tl.to({}, { duration: 0.4 })
  }, [])

  return (
    <section className="featured-container h-[300vh] relative">
      <div className="featured-pin bg-(--plain-gray) min-h-dvh p-4">
        <h2
          style={{ fontFamily: "'FunnelDisplay', monospace" }}
          className="text-8xl text-(--plain-gold) mx-8 mt-8 mb-12"
        >
          Featured Pieces.
        </h2>

        <div
          ref={containerRef}
          className="fp-cards-container flex h-[80dvh] justify-around items-baseline"
        >
          <FpCard name="ring" description="A radiant symbol of elegance." />
          <FpCard name="earring" description="Delicate yet striking luxury." />
          <FpCard name="necklace" description="An opulent cascade of brilliance." />
          <FpCard name="bracelet" description="Gracefully refined charm." />
        </div>
      </div>
    </section>
  )
}

export default FeaturedSection
