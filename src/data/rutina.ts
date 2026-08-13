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
 *  - Lun, Mar, Mié y Vie: gym (máquinas Matrix, pesas, saco de boxeo y zona
 *    cardio: caminadoras, elípticas, escaladora y bici de aire).
 *    Cada sesión cabe en máximo 1 hora.
 *  - Jueves: sesión de boxeo personalizada, solo tú y el profe. Él dirige
 *    calentamiento, estiramiento y todo el trabajo — ese día no hay nada más.
 */
export const days: DayData[] = [
  {
    id: "dia1",
    num: "01",
    kicker: "Lunes · ~55 min",
    title: "Potencia de Piernas y Cadera",
    quote:
      "El knockout no nace en el brazo: nace en el piso, sube por la cadera y sale por el puño.",
    exercises: [
      {
        images: img("Elliptical_Trainer"),
        title: "Calentamiento",
        reps: "8 min",
        desc: "6 min de elíptica o escaladora progresiva + 2 min de movilidad de cadera.",
        watch: "Elíptica",
      },
      {
        images: img("Freehand_Jump_Squat"),
        title: "Sentadilla con salto",
        reps: "4 × 5",
        desc: "<b>Primero, en fresco.</b> Sin peso: baja rápido, explota hacia arriba y aterriza suave. Descansa 2 min entre series — es potencia, no cardio.",
        watch: "Fuerza funcional",
      },
      {
        images: img("Smith_Machine_Squat"),
        title: "Sentadilla en Smith",
        reps: "4 × 8–10",
        desc: "<b>RIR 1–2.</b> La misma de la app del gym: pies un pasito adelante, baja profundo, sube explosivo y controla la bajada 2–3 s. ¿Smith ocupado? Goblet con mancuerna pesada o prensa (Leg Press).",
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
        reps: "2 × 10 / lado",
        desc: "Fuerza unilateral: cada golpe empuja desde una sola pierna. Dos series duras bastan hoy.",
        watch: "Fuerza tradicional",
      },
      {
        images: img("Calf_Press_On_The_Leg_Press_Machine"),
        title: "Pantorrilla en máquina",
        reps: "2 × 12–15",
        desc: "<b>Pantorrillas fuertes = juego de pies vivo</b> y tres rounds en la punta de los pies. En la máquina de pantorrilla del gym (o en la prensa): sube lento y aprieta 1 s arriba.",
        watch: "Fuerza tradicional",
      },
      {
        images: img("Bicycling_Stationary"),
        title: "Finisher: sprints en bici de aire",
        reps: "6 × (30 s / 60 s)",
        desc: "La del ventilador: 30 s a tope con brazos y piernas, 60 s suave. <b>Mientras más fuerte pedaleas, más resiste</b> — cardio de rounds perfecto. Si está ocupada, cualquier bici estática sirve.",
        watch: "Bicicleta estática",
      },
    ],
  },
  {
    id: "dia2",
    num: "02",
    kicker: "Martes · ~55 min",
    title: "Fuerza de Golpeo — Torso",
    exercises: [
      {
        images: img("Elliptical_Trainer"),
        title: "Calentamiento",
        reps: "8 min",
        desc: "6 min de elíptica o bici suave + 2 min de banda para hombro.",
        watch: "Elíptica",
      },
      {
        icon: "i-bag",
        title: "Potencia: rectos al saco",
        reps: "4 × 10 golpes",
        desc: "<b>Primero, en fresco.</b> Al saco del gym: 10 rectos a máxima velocidad con buena técnica, 90 s de descanso y repite. <b>Golpea rápido, no pesado</b> — aquí se entrena el snap.",
        watch: "Kickboxing",
      },
      {
        images: img("Dumbbell_Bench_Press"),
        title: "Press de banca con mancuernas",
        reps: "4 × 8–10",
        desc: "<b>RIR 1–2.</b> Sube explosivo (como un golpe), baja en 2–3 s. ¿Bancas ocupadas? Press de pecho en máquina (sentado), mismo empujón.",
        watch: "Fuerza tradicional",
      },
      {
        images: img("One-Arm_Dumbbell_Row"),
        title: "Remo con mancuerna a una mano",
        reps: "3 × 10 / lado",
        desc: "La espalda trae la mano de vuelta a la guardia y protege el hombro que golpea.",
        watch: "Fuerza tradicional",
      },
      {
        images: img("Wide-Grip_Lat_Pulldown"),
        title: "Jalón al pecho",
        reps: "3 × 10–12",
        desc: "En la máquina Matrix: dorsal fuerte = golpes con más snap y mejor clinch.",
        watch: "Fuerza tradicional",
      },
      {
        images: img("Triceps_Pushdown_-_Rope_Attachment"),
        title: "Tríceps en polea",
        reps: "2 × 12–15",
        desc: "<b>El tríceps es el final del golpe:</b> extiende el codo en el último tramo del recto. Cuerda o barra, codos pegados al cuerpo; aquí sí puedes llegar al fallo. <b>En superserie con el curl</b> de abajo.",
        watch: "Fuerza tradicional",
      },
      {
        images: img("Hammer_Curls"),
        title: "Curl martillo",
        reps: "2 × 10–12",
        desc: "Justo después de cada serie de tríceps, sin descanso extra: agarre neutro, codos quietos. <b>Antebrazo y bíceps que sostienen el gancho</b> y cierran fuerte el guante.",
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
    kicker: "Miércoles · ~50 min",
    title: "Rounds de Saco y Core",
    quote:
      "Sin pesas hoy: cuerda, saco y core. Mañana entrenas con el profe — llega con piernas vivas y hombros frescos.",
    exercises: [
      {
        images: img("Rope_Jumping"),
        title: "Cuerda",
        reps: "3 rds × 3 min",
        desc: "El cardio clásico del boxeo: juego de pies, muñecas y ritmo. 1 min de descanso entre rounds; el primero, suave, es tu calentamiento.",
        watch: "Cuerda",
      },
      {
        icon: "i-bag",
        title: "Rounds de saco",
        reps: "3 rds × 3 min",
        desc: "<b>Técnica y flow, no potencia máxima:</b> combinaciones limpias, guardia arriba y muévete alrededor del saco. 1 min entre rounds. Si el saco está ocupado: rounds en caminadora (3 min fuerte / 1 min caminando).",
        watch: "Kickboxing",
      },
      {
        images: img("Standing_Cable_Wood_Chop"),
        title: "Leñador en polea (woodchop)",
        reps: "3 × 12 / lado",
        desc: "El patrón exacto del cruzado: rota desde la cadera con los brazos casi rectos. Peso moderado hoy.",
        watch: "Core",
      },
      {
        images: img("Plank"),
        title: "Plancha",
        reps: "3 × 45–60 s",
        desc: "Core rígido: transfiere la fuerza de la cadera al puño sin fugas.",
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
        images: img("Hyperextensions_Back_Extensions"),
        title: "Hiperextensión lumbar",
        reps: "2 × 12–15",
        desc: "En el banco romano del gym. <b>La lumbar es la otra mitad del core</b>: sostiene la postura round tras round y protege la espalda cuando rotas fuerte. Sube controlado, sin hiperextender.",
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
    kicker: "Jueves · solo la sesión",
    title: "Boxeo 1 a 1 con el Profe",
    recovery: true,
    exercises: [
      {
        icon: "i-walk",
        title: "Prepárate",
        reps: "Durante el día",
        desc: "Hidrátate desde la mañana, come 2 h antes y lleva vendas, guantes y toalla. <b>Hoy no pisas el gym: la sesión es el entrenamiento completo.</b>",
      },
      {
        icon: "i-bag",
        title: "La sesión (tú y el profe)",
        reps: "1 a 1",
        desc: "<b>Personalizada: el profe dirige calentamiento, estiramiento, técnica y todo el trabajo.</b> Tu único trabajo es llegar fresco, escuchar y dejarlo todo adentro.",
        watch: "Kickboxing",
      },
      {
        icon: "i-stretch",
        title: "Después",
        reps: "Al salir",
        desc: "El estiramiento ya lo hiciste con el profe. En casa: agua con electrolitos, proteína y a dormir bien — <b>hoy fue el día más duro de la semana</b>.",
      },
    ],
  },
  {
    id: "dia5",
    num: "05",
    kicker: "Viernes · ~55 min",
    title: "Potencia Total y Cuello",
    exercises: [
      {
        images: img("Elliptical_Trainer"),
        title: "Calentamiento",
        reps: "8 min",
        desc: "6 min de elíptica + 2 min de banda para hombro.",
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
        desc: "El glúteo es el músculo que rota tu cadera al golpear. Pausa 1 s arriba. <b>Usa la máquina de hip thrust del gym</b> (montaje en segundos); si está ocupada, barra sobre banco.",
        watch: "Fuerza tradicional",
      },
      {
        images: img("Pullups"),
        title: "Dominadas",
        reps: "3 × al fallo − 1",
        desc: "Si no llegas a 6, hazlas en la máquina asistida (Matrix) y progresa el peso de asistencia.",
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
