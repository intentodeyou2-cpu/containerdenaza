"use client"

import { ArrowUpRight } from "lucide-react"
import { iconMap, type Reflection } from "@/lib/reflections"

interface ReflectionCardProps {
  reflection: Reflection
  onOpen: (reflection: Reflection) => void
}

export function ReflectionCard({ reflection, onOpen }: ReflectionCardProps) {
  const Icon = reflection.icon ? iconMap[reflection.icon] : null

  return (
    <button
      type="button"
      onClick={() => onOpen(reflection)}
      className="group w-full rounded-xl border border-border bg-card/60 p-5 text-left transition-all duration-300 hover:border-accent/50 hover:bg-card focus:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-[0.99]"
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
          {Icon ? <Icon className="size-3.5 text-accent" aria-hidden="true" /> : null}
          {reflection.date}
        </span>
        <ArrowUpRight
          className="size-4 text-muted-foreground transition-colors group-hover:text-accent"
          aria-hidden="true"
        />
      </div>
      <h2 className="mb-2 font-serif text-2xl leading-tight text-foreground text-balance">
        {reflection.title}
      </h2>
      <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
        {reflection.excerpt}
      </p>
    </button>
  )
}
