export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-zinc-700 border-t-white rounded-full animate-spin" />
        <p className="text-zinc-400 text-sm">Loading...</p>
      </div>
    </div>
  );
}
