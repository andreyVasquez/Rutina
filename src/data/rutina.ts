export interface Exercise {
  icon: string;
  title: string;
  reps: string;
  /** May contain inline HTML (e.g. <b>). Rendered with set:html. */
  desc: string;
  /** Tipo de entrenamiento a seleccionar en el Apple Watch. */
  watch: string;
}

export interface DayData {
  id: string;
  num: string;
  kicker: string;
  title: string;
  quote?: string;
  /** Día 4 usa una grilla compacta (.recov) en vez de .cards. */
  recovery?: boolean;
  exercises: Exercise[];
}

/**
 * Versión "multifuncional dañada": todo se resuelve con mancuernas,
 * bandas y elíptica. El golpeo sale del gym: los jueves hay sesión
 * de boxeo en Fight House Granada.
 */
export const days: DayData[] = [
  {
    id: "dia1",
    num: "01",
    kicker: "Día 1",
    title: "Espalda y Bíceps",
    exercises: [
      {
        icon: "i-rope",
        title: "Cardio + movilidad",
        reps: "12–15 min",
        desc: "Elíptica a ritmo moderado-alto + 2 min de banda para hombro.",
        watch: "Elíptica",
      },
      {
        icon: "i-row",
        title: "Remo con mancuerna (a una mano)",
        reps: "4 × 8–10 / lado",
        desc: "<b>RIR 1–2.</b> Tu jalón pesado mientras la multifuncional está dañada. Jala con el codo hacia el ombligo; controla la bajada.",
        watch: "Fuerza tradicional",
      },
      {
        icon: "i-pulldown",
        title: "Pull-over con mancuerna",
        reps: "3 × 10–12",
        desc: "Reemplaza el jalón al pecho. Tumbado en banco, brazos casi rectos; estira el dorsal y jala con la espalda, no con los brazos.",
        watch: "Fuerza tradicional",
      },
      {
        icon: "i-curl",
        title: "Curl de bíceps con mancuernas",
        reps: "3 × 10–12",
        desc: "Última serie cerca del fallo.",
        watch: "Fuerza tradicional",
      },
      {
        icon: "i-curl",
        title: "Curl martillo",
        reps: "3 × 10–12",
        desc: "Agarre neutro: braquial y antebrazo, agarre más fuerte.",
        watch: "Fuerza tradicional",
      },
      {
        icon: "i-facepull",
        title: "Face pull con banda / band pull-apart",
        reps: "3 × 15",
        desc: "Ancla la banda en la puerta. Salud del hombro y postura.",
        watch: "Fuerza funcional",
      },
    ],
  },
  {
    id: "dia2",
    num: "02",
    kicker: "Día 2",
    title: "Pecho, Hombros y Tríceps",
    exercises: [
      {
        icon: "i-rope",
        title: "Cardio + movilidad",
        reps: "12–15 min",
        desc: "Elíptica + banda de hombro.",
        watch: "Elíptica",
      },
      {
        icon: "i-plyo",
        title: "Flexiones explosivas (pliometría)",
        reps: "4 × 6–8",
        desc: "<b>Primero, en fresco.</b> NO al fallo: busca velocidad, no agotamiento. Empuja el piso fuerte.",
        watch: "Fuerza funcional",
      },
      {
        icon: "i-chestpress",
        title: "Press de pecho con mancuernas",
        reps: "4 × 8–10",
        desc: "<b>RIR 1–2.</b> En banco (o en el piso si no hay banco libre).",
        watch: "Fuerza tradicional",
      },
      {
        icon: "i-lateral",
        title: "Elevaciones laterales",
        reps: "3 × 12–15",
        desc: "Hombro resistente para aguantar la guardia el jueves.",
        watch: "Fuerza tradicional",
      },
      {
        icon: "i-triceps",
        title: "Extensión de tríceps trasnuca (copa)",
        reps: "3 × 10–12",
        desc: "Con una mancuerna a dos manos, reemplaza la polea. Codos apuntando al frente; última serie cerca del fallo.",
        watch: "Fuerza tradicional",
      },
      {
        icon: "i-extrot",
        title: "Rotación externa con banda",
        reps: "2 × 15 / lado",
        desc: "Manguito rotador. Codo pegado al costado.",
        watch: "Fuerza funcional",
      },
    ],
  },
  {
    id: "dia3",
    num: "03",
    kicker: "Día 3",
    title: "Piernas, Cadera y Core Rotacional",
    quote:
      "La base del poder de Topuria está en la cadera y la rotación, no en la extensión de pierna.",
    exercises: [
      {
        icon: "i-rope",
        title: "Cardio + movilidad",
        reps: "12–15 min",
        desc: "Elíptica + movilidad de cadera.",
        watch: "Elíptica",
      },
      {
        icon: "i-goblet",
        title: "Sentadilla goblet",
        reps: "4 × 10–12",
        desc: "Mancuerna pesada al pecho; profundidad cómoda.",
        watch: "Fuerza tradicional",
      },
      {
        icon: "i-rdl",
        title: "Peso muerto rumano con mancuernas",
        reps: "4 × 8–10",
        desc: "Cadena posterior: <b>el motor real de la potencia rotacional</b>.",
        watch: "Fuerza tradicional",
      },
      {
        icon: "i-legext",
        title: "Zancadas con mancuernas",
        reps: "3 × 10 / lado",
        desc: "Reemplazan la extensión de piernas mientras no hay máquina. Paso largo, torso firme.",
        watch: "Fuerza tradicional",
      },
      {
        icon: "i-chop",
        title: "Leñador con banda (woodchop)",
        reps: "3 × 12 / lado",
        desc: "Banda anclada en la puerta. Potencia de golpeo, amable con la lumbar.",
        watch: "Core",
      },
      {
        icon: "i-pallof",
        title: "Pallof press con banda (anti-rotación)",
        reps: "3 × 12 / lado",
        desc: "Enseña a transferir fuerza sin fugas de energía.",
        watch: "Core",
      },
      {
        icon: "i-knee",
        title: "Elevación de piernas en el piso",
        reps: "3 × 12–15",
        desc: "Controla, no balancees. Lumbar pegada al piso.",
        watch: "Core",
      },
    ],
  },
  {
    id: "dia4",
    num: "04",
    kicker: "Día 4 · Jueves",
    title: "Boxeo — Fight House Granada",
    recovery: true,
    exercises: [
      {
        icon: "i-stretch",
        title: "Antes de la clase",
        reps: "5 min",
        desc: "Movilidad de hombro y muñeca con banda + trote o cuerda suave. Llega hidratado y con las vendas listas.",
        watch: "Flexibilidad",
      },
      {
        icon: "i-bag",
        title: "Sesión de boxeo",
        reps: "1 clase",
        desc: "<b>Todo el trabajo de golpeo de la semana vive aquí.</b> Técnica, saco y sparring según lo que marque el coach. Ve en fresco: no entrenes pesado antes.",
        watch: "Kickboxing",
      },
      {
        icon: "i-walk",
        title: "Después",
        reps: "5–8 min",
        desc: "Estiramiento suave de hombro, cadera y columna torácica. <b>Esto es lo que te mantiene sin lesiones.</b>",
        watch: "Flexibilidad",
      },
    ],
  },
  {
    id: "dia5",
    num: "05",
    kicker: "Día 5",
    title: "Empuje Vertical y Espalda",
    exercises: [
      {
        icon: "i-rope",
        title: "Cardio",
        reps: "10–12 min",
        desc: "Elíptica suave (es calentamiento).",
        watch: "Elíptica",
      },
      {
        icon: "i-ohp",
        title: "Press de hombros con mancuernas",
        reps: "4 × 8–10",
        desc: "<b>RIR 1–2.</b> Sin saco antes, ahora va en fresco: puedes empujar de verdad.",
        watch: "Fuerza tradicional",
      },
      {
        icon: "i-pulldown",
        title: "Jalón con banda (anclada arriba)",
        reps: "3 × 12–15",
        desc: "Ancla la banda arriba de la puerta y jala con los codos. Equilibra todo el empuje de la semana.",
        watch: "Fuerza funcional",
      },
      {
        icon: "i-lateral",
        title: "Elevaciones laterales",
        reps: "3 × 12–15",
        desc: "Volumen moderado; ya hubo bastante hombro.",
        watch: "Fuerza tradicional",
      },
      {
        icon: "i-pallof",
        title: "Plancha con toque de hombro",
        reps: "3 × 30–45 s",
        desc: "Core anti-rotación sin equipo; caderas quietas.",
        watch: "Core",
      },
      {
        icon: "i-facepull",
        title: "Face pull con banda",
        reps: "3 × 15",
        desc: "Cierra la semana cuidando el manguito.",
        watch: "Fuerza funcional",
      },
    ],
  },
];
