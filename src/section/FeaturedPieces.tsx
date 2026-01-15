import ButtonFp from "@/components/ButtonFp";
import ImageCard from "@/components/ImageCard";
const FeaturedPieces = () => {
  return (
    <section className="featured-container h-[100dvh] w-full relative">
      <div className="bg-(--color-gray) size-full text-(--color-white)">

        <div className="fp-left-side w-[40%] h-dvh flex flex-col py-20 px-6 text-5xl justify-between absolute inset-0">
          <h2 className="text-8xl pl-4 text-(--color-gold)">Featured Pieces.</h2>
          <ButtonFp btntext="Rings" />
          <ButtonFp btntext="Earrings" />
          <ButtonFp btntext="Necklaces" />
          <ButtonFp btntext="Bracelets" />
        </div>

        <div className="fp-right-side absolute w-[60%] top-0 right-0 h-dvh ">
          <div className=" grid grid-cols-2 grid-rows-2 h-dvh p-12 gap-6">
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
        </div>

      </div>
    </section>
  );
};

export default FeaturedPieces;
