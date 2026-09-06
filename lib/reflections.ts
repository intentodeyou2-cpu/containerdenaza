import type { LucideIcon } from "lucide-react"
import { Clock, Hourglass, Sunrise, Infinity as InfinityIcon, MoonStar, Compass } from "lucide-react"

export interface ReflectionCard {
  id: string
  title: string
  content: string
  /** Optional faint timestamp shown in the corner of the card. */
  timestamp?: string
  /** Optional subtle icon rendered in the card header. */
  icon?: LucideIcon
}

/**
 * Edit the copy of the page by changing this array only.
 * Each entry becomes a card in the grid.
 */
export const reflections: ReflectionCard[] = [
  {
    id: "01",
    title: "The River",
    content:
      "You never step into the same moment twice. What we call the present is only the thin edge where memory dissolves into expectation.",
    timestamp: "00:00",
    icon: Clock,
  },
  {
    id: "02",
    title: "The Hourglass",
    content:
      "Time is not lost; it is spent. Every grain that falls is a choice already made, quietly settling into the shape of who you are becoming.",
    timestamp: "03:14",
    icon: Hourglass,
  },
  {
    id: "03",
    title: "First Light",
    content:
      "Dawn asks nothing of the night before. To begin again is the oldest privilege of anything still alive.",
    timestamp: "06:00",
    icon: Sunrise,
  },
  {
    id: "04",
    title: "The Unending",
    content:
      "We measure eternity with clocks, as if forever could be cut into hours. Perhaps time was never a line, only a circle we forgot the start of.",
    timestamp: "∞",
    icon: InfinityIcon,
  },
  {
    id: "05",
    title: "Nocturne",
    content:
      "In the dark, seconds stretch. The mind, unhurried by light, finally hears the slow arithmetic of its own becoming.",
    timestamp: "23:47",
    icon: MoonStar,
  },
  {
    id: "06",
    title: "The Compass",
    content:
      "The future has no map, only a direction. We do not find the way forward — we make it, one irreversible step at a time.",
    timestamp: "—",
    icon: Compass,
  },
]
