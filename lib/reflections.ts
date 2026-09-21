import type { LucideIcon } from "lucide-react"
import { CalendarCheck } from 'lucide-react';


import {
    Clock,
   Hourglass,
  Feather,
  MoonStar,
  Flame,
  Compass,
  Cpu,
  Flower2,
} from "lucide-react"

/** Name of a supported icon. Add new keys to `iconMap` below to extend. */
export type ReflectionIcon =
  | "clock"
  | "hourglass"
  | "feather"
  | "moon"
  | "flame"
  | "compass"
  | "calendar"
  | "cpu"
  | "flower"
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
  calendar: CalendarCheck,
  cpu: Cpu,
  flower: Flower2,
}

/**
 * The vault's contents. Add a new object to this array to publish a new
 * reflection — the UI maps over it automatically.
 */
export const reflections: Reflection[] = [
  {
    id: "01",
    title: "Proxima",
    excerpt:
      "Proximamente...",
    fullContent:
      "Espero poder traer otra reflexion pronto",
    date: "En espera",
    icon: "hourglass",
  },




  {
    id: "02",
    title: "Flores de plástico",
    excerpt:
      "Sobre cómo dejé de forzar escenas de película y entendí que un café en un día de lluvia vale más que cualquier flor por compromiso.",
    fullContent:
      `Si por algo me caracterizo es por ser humano; tengo todas las emociones en su justa medida y los deseos siempre presentes como una meta que algún día voy a cumplir. Me encanta escribir, mas no me considero una persona buena en eso. No me frena saber que soy realmente malo en algo, me da curiosidad por saber qué tan bueno puedo llegar a ser.

Algunas de las cosas que nunca había tenido el privilegio de vivir era estar de novio con alguien. Todos mis intentos por estar con personas siempre terminaban mal. Mis intentos eran con gente con la que realmente no debía estar, o con máscaras que sabía que iban a durar un tiempo y que luego la realidad me golpearía, sabiendo que no era lo que realmente buscaba para mí. A todo esto, prefería mantenerme en la falsa ilusión de estar construyendo algo con alguien por lo dulce del momento, callando a mi mente que me estaba diciendo que mantener eso me estaba imposibilitando el hecho de realmente conseguirlo. Muy similar a lo que nos pasa cuando despertamos de un sueño muy lindo y queremos volver a soñarlo, sabiendo que es falso pero que nos gusta pensarlo.

Por otro lado, siempre admiré a una pareja que cursaba en el mismo instituto al cual iba. Si bien no era la única pareja que me gustaba ver, era la que más me gustaba porque siempre la veía. Sigo admitiendo que me parece hermoso lo que tienen; mucho tiempo quería tener eso mismo con personas que quizás no eran las indicadas, y prefería mantenerme en una relación más tóxica para poder sentir lo que eran esos destellos de dulzura y cariño. En fin, no interesa lo que me pasaba con esa persona, lo que quiero contar es que el ser humano siempre quiere tener lo que ve en los demás. Siempre aspiré a tener una relación como la de mis compañeros, con peleas y todo, porque es imposible siempre estar bien, pero sabiendo solucionarlas. Me parece una pareja que la verdad se diferencia de las demás por el hecho de no querer aparentar nada. Me gusta que cada uno tiene la libertad de ser quien es, que no necesiten subir una historia a Instagram el 21 con una flor amarilla para aparentar y que las demás personas vean su genial relación. Me gusta que la gente no necesite un día en particular para demostrar afecto, como lo puede ser un 14 de febrero; el cariño a alguien se demuestra en otras cosas y se hace en el día a día, con cosas aún más insignificantes que las demás personas no deben saber jamás. Cosas como hacer un desayuno para los dos, darle algo dulce, abrazarse, reírse de algo en concreto, jugar un mismo juego. Son cosas que me parecen menos vacías que una foto en IG.

Esta pareja siempre fue lo que me hubiera encantado tener. Nunca había tenido una novia en ese momento, fantaseaba con algún día tenerla y poder comer junto con esa pareja algo, porque además de parecerme una linda pareja, me caían súper bien ambos. De esa relación comprendí que donde estaba no tenía nada que proyectar, el deseo era solo físico y no era nada genuino. Al hacerme a un costado de ese momento me propuse nunca más volver a meterme en algo así. Lo que vino después fue mucho mejor. Además de estar solo, sentía que podía volver a conocer a alguien con quien crear un vínculo como el de mis amigos, algo así de lindo, y poder cumplir todas las fantasías que tenía en mi mente, como lo era comer en un restaurante con alguien en invierno, dentro de un lugar cálido con luz cálida, comiendo algo caliente en la noche, viendo la luna y charlando de mil cosas.

Querer forzar algo no es lo mejor, eso fue lo segundo que aprendí. Tras dejar una relación en la cual nunca pasaría a nada más serio, estuve un tiempo solo hasta que conocí a alguien que creía que sí era. Realmente creo que es una persona que vale la pena, quizás no conmigo, pero no me encontré a alguien vacío ni mucho menos. Simplemente no pudo ser porque decidí irme de ese lugar. Mirándolo más frío, fue algo muy bonito y corto que me sirvió para estar tranquilo conmigo mismo, sabiendo que sí puedo atraer a personas que valen la pena. Espero le vaya muy bien y consiga a alguien que valga la pena; por mi parte, volví a estar solo y tranquilo. Esa imagen de la pareja perfecta comiendo en un restaurante y compartiendo cosas volvía a parecer muy lejana.

Paradójicamente, cuando dejé de buscar a alguien, apareció quien actualmente es mi novia. Es muy raro, pero no sé por qué cuando la vi me gustó y pensé que iba a ser mi novia a futuro. Obvio que no lo forcé, pero de vuelta volví a sentir esas ganas de tener una relación como la de mis amigos. Esta vez sí me transmitía confianza, a diferencia de mi primer intento, y además la tenía cerca y la notaba verdaderamente genuina. Pasamos mucho tiempo conociéndonos y pude cumplir con ella varios de mis deseos de estar con alguien. No lo sabe, pero me hizo pensar muchas cosas.

De todos mis intentos de relaciones puedo rescatar algo bueno. La primera fue la que me enseñó que puedo ser muy tóxico si el ambiente lo es, y la parte linda de estar enamorado de alguien. Me demostró que hay cosas que no se pueden tolerar y que no hay que dejarlas pasar para poder mantener una relación sana; me demostró el peligro de perder tu tranquilidad por querer a alguien. Me hizo ser mucho más selectivo a la hora de elegir a alguien, eso se lo agradezco. Me gustaría pedirle perdón por también estar metido en esa toxicidad, no me gusta hacerme la víctima siendo que también estaba metido en ese mambo.

De la segunda es quizás de la que menos puedo llegar a contar. Fue muy bonito estar con ella, pero no sabía si realmente era lo que quería o no. Me entretenía demasiado, me gustaba mucho charlar con ella. La quise conocer muy despacio para no caer en lo mismo que mi anterior relación; el tiempo era poco y, cuando le conté que no iba a vivir más por esa zona, siento que se enfrió todo. Me dejó lindos recuerdos pero no pudieron ser muchos por mi culpa. No sé qué hubiera pasado si el tiempo hubiera estado a nuestro favor, la verdad, solo puedo imaginar una realidad que no pasó. Me enseñó a aprovechar el tiempo de calidad con quien querés.

Mi pareja actual me da tranquilidad total. Gracias a mi primer intento de relación pude conocer a alguien que creo realmente vale la pena, y gracias a mi segunda relación puedo decir que disfruto cada momento con mi pareja actual; el tiempo se me pasa volando con ella. Es re loco pensar que, sinceramente, ya siento que logré tener esa misma relación que la que veía en mis amigos. Me pone contento poder proyectar con ella, me gusta charlar demasiado, me gusta todo de sí. No siento que sea una relación vacía y mucho menos tóxica. Mi novia me demostró que lo que realmente tengo que valorar es tener el momento juntos y no la fantasía perfecta en un restaurante en la noche; lo que en verdad importa es poder estar con esa persona en ese lugar. Me demostró que ir hasta una cafetería un día de lluvia muy frío realmente puede ser hermoso. Son recuerditos que me gusta tener porque no me los imaginaba así, pero eso no significa que estoy decepcionado por no cumplir mis fantasías, sino que les dio un valor real al momento y no quiso solo replicar esa imagen mental que es imposible de replicar. Me demostró que no es necesaria una pareja perfecta como la que creía ver en mis amigos, sino una compañía que de verdad vale la pena. Sigo aprendiendo de ella muchas cosas hasta el día de hoy. Es simplemente una relación que se va construyendo, espero siga así. Quizás no pueda regalarle una flor amarilla, pero sí que me gustaría poder regalarle una transitada por esta tierra lo más linda posible.`,
    date: "Septiembre 21, 2026",
    icon: "flower",
  },




  {
  id: "03",
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
  id: "04",
  title: "¿Mi meta?",
  excerpt: "¿Cómo sé que mi nuevo entorno no es más que otro hormiguero puesto ahí para que viva creyendo que tengo el control?",
  fullContent: `¿Hasta dónde puede llegar la influencia del entorno? ¿Qué tanto pudo cambiar, y qué tanto me cambió mi entorno para que yo sea quien soy en este momento?

De chico me crié con todo mi entorno remarcándome que tenía una facilidad con todo lo relacionado a la tecnología. Viéndolo hoy en día, puedo decir que sí, me generaba curiosidad todo lo electrónico, pero en gran parte porque en mi familia era complicado poder permitirnos tener muchas cosas de ese estilo. Eso, creo, fue otro factor más que influyó en que mi vida (al menos lo que tengo planificado) se decantara en aprender y pulir mis habilidades en el ámbito de la tecnología.

Otra cosa que creo que influyó muchísimo para que mi yo de hace unos diez años atrás eligiera este rubro fue la presión. La presión de saber que cuando alguien de mi entorno no supiera algo, iba a estar yo para poder resolverlo.

Si lo pensamos de esta manera, el hecho de que nuestro entorno nos influya tanto a la hora de elegir lo que nos gusta, me hace sentir igual a una hormiga dentro de un hormiguero artificial. Ella no sabe por qué está ahí, no sabe que realmente no es su hábitat, y va a morir sin comprender. 

Puedo cambiar mi entorno, eso sí me va a hacer diferente, pero ¿hasta dónde puedo cambiar ese entorno? ¿Cómo sé que mi nuevo entorno no es más que otro hormiguero puesto ahí para que viva creyendo que tengo el control de cambiar? ¿Qué es peor, querer salir del hormiguero o no saber siquiera que existe uno?

Lo que más me deja pensando es: ¿hasta qué punto tengo realmente libertad de pensamiento y de imaginación? Un ejemplo para que el lector comprenda a lo que me refiero: no somos capaces de imaginarnos un color completamente nuevo, solo derivados de los que ya conocemos. ¿Por qué, si tenemos la capacidad de pensar que existen más colores, no somos capaces de imaginarlos?`,
  date: "Agosto 11, 2026",
  icon: "cpu",
},





{
  id: "05",
  title: "Un día más",
  excerpt: "Siento que más que 'un día más', fue 'un día menos'. Un día menos para decirles a las personas que me importan que las quiero.",
  fullContent: `Hoy no cumplí con mis expectativas. Volví a mentirme, haciéndome el que estudiaba mientras me terminaba distrayendo intencionalmente, volviendo a patear todo para último momento. No sé por qué me miento tanto; sé lo que tengo que hacer pero lo pateo. Como si al no tener las horas contadas, no me importara tanto. Me gusta saber que me fallo y poder admitirlo; lo peor para mí sería creerme las excusas que me invento.

Siempre funcioné así, como si mi mente jugara con el tiempo. Dejo todo para último momento y luego, el día del parcial, me arrepiento y me reprocho a mí mismo. Prometo que no lo voy a hacer más, que para la próxima me voy a poner las pilas. El tema es que a veces no hay "próxima". 

No puedo evitar pensar que esto mismo le pasa a tanta gente, pero en cosas más duras de la vida. Gente que deja para la "próxima" juntarse con amigos, gente que deja para la "próxima" juntarse a comer algo con los viejos. Gente que deja para mañana decirle lo mucho que quieren a ese ser querido que quizás, sin saberlo, su última chance de decírselo era hoy. El ser humano cree muchas veces que tiene la vida comprada, que siempre va a tener otra oportunidad para hacer eso que está pateando desde quién sabe cuándo. 

En estos momentos, cuando todo está pendiente de una pantalla, es cuando más quiero estar junto a mi familia, en casa. Ahí es cuando me gustaría poder recuperar todos esos días intrascendentes que viví con ellos. Quiero tomar unos mates con mi mamá, molestarme con ella porque no me lo devuelve más. Es feo pensar que, sin saberlo, un día va a ser el último día que voy a tomar mates con ella... y que ese día pudo ya haber ocurrido y aún no lo sé. Solo espero que el día que pase, no me arrepienta de no haberlo hecho.

Recuerdo un día preguntarle de qué se arrepentía, y justamente me contó que siempre piensa en las veces que no tomó unos mates con su madre. Ella solo tomaba amargo y, en ese momento, mi mamá solo tomaba dulce.

Hoy considero que fue un buen día; no ocurrió nada relevante, pero pensándolo bien, siento que más que "un día más", fue "un día menos". Un día menos para decirles a las personas que me importan que las quiero. Que quiero tomar unos mates con mi mamá y no siempre solo, que quiero ayudarle a hacer alguno de sus inventos a mi viejo, y que quiero poder charlar de lo que sea con Ángel y reírnos.

Hoy es un día menos en el que no pude, por la distancia, estar sentado comiendo todos juntos en familia, con mi viejo mirando las noticias a fondo en la tele. Sé que estar acá es lo mejor para mí, pero es tiempo que invierto en mi futuro y que me quito de estar junto a ellos. Solo espero aprovechar los días que me quedan con vida y no arrepentirme de muchas más cosas de las que ya me arrepiento.

Este día seguro va a ser olvidado por mi mente pero, paradójicamente, escribir sobre esto va a hacer que, mientras esté con vida, pueda recordarlo. Días como este me hacen recordar lo rápido que se pasa todo y lo mucho que me cuesta vivir.`,
  date: "Julio 8, 2026",
  icon: "calendar",
},



]
