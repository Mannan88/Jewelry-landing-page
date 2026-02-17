
const CTA = () => {


    return (
        <section className="cta-container relative h-dvh w-full bg-[var(--plain-gray)] overflow-hidden ">
            <div style={{
                fontFamily: "FunnelDisplay"
            }} className="cta-explore-btn  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center text-[5rem] cursor-pointer">
                <button className="cursor-pointer text-[var(--plain-gold)]">Explore More</button>
                <img src="images/svg/up-right-arrow-yellow.svg" alt="shop-now"
                    className="size-20 ml-2" />
            </div>

        </section>
    )
}
export default CTA