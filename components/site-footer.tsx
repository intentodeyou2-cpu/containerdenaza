import { Hourglass } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-6 pb-20">
      <div className="h-px w-full bg-border" />
      <div className="mt-10 flex flex-col items-center gap-4">
        <Hourglass className="h-4 w-4 text-accent/70" strokeWidth={1.25} aria-hidden="true" />
        <p className="text-center text-xs uppercase tracking-[0.4em] text-muted-foreground/70">
          Nothing is ever truly lost to time
        </p>
      </div>
    </footer>
  )
}
