import { Globe } from "@/components/magicui/globe";

export function GlobeComponent() {
  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden border bg-transparent px-40 pb-40 pt-8 md:pb-132">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Access from Everywhere
      </span>
      <Globe className="top-28" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}
