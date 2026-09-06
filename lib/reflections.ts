import type { LucideIcon } from "lucide-react"
import {
  Clock,
  Hourglass,
  Feather,
  MoonStar,
  Flame,
  Compass,
} from "lucide-react"

/** Name of a supported icon. Add new keys to `iconMap` below to extend. */
export type ReflectionIcon =
  | "clock"
  | "hourglass"
  | "feather"
  | "moon"
  | "flame"
  | "compass"

export interface Reflection {
  id: string
  title: string
  excerpt: string
  fullContent: string
  date: string
  /** Optional icon name, resolved through `iconMap`. */
  icon?: ReflectionIcon
}

export const iconMap: Record<ReflectionIcon, LucideIcon> = {
  clock: Clock,
  hourglass: Hourglass,
  feather: Feather,
  moon: MoonStar,
  flame: Flame,
  compass: Compass,
}

/**
 * The vault's contents. Add a new object to this array to publish a new
 * reflection — the UI maps over it automatically.
 */
export const reflections: Reflection[] = [
  {
    id: "01",
    title: "El Tiempo",
    excerpt:
      "No perdemos el tiempo; lo gastamos. Cada grano que cae es una decisión ya tomada.",
    fullContent:
      "El tiempo no es una línea que atravesamos, sino una corriente que nos atraviesa. Medimos la eternidad con relojes, como si el para siempre pudiera cortarse en horas. Pero cada grano que cae del reloj de arena no se pierde: se gasta, se convierte en la forma silenciosa de quienes vamos siendo. Vivir con conciencia del tiempo no es apresurarse, sino elegir con cuidado dónde dejamos que caiga cada instante. Porque al final, no recordamos los días — recordamos los momentos, y el tiempo solo pesa cuando lo hemos habitado de verdad.",
    date: "Enero 3, 2025",
    icon: "hourglass",
  },
  {
    id: "02",
    title: "El Río",
    excerpt:
      "Nunca entras dos veces al mismo instante. El presente es solo el borde donde la memoria se disuelve.",
    fullContent:
      "Heráclito tenía razón: nadie se baña dos veces en el mismo río. Lo que llamamos presente es apenas el filo delgado donde la memoria se disuelve en la expectativa. Somos, a la vez, quien fuimos y quien todavía no somos, sostenidos por un instante que ya se está yendo mientras lo nombramos. Tal vez la paz no consista en detener la corriente, sino en aprender a fluir con ella sin aferrarnos a las orillas.",
    date: "Diciembre 18, 2024",
    icon: "clock",
  },
  {
    id: "03",
    title: "La Primera Luz",
    excerpt:
      "El amanecer no le pide nada a la noche anterior. Empezar de nuevo es el privilegio más antiguo.",
    fullContent:
      "Cada amanecer llega sin rencor. No le exige cuentas a la noche que lo precedió, no arrastra el peso de los errores de ayer. Comenzar otra vez es el privilegio más antiguo de todo lo que sigue vivo. Hay una honestidad en la luz de la mañana: ilumina por igual lo que amamos y lo que preferiríamos olvidar, y aun así nos invita a intentarlo de nuevo. Renacer no es borrar el pasado; es decidir que todavía queda algo por escribir.",
    date: "Noviembre 30, 2024",
    icon: "feather",
  },
  {
    id: "04",
    title: "Nocturno",
    excerpt:
      "En la oscuridad, los segundos se estiran. La mente por fin escucha su propia aritmética.",
    fullContent:
      "En la oscuridad, los segundos se estiran. La mente, ya no apurada por la luz, escucha por fin la lenta aritmética de su propio devenir. La noche no es ausencia, sino un tipo distinto de presencia: la de las preguntas que la prisa del día no nos deja formular. Hay pensamientos que solo florecen sin testigos, en ese silencio donde uno se encuentra, por fin, a solas consigo mismo.",
    date: "Octubre 22, 2024",
    icon: "moon",
  },
  {
    id: "05",
    title: "La Llama",
    excerpt:
      "Arder no es destruirse. Es entregar luz a cambio de la propia forma.",
    fullContent:
      "Toda pasión es una forma de arder. La vela no se lamenta por consumirse: entiende que su razón de ser es dar luz, aunque eso signifique entregar su propia forma. Vivir intensamente tiene ese costo — nos gastamos en aquello que amamos. Y quizás esa sea la única manera digna de terminar: no intactos, sino consumidos por algo que valió la pena iluminar.",
    date: "Septiembre 9, 2024",
    icon: "flame",
  },
  {
    id: "06",
    title: "La Brújula",
    excerpt:
      "El futuro no tiene mapa, solo una dirección. No encontramos el camino: lo hacemos.",
    fullContent:
      "El futuro no viene con mapa, solo con dirección. No encontramos el camino hacia adelante — lo hacemos, un paso irreversible a la vez. La incertidumbre asusta porque confundimos no saber el destino con no tener rumbo. Pero una brújula no promete llegada; promete orientación. Y a veces eso basta: saber hacia dónde mirar cuando todo lo demás sigue en niebla.",
    date: "Agosto 1, 2024",
    icon: "compass",
  },
]
