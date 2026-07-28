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
 * Versión Smart Fit centrada en máquinas y poleas: prensa, curl femoral,
 * jalón, remo en polea, pec deck inverso, crunch en máquina. Los rounds
 * de shadow salen del gym; queda la técnica del día 4 en casa.
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
        icon: "i-pulldown",
        title: "Jalón al pecho",
        reps: "4 × 8–10",
        desc: "<b>RIR 1–2.</b> Jala con los codos, no con las manos.",
        watch: "Fuerza tradicional",
      },
      {
        icon: "i-row",
        title: "Remo sentado en polea baja",
        reps: "4 × 10",
        desc: "Agarre estrecho; jala fuerte hacia el ombligo y controla la vuelta.",
        watch: "Fuerza tradicional",
      },
      {
        icon: "i-triceps",
        title: "Pull-over en polea alta (brazos rectos)",
        reps: "3 × 12",
        desc: "De pie frente a la polea, brazos casi rectos: baja la barra a la cadera sintiendo el dorsal.",
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
        title: "Deltoide posterior en pec deck inverso",
        reps: "3 × 15",
        desc: "Misma función que el face pull: hombro sano y postura, ahora en máquina.",
        watch: "Fuerza tradicional",
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
        icon: "i-chestpress",
        title: "Press de pecho en máquina",
        reps: "4 × 8–10",
        desc: "<b>RIR 1–2.</b> Empuja explosivo, baja en 2–3 s.",
        watch: "Fuerza tradicional",
      },
      {
        icon: "i-plyo",
        title: "Press inclinado en máquina / multipower",
        reps: "3 × 8–10",
        desc: "Pecho superior. Reemplaza las flexiones: mismo empuje, carga medible.",
        watch: "Fuerza tradicional",
      },
      {
        icon: "i-lateral",
        title: "Elevaciones laterales",
        reps: "3 × 12–15",
        desc: "Resistencia de hombro; controla la bajada.",
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
        title: "Rotación externa en polea baja",
        reps: "2 × 15 / lado",
        desc: "Manguito rotador con carga constante de la polea. Codo pegado al costado.",
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
        title: "Prensa de piernas",
        reps: "4 × 10–12",
        desc: "<b>RIR 1–2.</b> Pies a media altura, baja profundo sin despegar la lumbar del respaldo.",
        watch: "Fuerza tradicional",
      },
      {
        icon: "i-rdl",
        title: "Curl femoral en máquina",
        reps: "4 × 10–12",
        desc: "Cadena posterior: <b>el motor real de la potencia rotacional</b>. Controla la vuelta.",
        watch: "Fuerza tradicional",
      },
      {
        icon: "i-legext",
        title: "Extensión de piernas (accesorio)",
        reps: "3 × 12",
        desc: "Aprieta arriba 1 s.",
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
        title: "Crunch abdominal en máquina",
        reps: "3 × 12–15",
        desc: "Carga progresiva para el core: sube peso como en cualquier máquina.",
        watch: "Core",
      },
      {
        icon: "i-knee",
        title: "Elevación de piernas en silla romana",
        reps: "3 × 12–15",
        desc: "En el soporte de codos (capitán). Controla, no balancees.",
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
        desc: "Movilidad de hombro, cadera y columna torácica. <b>Esto es lo que te mantiene sin lesiones.</b>",
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
        reps: "10 min",
        desc: "Elíptica suave (es calentamiento).",
        watch: "Elíptica",
      },
      {
        icon: "i-ohp",
        title: "Press de hombros en máquina",
        reps: "4 × 8–10",
        desc: "<b>RIR 1–2.</b> Ahora va en fresco: empuja de verdad y progresa la placa.",
        watch: "Fuerza tradicional",
      },
      {
        icon: "i-pulldown",
        title: "Jalón al pecho (agarre cerrado)",
        reps: "3 × 10–12",
        desc: "Variante del día 1; equilibra todo el empuje de la semana.",
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
        icon: "i-rdl",
        title: "Encogimientos de trapecio (multipower)",
        reps: "3 × 12–15",
        desc: "Sube los hombros a las orejas, pausa 1 s arriba. Cuello fuerte que aguanta golpes.",
        watch: "Fuerza tradicional",
      },
      {
        icon: "i-facepull",
        title: "Deltoide posterior en pec deck inverso",
        reps: "3 × 15",
        desc: "Cierra la semana cuidando el manguito, en máquina.",
        watch: "Fuerza tradicional",
      },
    ],
  },
];
