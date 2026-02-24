// Loader.tsx
export default function Loader() {
  return (
    <div
      className="relative h-dvh z-50 flex items-center justify-center
                 bg-gradient-to-br from-[var(--plain-gray)] to-[#0c0c0c]"
      style={{ fontFamily: "'FunnelDisplay', monospace" }}
    >
      {/* Ambient gold glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[360px] h-[360px] rounded-full
                   bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.14),transparent_65%)]
                   blur-3xl"
      />

      {/* Content */}
      <div className="relative flex flex-col items-center space-y-8">
        {/* Loader */}
        <div className="relative w-12 h-12">
          {/* Static subtle ring */}
          <div
            className="absolute inset-0 rounded-full border
                       border-[rgba(212,175,55,0.25)]"
          />

          {/* Spinning accent ring */}
          <div
            className="absolute inset-0 rounded-full border-2
                       border-[var(--plain-gold)] border-t-transparent
                       animate-spin"
          />
        </div>

        {/* Text */}
        <p
          className="text-[var(--plain-gold)] text-4xl font-semibold tracking-wider
                      uppercase"
        >
          Loading
        </p>
      </div>
    </div>
  )
}