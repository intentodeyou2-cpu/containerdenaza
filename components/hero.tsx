export function Hero() {
  return (
    <header className="relative flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <span className="animate-fade-in text-xs uppercase tracking-[0.5em] text-muted-foreground [animation-delay:200ms]">
        Sobre el Tiempo
      </span>

      <h1 className="animate-fade-up mt-8 font-serif text-6xl font-light italic tracking-tight text-balance sm:text-7xl md:text-8xl [animation-delay:350ms]">
        Reflexiones
      </h1>

      <p className="animate-fade-up mt-8 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base [animation-delay:550ms]">
        {"You've found the quiet room at the end of the puzzle. Sit a while, and consider what time asks of you."}
      </p>

      <div
        className="animate-fade-in mt-16 h-16 w-px bg-gradient-to-b from-accent/50 to-transparent [animation-delay:900ms]"
        aria-hidden="true"
      />
    </header>
  )
}
