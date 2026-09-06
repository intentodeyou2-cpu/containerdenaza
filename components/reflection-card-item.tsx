import type { ReflectionCard } from "@/lib/reflections"

interface ReflectionCardItemProps {
  reflection: ReflectionCard
  index: number
}

export function ReflectionCardItem({ reflection, index }: ReflectionCardItemProps) {
  const { title, content, timestamp, icon: Icon } = reflection

  return (
    <article
      className="animate-fade-up group relative overflow-hidden rounded-xl border border-border bg-card/40 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:bg-card/70 hover:shadow-[0_20px_60px_-20px_oklch(0_0_0/0.7)]"
      style={{ animationDelay: `${700 + index * 120}ms` }}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="relative flex items-center justify-between">
        {Icon ? (
          <Icon className="h-5 w-5 text-accent/80" strokeWidth={1.25} aria-hidden="true" />
        ) : (
          <span />
        )}
        {timestamp ? (
          <span className="font-mono text-xs tracking-widest text-muted-foreground/60">{timestamp}</span>
        ) : null}
      </div>

      <h2 className="relative mt-6 font-serif text-2xl font-light italic text-foreground">{title}</h2>

      <p className="relative mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">{content}</p>
    </article>
  )
}
