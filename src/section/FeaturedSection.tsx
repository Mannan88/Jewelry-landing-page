import FpCard from "@/components/FpCard"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useMediaQuery } from "react-responsive"

gsap.registerPlugin(ScrollTrigger)

const FeaturedSection = () => {
  const cardsRef = useRef<HTMLDivElement>(null)
  const isSmall = useMediaQuery({ query: "(max-width: 640px)" })  
  const isMedium = useMediaQuery({ query: "(min-width: 641px) and (max-width: 1024px)" }) 
  const isLarge = useMediaQuery({ query: "(min-width: 1025px)" })  

  useGSAP(() => {
    if (!cardsRef.current) return

    const cards = gsap.utils.toArray<HTMLElement>(".fp-card")
    gsap.set(cards, { opacity: 0, y: 20, scale: 0.9 })

    if (isLarge) {
      gsap.fromTo(
        ".featured-pin",
        { scale: 0.9, borderRadius: "40px" },
        {
          scale: 1,
          borderRadius: "0px",
          scrollTrigger: {
            trigger: ".featured-container",
            start: "top center",
            end: "top top",
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
        { opacity: 0, y: 20, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.2,
          duration: 0.4,
          ease: "power1.inOut",
        }
      ).to({}, { duration: 0.8 })
    } 
    
    if(isMedium || isSmall) {
      cards.forEach(card => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            }
          }
        )
      })
    }
  }, [isSmall, isMedium, isLarge])

  return (
    <section
      className={`featured-container relative z-10 ${
        isLarge ? "h-[300vh]" : "h-auto"
      }`}
    >
      <div className={`featured-pin bg-[var(--plain-gray)] min-h-dvh p-4 z-10
        ${
        (isSmall || isMedium)? ((isSmall)? "h-[300vh]":"h-[160vh]") : "h-auto"
      }`}>
        <h2
          style={{ fontFamily: "'FunnelDisplay', monospace" }}
          className="text-6xl sm:text-7xl md:text-8xl text-[var(--plain-gold)] text-center mt-8 mb-12 lg:mb-0"
        >
          Featured Pieces.
        </h2>

        <div
          ref={cardsRef}
          className="fp-cards-container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:gap-6 gap-6 lg:h-[80dvh] place-items-center"
        >
          <FpCard  name="ring" description="A radiant symbol of elegance." />
          <FpCard  name="earring" description="Delicate yet striking luxury." />
          <FpCard  name="necklace" description="An opulent cascade of brilliance." />
          <FpCard  name="bracelet" description="Gracefully refined charm." />
        </div>
      </div>
    </section>
  )
}

export default FeaturedSection