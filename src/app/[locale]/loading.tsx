export default function Loading() {
  return (
    <div role="status" aria-live="polite" className="min-h-[70svh]">
      <span className="sr-only">Loading…</span>
      <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-1 overflow-hidden bg-brand-orange/25">
        <div className="nav-progress h-full w-1/3 bg-brand-orange" />
      </div>
      <div aria-hidden="true" className="h-[min(62svh,560px)] animate-pulse bg-stone" />
    </div>
  );
}
