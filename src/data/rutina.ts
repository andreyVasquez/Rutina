export interface Exercise {
  /** Par de fotos del ejercicio (posición inicial / final), en /public/exercises. */
  images?: [string, string];
  /** Icono SVG de respaldo cuando no hay foto (ver IconSprite). */
  icon?: string;
  title: string;
  reps: string;
  /** May contain inline HTML (e.g. <b>). Rendered with set:html. */
  desc: string;
  /** Tipo de entrenamiento a seleccionar en el Apple Watch. */
  watch?: string;
}

export interface DayData {
  id: string;
  num: string;
  kicker: string;
  title: string;
  quote?: string;
  /** El jueves usa una grilla compacta (.recov) en vez de .cards. */
  recovery?: boolean;
  exercises: Exercise[];
}

/** Fotos de free-exercise-db (dominio público), descargadas a /public/exercises. */
const img = (id: string): [string, string] => [
  `/exercises/${id}_0.jpg`,
  `/exercises/${id}_1.jpg`,
];

/**
 * Semana definitiva, construida alrededor del boxeo:
 *  - Lun, Mar, Mié y Vie: Smart Fit Éxito La Flora (fuerza + cardio).
 *  - Jueves: sesión de boxeo en Fight House Granada — ese día no hay nada más.
 */
export const days: DayData[] = [
  {
    id: "dia1",
    num: "01",
    kicker: "Lunes",
    title: "Potencia de Piernas y Cadera",
    quote:
      "El knockout no nace en el brazo: nace en el piso, sube por la cadera y sale por el puño.",
    exercises: [
      {
        images: img("Elliptical_Trainer"),
        title: "Calentamiento",
        reps: "8–10 min",
        desc: "Elíptica progresiva + 2 min de movilidad de cadera.",
        watch: "Elíptica",
      },
      {
        images: img("Front_Box_Jump"),
        title: "Salto al cajón",
        reps: "4 × 5",
        desc: "<b>Primero, en fresco.</b> Explota hacia arriba y aterriza suave. Baja del cajón caminando. Potencia pura de cadera y tobillo.",
        watch: "Fuerza funcional",
      },
      {
        images: img("Goblet_Squat"),
        title: "Sentadilla goblet",
        reps: "4 × 8–10",
        desc: "<b>RIR 1–2.</b> Mancuerna pesada al pecho: sube explosivo, baja en 2–3 s.",
        watch: "Fuerza tradicional",
      },
      {
        images: img("Romanian_Deadlift"),
        title: "Peso muerto rumano",
        reps: "4 × 8–10",
        desc: "Glúteo y femoral: <b>el motor del golpe</b>. Barra o mancuernas, espalda neutra siempre.",
        watch: "Fuerza tradicional",
      },
      {
        images: img("Dumbbell_Lunges"),
        title: "Zancadas con mancuernas",
        reps: "3 × 10 / lado",
        desc: "Fuerza unilateral: cada golpe empuja desde una sola pierna.",
        watch: "Fuerza tradicional",
      },
      {
        images: img("Standing_Cable_Wood_Chop"),
        title: "Leñador en polea (woodchop)",
        reps: "3 × 12 / lado",
        desc: "El patrón exacto del cruzado: rota desde la cadera con los brazos casi rectos.",
        watch: "Core",
      },
      {
        images: img("Bicycling_Stationary"),
        title: "Finisher: sprints en bici",
        reps: "6 × (30 s / 60 s)",
        desc: "30 s a tope, 60 s suave. Cardio de rounds sin castigar las articulaciones.",
        watch: "Bicicleta estática",
      },
    ],
  },
  {
    id: "dia2",
    num: "02",
    kicker: "Martes",
    title: "Fuerza de Golpeo — Torso",
    exercises: [
      {
        images: img("Elliptical_Trainer"),
        title: "Calentamiento",
        reps: "8–10 min",
        desc: "Elíptica + 2 min de banda para hombro.",
        watch: "Elíptica",
      },
      {
        images: img("Medicine_Ball_Chest_Pass"),
        title: "Pase de pecho con balón medicinal",
        reps: "4 × 6",
        desc: "<b>Primero, en fresco.</b> En la zona funcional: lanza el balón contra la pared como un jab, a máxima velocidad y sin frenar el brazo.",
        watch: "Fuerza funcional",
      },
      {
        images: img("Dumbbell_Bench_Press"),
        title: "Press de banca con mancuernas",
        reps: "4 × 8–10",
        desc: "<b>RIR 1–2.</b> Sube explosivo (como un golpe), baja en 2–3 s.",
        watch: "Fuerza tradicional",
      },
      {
        images: img("One-Arm_Dumbbell_Row"),
        title: "Remo con mancuerna a una mano",
        reps: "4 × 10 / lado",
        desc: "La espalda trae la mano de vuelta a la guardia y protege el hombro que golpea.",
        watch: "Fuerza tradicional",
      },
      {
        images: img("Wide-Grip_Lat_Pulldown"),
        title: "Jalón al pecho",
        reps: "3 × 10–12",
        desc: "Dorsal fuerte = golpes con más snap y mejor clinch.",
        watch: "Fuerza tradicional",
      },
      {
        images: img("Face_Pull"),
        title: "Face pull en polea",
        reps: "3 × 15",
        desc: "El seguro del hombro de un boxeador. Jala hacia la cara, codos altos.",
        watch: "Fuerza funcional",
      },
      {
        images: img("External_Rotation_with_Cable"),
        title: "Rotación externa en polea",
        reps: "2 × 15 / lado",
        desc: "Manguito rotador: pega hoy y sigue pegando en 10 años.",
        watch: "Fuerza funcional",
      },
    ],
  },
  {
    id: "dia3",
    num: "03",
    kicker: "Miércoles",
    title: "Cardio de Rounds y Core",
    quote:
      "Sin pesas pesadas hoy: mañana es día de boxeo y la velocidad se entrena fresco.",
    exercises: [
      {
        images: img("Rope_Jumping"),
        title: "Cuerda",
        reps: "4 rds × 3 min",
        desc: "El cardio clásico del boxeo: juego de pies, muñecas y ritmo. 1 min de descanso entre rounds.",
        watch: "Cuerda",
      },
      {
        images: img("Running_Treadmill"),
        title: "Rounds en caminadora",
        reps: "5 × (3 min / 1 min)",
        desc: "3 min a ritmo fuerte + 1 min caminando = un round con su descanso. Sube la velocidad cada semana.",
        watch: "Correr (cinta)",
      },
      {
        images: img("Plank"),
        title: "Plancha",
        reps: "3 × 45–60 s",
        desc: "Core rígido: transfiere la fuerza de la cadera al puño sin fugas.",
        watch: "Core",
      },
      {
        images: img("Russian_Twist"),
        title: "Russian twist",
        reps: "3 × 15 / lado",
        desc: "Rotación con control; el torso gira, la lumbar no sufre.",
        watch: "Core",
      },
      {
        images: img("Flat_Bench_Lying_Leg_Raise"),
        title: "Elevación de piernas en banco",
        reps: "3 × 12–15",
        desc: "Abdomen bajo que aguanta golpes al cuerpo.",
        watch: "Core",
      },
      {
        icon: "i-stretch",
        title: "Movilidad",
        reps: "5–8 min",
        desc: "Hombro, cadera y columna torácica. <b>Esto es lo que te mantiene sin lesiones.</b>",
        watch: "Flexibilidad",
      },
    ],
  },
  {
    id: "dia4",
    num: "04",
    kicker: "Jueves",
    title: "Boxeo — Fight House Granada",
    recovery: true,
    exercises: [
      {
        icon: "i-walk",
        title: "Prepárate",
        reps: "Durante el día",
        desc: "Hidrátate desde la mañana, come 2 h antes y lleva vendas, guantes y toalla. <b>Hoy no entrenas nada más: todo se deja en la clase.</b>",
      },
      {
        icon: "i-bag",
        title: "La sesión",
        reps: "1 clase",
        desc: "<b>Todo el golpeo de la semana es aquí.</b> Escucha al coach, técnica antes que fuerza, y sparring solo si toca.",
        watch: "Kickboxing",
      },
      {
        icon: "i-stretch",
        title: "Después",
        reps: "5–8 min",
        desc: "Estira hombros y cadera al salir; agua con electrolitos y proteína al llegar a casa.",
        watch: "Flexibilidad",
      },
    ],
  },
  {
    id: "dia5",
    num: "05",
    kicker: "Viernes",
    title: "Potencia Total y Cuello",
    exercises: [
      {
        images: img("Elliptical_Trainer"),
        title: "Calentamiento",
        reps: "8–10 min",
        desc: "Elíptica + 2 min de banda para hombro.",
        watch: "Elíptica",
      },
      {
        images: img("Push_Press"),
        title: "Push press",
        reps: "4 × 5",
        desc: "<b>Primero, en fresco.</b> Piernas + brazo en un solo impulso: la mecánica exacta de golpear con la cadera. Barra o mancuernas.",
        watch: "Fuerza funcional",
      },
      {
        images: img("Barbell_Hip_Thrust"),
        title: "Hip thrust",
        reps: "4 × 8–10",
        desc: "El glúteo es el músculo que rota tu cadera al golpear. Pausa 1 s arriba.",
        watch: "Fuerza tradicional",
      },
      {
        images: img("Pullups"),
        title: "Dominadas",
        reps: "3 × al fallo − 1",
        desc: "Si no llegas a 6, hazlas en la máquina asistida y progresa el peso de asistencia.",
        watch: "Fuerza tradicional",
      },
      {
        images: img("Dumbbell_Shoulder_Press"),
        title: "Press de hombros con mancuernas",
        reps: "3 × 8–10",
        desc: "Hombros que aguantan 3 minutos de guardia alta.",
        watch: "Fuerza tradicional",
      },
      {
        images: img("Plate_Twist"),
        title: "Russian twist con disco",
        reps: "3 × 12 / lado",
        desc: "Versión cargada del giro: potencia rotacional para el cruzado.",
        watch: "Core",
      },
      {
        images: img("Lying_Face_Up_Plate_Neck_Resistance"),
        title: "Cuello con disco",
        reps: "2 × 15",
        desc: "<b>Cuello fuerte = absorbes mejor los golpes.</b> Disco liviano, movimiento lento y controlado.",
        watch: "Fuerza funcional",
      },
    ],
  },
];
