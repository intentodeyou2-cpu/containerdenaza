import { ReflectionVault } from "@/components/reflection-vault"

export default function Page() {
  return (
    <main className="mx-auto min-h-dvh w-full max-w-lg px-5 pb-16 pt-12">
      <header className="mb-10 animate-fade-in">
        <div className="mb-4 h-px w-10 bg-accent/60" aria-hidden="true" />
        <h1 className="font-serif text-3xl leading-tight text-foreground text-balance sm:text-4xl">
          El Container de Naza
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
          Un repositorio de pensamientos, ensayos y reflexiones. Toca cualquiera
          para leer en silencio.
        </p>
      </header>

      <ReflectionVault />
    </main>
  )
}
