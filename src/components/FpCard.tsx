type fpCardProps = {
  name: string
  description: string
}

import gsap from "gsap"
import { useRef, useEffect } from "react"

const FpCard: React.FC<fpCardProps> = ({ name, description }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    if (!cardRef.current) return

    timelineRef.current = gsap.timeline({ paused: true })
      .to(cardRef.current, {
        clipPath: "polygon(0% 80%, 100% 24%, 100% 24%, 0% 80%)",
        duration: 0.6
      })
      .to(cardRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 0.3
      })

    return () => {
      timelineRef.current?.kill()
    }
  }, [])

  const handleEnter = () => timelineRef.current?.play()
  const handleLeave = () => timelineRef.current?.reverse()

  return (
    <div className="fp-card relative flex-wrap max-w-[20em] rounded-md bg-(--cool-black)">
      <div
        ref={cardRef}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
        className="fp-img-container relative object-cover max-w-[18em] h-[18em] z-10 p-2 bg-[#01010160]"
      >
        <img
          src={`images/${name}1.avif`}
          alt={`${name}-showcase`}
          className=" w-full h-full object-cover  rounded-md"
        />
      </div>
      <img
        src={`images/${name}2.avif`}
        alt={`${name}-showcase`}
        className="main-card-img object-cover max-w-[18em] h-[18em] absolute inset-0 z-0 rounded-md"
      />
      <div className="fp-card-text px-4 py-6 text-[var(--warm-white)] whitespace-normal">
        <h2
          style={{ fontFamily: "'FunnelDisplay',monospace" }}
          className="text-5xl capitalize my-3"
        >
          {name}s
        </h2>
        <p className="fp-card-description">{description}</p>
      </div>
    </div>
  )
}

export default FpCard