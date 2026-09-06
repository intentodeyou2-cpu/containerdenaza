"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import { iconMap, type Reflection } from "@/lib/reflections"

interface ReflectionModalProps {
  reflection: Reflection | null
  onClose: () => void
}

export function ReflectionModal({ reflection, onClose }: ReflectionModalProps) {
  useEffect(() => {
    if (!reflection) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [reflection, onClose])

  if (!reflection) return null

  const Icon = reflection.icon ? iconMap[reflection.icon] : null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reflection-title"
    >
      <button
        type="button"
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-background/70 backdrop-blur-md animate-overlay-in"
      />

      <div className="relative z-10 flex max-h-[90dvh] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl border border-border bg-card shadow-2xl animate-sheet-in sm:rounded-2xl">
        <div className="sticky top-0 flex items-center justify-between gap-4 border-b border-border bg-card/95 px-5 py-4 backdrop-blur-sm">
          <div className="flex min-w-0 items-center gap-3">
            {Icon ? (
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-accent">
                <Icon className="size-4" aria-hidden="true" />
              </span>
            ) : null}
            <div className="min-w-0">
              <h2
                id="reflection-title"
                className="truncate font-serif text-xl leading-tight text-foreground"
              >
                {reflection.title}
              </h2>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {reflection.date}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar lectura"
            className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-6">
          <p className="whitespace-pre-line font-serif text-lg leading-relaxed text-card-foreground">
            {reflection.fullContent}
          </p>
        </div>
      </div>
    </div>
  )
}
