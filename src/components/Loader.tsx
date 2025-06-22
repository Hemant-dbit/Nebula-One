export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div
        className="w-12 h-12 border-4 border-gray-700 border-t-white rounded-full animate-spin"
        aria-label="Loading"
      />
    </div>
  );
} 