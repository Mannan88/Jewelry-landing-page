import { useRef } from "react";
import { CardData } from "@/lib/cta-data";
const CTA = () => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const cards = CardData
  const totalLen = cards.length;

  return (
    <div className="h-dvh w-dvw bg-[var(--plain-gray)] flex">
      <div className="carousel-container relative flex-1 overflow-hidden text-center"
        style={{ perspective: "800px" }}>

        <h2
          style={{ fontFamily: "'FunnelDisplay', monospace" }}
          className=" xl:text-[10rem] lg:text-[8rem] md:text-[6rem] sm:text-[6rem] text-[4rem] sm:mt-8 md:mt-0 mt-12  text-[var(--plain-gold)] mx-auto"
        >
          Explore More.
        </h2>
        <div
          className="pitch-wrapper absolute inset-0 flex items-center justify-center
             sm:[transform:rotateX(8deg)_translateY(10px)]
             md:[transform:rotateX(12deg)_translateY(30px)]
             lg:[transform:rotateX(16deg)_translateY(60px)]"
          style={{ transformStyle: "preserve-3d" }}
        >

          <div
            ref={carouselRef}
            className="carousel-slider absolute inset-0 flex items-center justify-center animate-rotation  m-auto translate"
            style={{

              transformStyle: "preserve-3d",
              transform: "",
            }}
          >

            {cards.map((card, index) => {
              const rotation = index * (360 / totalLen);
              return (
                <div
                  key={card.id}
                  className="carousel-card cursor-pointer absolute w-100 h-160 rounded-xl overflow-hidden border-2 border-amber-300"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%)
                              rotateY(${rotation}deg)
                              translateZ(920px)
                            `,
                    transformStyle: "preserve-3d",
                  }}
                >

                  <img
                    src={card.imgUrl}
                    alt={card.name}
                    className="size-full object-cover brightness-90"
                  />

                </div>
              );
            })}
          </div>

        </div>

      </div>
      <div className="img-container absolute -translate-x-1/2 md:w-160 sm:w-130 w-110 bottom-0 shrink-0 left-1/2 ">
        <div className="bg-shadow -translate-x-1/2 bottom-0 left-1/2 bg-[var(--dark-gray)] blur-3xl
             md:h-120 md:w-110 sm:h-100 sm:w-90 h-90 w-80 absolute rounded-full" />
        <img src="https://res.cloudinary.com/dfcujyuvg/image/upload/v1771850956/Gemini_Generated_Image_m5gy1xm5gy1xm5gy_mv4chn.png" alt=""
          className=" hero-img object-cover shrink-0" />
      </div>
    </div>
  );
};

export default CTA;