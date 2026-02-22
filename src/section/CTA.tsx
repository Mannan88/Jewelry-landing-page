import { useRef } from "react";
const CTA = () => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const cards = [
    { id: 1, name: "rings", imgUrl: "images/cta_images/cta1.avif" },
    { id: 2, name: "rings", imgUrl: "images/cta_images/cta2.avif" },
    { id: 3, name: "rings", imgUrl: "images/cta_images/cta3.avif" },
    { id: 4, name: "rings", imgUrl: "images/cta_images/cta4.avif" },
    { id: 5, name: "rings", imgUrl: "images/cta_images/cta5.avif" },
    { id: 6, name: "rings", imgUrl: "images/cta_images/cta6.avif" },
    { id: 7, name: "rings", imgUrl: "images/cta_images/cta7.avif" },
    { id: 8, name: "rings", imgUrl: "images/cta_images/cta7.avif" },
    { id: 9, name: "rings", imgUrl: "images/cta_images/cta7.avif" },
    { id: 10, name: "rings", imgUrl: "images/cta_images/cta7.avif" },
  ];

  const totalLen = cards.length;

  return (
    <div className="h-dvh w-dvw bg-[var(--plain-gray)] flex">
      <div className="carousel-container relative flex-1 overflow-hidden text-center"
        style={{ perspective: "600px" }}>

        <h2
          style={{ fontFamily: "'FunnelDisplay', monospace" }}
          className="text-8xl text-[var(--plain-gold)] mx-auto mt-8"
        >
          Explore More.
        </h2>
        <div
          ref={carouselRef}
          className="carousel-slider absolute inset-0 flex items-center justify-center animate-rotation perspective-origin-center m-auto"
          style={{

            transformStyle: "preserve-3d",


          }}
        >
          {cards.map((card, index) => {
            const rotation = index * (360 / totalLen);
            return (
              <div
                key={card.id}
                className="carousel-card absolute w-100 h-180 rounded-xl overflow-hidden"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `translate(-50%, -50%)
                              rotateY(${rotation}deg)
                              translateZ(780px)
                            `,
                  transformStyle: "preserve-3d",
                }}
              >

                <img
                  src={card.imgUrl}
                  alt={card.name}
                  className="size-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CTA;