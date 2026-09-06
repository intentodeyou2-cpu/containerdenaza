import { reflections } from "@/lib/reflections"
import { ReflectionCardItem } from "@/components/reflection-card-item"

export function ReflectionGrid() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-32">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reflections.map((reflection, index) => (
          <ReflectionCardItem key={reflection.id} reflection={reflection} index={index} />
        ))}
      </div>
    </section>
  )
}
