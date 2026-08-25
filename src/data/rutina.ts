export interface AltDetail {
  title: string;
  /** Series × reps sugeridas al usarla como reemplazo. */
  reps: string;
  images?: [string, string];
  icon?: string;
  /** Una línea: por qué / cuándo. */
  desc: string;
  steps: string[];
}

/** Referencia a una alternativa del catálogo, con nota contextual opcional. */
export interface AltRef {
  id: string;
  note?: string;
}

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
  /** Cómo hacerlo, paso a paso. Abre el popup al tocar la tarjeta. */
  steps?: string[];
  /** Alternativas (ids de altCatalog) si la máquina está ocupada o quieres variar. */
  alternatives?: AltRef[];
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
 * Catálogo de alternativas: cada tarjeta del popup de un ejercicio lista sus
 * alternativas por id; al tocarlas se abre esta mini-guía (foto + pasos).
 */
export const altCatalog: Record<string, AltDetail> = {
  /* ---- Cardio / calentamiento ---- */
  "escaladora": {
    title: "Escaladora",
    reps: "6–8 min",
    images: img("Stairmaster"),
    desc: "Cardio de piernas sin impacto: activa glúteo y sube el pulso más rápido que la elíptica.",
    steps: [
      "Pisa el escalón completo, sin quedarte en la punta.",
      "Ritmo constante y postura erguida: no te cuelgues de las manijas.",
      "Sube un nivel de velocidad cada 2 min si vas cómodo.",
    ],
  },
  "bici-suave": {
    title: "Bici estática suave",
    reps: "6–8 min",
    images: img("Bicycling_Stationary"),
    desc: "Calentamiento sin impacto cuando las elípticas están ocupadas.",
    steps: [
      "Asiento a la altura de la cadera; rodilla casi extendida abajo.",
      "Pedalea suave los primeros 2 min y sube la resistencia poco a poco.",
      "Termina sudando ligero, sin agitarte.",
    ],
  },
  "caminadora-cuesta": {
    title: "Caminadora en cuesta",
    reps: "6–8 min",
    images: img("Running_Treadmill"),
    desc: "Caminar rápido con inclinación calienta piernas y cadera sin castigar rodillas.",
    steps: [
      "Inclinación 8–10, velocidad de caminata rápida (5.5–6.5 km/h).",
      "Camina erguido, sin agarrarte de las barandas.",
      "Sube un punto de velocidad cada 2 min.",
    ],
  },
  "rounds-caminadora": {
    title: "Rounds en caminadora",
    reps: "3–5 × (3 min / 1 min)",
    images: img("Running_Treadmill"),
    desc: "El formato de round llevado a la caminadora: 3 min fuertes, 1 min caminando.",
    steps: [
      "3 min a ritmo fuerte (o con inclinación) = un round.",
      "1 min caminando suave = el descanso entre rounds.",
      "Sube velocidad o inclinación cada semana; anota la del último round.",
    ],
  },
  "eliptica-rapida": {
    title: "Elíptica rápida",
    reps: "3–5 × (3 min / 1 min)",
    images: img("Elliptical_Trainer"),
    desc: "Mismos bloques de round, cero impacto en tobillos y rodillas.",
    steps: [
      "3 min a resistencia alta y ritmo fuerte.",
      "1 min suave sin soltar el movimiento.",
      "Piernas y brazos empujan a la vez: úsala completa.",
    ],
  },
  "bici-sprints": {
    title: "Bici estática (sprints)",
    reps: "6 × (30 s / 60 s)",
    images: img("Bicycling_Stationary"),
    desc: "El mismo finisher de rounds cuando la bici de aire está ocupada.",
    steps: [
      "Sube la resistencia a un nivel que te cueste de verdad.",
      "30 s pedaleando a tope, de pie si hace falta.",
      "60 s suave con poca resistencia. Repite 6 veces.",
    ],
  },
  "remo-suave-polea": {
    title: "Remo suave en polea",
    reps: "2 × 15 livianas",
    images: img("Seated_Cable_Rows"),
    desc: "Activa espalda y hombro antes de empujar: sangre donde va a haber trabajo.",
    steps: [
      "Peso liviano: la mitad de tu remo normal.",
      "15 repeticiones lentas apretando las escápulas 1 s.",
      "Sin fatigarte: esto es calentamiento, no serie efectiva.",
    ],
  },

  /* ---- Pierna y cadera ---- */
  "salto-cajon": {
    title: "Salto al cajón",
    reps: "4 × 5",
    images: img("Front_Box_Jump"),
    desc: "Mismo patrón explosivo que la sentadilla con salto, con aterrizaje más amable.",
    steps: [
      "Cajón estable a la altura de la rodilla o menos.",
      "Baja rápido a media sentadilla y salta al centro del cajón.",
      "Aterriza suave y completo; <b>baja caminando</b>, nunca de salto.",
      "2 min de descanso entre series: velocidad máxima.",
    ],
  },
  "desplante-pliometrico": {
    title: "Desplante pliométrico",
    reps: "3 × 6 / lado",
    icon: "i-plyo",
    desc: "Zancada con cambio de pierna en el aire: potencia unilateral, como empujas al golpear.",
    steps: [
      "Posición de zancada, ambas rodillas a 90°.",
      "Salta vertical y <b>cambia de pierna en el aire</b>.",
      "Aterriza suave directo en la zancada del otro lado.",
      "Si es mucho, alterna zancadas explosivas sin salto.",
    ],
  },
  "goblet-explosiva": {
    title: "Sentadilla goblet explosiva",
    reps: "4 × 6",
    images: img("Goblet_Squat"),
    desc: "Potencia de pierna sin impacto: sube a máxima velocidad, sin despegar del piso.",
    steps: [
      "Mancuerna media al pecho, codos abajo.",
      "Baja controlado hasta romper la paralela.",
      "<b>Sube lo más rápido que puedas</b>, como si fueras a saltar — sin saltar.",
    ],
  },
  "goblet": {
    title: "Sentadilla goblet",
    reps: "4 × 8–10",
    images: img("Goblet_Squat"),
    desc: "La sentadilla libre más segura entrenando solo: la mancuerna te endereza el torso.",
    steps: [
      "Mancuerna pesada vertical al pecho, codos apuntando abajo.",
      "Baja en 2–3 s hasta que los codos pasen entre las rodillas.",
      "Sube explosivo con el pecho arriba. RIR 1–2.",
    ],
  },
  "prensa": {
    title: "Prensa (Leg Press)",
    reps: "3–4 × 8–10",
    images: img("Leg_Press"),
    desc: "El empujón de pierna con cero técnica que vigilar: ideal con el gym lleno.",
    steps: [
      "Pies al centro de la plataforma, al ancho de hombros.",
      "Baja controlado hasta que las rodillas casi toquen el pecho, sin despegar la cadera.",
      "Empuja fuerte sin bloquear las rodillas arriba.",
    ],
  },
  "prensa-explosiva": {
    title: "Prensa explosiva",
    reps: "4 × 6",
    images: img("Leg_Press"),
    desc: "Potencia de pierna en máquina: la plataforma sale disparada, tú la recibes lento.",
    steps: [
      "Peso moderado: 60–70% de tu prensa normal.",
      "<b>Empuja lo más rápido posible</b> en cada repetición, sin bloquear las rodillas.",
      "Baja en 2 s controlando. Si la velocidad cae, termina la serie.",
    ],
  },
  "hack-squat": {
    title: "Hack squat inclinado",
    reps: "3 × 8–10",
    images: img("Hack_Squat"),
    desc: "Sentadilla guiada que carga el cuádriceps sin pedirle nada a la espalda.",
    steps: [
      "Hombros bajo las almohadillas, pies un paso adelante.",
      "Baja profundo en 2–3 s con la espalda pegada al respaldo.",
      "Sube explosivo sin bloquear las rodillas.",
    ],
  },
  "leg-curl": {
    title: "Femoral en máquina (leg curl)",
    reps: "3 × 10–12",
    images: img("Seated_Leg_Curl"),
    desc: "Aísla el femoral — el freno de tus sprints y derribos — sin cargar la espalda.",
    steps: [
      "Ajusta el respaldo: la rodilla alineada con el eje de la máquina.",
      "Flexiona con fuerza hasta la máxima contracción.",
      "Vuelve en 2–3 s resistiendo; no dejes que el peso rebote.",
    ],
  },
  "rumano-mancuernas": {
    title: "Rumano con mancuernas",
    reps: "4 × 8–10",
    images: img("Romanian_Deadlift"),
    desc: "La bisagra de cadera con libertad total de movimiento.",
    steps: [
      "Mancuernas al frente de los muslos, rodillas apenas flexionadas.",
      "Cadera atrás: las mancuernas bajan <b>rozando las piernas</b>.",
      "Al sentir el estirón del femoral, aprieta el glúteo y sube.",
    ],
  },
  "hiperextension-disco": {
    title: "Hiperextensión con disco",
    reps: "3 × 10–12",
    images: img("Hyperextensions_Back_Extensions"),
    desc: "El banco romano cargado: glúteo, femoral y lumbar en un solo movimiento.",
    steps: [
      "Abraza un disco al pecho en el banco romano.",
      "Baja controlado con la espalda larga.",
      "Sube hasta la línea recta apretando glúteo — sin pasarte arriba.",
    ],
  },
  "acarreo-maleta": {
    title: "Acarreo tipo maleta",
    reps: "3 × 30 m / mano",
    images: img("Farmers_Walk"),
    desc: "Una sola mancuerna: el core pelea para que no te tuerzas — anti-flexión lateral pura.",
    steps: [
      "Una mancuerna pesada en una mano, postura perfecta.",
      "Camina 30 m <b>sin inclinarte hacia ningún lado</b>.",
      "Cambia de mano y vuelve. Eso es una serie.",
    ],
  },
  "dead-hang": {
    title: "Colgado de barra (dead hang)",
    reps: "3 × 30–45 s",
    images: img("Pullups"),
    desc: "Agarre puro y descompresión de hombros: cuélgate y aguanta.",
    steps: [
      "Cuélgate de la barra de dominadas con agarre completo.",
      "Hombros activos (no orejas): aguanta 30–45 s.",
      "Cuando 45 s sean fáciles, cuelga una mano a la vez por 10 s.",
    ],
  },
  "encogimientos-polea": {
    title: "Encogimientos en polea",
    reps: "3 × 12",
    images: img("Cable_Shrugs"),
    desc: "Trapecio y agarre en el multifuncional: sostener pesado es la mitad del ejercicio.",
    steps: [
      "Barra o manerales en la polea baja, brazos largos.",
      "Encoge los hombros hacia las orejas y <b>aguanta 2 s arriba</b>.",
      "Baja lento. El agarre no se suelta en toda la serie.",
    ],
  },
  "pantorrilla-prensa": {
    title: "Pantorrilla en la prensa",
    reps: "2 × 12–15",
    images: img("Calf_Press_On_The_Leg_Press_Machine"),
    desc: "La misma pantorrilla, empujando la plataforma de la prensa con la punta del pie.",
    steps: [
      "Piernas casi extendidas, solo la punta del pie en la plataforma.",
      "Empuja hasta la máxima extensión y aprieta 1 s.",
      "Baja en 2 s hasta el estiramiento completo.",
    ],
  },
  "talones-smith": {
    title: "Talones en la Smith",
    reps: "2 × 12–15",
    images: img("Smith_Machine_Calf_Raise"),
    desc: "Elevación de talones con barra guiada: carga pesado sin equilibrio que vigilar.",
    steps: [
      "Barra en los trapecios, punta de pies sobre un disco.",
      "Sube a la punta de los pies y aprieta 1 s.",
      "Baja lento hasta que el talón quede por debajo del disco.",
    ],
  },
  "pantorrilla-una-pierna": {
    title: "A una pierna con mancuerna",
    reps: "2 × 12 / lado",
    images: img("Standing_Dumbbell_Calf_Raise"),
    desc: "Empareja izquierda y derecha: el juego de pies no tiene lado débil.",
    steps: [
      "Punta del pie en un escalón, mancuerna del mismo lado.",
      "La otra mano se apoya para el equilibrio.",
      "Sube y baja lento con rango completo.",
    ],
  },
  "puente-una-pierna": {
    title: "Puente a una pierna",
    reps: "3 × 12 / lado",
    images: img("Butt_Lift_Bridge"),
    desc: "El puente (upa) en el piso: glúteo unilateral sin ninguna máquina.",
    steps: [
      "Boca arriba, un pie plantado y la otra pierna estirada.",
      "Empuja con el talón y sube la cadera hasta la línea recta.",
      "1 s arriba apretando; baja controlado. Empieza con las dos piernas si hace falta.",
    ],
  },
  "patada-gluteo-polea": {
    title: "Patada de glúteo en polea",
    reps: "3 × 12 / lado",
    images: img("Glute_Kickback"),
    desc: "Del día A de tu app: glúteo aislado con la pierna flexionada.",
    steps: [
      "Tobillera en la polea baja, apóyate del marco.",
      "Patea atrás y arriba con la rodilla flexionada.",
      "Aprieta 1 s al final; no arquees la lumbar.",
    ],
  },
  "hip-thrust-barra": {
    title: "Hip thrust con barra",
    reps: "4 × 8–10",
    images: img("Barbell_Hip_Thrust"),
    desc: "El clásico sobre banco cuando la máquina está ocupada.",
    steps: [
      "Espalda alta en el banco, barra (con almohadilla) sobre la cadera.",
      "Empuja con los talones hasta quedar recto de rodillas a hombros.",
      "1 s arriba apretando el glúteo; baja controlado.",
    ],
  },

  /* ---- Empuje ---- */
  "shadow-velocidad": {
    title: "Shadow con mancuernitas",
    reps: "4 × 15 s",
    icon: "i-shadow",
    desc: "Golpes al aire con 1–2 kg: el mismo trabajo de velocidad cuando el saco está ocupado.",
    steps: [
      "Mancuernitas de 1–2 kg (no más), guardia arriba.",
      "15 s de rectos a máxima velocidad con técnica limpia.",
      "Suelta las mancuernas y lanza 5 golpes al aire: sentirás las manos volar.",
    ],
  },
  "shadow-sprawls": {
    title: "Shadow con sprawls",
    reps: "3 rds × 3 min",
    icon: "i-shadow",
    desc: "El round completo sin saco: combinaciones al aire con los mismos sprawls por minuto.",
    steps: [
      "Pelea contra tu sombra: combinaciones limpias moviéndote como en el ring.",
      "En cada cambio de minuto: <b>cambio de nivel + sprawl</b> y sigues.",
      "Guardia arriba y golpes con intención — que alguien crea que peleas de verdad.",
    ],
  },
  "golpe-en-polea": {
    title: "Golpe en polea",
    reps: "4 × 8",
    images: img("Standing_Cable_Chest_Press"),
    desc: "La polea como saco: press de pie ligero a máxima velocidad, girando cadera y talón como en el recto.",
    steps: [
      "Polea a la altura del pecho, de espaldas a la torre, postura de guardia.",
      "Peso ligero: <b>empuja como si lanzaras el recto</b>, girando cadera y talón.",
      "La mano vuelve rápida a la guardia; alterna brazos o hazlo a dos manos.",
      "Si la velocidad cae, ahí termina la serie.",
    ],
  },
  "flexiones-palmada": {
    title: "Flexiones con palmada",
    reps: "4 × 5",
    images: img("Pushups"),
    desc: "Potencia de empuje sin ningún equipo: el piso es tu saco.",
    steps: [
      "Posición de flexión firme, core apretado.",
      "Baja rápido y <b>empuja tan fuerte que las manos despeguen</b>.",
      "Aplaude y recibe el piso con los codos suaves.",
      "¿Muy difícil? Flexiones explosivas sin palmada, manos en un banco.",
    ],
  },
  "pase-balon": {
    title: "Pase de pecho con balón",
    reps: "4 × 6",
    images: img("Medicine_Ball_Chest_Pass"),
    desc: "Si algún día hay balón medicinal: lánzalo como un jab, sin frenar el brazo.",
    steps: [
      "Balón al pecho, frente a una pared firme.",
      "Paso corto y <b>lanza a máxima velocidad</b>.",
      "Recibe, resetea y repite. Nada de lanzar cansado.",
    ],
  },
  "press-mancuernas": {
    title: "Press con mancuernas",
    reps: "4 × 8–10",
    images: img("Dumbbell_Bench_Press"),
    desc: "Más rango y estabilización que la máquina, si hay banca libre.",
    steps: [
      "Mancuernas a los lados del pecho, pies firmes en el piso.",
      "Empuja explosivo hasta juntarlas arriba sin chocarlas.",
      "Baja en 2–3 s hasta un estiramiento cómodo. RIR 1–2.",
    ],
  },
  "press-inclinado-barra": {
    title: "Press inclinado con barra",
    reps: "3 × 8–10",
    images: img("Barbell_Incline_Bench_Press_-_Medium_Grip"),
    desc: "Del día B de tu app: pega más al pecho alto y al hombro frontal.",
    steps: [
      "Banco a 30–45°, agarre un poco más ancho que los hombros.",
      "Baja la barra a la parte alta del pecho en 2 s.",
      "Empuja fuerte sin despegar la cadera del banco.",
    ],
  },
  "peck-fly": {
    title: "Aperturas en peck fly",
    reps: "3 × 10–12",
    images: img("Butterfly"),
    desc: "Estación 26: aísla el pectoral con el hombro protegido por la máquina.",
    steps: [
      "Asiento ajustado: manijas a la altura del pecho.",
      "Junta las manijas al frente con los codos apenas flexionados.",
      "Aprieta 1 s y abre lento hasta el estiramiento cómodo.",
    ],
  },
  "press-militar": {
    title: "Press militar estricto",
    reps: "4 × 5–6",
    images: img("Standing_Military_Press"),
    desc: "Sin impulso de piernas: hombro puro y core que aguanta la carga arriba.",
    steps: [
      "Barra en las clavículas, pies al ancho de cadera, glúteo apretado.",
      "Empuja vertical sin ayudarte con las rodillas.",
      "Cabeza pasa 'a través' al final; baja controlado.",
    ],
  },
  "push-press-mancuernas": {
    title: "Push press con mancuernas",
    reps: "4 × 5",
    images: img("Standing_Dumbbell_Press"),
    desc: "El mismo gesto explosivo si el rack está ocupado.",
    steps: [
      "Mancuernas a los hombros, codos al frente.",
      "Mini-flexión de rodillas y <b>extiende todo a la vez</b>.",
      "Baja controlado a los hombros y resetea.",
    ],
  },
  "press-maquina-explosivo": {
    title: "Press en máquina explosivo",
    reps: "4 × 6",
    images: img("Leverage_Shoulder_Press"),
    desc: "Último recurso de potencia: empuja rápido con la máquina de hombro.",
    steps: [
      "Peso moderado: 60–70% de tu press normal.",
      "<b>Empuja lo más rápido posible</b> en cada repetición.",
      "Baja lento. Si la velocidad cae, termina la serie.",
    ],
  },

  /* ---- Jalón ---- */
  "remo-mancuerna": {
    title: "Remo con mancuerna a una mano",
    reps: "3 × 10 / lado",
    images: img("One-Arm_Dumbbell_Row"),
    desc: "Un lado a la vez, como jalas en el clinch: mano y rodilla en el banco.",
    steps: [
      "Mano y rodilla en el banco, espalda plana como una mesa.",
      "Jala la mancuerna a la cadera llevando el codo atrás.",
      "1 s de apretón arriba; baja hasta el estiramiento completo.",
    ],
  },
  "remo-unilateral-polea": {
    title: "Remo unilateral en polea",
    reps: "3 × 10 / lado",
    images: img("Seated_One-arm_Cable_Pulley_Rows"),
    desc: "Tu app lo llama Remo Polea Unilateral: jala con un brazo mientras el core resiste el giro.",
    steps: [
      "Sentado frente a la polea, agarre en una mano.",
      "Jala al abdomen <b>sin dejar que el torso rote</b>.",
      "Regresa lento; cambia de brazo al terminar.",
    ],
  },
  "remo-palanca": {
    title: "Remo en máquina de palanca",
    reps: "3 × 10–12",
    images: img("Leverage_Iso_Row"),
    desc: "La máquina de remo con apoyo al pecho: espalda sin que la lumbar trabaje de más.",
    steps: [
      "Pecho apoyado en la almohadilla, agarre neutro.",
      "Jala llevando los codos atrás y aprieta 1 s.",
      "Regresa hasta estirar del todo el dorsal.",
    ],
  },
  "dominada-asistida": {
    title: "Dominada asistida",
    reps: "3 × 6–8",
    images: img("Band_Assisted_Pull-Up"),
    desc: "El patrón completo de la dominada con la ayuda justa (máquina de contrapeso o banda).",
    steps: [
      "En la asistida: contrapeso que te deje sacar 6–8 limpias.",
      "Jala hasta pasar la barbilla, pecho a la barra.",
      "Baja en 2–3 s. Cada semana, un poco menos de ayuda.",
    ],
  },
  "jalon-unilateral": {
    title: "Jalón unilateral",
    reps: "3 × 10 / lado",
    images: img("Wide-Grip_Lat_Pulldown"),
    desc: "Estación 33 de tu app: un brazo a la vez, el dorsal no puede esconderse.",
    steps: [
      "Maneral individual en la polea alta.",
      "Jala hacia el pecho llevando el codo a las costillas.",
      "Controla la subida sin que el hombro se dispare a la oreja.",
    ],
  },
  "jalon-cerrado": {
    title: "Jalón agarre cerrado",
    reps: "3 × 10–12",
    images: img("Close-Grip_Front_Lat_Pulldown"),
    desc: "Codos al frente: más bíceps y dorsal bajo — el jalón del clinch.",
    steps: [
      "Triángulo o agarre estrecho en la polea alta.",
      "Pecho arriba: jala el agarre al esternón.",
      "Aprieta 1 s abajo y sube controlado.",
    ],
  },

  /* ---- Brazo ---- */
  "press-frances-z": {
    title: "Press francés con barra Z",
    reps: "2 × 10–12",
    images: img("EZ-Bar_Skullcrusher"),
    desc: "Del día B de tu app: tríceps con estiramiento completo.",
    steps: [
      "Acostado, barra Z sobre la frente con codos al techo.",
      "Extiende solo el codo hasta estirar los brazos.",
      "Baja en 2 s controlando: los codos no se abren.",
    ],
  },
  "maquina-triceps": {
    title: "Máquina de tríceps",
    reps: "2 × 12–15",
    images: img("Machine_Triceps_Extension"),
    desc: "La Arm Extension del catálogo: tríceps guiado si el multifuncional está lleno.",
    steps: [
      "Ajusta el asiento: codos alineados con el eje.",
      "Extiende hasta el final y aprieta 1 s.",
      "Regresa lento sin soltar la tensión.",
    ],
  },
  "fondos-banco": {
    title: "Fondos en banco",
    reps: "2 × 10–15",
    images: img("Bench_Dips"),
    desc: "Tríceps sin ningún equipo: solo un banco y tu peso.",
    steps: [
      "Manos al borde del banco, pies adelante.",
      "Baja hasta 90° de codo, cerca del banco.",
      "Empuja fuerte arriba; hombros lejos de las orejas.",
    ],
  },
  "curl-martillo-mancuernas": {
    title: "Curl martillo con mancuernas",
    reps: "2 × 10–12",
    images: img("Hammer_Curls"),
    desc: "El clásico: agarre neutro que construye antebrazo y bíceps a la vez.",
    steps: [
      "Mancuernas a los lados, palmas enfrentadas.",
      "Sube sin girar la muñeca ni balancear el torso.",
      "Baja en 2 s resistiendo.",
    ],
  },
  "curl-scott": {
    title: "Curl en máquina Scott",
    reps: "2 × 10–12",
    images: img("Machine_Preacher_Curls"),
    desc: "Del catálogo de tu app: el banco predicador elimina el impulso — bíceps aislado.",
    steps: [
      "Axilas al borde del cojín, brazos completamente apoyados.",
      "Sube hasta la contracción máxima sin despegar los codos.",
      "Baja lento hasta casi estirar. Sin rebotes abajo.",
    ],
  },
  "curl-barra-z": {
    title: "Curl con barra Z",
    reps: "2 × 10–12",
    images: img("EZ-Bar_Curl"),
    desc: "Agarre supino en barra Z: muñecas cómodas, bíceps completo.",
    steps: [
      "Barra Z con agarre a la anchura de los hombros.",
      "Codos pegados: sube sin balancear el cuerpo.",
      "Baja en 2 s hasta estirar del todo.",
    ],
  },

  /* ---- Hombro sano ---- */
  "facepull-banda": {
    title: "Face pull con banda",
    reps: "3 × 15",
    icon: "i-facepull",
    desc: "Tu banda en cualquier poste: idéntico al de polea.",
    steps: [
      "Banda anclada a la altura de la cara.",
      "Jala hacia la frente abriendo las manos, codos altos.",
      "Aprieta atrás 1 s y regresa lento.",
    ],
  },
  "reverse-peck": {
    title: "Aperturas invertidas en peck fly",
    reps: "3 × 12–15",
    images: img("Reverse_Machine_Flyes"),
    desc: "El peck fly al revés: hombro posterior y espalda alta guiados.",
    steps: [
      "Siéntate de frente al respaldo con las manijas atrás.",
      "Abre los brazos hacia atrás apretando las escápulas.",
      "1 s de apretón y regresa lento.",
    ],
  },
  "posteriores-mancuernas": {
    title: "Posteriores con mancuernas",
    reps: "3 × 12–15",
    images: img("Seated_Bent-Over_Rear_Delt_Raise"),
    desc: "Inclinado al frente: hombro posterior con mancuernas livianas.",
    steps: [
      "Sentado, torso inclinado casi al muslo.",
      "Abre los brazos a los lados como alas, codos suaves.",
      "Baja lento sin dar impulso con el torso.",
    ],
  },

  /* ---- Core y cuello ---- */
  "russian-twist-disco": {
    title: "Russian twist con disco",
    reps: "3 × 12 / lado",
    images: img("Plate_Twist"),
    desc: "El giro cargado sentado: rotación con control total.",
    steps: [
      "Sentado, tronco atrás 45°, disco al pecho.",
      "Gira desde las costillas llevando el disco a cada lado.",
      "Sin encorvar la espalda; pies arriba para el nivel pro.",
    ],
  },
  "pallof": {
    title: "Pallof press en polea",
    reps: "3 × 10 / lado",
    icon: "i-pallof",
    desc: "Anti-rotación: aguanta recto lo que la polea quiere girar — el core del clinch.",
    steps: [
      "Polea a la altura del pecho, párate de lado y da un paso para tensar.",
      "Extiende los brazos al frente y <b>aguanta 3 s sin girar</b>.",
      "Regresa al pecho y repite. Cambia de lado.",
    ],
  },
  "lenador-banda": {
    title: "Leñador con banda",
    reps: "3 × 12 / lado",
    icon: "i-chop",
    desc: "El mismo patrón diagonal del cruzado, con tu banda en cualquier poste.",
    steps: [
      "Banda anclada arriba; párate de lado.",
      "Gira desde la cadera llevando la banda a la rodilla contraria.",
      "Controla la vuelta: la banda no te gana.",
    ],
  },
  "rodillas-colgado": {
    title: "Rodillas al pecho colgado",
    reps: "3 × 10–12",
    images: img("Hanging_Leg_Raise"),
    desc: "Colgado de la barra: abdomen bajo y agarre gratis en el mismo ejercicio.",
    steps: [
      "Cuélgate de la barra con hombros activos.",
      "Sube las rodillas al pecho <b>sin balancearte</b>.",
      "Baja lento hasta estirar. Piernas rectas = nivel pro.",
    ],
  },
  "elevacion-piernas-banco": {
    title: "Elevación de piernas en banco",
    reps: "3 × 12–15",
    images: img("Flat_Bench_Lying_Leg_Raise"),
    desc: "El clásico de abdomen bajo en banco plano, para cuando la polea esté llena.",
    steps: [
      "Acostado en el banco, agárrate del borde detrás de tu cabeza.",
      "Sube las piernas casi rectas hasta la vertical.",
      "Baja lento en 2–3 s <b>sin que la lumbar se despegue</b> del banco.",
    ],
  },
  "superman": {
    title: "Superman en el piso",
    reps: "3 × 12 (2 s arriba)",
    images: img("Superman"),
    desc: "Lumbar sin ningún equipo: brazos y piernas al aire.",
    steps: [
      "Boca abajo, brazos extendidos al frente.",
      "Despega brazos y piernas a la vez y <b>aguanta 2 s</b>.",
      "Baja con control y repite sin rebotar.",
    ],
  },
  "extension-lumbar-maquina": {
    title: "Extensión lumbar en máquina",
    reps: "3 × 12–15",
    icon: "i-legext",
    desc: "La máquina selectorizada de lumbar: el mismo arco del banco romano, con el peso regulable en la torre.",
    steps: [
      "Ajusta el cojín a la altura de los omóplatos y fija los pies.",
      "Empuja hacia atrás con la espalda larga hasta la extensión completa.",
      "Aprieta 1 s y vuelve lento, sin dejar caer la placa.",
    ],
  },
  "buenos-dias-banda": {
    title: "Buenos días con banda",
    reps: "3 × 15",
    icon: "i-rdl",
    desc: "Bisagra ligera de alta repetición: lumbar y femoral despiertos.",
    steps: [
      "Banda pisada y pasada por detrás del cuello.",
      "Cadera atrás con la espalda larga hasta inclinar el torso.",
      "Aprieta el glúteo para volver arriba.",
    ],
  },
  "cuello-isometricos": {
    title: "Isométricos de cuello",
    reps: "2 × 10 s × 4 direcciones",
    images: img("Lying_Face_Up_Plate_Neck_Resistance"),
    desc: "Tu mano es la resistencia: cuello fuerte en cualquier lugar, sin equipo.",
    steps: [
      "Empuja la cabeza contra tu mano <b>sin que se mueva</b>: 10 s al frente.",
      "Repite hacia atrás y a cada lado.",
      "Presión progresiva: empieza suave y sube.",
    ],
  },
  "cuello-banda": {
    title: "Cuello con banda",
    reps: "2 × 12 × 4 direcciones",
    images: img("Lying_Face_Up_Plate_Neck_Resistance"),
    desc: "Banda anclada a un poste: resistencia elástica en las 4 direcciones.",
    steps: [
      "Banda alrededor de la cabeza, anclada a un poste.",
      "Aléjate hasta sentir tensión y mueve la cabeza contra la banda, lento.",
      "12 repeticiones al frente, atrás y a cada lado.",
    ],
  },
};

/**
 * Semana definitiva, construida alrededor del MMA:
 *  - Lun, Mar y Mié: gym (máquinas Matrix, pesas, saco de boxeo y zona
 *    cardio: caminadoras, elípticas, escaladora y bici de aire).
 *    Cada sesión cabe en máximo 1 hora: potencia de cadera, agarre, rotación,
 *    cuello y cardio de rounds.
 *  - Jueves: sesión personalizada 1 a 1 con el profe. Él dirige calentamiento,
 *    estiramiento y todo el trabajo — ese día no hay nada más.
 *  - Viernes: descanso obligado (pico y placa) — y cae perfecto tras 4 días.
 *  - Sábado o domingo: pádel 1–2 h; el otro día del finde, descanso total.
 *
 * Cada ejercicio trae `steps` (paso a paso) y `alternatives` (ids del catálogo
 * de arriba); al tocar la tarjeta se abren en un popup, y cada alternativa
 * abre a su vez su propia mini-guía.
 */
export const days: DayData[] = [
  {
    id: "dia1",
    num: "01",
    kicker: "Lunes · ~55 min",
    title: "Potencia de Piernas y Cadera",
    quote:
      "La potencia nace en el piso: sube por la cadera y sale por el puño — o se convierte en el derribo.",
    exercises: [
      {
        images: img("Elliptical_Trainer"),
        title: "Calentamiento",
        reps: "8 min",
        desc: "6 min de elíptica o escaladora progresiva + 2 min de movilidad de cadera.",
        watch: "Elíptica",
        steps: [
          "Arranca suave: los primeros 2 min a ritmo de charla.",
          "Sube la resistencia poco a poco hasta terminar los 6 min sudando ligero, sin agitarte.",
          "Remata con 2 min de movilidad de cadera: círculos amplios, zancada profunda 20 s por lado y una sentadilla profunda sin peso.",
        ],
        alternatives: [
          { id: "escaladora", note: "activa más glúteo y sube el pulso más rápido." },
          { id: "bici-suave", note: "si las elípticas están ocupadas." },
          { id: "caminadora-cuesta", note: "caminando rápido con inclinación 8–10." },
        ],
      },
      {
        images: img("Freehand_Jump_Squat"),
        title: "Sentadilla con salto",
        reps: "3 × 5",
        desc: "<b>Primero, en fresco.</b> Sin peso: baja rápido, explota hacia arriba y aterriza suave. Descansa 2 min entre series — es potencia, no cardio.",
        watch: "Fuerza funcional",
        steps: [
          "Pies al ancho de hombros, manos al frente o en la cadera.",
          "Baja rápido hasta media sentadilla.",
          "<b>Explota hacia arriba</b>: cada salto, lo más alto que puedas.",
          "Aterriza suave con las rodillas flexionadas, resetea 1–2 s y repite.",
          "Descansa 2 min entre series: velocidad máxima o no cuenta.",
        ],
        alternatives: [
          { id: "prensa-explosiva", note: "la potencia en máquina: máxima velocidad, sin bloquear." },
          { id: "salto-cajon", note: "si consigues un cajón estable: aterrizaje más amable." },
          { id: "desplante-pliometrico", note: "zancada con cambio de pierna en el aire." },
          { id: "goblet-explosiva", note: "si las rodillas se quejan hoy: velocidad sin salto." },
        ],
      },
      {
        images: img("Smith_Machine_Squat"),
        title: "Sentadilla en Smith",
        reps: "4 × 8–10",
        desc: "<b>RIR 1–2.</b> La misma de la app del gym: pies un pasito adelante, baja profundo, sube explosivo y controla la bajada 2–3 s. ¿Smith ocupado? Prensa (Leg Press) o goblet con mancuerna pesada.",
        watch: "Fuerza tradicional",
        steps: [
          "Barra a la altura de los hombros; párate con los pies un pasito adelante del cuerpo.",
          "Apoya la barra en los trapecios, destraba y baja controlado en 2–3 s hasta romper la paralela.",
          "<b>Sube explosivo</b>, como si despegaras para un derribo.",
          "Deja 1–2 repeticiones en reserva y anota el peso en la app.",
        ],
        alternatives: [
          { id: "prensa", note: "estación 01: el mismo empujón con cero técnica que vigilar." },
          { id: "goblet", note: "mancuerna pesada al pecho si todo lo demás está ocupado." },
          { id: "hack-squat", note: "aparece en tu app como Hack Incline Squat." },
        ],
      },
      {
        images: img("Smith_Machine_Stiff-Legged_Deadlift"),
        title: "Peso muerto rumano en Smith",
        reps: "3 × 8–10",
        desc: "En la misma Smith de la sentadilla: caderas atrás, espalda neutra, la barra rozando las piernas. Glúteo y femoral: <b>el motor del golpe y del derribo</b> — la misma bisagra del sprawl.",
        watch: "Fuerza tradicional",
        steps: [
          "En la misma Smith: barra a la altura de la cadera, agarre al ancho de hombros.",
          "Rodillas apenas flexionadas: <b>empuja la cadera hacia atrás</b> y baja la barra rozando las piernas.",
          "Baja hasta sentir el estirón en los femorales (media espinilla), espalda neutra siempre.",
          "Aprieta el glúteo para volver arriba; no hiperextiendas al final.",
        ],
        alternatives: [
          { id: "leg-curl", note: "aísla el femoral sin cargar la espalda." },
          { id: "rumano-mancuernas", note: "si quieres más libertad de movimiento." },
          { id: "hiperextension-disco", note: "banco romano abrazando un disco al pecho." },
        ],
      },
      {
        images: img("Barbell_Hip_Thrust"),
        title: "Hip thrust",
        reps: "3 × 8–10",
        desc: "El glúteo rota tu cadera al golpear y es <b>el puente (upa) con el que escapas cuando te montan</b>. Pausa 1 s arriba. Usa la máquina de hip thrust del gym; si está ocupada, barra sobre banco.",
        watch: "Fuerza tradicional",
        steps: [
          "En la máquina: espalda alta apoyada, cojín sobre la cadera, pies al ancho de hombros.",
          "Empuja con los talones y sube la cadera hasta quedar recto de rodillas a hombros.",
          "<b>Aprieta el glúteo 1 s arriba</b> — es tu puente (upa) cuando te montan.",
          "Baja controlado sin que la lumbar se arquee.",
        ],
        alternatives: [
          { id: "hip-thrust-barra", note: "el clásico si la máquina está ocupada." },
          { id: "puente-una-pierna", note: "en el piso, 12 por lado." },
          { id: "patada-gluteo-polea", note: "del día A de tu app, pierna flexionada." },
        ],
      },
      {
        images: img("Farmers_Walk"),
        title: "Acarreo del granjero",
        reps: "2 × 30–40 m",
        desc: "Mancuernas pesadas, pecho arriba, pasos cortos. <b>El agarre es la moneda del MMA</b>: controlar el clinch, cerrar el derribo y no soltar jamás.",
        watch: "Fuerza funcional",
        steps: [
          "Toma las mancuernas más pesadas que puedas sostener con buena postura.",
          "Pecho arriba, hombros atrás, core apretado: camina 30–40 m con pasos cortos y rápidos.",
          "No dejes que el peso te encorve; el agarre trabaja hasta el último metro.",
          "Suelta, descansa 60–90 s y repite.",
        ],
        alternatives: [
          { id: "encogimientos-polea", note: "la opción en máquina: pausa de 2 s arriba." },
          { id: "acarreo-maleta", note: "una sola mancuerna: core anti-flexión extra." },
          { id: "dead-hang", note: "3 × 30–45 s si no hay espacio para caminar." },
        ],
      },
      {
        images: img("Calf_Press_On_The_Leg_Press_Machine"),
        title: "Pantorrilla en máquina",
        reps: "2 × 12–15",
        desc: "<b>Pantorrillas fuertes = juego de pies vivo</b> y tres rounds en la punta de los pies. En la máquina de pantorrilla del gym (o en la prensa): sube lento y aprieta 1 s arriba.",
        watch: "Fuerza tradicional",
        steps: [
          "Ajusta el asiento y apoya la punta de los pies en la plataforma.",
          "Sube lento hasta la máxima contracción y <b>aprieta 1 s arriba</b>.",
          "Baja en 2 s hasta estirar del todo la pantorrilla.",
          "12–15 repeticiones; el rebote no cuenta.",
        ],
        alternatives: [
          { id: "pantorrilla-prensa", note: "misma mecánica empujando con la punta del pie." },
          { id: "talones-smith", note: "barra en los hombros, punta de pies sobre un disco." },
          { id: "pantorrilla-una-pierna", note: "en un escalón, para emparejar izquierda y derecha." },
        ],
      },
      {
        images: img("Bicycling_Stationary"),
        title: "Finisher: sprints en bici de aire",
        reps: "5 × (30 s / 60 s)",
        desc: "La del ventilador: 30 s a tope con brazos y piernas, 60 s suave. <b>Mientras más fuerte pedaleas, más resiste</b> — cardio de rounds perfecto. Si está ocupada, cualquier bici estática sirve.",
        watch: "Bicicleta estática",
        steps: [
          "Ajusta el asiento: rodilla casi extendida en el punto más bajo del pedaleo.",
          "2 min de pedaleo suave para entrar en calor.",
          "<b>30 s a TODO</b>: brazos y piernas al máximo, como el último intercambio del round.",
          "60 s suave sin parar. Repite 5 veces.",
          "Anota distancia o calorías para superarlas la próxima semana.",
        ],
        alternatives: [
          { id: "bici-sprints", note: "sube la resistencia en los 30 s fuertes." },
          { id: "escaladora", note: "30 s a tope / 60 s a paso lento." },
          { id: "rounds-caminadora", note: "o sprints cortos con inclinación." },
        ],
      },
    ],
  },
  {
    id: "dia2",
    num: "02",
    kicker: "Martes · ~55 min",
    title: "Golpeo y Agarre — Torso",
    exercises: [
      {
        images: img("Elliptical_Trainer"),
        title: "Calentamiento",
        reps: "8 min",
        desc: "6 min de elíptica o bici suave + 2 min de banda para hombro.",
        watch: "Elíptica",
        steps: [
          "6 min de elíptica o bici suave, subiendo el ritmo poco a poco.",
          "Con tu banda: 15 separaciones al frente (pull-apart) + 15 rotaciones externas por lado.",
          "Cierra con 10 círculos grandes de brazos hacia atrás.",
        ],
        alternatives: [
          { id: "escaladora", note: "mismos 6 min si lo prefieres." },
          { id: "remo-suave-polea", note: "activa espalda y hombro antes de empujar." },
        ],
      },
      {
        icon: "i-bag",
        title: "Potencia: rectos al saco",
        reps: "4 × 10 golpes",
        desc: "<b>Primero, en fresco.</b> Al saco del gym: 10 rectos a máxima velocidad con buena técnica, 90 s de descanso y repite. <b>Golpea rápido, no pesado</b> — aquí se entrena el snap.",
        watch: "Kickboxing",
        steps: [
          "Guardia frente al saco, a distancia de brazo.",
          "Lanza 10 rectos (jab–cross) a <b>máxima velocidad</b> con técnica limpia: gira cadera y talón.",
          "Golpea rápido y suelto, no pesado: la mano vuelve a la guardia como un resorte.",
          "Descansa 90 s y repite. Si la técnica se cae, ahí termina el ejercicio.",
        ],
        alternatives: [
          { id: "golpe-en-polea", note: "la versión en máquina: la polea hace de saco." },
          { id: "shadow-velocidad", note: "1–2 kg: el mismo trabajo de velocidad si el saco está ocupado." },
          { id: "flexiones-palmada", note: "potencia de empuje sin ningún equipo." },
          { id: "pase-balon", note: "si algún día aparece un balón medicinal en el gym." },
        ],
      },
      {
        images: img("Push_Press"),
        title: "Push press",
        reps: "3 × 5",
        desc: "<b>Todavía en fresco.</b> Piernas + brazo en un solo impulso: la mecánica exacta de golpear con la cadera. Barra o mancuernas.",
        watch: "Fuerza funcional",
        steps: [
          "Barra en las clavículas (o mancuernas a los hombros); haz 5 con la barra vacía antes de cargar.",
          "Mini-flexión de rodillas — unos 10 cm, tronco recto.",
          "<b>Extiende todo a la vez</b>: piernas y brazos, la barra sale disparada arriba.",
          "Es la mecánica del golpe: el piso empuja, la cadera transmite, el puño llega.",
          "Baja controlado a los hombros. 5 potentes; 2 min de descanso.",
        ],
        alternatives: [
          { id: "press-militar", note: "sin impulso de piernas: más hombro puro." },
          { id: "push-press-mancuernas", note: "si el rack está ocupado." },
          { id: "press-maquina-explosivo", note: "último recurso: empuja rápido, baja lento." },
        ],
      },
      {
        images: img("Leverage_Chest_Press"),
        title: "Press de pecho en máquina",
        reps: "3 × 8–10",
        desc: "<b>RIR 1–2.</b> La máquina de press sentado (Matrix): empuja explosivo como un golpe, vuelve en 2–3 s. ¿Ocupada? Mancuernas en banco plano.",
        watch: "Fuerza tradicional",
        steps: [
          "Ajusta el asiento: las manijas a la altura de la mitad del pecho.",
          "Pies firmes, espalda pegada al respaldo, hombros abajo.",
          "<b>Empuja explosivo</b> hasta casi extender los codos, sin bloquearlos.",
          "Vuelve controlado en 2–3 s. Deja 1–2 en reserva y anota el peso.",
        ],
        alternatives: [
          { id: "press-mancuernas", note: "banco plano: más rango y estabilización." },
          { id: "press-inclinado-barra", note: "del día B de tu app; pega más al pecho alto." },
          { id: "peck-fly", note: "estación 26, como extra si quieres más pecho." },
        ],
      },
      {
        images: img("Seated_Cable_Rows"),
        title: "Remo sentado en polea",
        reps: "3 × 10–12",
        desc: "La espalda trae la mano de vuelta a la guardia y domina el clinch. Pecho firme, jala al abdomen; hazlo a una mano cuando quieras — en MMA jalas con un brazo mientras controlas con el otro.",
        watch: "Fuerza tradicional",
        steps: [
          "Siéntate con las rodillas apenas flexionadas y el pecho firme.",
          "Jala el agarre al abdomen llevando los <b>codos atrás</b>, sin balancearte.",
          "Aprieta las escápulas 1 s: jala la espalda, no el brazo.",
          "Regresa controlado hasta estirar del todo el dorsal.",
        ],
        alternatives: [
          { id: "remo-mancuerna", note: "rodilla en banco: un lado a la vez, como jalas en el clinch." },
          { id: "remo-unilateral-polea", note: "tu app lo sugiere como Remo Polea Unilateral." },
          { id: "remo-palanca", note: "si la polea está ocupada." },
        ],
      },
      {
        images: img("Wide-Grip_Lat_Pulldown"),
        title: "Jalón al pecho",
        reps: "3 × 10–12",
        desc: "En la máquina Matrix: dorsal fuerte = golpes con más snap y mejor clinch.",
        watch: "Fuerza tradicional",
        steps: [
          "Ajusta el apoyo de rodillas; agarre un poco más ancho que los hombros.",
          "Saca el pecho y jala la barra hasta la clavícula, <b>codos hacia el piso</b>.",
          "Aprieta el dorsal 1 s abajo; nada de balancearse hacia atrás.",
          "Sube controlado hasta estirar los brazos del todo.",
        ],
        alternatives: [
          { id: "dominada-asistida", note: "la estación de contrapeso: mismo patrón, más transferencia." },
          { id: "jalon-unilateral", note: "estación 33: un brazo a la vez." },
          { id: "jalon-cerrado", note: "codos al frente; más bíceps y dorsal bajo." },
        ],
      },
      {
        images: img("Triceps_Pushdown_-_Rope_Attachment"),
        title: "Tríceps en polea",
        reps: "2 × 12–15",
        desc: "<b>El tríceps es el final del golpe:</b> extiende el codo en el último tramo del recto. Cuerda o barra, codos pegados al cuerpo; aquí sí puedes llegar al fallo. <b>En superserie con el curl</b> de abajo.",
        watch: "Fuerza tradicional",
        steps: [
          "Cuerda en la polea alta; codos pegados al cuerpo.",
          "Extiende hasta abrir la cuerda abajo y aprieta 1 s.",
          "Sube controlado sin que los codos se despeguen.",
          "En la última serie puedes llegar al fallo — y pasas directo al curl.",
        ],
        alternatives: [
          { id: "press-frances-z", note: "del día B de tu app." },
          { id: "maquina-triceps", note: "la Arm Extension, si el multifuncional está lleno." },
          { id: "fondos-banco", note: "pies adelante, sin equipo." },
        ],
      },
      {
        images: img("Cable_Hammer_Curls_-_Rope_Attachment"),
        title: "Curl martillo en polea",
        reps: "2 × 10–12",
        desc: "Justo después de cada serie de tríceps, con la misma cuerda pasada a la polea baja: agarre neutro, codos quietos. <b>Antebrazo y bíceps que sostienen el gancho</b> y no sueltan el agarre.",
        watch: "Fuerza tradicional",
        steps: [
          "Pasa la misma cuerda a la polea baja, justo después del tríceps.",
          "Agarre neutro (pulgares arriba), codos pegados y quietos.",
          "Sube hasta la máxima flexión <b>sin balancear el torso</b>.",
          "Baja en 2 s resistiendo: el antebrazo trabaja todo el recorrido.",
        ],
        alternatives: [
          { id: "curl-martillo-mancuernas", note: "el clásico, si la polea quedó lejos." },
          { id: "curl-scott", note: "del catálogo de tu app; aísla más el bíceps." },
          { id: "curl-barra-z", note: "agarre supino para variar el estímulo." },
        ],
      },
      {
        images: img("Face_Pull"),
        title: "Face pull en polea",
        reps: "3 × 15",
        desc: "El seguro del hombro de un peleador. Jala hacia la cara, codos altos.",
        watch: "Fuerza funcional",
        steps: [
          "Cuerda a la altura de la cara; un paso atrás para tensar.",
          "Jala hacia la frente <b>abriendo la cuerda</b>, codos altos y anchos.",
          "Termina con las manos a los lados de la cara y aprieta la parte trasera del hombro.",
          "Regresa lento. Peso ligero: 15 repeticiones perfectas.",
        ],
        alternatives: [
          { id: "facepull-banda", note: "tu banda en cualquier poste; idéntico." },
          { id: "reverse-peck", note: "el peck fly al revés trabaja lo mismo." },
          { id: "posteriores-mancuernas", note: "inclinado, abriendo los brazos." },
        ],
      },
    ],
  },
  {
    id: "dia3",
    num: "03",
    kicker: "Miércoles · ~55 min",
    title: "Rounds MMA, Core y Cuello",
    quote:
      "Hoy se juega: rounds, poleas y un duelo final. Mañana entrenas con el profe — deja las piernas vivas y los hombros frescos.",
    exercises: [
      {
        images: img("Rope_Jumping"),
        title: "Cuerda",
        reps: "2 rds × 3 min",
        desc: "El calentamiento del combate: juego de pies, muñecas y ritmo. Con parcero: <b>rounds alternos</b> — uno salta, el otro cronometra.",
        watch: "Cuerda",
        steps: [
          "Cuerda a tu medida: pisándola al centro, las manijas llegan a las axilas.",
          "Salta bajo (2–3 cm), en la punta de los pies; giran las <b>muñecas</b>, no los brazos.",
          "Round 1 suave para calentar; round 2 a ritmo de verdad.",
          "1 min de descanso entre rounds. ¿Te enredas? Sigue: cada tropiezo también cuenta.",
        ],
        alternatives: [
          { id: "rounds-caminadora", note: "3 min fuerte / 1 min caminando." },
          { id: "eliptica-rapida", note: "mismos bloques si la cuerda aún no sale." },
          { id: "escaladora", note: "3 min a buen paso por round." },
        ],
      },
      {
        icon: "i-bag",
        title: "Rounds de saco + sprawls",
        reps: "3 rds × 3 min",
        desc: "<b>Formato MMA:</b> combinaciones limpias y, en cada cambio de minuto, cambio de nivel + sprawl y sigues golpeando. ¿Van dos? <b>Túrnense por round</b>: mientras uno golpea, el otro cuenta los sprawls. Técnica y flow, no potencia máxima.",
        watch: "Kickboxing",
        steps: [
          "3 rounds de 3 min con 1 min de descanso: técnica y flow, no potencia máxima.",
          "Combina limpio (1-2, 1-2-3, gancho al cuerpo) y muévete alrededor del saco.",
          "En cada cambio de minuto: <b>cambio de nivel + sprawl</b>, te levantas y sigues golpeando.",
          "Guardia arriba SIEMPRE, incluso cansado: eso es lo que te llevas al jueves.",
        ],
        alternatives: [
          { id: "shadow-sprawls", note: "sin saco: mismas combinaciones al aire." },
          { id: "rounds-caminadora", note: "si el saco está ocupado y no quieres shadow." },
        ],
      },
      {
        images: img("Standing_Cable_Wood_Chop"),
        title: "Leñador en polea (woodchop)",
        reps: "3 × 12 / lado",
        desc: "El patrón exacto del cruzado: rota desde la cadera con los brazos casi rectos. Peso moderado hoy.",
        watch: "Core",
        steps: [
          "Polea arriba; párate de lado con los pies al ancho de hombros.",
          "Brazos casi rectos: <b>gira desde la cadera</b> llevando el agarre en diagonal a la rodilla contraria.",
          "El torso gira, los brazos solo acompañan — es el cruzado en cámara lenta.",
          "Controla la vuelta; 12 por lado con peso moderado.",
        ],
        alternatives: [
          { id: "russian-twist-disco", note: "sentado, giro con control." },
          { id: "pallof", note: "anti-rotación: aguanta recto lo que la polea quiere girar." },
          { id: "lenador-banda", note: "si el multifuncional está lleno." },
        ],
      },
      {
        images: img("Cable_Crunch"),
        title: "Crunch en polea con cuerda",
        reps: "3 × 12–15",
        desc: "Abdomen <b>con peso de verdad, no solo tu cuerpo</b>: arrodillado con la cuerda, y subes de placa cada semana como en cualquier máquina. Con parcero se turnan sin mover nada.",
        watch: "Core",
        steps: [
          "Arrodillado frente a la polea alta, cuerda a los lados de la cabeza.",
          "<b>Encorva las costillas hacia la cadera</b> — la cadera no se mueve.",
          "Regresa lento manteniendo la tensión.",
          "Cuando 15 salgan fáciles, sube una placa.",
        ],
        alternatives: [
          { id: "pallof", note: "también en la polea: core isométrico anti-rotación." },
          { id: "rodillas-colgado", note: "suma agarre gratis mientras trabajas abdomen." },
          { id: "elevacion-piernas-banco", note: "el clásico en banco si la polea está llena." },
        ],
      },
      {
        images: img("Hyperextensions_Back_Extensions"),
        title: "Hiperextensión con disco",
        reps: "2 × 12–15",
        desc: "El banco romano <b>cargado</b>: abraza un disco al pecho y progresa el peso como en cualquier máquina. La lumbar es la otra mitad del core — sostiene la postura y protege la espalda al rotar.",
        watch: "Core",
        steps: [
          "Ajusta el banco romano: el borde del cojín en el pliegue de la cadera.",
          "Abraza un disco al pecho (empieza liviano) y baja controlado con la espalda larga.",
          "Sube apretando glúteo y lumbar hasta quedar <b>en línea recta</b> — sin pasarte arriba.",
          "2 s abajo, 1 s arriba. Cuando salgan 15, sube de disco.",
        ],
        alternatives: [
          { id: "extension-lumbar-maquina", note: "si tu gym tiene la máquina selectorizada de lumbar." },
          { id: "superman", note: "brazos y piernas arriba, aguanta 2 s por rep." },
          { id: "buenos-dias-banda", note: "bisagra ligera de alta repetición." },
        ],
      },
      {
        images: img("Lying_Face_Up_Plate_Neck_Resistance"),
        title: "Cuello con disco",
        reps: "2 × 15",
        desc: "<b>En MMA el cuello no es opcional:</b> absorbe golpes y pelea la guillotina y el clinch. Disco liviano, movimiento lento y controlado.",
        watch: "Fuerza funcional",
        steps: [
          "Boca arriba en un banco, cabeza por fuera del borde, disco liviano sobre la frente (con toalla).",
          "Baja la cabeza lento y súbela hasta llevar la barbilla al pecho.",
          "15 controladas; <b>nada de rebotes ni prisa</b>.",
          "Es lo que te deja recibir un golpe y pelear la guillotina: trátalo en serio.",
        ],
        alternatives: [
          { id: "encogimientos-polea", note: "en máquina: el trapecio es la armadura del cuello." },
          { id: "cuello-isometricos", note: "empuja contra tu mano: sirve en cualquier lugar." },
          { id: "cuello-banda", note: "banda en un poste, 4 direcciones." },
        ],
      },
      {
        images: img("Bicycling_Stationary"),
        title: "Finisher: duelo en bici de aire",
        reps: "3 × 10 cal",
        desc: "<b>El juego final:</b> 10 calorías a tope y cambio — tu parcero hace las suyas mientras tú recuperas. Pierde el que tarde más y <b>el perdedor paga 5 flexiones</b>. ¿Solo? Contrarreloj contra tu propia marca.",
        watch: "Bicicleta estática",
        steps: [
          "Definan el orden; la pantalla en calorías y en cero.",
          "<b>10 calorías a TODO</b>: brazos y piernas, sin guardarse nada.",
          "Descansa mientras el otro pedalea (o 90 s si vas solo).",
          "3 rondas. Anota el mejor tiempo: la próxima semana se le gana.",
        ],
        alternatives: [
          { id: "bici-sprints", note: "el formato clásico de intervalos si vas solo." },
          { id: "escaladora", note: "duelo de pisos: 30 s, gana quien suba más." },
        ],
      },
      {
        icon: "i-stretch",
        title: "Movilidad",
        reps: "5–8 min",
        desc: "Hombro, cadera y columna torácica. <b>Esto es lo que te mantiene sin lesiones.</b>",
        watch: "Flexibilidad",
        steps: [
          "Hombros: cuélgate de la barra 30 s + círculos con banda.",
          "Cadera: zancada profunda con giro, 45 s por lado.",
          "Columna torácica: a cuatro apoyos, mano a la nuca y gira abriendo el pecho, 10 por lado.",
          "Respira lento en cada posición: hoy guardas rango para pelear mañana.",
        ],
      },
    ],
  },
  {
    id: "dia4",
    num: "04",
    kicker: "Jueves · solo la sesión",
    title: "Sesión 1 a 1 con el Profe",
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
        watch: "Artes marciales",
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
    kicker: "Viernes · pico y placa",
    title: "Descanso Programado",
    recovery: true,
    exercises: [
      {
        icon: "i-walk",
        title: "Hoy no hay gym — y está bien",
        reps: "Descanso",
        desc: "El pico y placa lo decide por ti, y cae perfecto: después de 4 días seguidos de entreno, <b>hoy el cuerpo absorbe y construye</b>. Camina algo, come tu proteína y duerme 7–9 h.",
      },
      {
        icon: "i-stretch",
        title: "Movilidad suave (opcional)",
        reps: "10 min",
        desc: "Solo si el cuerpo lo pide: hombros y cadera con tus bandas, en casa. Nada intenso — <b>mañana o pasado hay pádel</b>.",
        watch: "Flexibilidad",
      },
    ],
  },
  {
    id: "dia6",
    num: "06",
    kicker: "Sábado o Domingo · 1–2 h",
    title: "Pádel",
    recovery: true,
    exercises: [
      {
        icon: "i-walk",
        title: "Antes del partido",
        reps: "5 min",
        desc: "El pádel arranca explosivo: trote suave, tobillos y hombro con banda. <b>No entres frío</b> — las pantorrillas y el codo lo agradecen.",
      },
      {
        icon: "i-padel",
        title: "El partido",
        reps: "1–2 h",
        desc: "<b>Tu cardio del fin de semana, jugado:</b> arranques, frenadas y giros — juego de pies gratis para el MMA. Hidrátate entre sets y, si van a ser 2 h, come algo liviano a la mitad.",
        watch: "Pádel",
      },
      {
        icon: "i-stretch",
        title: "Después + el otro día",
        reps: "5 min",
        desc: "Estira pantorrillas, antebrazos y hombro al terminar. El otro día del fin de semana es <b>descanso total</b>: el lunes se arranca de nuevo.",
      },
    ],
  },
];
