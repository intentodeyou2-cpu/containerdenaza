"use client"

import { useState } from "react"
import { reflections, type Reflection } from "@/lib/reflections"
import { ReflectionCard } from "@/components/reflection-card"
import { ReflectionModal } from "@/components/reflection-modal"

export function ReflectionVault() {
  const [active, setActive] = useState<Reflection | null>(null)

  return (
    <>
      <ul className="flex flex-col gap-4">
        {reflections.map((reflection) => (
          <li key={reflection.id}>
            <ReflectionCard reflection={reflection} onOpen={setActive} />
          </li>
        ))}
      </ul>

      <ReflectionModal reflection={active} onClose={() => setActive(null)} />
    </>
  )
}
