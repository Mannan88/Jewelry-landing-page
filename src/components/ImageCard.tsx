type ImageCardProps = {
    url: string
    sizing: string
    altText: string
}

const ImageCard: React.FC<ImageCardProps> = ({ url, sizing, altText }) => {
    return (
        <div className={`img-container relative overflow-hidden ${sizing}`}>
            <div
                className="
          hover-div absolute bottom-0 size-full
          transition-all duration-300 ease-in-out
          opacity-0
          hover:opacity-100
          bg-gradient-to-t
          from-[var(--color-black)]
          via-transparent
          to-transparent z-10
        "
            >
                <button className="absolute bottom-4 right-6 text-lg text-white">
                    Explore more
                </button>
            </div>
            <img
                src={url}
                alt={altText}
                className="object-cover w-full h-full rounded-lg"
            />
        </div>
    )
}

export default ImageCard