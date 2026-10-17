export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0f1013] text-neutral-200 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start animate-pulse">
          <div className="w-full aspect-square rounded-2xl bg-white/5 border border-white/5" />
          <div className="flex flex-col gap-4">
            <div className="h-10 w-3/4 rounded bg-white/10" />
            <div className="h-4 w-full rounded bg-white/5" />
            <div className="h-4 w-5/6 rounded bg-white/5" />
            <div className="flex gap-2 mt-4">
              <div className="h-7 w-20 rounded-full bg-white/10" />
              <div className="h-7 w-24 rounded-full bg-white/10" />
            </div>
            <div className="h-48 w-full rounded-2xl bg-white/5 mt-4" />
          </div>
        </div>
      </div>
    </main>
  );
}
