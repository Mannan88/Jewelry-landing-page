// Loader.tsx
export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <p className="text-white text-3xl animate-pulse">Loading...</p>
    </div>
  );
}