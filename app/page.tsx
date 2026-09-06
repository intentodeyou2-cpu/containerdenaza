import { Hero } from "@/components/hero"
import { ReflectionGrid } from "@/components/reflection-grid"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,oklch(0.78_0.09_75/0.06),transparent_55%)]"
        aria-hidden="true"
      />
      <div className="relative">
        <Hero />
        <ReflectionGrid />
        <SiteFooter />
      </div>
    </main>
  )
}
