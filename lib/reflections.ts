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
  excerpt: "El tiempo es una apuesta constante en la que todos jugamos creyendo que tenemos la ventaja, hasta que nos damos cuenta de que nos quedamos sin fichas.",
  fullContent: `Tengo que morir, aunque nací para vivir.

No suelo pensar que mi vida está pasando enfrente mío y no la estoy viendo; solo me percato del tiempo cuando ya pasó. Parece que no puedo evitarlo, y, en el fondo, estoy contento de que así sea. Me gusta pensar en que el tiempo no es algo negociable, es algo que tengo que aprender a aprovechar, pero nadie me enseña cómo.

La idea de que mi vida y la de todos es temporal no se me presenta a diario, menos en estos días en los que vivo pendiente de metas y proyectos a futuro. Por eso me gusta estar solo: es ahí cuando aparecen esos pensamientos que me hacen cuestionar qué estoy haciendo con mis horas. Todos mis proyectos están planeados a futuro, como si estuviera contando con tiempo que aún no alcancé. Es como una garantía falsa. Saber que el promedio de vida aún está lejos me deja esa ilusión de contar con tiempo ilimitado. Pienso que si le sumo 20 años a mi edad actual, todavía no llego a superar ese promedio, y eso me brinda una falsa seguridad, me hace creer que puedo hacer prácticamente lo que desee en este paso por la tierra.

Pero es una ilusión, y lo sé. Aún no comprendo el sentimiento de salirme de la edad promedio, simplemente no me entra en la cabeza, aunque creo poder imaginar lo que se siente. Sinceramente, la parte más dura es cuando pienso en mis padres, puntualmente en mi papá. Siendo él una persona de unos 78 años, darme cuenta de que es difícil llegar a verlo durante 20 años más, y directamente imposible que me vea cuando yo cumpla 45, me rompe el esquema. Pensar en esto hace que cualquier otro problema de mi vida —como lo puede ser un trabajo, un parcial, una pelea con alguien por plata o por un lugar en un estacionamiento— me parezca ridículo. Son cosas insignificantes frente al sufrimiento de no poder decir lo que sentís por alguien. 

El tiempo es una apuesta constante en la que todos jugamos creyendo que tenemos la ventaja, hasta que nos damos cuenta de que nos quedamos sin fichas. De momento, tengo la fantasía de tener mucha vida por delante, pero lo que sí me preocupa es cuánta de esa vida voy a poder compartir con la gente que quiero.

Quizás un buen consuelo es pensar que en otro plano nos vamos a volver a encontrar. Espero que sea así, pero como no es una certeza, no me deja tranquilo. Lo que sí me da paz es saber que hoy soy feliz estando con ellos y con todos los que formé un vínculo. No tengo que cargar con el peso de no haberles demostrado mi cariño antes de que no estén más. Espero que ellos sientan lo mismo conmigo, no quiero que se guarden nada. Si bien siento que me queda mucha vida por delante, puede que no sea así, y no me gustaría dejar a ningún ser querido con la culpa o el pesar de no haberme dicho algo importante.

¿Mi felicidad está en el punto más alto? Sabiendo que a partir de ahora solo puede ir disminuyendo a medida que me tenga que despedir de mis seres queridos, ¿no es triste saber que lo que viene es peor? ¿Es un final deprimente el que estoy visualizando?

Puede ser cierto en parte. Si bien hoy estoy en mi momento más feliz, con ese mismo criterio podría pensar que mi padre está en el peor momento de su vida; pero lo veo y está lleno de energía. ¿Cómo puede ser? Vivió la muerte de sus padres, de sus hermanos, y la mayoría de las personas de su infancia ya no están con él. Sin embargo, no pierde las ganas de vivir. Yo no sé si podría aguantar tanto como ellos. Saber que siguen adelante a pesar de las pérdidas me deja pensando mucho. 

Por eso creo que, si bien hoy estoy feliz, voy a encontrar un motor nuevo en el futuro. Creo que tener un hijo va a ser lo que me brinde la fuerza para seguir viviendo cuando mis padres y hermanos comiencen a irse. Tener a alguien a quien enseñarle lo que mi papá me enseñó me deja tranquilo; saber que voy a cambiar mi felicidad actual por el amor a una persona que depende de mí, me da la esperanza de que esa será la voluntad que necesite para vivir mis últimos años. Espero ser yo quien despida a mis padres y que sean mis hijos quienes me despidan a mí.

Volviendo a mi actualidad: estoy muy feliz. Aunque a veces anticipo la nostalgia al ver las arrugas de mi papá y pienso en cuando no lo pueda ver más. Sentir que cada encuentro podría ser el último me impulsa a decirle lo mucho que lo quiero. Y me encanta su reacción: me mira, se ríe y me dice "Bueno bueno, no tengo plata". Sé que en el fondo sabe cuánto lo quiero y que ese chiste es solo para mantener esa imagen de tipo duro. Él no va a llorar enfrente nuestro jamás. Nunca lo vi llorar. Pero sé lo bien que le hace que su hijo le diga que lo quiere mucho.

En este momento quiero pensar que falta mucho para despedirlos, pero eso no quita que aprovecho siempre para decirles lo agradecido que estoy. Creo que si el lector conectó con el mensaje y tiene la posibilidad de parar y hablar un ratito con los viejos, es el momento. ¿Qué tan importante es lo que tenés que hacer como para no aprovechar y mandarles un mensaje si están lejos? ¿Qué tan grave puede ser una pelea como para no charlar un rato?

Vivimos creyendo que hay tiempo, pero es una apuesta con un costo muy alto si llegamos a fallar. Las personas que ya no cuentan con tiempo lo entenderían mejor, y les encantaría tener un poquito de esas horas que hoy desperdicias para decirles a sus seres queridos que los quieren y los extrañan.

Recordá que tenemos que morir.`,
  date: "Septiembre 7, 2026",
  icon: "hourglass",
},
{
    id: "02",
    title: "Proxima",
    excerpt:
      "Proximamente...",
    fullContent:
      "Espero poder traer otra reflexion pronto",
    date: "En espera",
    icon: "hourglass",
  },
]
