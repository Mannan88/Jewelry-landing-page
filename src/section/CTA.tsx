import { useGSAP } from "@gsap/react"
import gsap from "gsap";
const CTA = () => {

    useGSAP(() => {
        const imgArray = gsap.utils.toArray<HTMLElement>(".cta-scroll-img");
        gsap.set((imgArray), {
            yPercent: 250,
        })
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".cta-container",
                start: "top top",
                end: "+=300%",
                pin: true,
                scrub: 0.8,
            }
        })
        tl.to(imgArray, {

            yPercent: 0,
            stagger: 0.5,
            ease: "power2.out"
        });

    })
    return (
        <section className="cta-container relative h-dvh w-full bg-[#f6f1e7] overflow-hidden ">
            <div className="cta-bg size-full flex bg-[#f6f1e7] ">
                <div className="cta-left-side bg-[#0c0c0c] flex-1 h-full z-10 ">
                    <div className=" cta-img-container relative size-full p-4">
                        <img src="images/quality1.avif" alt="" className="cta-scroll-img absolute rounded-xl  top-16 left-30 h-72 w-72 rotate-6" />
                        <img src="images/quality1.avif" alt="" className="cta-scroll-img absolute rounded-xl  top-40 right-30 h-72 w-72 -rotate-6" />
                        <img src="images/quality1.avif" alt="" className="cta-scroll-img absolute rounded-xl  bottom-40 left-30 h-72 w-72 rotate-6" />
                        <img src="images/quality1.avif" alt="" className="cta-scroll-img absolute rounded-xl  bottom-16 right-30 h-72 w-72 -rotate-6" />
                    </div>
                </div>
                <div className="cta-right-side flex-1 h-full relative bg-[#f6f1e7] z-20">
                    <div style={{
                        fontFamily: "FunnelDisplay"
                    }} className="cta-explore-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex text-4xl cursor-pointer">
                        <button className="cursor-pointer">Explore More</button>
                        <img src="images/svg/up-right-arrow-black.svg" alt="shop-now"
                            className="size-12 pt-2"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CTA