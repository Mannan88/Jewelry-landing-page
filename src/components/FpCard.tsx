type fpCardProps = {
  name: string
  description: string
}

const FpCard: React.FC<fpCardProps> = ({ name, description }) => {
  return (
    <div className="fp-card cursor-pointer relative flex-wrap max-w-[18em] rounded-md bg-(--cool-black)">
      <div
        className="fp-img-container rounded-md relative object-cover max-w-[20em] h-[18em] z-10 p-2 bg-[#01010160]
                   transition-all duration-800 ease-in-out
                   hover:opacity-0 hover:blur-md"
      >
        <img
          src={`images/${name}1.avif`}
          alt={`${name}-showcase`}
          className="w-full h-full object-cover rounded-md"
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