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
 * Versión Smart Fit: máquinas y poleas disponibles. No hubo cupo en las
 * sesiones de boxeo, así que el golpeo se entrena con shadow (sin saco):
 * velocidad de manos (D1), rounds fuertes (D5) y técnica (D4).
 */
export const days: DayData[] = [
  {
    id: "dia1",
    num: "01",
    kicker: "Día 1",
    title: "Espalda, Bíceps y Velocidad de Manos",
    exercises: [
      {
        icon: "i-rope",
        title: "Cardio + movilidad",
        reps: "12–15 min",
        desc: "Elíptica a ritmo moderado-alto + 2 min de banda para hombro.",
        watch: "Elíptica",
      },
      {
        icon: "i-shadow",
        title: "Velocidad de manos (shadow sin peso)",
        reps: "3 rds × 3 min",
        desc: "<b>En fresco.</b> Foco en 1-2 (jab, cross), extiende bien y rota el torso. En la zona funcional del Smart Fit o en casa antes de salir.",
        watch: "Kickboxing",
      },
      {
        icon: "i-pulldown",
        title: "Jalón al pecho",
        reps: "4 × 8–10",
        desc: "<b>RIR 1–2.</b> Jala con los codos, no con las manos.",
        watch: "Fuerza tradicional",
      },
      {
        icon: "i-row",
        title: "Remo en máquina / mancuerna",
        reps: "4 × 10",
        desc: "Jala fuerte hacia el ombligo; controla la bajada.",
        watch: "Fuerza tradicional",
      },
      {
        icon: "i-curl",
        title: "Curl de bíceps",
        reps: "3 × 10–12",
        desc: "Última serie cerca del fallo.",
        watch: "Fuerza tradicional",
      },
      {
        icon: "i-facepull",
        title: "Face pull en polea",
        reps: "3 × 15",
        desc: "Salud del hombro y postura de guardia.",
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
        title: "Press de pecho (máquina / mancuernas)",
        reps: "4 × 8–10",
        desc: "<b>RIR 1–2.</b>",
        watch: "Fuerza tradicional",
      },
      {
        icon: "i-lateral",
        title: "Elevaciones laterales",
        reps: "3 × 12–15",
        desc: "Resistencia para no bajar la guardia en rounds finales.",
        watch: "Fuerza tradicional",
      },
      {
        icon: "i-triceps",
        title: "Extensión de tríceps en polea",
        reps: "3 × 10–12",
        desc: "Aprieta arriba; última serie cerca del fallo.",
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
        title: "Peso muerto rumano / hip thrust",
        reps: "4 × 8–10",
        desc: "Cadena posterior: <b>el motor real de la potencia rotacional</b>.",
        watch: "Fuerza tradicional",
      },
      {
        icon: "i-legext",
        title: "Extensión de piernas (accesorio)",
        reps: "3 × 12",
        desc: "De vuelta a la máquina; aprieta arriba.",
        watch: "Fuerza tradicional",
      },
      {
        icon: "i-chop",
        title: "Leñador en polea (woodchop)",
        reps: "3 × 12 / lado",
        desc: "Potencia de golpeo, más amable con la lumbar que el russian twist.",
        watch: "Core",
      },
      {
        icon: "i-pallof",
        title: "Pallof press en polea (anti-rotación)",
        reps: "3 × 12 / lado",
        desc: "Enseña a transferir fuerza sin fugas de energía.",
        watch: "Core",
      },
      {
        icon: "i-knee",
        title: "Elevación de rodillas",
        reps: "3 × 12–15",
        desc: "Controla, no balancees.",
        watch: "Core",
      },
    ],
  },
  {
    id: "dia4",
    num: "04",
    kicker: "Día 4",
    title: "Recuperación Activa y Técnica",
    recovery: true,
    exercises: [
      {
        icon: "i-walk",
        title: "Sin pesas pesadas",
        reps: "Paseo largo",
        desc: "Caminata a buen ritmo con los perros para sumar pasos y mantener piernas activas.",
        watch: "Caminar",
      },
      {
        icon: "i-shadow",
        title: "Técnica",
        reps: "15 min",
        desc: "Shadow boxing libre frente al espejo en casa: postura, esquivas, desplazamientos y pivotes, manos arriba.",
        watch: "Kickboxing",
      },
      {
        icon: "i-stretch",
        title: "Extra",
        reps: "5–8 min",
        desc: "Movilidad de hombro, cadera y columna torácica. <b>Esto es lo que te mantiene sin lesiones</b> golpeando varias veces por semana.",
        watch: "Flexibilidad",
      },
    ],
  },
  {
    id: "dia5",
    num: "05",
    kicker: "Día 5",
    title: "Empuje Vertical y Shadow",
    exercises: [
      {
        icon: "i-rope",
        title: "Cardio",
        reps: "10 min",
        desc: "Elíptica suave (es calentamiento).",
        watch: "Elíptica",
      },
      {
        icon: "i-bag",
        title: "Shadow alta intensidad",
        reps: "5 rds × 3 min",
        desc: "<b>Primero, en fresco:</b> rectos, ganchos, combinaciones a máxima velocidad. En la zona funcional o en casa. Es la prioridad del día.",
        watch: "Kickboxing",
      },
      {
        icon: "i-ohp",
        title: "Press de hombros",
        reps: "4 × 8–10",
        desc: "Algo más ligero: los rounds ya pre-fatigaron el hombro (compromiso del híbrido).",
        watch: "Fuerza tradicional",
      },
      {
        icon: "i-pulldown",
        title: "Jalón al pecho",
        reps: "3 × 8–10",
        desc: "Equilibra todo el empuje de la semana.",
        watch: "Fuerza tradicional",
      },
      {
        icon: "i-lateral",
        title: "Elevaciones laterales",
        reps: "3 × 12–15",
        desc: "Volumen moderado; ya hubo bastante hombro.",
        watch: "Fuerza tradicional",
      },
      {
        icon: "i-facepull",
        title: "Face pull",
        reps: "3 × 15",
        desc: "Cierra la semana cuidando el manguito.",
        watch: "Fuerza funcional",
      },
    ],
  },
];
