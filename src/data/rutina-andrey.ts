import type { AltDetail, DayData } from "./types";

const img = (id: string): [string, string] => [
  `/exercises/${id}_0.jpg`,
  `/exercises/${id}_1.jpg`,
];

/**
 * Catálogo de alternativas: cada tarjeta del popup de un ejercicio lista sus
 * alternativas por id; al tocarlas se abre esta mini-guía (foto + pasos).
 * Regla: cada ejercicio tiene al menos una alternativa con máquina o polea.
 */
export const altCatalog: Record<string, AltDetail> = {
  /* ---- Cardio / calentamiento ---- */
  "cuerda-suave": {
    title: "Cuerda suave",
    reps: "4–5 min",
    images: img("Rope_Jumping"),
    desc: "Aprobada por el ortopedista tras la radiografía: pulso, tobillos, muñecas y juego de pies en poco tiempo.",
    steps: [
      "Cuerda a tu medida: pisándola al centro, las manijas llegan a las axilas.",
      "Salta bajo (2–3 cm), en la punta de los pies; giran las muñecas, no los brazos.",
      "Ritmo de charla, sin sprints: esto es calentamiento. Si te enredas, camina 10 s y retoma.",
    ],
  },
  "eliptica-suave": {
    title: "Elíptica suave",
    reps: "5–6 min",
    images: img("Elliptical_Trainer"),
    desc: "Calentamiento sin impacto: el pulso sube sin saltos ni golpes en la columna.",
    steps: [
      "Arranca suave: los primeros 2 min a ritmo de charla.",
      "Sube la resistencia poco a poco hasta sudar ligero, sin agitarte.",
    ],
  },
  "escaladora": {
    title: "Escaladora",
    reps: "6 min",
    images: img("Stairmaster"),
    desc: "Cardio de piernas sin impacto: activa glúteo y sube el pulso rápido.",
    steps: [
      "Pisa el escalón completo, sin quedarte en la punta.",
      "Ritmo constante y postura erguida: no te cuelgues de las manijas.",
      "Sube un nivel de velocidad cada 2 min si vas cómodo.",
    ],
  },
  "bici-suave": {
    title: "Bici estática suave",
    reps: "6 min",
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
    reps: "6 min",
    images: img("Running_Treadmill"),
    desc: "Caminar rápido con inclinación calienta piernas y cadera sin trotar. <b>Solo como calentamiento corto</b>: el ortopedista pidió evitar las caminatas largas.",
    steps: [
      "Inclinación 8–10, velocidad de caminata rápida (5,5–6,5 km/h).",
      "Camina erguido, sin agarrarte de las barandas.",
      "Sube un punto de velocidad cada 2 min. Nada de trote.",
    ],
  },
  "remo-suave-polea": {
    title: "Remo suave en polea",
    reps: "2 × 15 livianas",
    images: img("Seated_Cable_Rows"),
    desc: "Activa espalda y hombro antes de entrenar: sangre donde va a haber trabajo.",
    steps: [
      "Peso liviano: la mitad de tu remo normal.",
      "15 repeticiones lentas apretando las escápulas 1 s, torso quieto.",
      "Sin fatigarte: esto es calentamiento, no serie efectiva.",
    ],
  },

  /* ---- Pierna y cadera ---- */
  "sprints-cortos-bici": {
    title: "Sprints cortos en bici de aire",
    reps: "6 × 6 s",
    images: img("Bicycling_Stationary"),
    desc: "Potencia de piernas sin impacto: 6 s a tope y 60 s suave. Cortos para que sea potencia, no cardio.",
    steps: [
      "2 min suaves para entrar en calor.",
      "<b>6 s a todo</b> con brazos y piernas.",
      "60 s de pedaleo muy suave y repite 6 veces.",
    ],
  },
  "hip-thrust-explosivo": {
    title: "Hip thrust explosivo",
    reps: "4 × 6",
    images: img("Barbell_Hip_Thrust"),
    desc: "La potencia de cadera en la máquina de hip thrust: sube rápido, baja lento.",
    steps: [
      "Peso moderado: 60 % de tu hip thrust normal.",
      "<b>Sube la cadera lo más rápido posible</b> hasta la línea recta, sin arquear la lumbar.",
      "Baja en 2 s. Si la velocidad cae, termina la serie.",
    ],
  },
  "prensa": {
    title: "Prensa con las dos piernas",
    reps: "3 × 8–10",
    images: img("Leg_Press"),
    desc: "El empujón de pierna con cero técnica que vigilar y la espalda apoyada.",
    steps: [
      "Pies al centro de la plataforma, al ancho de hombros.",
      "Baja controlado hasta 90° de rodilla, con la cadera y la lumbar pegadas al respaldo.",
      "Empuja fuerte sin bloquear las rodillas arriba.",
    ],
  },
  "extension-una-pierna": {
    title: "Extensión de cuádriceps a una pierna",
    reps: "3 × 10–12 / pierna",
    images: img("Single-Leg_Leg_Extension"),
    desc: "Cuádriceps en máquina, un lado a la vez, sin cargar nada en la espalda.",
    steps: [
      "Rodillo sobre el tobillo, rodilla alineada con el eje de la máquina.",
      "Extiende hasta arriba y aprieta 1 s.",
      "Baja en 2 s; termina la pierna y cambia.",
    ],
  },
  "femoral-acostado": {
    title: "Femoral acostado en máquina",
    reps: "3 × 10–12",
    images: img("Lying_Leg_Curls"),
    desc: "La versión boca abajo del curl femoral, si la sentada está ocupada.",
    steps: [
      "Boca abajo, rodillo sobre los tobillos, cadera pegada al banco.",
      "Lleva los talones al glúteo con control, sin despegar la cadera.",
      "Baja en 2–3 s sin soltar la tensión.",
    ],
  },
  "puente-una-pierna": {
    title: "Puente a una pierna",
    reps: "3 × 12 / lado",
    images: img("Butt_Lift_Bridge"),
    desc: "El puente (upa) en el piso: glúteo y femoral de un lado a la vez, sin máquina.",
    steps: [
      "Boca arriba, un pie plantado y la otra pierna estirada.",
      "Empuja con el talón y sube la cadera hasta la línea recta, sin arquear la lumbar.",
      "1 s arriba apretando; baja controlado. Mismas reps por lado.",
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
    reps: "3 × 8–10",
    images: img("Barbell_Hip_Thrust"),
    desc: "El clásico sobre banco cuando la máquina está ocupada.",
    steps: [
      "Espalda alta en el banco, barra (con almohadilla) sobre la cadera.",
      "Empuja con los talones hasta quedar recto de rodillas a hombros.",
      "1 s arriba apretando el glúteo; baja controlado.",
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
  "pantorrilla-una-pierna": {
    title: "A una pierna con mancuerna",
    reps: "2 × 12 / lado",
    images: img("Standing_Dumbbell_Calf_Raise"),
    desc: "Empareja izquierda y derecha: el juego de pies no tiene lado débil.",
    steps: [
      "Punta del pie en un escalón, mancuerna liviana del mismo lado.",
      "La otra mano se apoya para el equilibrio.",
      "Sube y baja lento con rango completo.",
    ],
  },

  /* ---- Espalda y postura ---- */
  "dominada-asistida": {
    title: "Dominada asistida",
    reps: "3 × 6–8",
    images: img("Band_Assisted_Pull-Up"),
    desc: "El patrón completo de la dominada con la ayuda justa de la máquina de contrapeso.",
    steps: [
      "Contrapeso que te deje sacar 6–8 limpias.",
      "Jala hasta pasar la barbilla, pecho a la barra, sin balancearte.",
      "Baja en 2–3 s. Cada semana, un poco menos de ayuda.",
    ],
  },
  "jalon-unilateral": {
    title: "Jalón unilateral",
    reps: "3 × 10 / lado",
    images: img("Wide-Grip_Lat_Pulldown"),
    desc: "Estación 33 de tu app: un brazo a la vez, para comparar los dos lados.",
    steps: [
      "Maneral individual en la polea alta.",
      "Jala hacia el pecho llevando el codo a las costillas, sin inclinar el torso.",
      "Empieza por el lado débil y haz las mismas reps con el otro.",
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
  "remo-sentado-polea": {
    title: "Remo sentado en polea",
    reps: "3 × 10–12",
    images: img("Seated_Cable_Rows"),
    desc: "La espalda en el multifuncional con los dos brazos, el torso quieto.",
    steps: [
      "Rodillas apenas flexionadas, pecho firme y torso vertical.",
      "Jala al abdomen llevando los codos atrás, sin balancearte.",
      "Aprieta las escápulas 1 s y regresa controlado.",
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
      "Regresa lento; mismas reps con el otro brazo.",
    ],
  },
  "remo-mancuerna": {
    title: "Remo con mancuerna a una mano",
    reps: "3 × 10 / lado",
    images: img("One-Arm_Dumbbell_Row"),
    desc: "Mano y rodilla en el banco: la espalda queda apoyada y plana.",
    steps: [
      "Mano y rodilla en el banco, espalda plana como una mesa.",
      "Jala la mancuerna a la cadera llevando el codo atrás.",
      "1 s de apretón arriba; baja hasta el estiramiento completo.",
    ],
  },
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
  "posteriores-polea": {
    title: "Posteriores en polea",
    reps: "3 × 12–15",
    images: img("Cable_Rear_Delt_Fly"),
    desc: "Los cables cruzados a la altura de los hombros: hombro posterior con tensión pareja.",
    steps: [
      "Poleas a la altura de los hombros; toma el cable izquierdo con la mano derecha y viceversa.",
      "Abre los brazos hacia atrás con los codos suaves, sin arquear la espalda.",
      "Aprieta las escápulas 1 s y regresa lento.",
    ],
  },
  "posteriores-mancuernas": {
    title: "Posteriores con mancuernas",
    reps: "3 × 12–15",
    images: img("Seated_Bent-Over_Rear_Delt_Raise"),
    desc: "Sentado e inclinado al frente: hombro posterior con mancuernas livianas.",
    steps: [
      "Sentado, torso inclinado casi al muslo.",
      "Abre los brazos a los lados como alas, codos suaves.",
      "Baja lento sin dar impulso con el torso.",
    ],
  },

  /* ---- Empuje ---- */
  "press-mancuernas": {
    title: "Press con mancuernas",
    reps: "3 × 8–10",
    images: img("Dumbbell_Bench_Press"),
    desc: "Banco plano con la espalda apoyada: más rango y estabilización que la máquina.",
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
      "Empuja fuerte sin despegar la cadera ni la espalda del banco.",
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
  "press-hombro-smith": {
    title: "Press de hombro en Smith, sentado",
    reps: "3 × 8–10",
    images: img("Smith_Machine_Overhead_Shoulder_Press"),
    desc: "La barra guiada hace de máquina: sentado con respaldo, recorrido fijo.",
    steps: [
      "Banco con respaldo alto bajo la barra de la Smith.",
      "Baja la barra al frente hasta la altura de la barbilla.",
      "Empuja arriba sin bloquear los codos ni arquear la lumbar.",
    ],
  },
  "press-hombro-mancuernas": {
    title: "Press de hombro con mancuernas, sentado",
    reps: "3 × 8–10",
    images: img("Seated_Dumbbell_Press"),
    desc: "Sentado con respaldo alto, si las máquinas están ocupadas.",
    steps: [
      "Respaldo casi vertical, espalda pegada; mancuernas a la altura de las orejas.",
      "Empuja arriba sin chocarlas ni bloquear los codos.",
      "Baja en 2 s.",
    ],
  },
  "laterales-polea": {
    title: "Elevación lateral en polea",
    reps: "3 × 12–15",
    images: img("Cable_Seated_Lateral_Raise"),
    desc: "En el multifuncional, un brazo a la vez: tensión pareja desde abajo hasta arriba.",
    steps: [
      "Polea baja al costado; toma el maneral con la mano contraria.",
      "Sube el brazo hasta la horizontal con el codo suave, sin inclinar el torso.",
      "Baja en 2 s resistiendo; mismas reps con el otro brazo.",
    ],
  },
  "laterales-mancuernas": {
    title: "Elevación lateral con mancuernas",
    reps: "3 × 12–15",
    images: img("Side_Lateral_Raise"),
    desc: "El clásico con mancuernas livianas y técnica limpia.",
    steps: [
      "Sentado o de pie, mancuernas a los lados, codos apenas flexionados.",
      "Sube hasta la horizontal <b>sin encoger los hombros</b> ni dar impulso.",
      "Baja en 2 s. Si balanceas el cuerpo, es mucho peso.",
    ],
  },

  /* ---- Brazo ---- */
  "maquina-triceps": {
    title: "Máquina de tríceps",
    reps: "3 × 12–15",
    images: img("Machine_Triceps_Extension"),
    desc: "La Arm Extension del catálogo: tríceps guiado si el multifuncional está lleno.",
    steps: [
      "Ajusta el asiento: codos alineados con el eje.",
      "Extiende hasta el final y aprieta 1 s.",
      "Regresa lento sin soltar la tensión.",
    ],
  },
  "press-frances-z": {
    title: "Press francés con barra Z",
    reps: "3 × 10–12",
    images: img("EZ-Bar_Skullcrusher"),
    desc: "Del día B de tu app: tríceps con estiramiento completo, acostado y con la espalda apoyada.",
    steps: [
      "Acostado, barra Z sobre la frente con codos al techo.",
      "Extiende solo el codo hasta estirar los brazos.",
      "Baja en 2 s controlando: los codos no se abren.",
    ],
  },
  "fondos-banco": {
    title: "Fondos en banco",
    reps: "3 × 10–15",
    images: img("Bench_Dips"),
    desc: "Tríceps sin ningún equipo: solo un banco y tu peso.",
    steps: [
      "Manos al borde del banco, pies adelante.",
      "Baja hasta 90° de codo, cerca del banco.",
      "Empuja fuerte arriba; hombros lejos de las orejas.",
    ],
  },
  "curl-maquina": {
    title: "Curl de bíceps en máquina",
    reps: "3 × 10–12",
    images: img("Machine_Bicep_Curl"),
    desc: "La Bíceps Curl del catálogo de tu app: brazos apoyados, placa seleccionada, cero trampa.",
    steps: [
      "Ajusta el asiento: axilas sobre el cojín, brazos apoyados por completo.",
      "Sube hasta la contracción máxima sin levantar los hombros.",
      "Baja lento hasta casi estirar los codos.",
    ],
  },
  "curl-martillo-mancuernas": {
    title: "Curl martillo con mancuernas",
    reps: "3 × 10–12",
    images: img("Hammer_Curls"),
    desc: "El clásico: agarre neutro que construye antebrazo y bíceps a la vez.",
    steps: [
      "Mancuernas a los lados, palmas enfrentadas.",
      "Sube sin girar la muñeca ni balancear el torso.",
      "Baja en 2 s resistiendo.",
    ],
  },
  "curl-barra-z": {
    title: "Curl con barra Z",
    reps: "3 × 10–12",
    images: img("EZ-Bar_Curl"),
    desc: "Agarre supino en barra Z: muñecas cómodas, bíceps completo.",
    steps: [
      "Barra Z con agarre a la anchura de los hombros.",
      "Codos pegados: sube sin balancear el cuerpo ni echar la espalda atrás.",
      "Baja en 2 s hasta estirar del todo.",
    ],
  },

  /* ---- Columna (core en posición neutra) ---- */
  "plancha-lateral-rodillas": {
    title: "Plancha lateral con rodillas",
    reps: "3 × 20–30 s / lado",
    images: img("Side_Bridge"),
    desc: "La versión corta de la plancha lateral: misma línea, menos palanca.",
    steps: [
      "De lado sobre el antebrazo, codo bajo el hombro, rodillas dobladas y apoyadas.",
      "Sube la cadera hasta alinear rodillas, cadera y hombros.",
      "Aguanta <b>el mismo tiempo en cada lado</b>.",
    ],
  },
  "pallof": {
    title: "Pallof press en polea",
    reps: "3 × 10 / lado",
    images: img("Pallof_Press"),
    desc: "Anti-rotación en la polea: core fuerte sin doblar ni girar la columna.",
    steps: [
      "Polea a la altura del pecho; párate de lado a la torre y da un paso para tensar el cable.",
      "Manos al pecho; extiende los brazos al frente <b>sin dejar que el torso gire</b> y sostén 2 s.",
      "Vuelve al pecho. Termina el lado y cambia.",
    ],
  },
  "pallof-rodilla": {
    title: "Pallof de rodilla en polea",
    reps: "3 × 10 / lado",
    images: img("Pallof_Press"),
    desc: "Con una rodilla en el piso: más estable, con la misma polea.",
    steps: [
      "Rodilla del lado de la polea en el piso, la otra pierna adelante a 90°.",
      "Manos al pecho; extiende los brazos al frente sin que el torso gire y sostén 2 s.",
      "Vuelve y repite; termina el lado y cambia.",
    ],
  },
  "pallof-banda": {
    title: "Pallof con banda",
    reps: "3 × 10 / lado",
    icon: "i-pallof",
    desc: "Tu banda anclada a un poste: el mismo anti-giro sin máquina.",
    steps: [
      "Ancla la banda a la altura del pecho y párate de lado.",
      "Extiende los brazos al frente sin girar y sostén 2 s.",
      "Vuelve al pecho; termina el lado y cambia.",
    ],
  },
  "dead-bug": {
    title: "Dead bug",
    reps: "3 × 8 / lado",
    images: img("Dead_Bug"),
    desc: "Abdomen sin doblar la columna: brazo y pierna contrarios, lumbar pegada al piso.",
    steps: [
      "Boca arriba, brazos al techo y rodillas a 90°.",
      "Baja el brazo y la pierna contrarios sin que la lumbar se despegue del piso.",
      "Vuelve y cambia de lado.",
    ],
  },
  "bird-dog": {
    title: "Bird dog",
    reps: "3 × 6 / lado",
    icon: "i-birddog",
    desc: "En cuatro apoyos: brazo y pierna contrarios con el tronco quieto.",
    steps: [
      "Manos bajo los hombros, rodillas bajo la cadera, espalda neutra.",
      "Estira el brazo y la pierna contrarios sin girar la cadera; sostén 5 s.",
      "Vuelve con control y cambia de lado.",
    ],
  },
};

/* Enfriamiento de 3 min para la columna al final de cada día de gym. */
const enfriamiento = (tercero: string) => ({
  title: "Enfriamiento · 3 min",
  items: [
    "Gato-camello en el piso — <b>10 lentas</b>, vértebra por vértebra",
    "Postura del niño — <b>30 s</b> respirando hondo",
    tercero,
  ],
});

/* Plancha lateral: va en el bloque de columna de los tres días de gym. */
const planchaLateral = (nota: string) => ({
  images: img("Side_Bridge"),
  title: "Plancha lateral",
  reps: "3 × 20–30 s / lado",
  desc: `<b>Bloque de columna.</b> ${nota} <b>El mismo tiempo en los dos lados</b> hasta que un fisioterapeuta o el ortopedista te diga si conviene darle más a uno.`,
  watch: "Core",
  steps: [
    "De lado sobre el antebrazo, codo justo bajo el hombro, piernas estiradas y pies uno sobre otro.",
    "Sube la cadera hasta quedar en línea recta de pies a cabeza; mirada al frente.",
    "Aguanta respirando normal. Si molesta la zona lumbar, pasa a la versión con rodillas.",
    "Cambia de lado con <b>el mismo tiempo</b>.",
  ],
  alternatives: [
    { id: "plancha-lateral-rodillas", note: "misma línea con las rodillas apoyadas." },
    { id: "pallof-rodilla", note: "en polea, si no hay colchoneta libre: sostén 2 s por rep." },
  ],
});

/**
 * Semana construida alrededor del combate (ajustada a la escoliosis):
 *  - Lunes, miércoles y viernes: gym (máquinas Matrix, pesas y zona cardio),
 *    máximo 1 hora: fuerza con la espalda apoyada, potencia sin impacto y un
 *    bloque de columna (core en posición neutra) en cada sesión.
 *  - Martes: clase de boxeo. Jueves: clase de MMA. Ese día no hay nada más.
 *  - Sábado o domingo: pádel 1–2 h; el otro día del finde, descanso total.
 *
 * Escoliosis: con la radiografía, el ortopedista aprobó saltar la cuerda y
 * pidió evitar caminatas largas y senderismo (medicación solo si hay dolor).
 * La cuerda vuelve como calentamiento; la carga pesada sobre la columna sigue
 * fuera porque no la habló.
 *
 * Cada ejercicio trae `steps` (paso a paso) y `alternatives` (ids del catálogo
 * de arriba); al tocar la tarjeta se abren en un popup, y cada alternativa
 * abre a su vez su propia mini-guía.
 */
export const days: DayData[] = [
  {
    id: "dia1",
    num: "01",
    kicker: "Lunes · gym · ~50 min",
    title: "Piernas y Cadera sin Impacto",
    quote:
      "La potencia nace en el piso y sube por la cadera — hoy sin saltos: la prensa la entrena con la espalda apoyada.",
    cooldown: enfriamiento("Flexor de cadera en zancada — <b>30 s por lado</b>"),
    exercises: [
      {
        images: img("Elliptical_Trainer"),
        title: "Calentamiento",
        reps: "8 min",
        desc: "6 min de elíptica progresiva + 2 min de movilidad de cadera y columna. Hoy hay potencia de piernas: la elíptica las calienta sin gastarlas; <b>la cuerda queda como alternativa</b>.",
        watch: "Elíptica",
        steps: [
          "Arranca suave: los primeros 2 min a ritmo de charla.",
          "Sube la resistencia poco a poco hasta terminar los 6 min sudando ligero, sin agitarte.",
          "Movilidad, 2 min: gato-camello ×10, puente de glúteo ×10 y círculos de cadera ×10 por lado.",
        ],
        alternatives: [
          { id: "cuerda-suave", note: "4–5 min, suave: que hoy hay potencia de piernas." },
          { id: "bici-suave", note: "si las elípticas están ocupadas." },
          { id: "escaladora", note: "activa más glúteo; ritmo constante." },
          { id: "caminadora-cuesta", note: "caminando con inclinación, sin trotar." },
        ],
      },
      {
        images: img("Leg_Press"),
        title: "Prensa explosiva",
        reps: "4 × 5",
        desc: "<b>Primero, en fresco.</b> Reemplaza la sentadilla con salto: la misma intención explosiva, <b>sin impacto y con la espalda apoyada</b>. Peso moderado, máxima velocidad al empujar y 2 min de descanso.",
        watch: "Fuerza funcional",
        steps: [
          "Peso moderado: 60–70 % de tu prensa normal.",
          "Baja controlado en 2 s hasta 90° de rodilla, con la cadera y la lumbar pegadas al respaldo.",
          "<b>Empuja lo más rápido posible</b>, como si despegaras para un derribo, sin bloquear las rodillas.",
          "5 repeticiones rápidas y para: si la velocidad cae, ahí termina la serie.",
        ],
        alternatives: [
          { id: "sprints-cortos-bici", note: "potencia sin impacto si la prensa está ocupada." },
          { id: "hip-thrust-explosivo", note: "la potencia de cadera en máquina." },
        ],
      },
      {
        images: img("Leg_Press"),
        title: "Prensa a una pierna",
        reps: "3 × 8–10 / pierna",
        desc: "<b>RIR 2.</b> Reemplaza la sentadilla en Smith: fuerza de pierna <b>sin carga sobre la columna</b> y una pierna a la vez, para que ningún lado compense al otro.",
        watch: "Fuerza tradicional",
        steps: [
          "Un pie al centro de la plataforma; el otro apoyado en el piso o en el marco.",
          "Baja en 2–3 s hasta 90° de rodilla sin que la cadera se despegue del respaldo.",
          "Empuja con todo el pie, sin bloquear la rodilla arriba.",
          "Empieza por la pierna más débil y haz <b>las mismas reps con la otra</b>.",
        ],
        alternatives: [
          { id: "prensa", note: "si la unilateral se siente inestable." },
          { id: "extension-una-pierna", note: "cuádriceps a una pierna en máquina." },
        ],
      },
      {
        images: img("Barbell_Hip_Thrust"),
        title: "Hip thrust",
        reps: "3 × 8–10",
        desc: "El glúteo rota tu cadera al golpear y es <b>el puente (upa) con el que escapas cuando te montan</b>. En la máquina de hip thrust, con pausa de 1 s arriba y <b>sin arquear la lumbar</b>.",
        watch: "Fuerza tradicional",
        steps: [
          "En la máquina: espalda alta apoyada, cojín sobre la cadera, pies al ancho de hombros.",
          "Empuja con los talones hasta quedar recto de rodillas a hombros — ni un grado más.",
          "<b>Aprieta el glúteo 1 s arriba</b>: el que trabaja es el glúteo, no la lumbar.",
          "Baja controlado.",
        ],
        alternatives: [
          { id: "hip-thrust-barra", note: "el clásico si la máquina está ocupada." },
          { id: "patada-gluteo-polea", note: "del día A de tu app, pierna flexionada." },
          { id: "puente-una-pierna", note: "en el piso, 12 por lado." },
        ],
      },
      {
        images: img("Seated_Leg_Curl"),
        title: "Femoral en máquina",
        reps: "3 × 10–12",
        desc: "Reemplaza el rumano en Smith: el femoral —el freno de tus arranques y derribos— <b>sin cargar la zona lumbar</b>.",
        watch: "Fuerza tradicional",
        steps: [
          "Ajusta el respaldo: la rodilla alineada con el eje de la máquina y la espalda pegada.",
          "Flexiona con fuerza hasta la máxima contracción.",
          "Vuelve en 2–3 s resistiendo; que la placa no rebote.",
        ],
        alternatives: [
          { id: "femoral-acostado", note: "la versión boca abajo." },
          { id: "puente-una-pierna", note: "en el piso, sin máquina." },
        ],
      },
      {
        images: img("Seated_Calf_Raise"),
        title: "Pantorrilla en máquina",
        reps: "2 × 12–15",
        desc: "<b>Pantorrillas fuertes = juego de pies vivo</b> en el boxeo y el MMA. En la de pantorrilla sentado o en la prensa — <b>no en la de pie con almohadillas en los hombros</b>: esa carga la columna.",
        watch: "Fuerza tradicional",
        steps: [
          "Cojín sobre los muslos y la punta de los pies en la plataforma.",
          "Sube lento hasta la máxima contracción y <b>aprieta 1 s arriba</b>.",
          "Baja en 2 s hasta estirar del todo la pantorrilla.",
          "12–15 repeticiones; el rebote no cuenta.",
        ],
        alternatives: [
          { id: "pantorrilla-prensa", note: "misma mecánica empujando con la punta del pie." },
          { id: "pantorrilla-una-pierna", note: "en un escalón, para emparejar izquierda y derecha." },
        ],
      },
      planchaLateral("El ejercicio de core más estudiado en escoliosis, aunque la evidencia todavía es preliminar."),
      {
        images: img("Dead_Bug"),
        title: "Dead bug",
        reps: "3 × 8 / lado",
        desc: "<b>Bloque de columna.</b> Abdomen que protege la columna <b>sin doblarla</b>: brazo y pierna contrarios bajan mientras la lumbar se queda pegada al piso. 45 s de descanso.",
        watch: "Core",
        steps: [
          "Boca arriba, brazos al techo y rodillas a 90°; pega suavemente la lumbar al piso.",
          "Exhala y baja a la vez el brazo derecho y la pierna izquierda hasta casi tocar el piso.",
          "Vuelve y cambia de lado. Si la lumbar se despega, acorta el recorrido.",
        ],
        alternatives: [
          { id: "bird-dog", note: "el mismo patrón, en cuatro apoyos." },
          { id: "pallof", note: "core en polea sin flexionar la columna." },
        ],
      },
    ],
  },
  {
    id: "dia2",
    num: "02",
    kicker: "Martes · clase de boxeo",
    title: "Boxeo",
    recovery: true,
    exercises: [
      {
        icon: "i-walk",
        title: "Prepárate",
        reps: "Durante el día",
        desc: "Hidrátate desde temprano, come 2 h antes y lleva vendas, guantes y toalla. <b>Hoy no pisas el gym: la clase es el entrenamiento.</b>",
      },
      {
        icon: "i-bag",
        title: "La clase",
        reps: "Con el profe",
        desc: "Técnica, saco y rounds. <b>La cuerda ya está aprobada</b> por el ortopedista. Cuéntale al profe el diagnóstico y, si algo molesta en la espalda, deja ese ejercicio.",
        watch: "Boxeo",
      },
      {
        icon: "i-stretch",
        title: "Después",
        reps: "En casa",
        desc: "Agua con electrolitos, proteína y <b>3 min de gato-camello y postura del niño</b> antes de dormir. Mañana hay gym.",
        watch: "Flexibilidad",
      },
    ],
  },
  {
    id: "dia3",
    num: "03",
    kicker: "Miércoles · gym · ~50 min",
    title: "Espalda, Postura y Columna",
    quote:
      "Entre el boxeo y el MMA: una espalda fuerte que te sostiene derecho y un core que protege la columna.",
    cooldown: enfriamiento("Dorsal agarrado a una columna, cadera atrás — <b>30 s por lado</b>"),
    exercises: [
      {
        images: img("Elliptical_Trainer"),
        title: "Calentamiento",
        reps: "8 min",
        desc: "5 min de elíptica moviendo también los brazos + 3 min de banda para hombro y columna: espalda caliente antes de jalar.",
        watch: "Elíptica",
        steps: [
          "5 min de elíptica usando también las manijas; sube la resistencia poco a poco.",
          "Con tu banda: 15 separaciones al frente (pull-apart) + 15 rotaciones externas por lado.",
          "Gato-camello ×10, lento, moviendo vértebra por vértebra.",
        ],
        alternatives: [
          { id: "bici-suave", note: "si las elípticas están ocupadas." },
          { id: "remo-suave-polea", note: "2 × 15 livianas: activa la espalda antes del jalón." },
          { id: "escaladora", note: "mismos 5 min si lo prefieres." },
        ],
      },
      {
        images: img("Wide-Grip_Lat_Pulldown"),
        title: "Jalón al pecho",
        reps: "3 × 10–12",
        desc: "En la máquina Matrix: dorsal fuerte = golpes con más snap, mejor clinch y <b>una espalda que sostiene la postura</b>.",
        watch: "Fuerza tradicional",
        steps: [
          "Ajusta el apoyo de rodillas; agarre un poco más ancho que los hombros.",
          "Saca el pecho y jala la barra hasta la clavícula, <b>codos hacia el piso</b>.",
          "Aprieta el dorsal 1 s abajo; nada de balancearse hacia atrás.",
          "Sube controlado hasta estirar los brazos del todo.",
        ],
        alternatives: [
          { id: "dominada-asistida", note: "la estación de contrapeso: mismo patrón." },
          { id: "jalon-unilateral", note: "estación 33: un brazo a la vez para comparar los lados." },
          { id: "jalon-cerrado", note: "codos al frente; más bíceps y dorsal bajo." },
        ],
      },
      {
        images: img("Leverage_Iso_Row"),
        title: "Remo a un brazo con pecho apoyado",
        reps: "3 × 10 / brazo",
        desc: "<b>RIR 2.</b> En la máquina de remo con apoyo al pecho: <b>la zona lumbar descansa</b> y cada brazo jala por su cuenta. Si un lado es más débil, aquí se nota y se empareja.",
        watch: "Fuerza tradicional",
        steps: [
          "Ajusta el asiento: el pecho firme contra la almohadilla y las manijas al alcance con los brazos estirados.",
          "Jala con un brazo llevando el codo atrás, <b>sin girar el torso</b>; aprieta la escápula 1 s.",
          "Regresa hasta estirar del todo y termina las reps de ese brazo.",
          "Empieza por el brazo más débil y haz <b>las mismas reps con el otro</b>.",
        ],
        alternatives: [
          { id: "remo-sentado-polea", note: "con los dos brazos en el multifuncional." },
          { id: "remo-unilateral-polea", note: "un brazo en la polea, sin rotar." },
          { id: "remo-mancuerna", note: "mano y rodilla en el banco." },
        ],
      },
      {
        images: img("Face_Pull"),
        title: "Face pull en polea",
        reps: "3 × 15",
        desc: "El seguro del hombro de un peleador y de tu postura: jala hacia la cara con los codos altos.",
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
      {
        images: img("Reverse_Machine_Flyes"),
        title: "Aperturas invertidas en peck fly",
        reps: "3 × 12–15",
        desc: "Hombro posterior y espalda alta: <b>los músculos que te llevan los hombros atrás</b> y equilibran todo el empuje del boxeo.",
        watch: "Fuerza tradicional",
        steps: [
          "Siéntate de frente al respaldo con las manijas atrás, a la altura de los hombros.",
          "Abre los brazos hacia atrás llevando los codos, no las manos; aprieta las escápulas 1 s.",
          "Regresa lento sin soltar la tensión.",
        ],
        alternatives: [
          { id: "posteriores-polea", note: "con los cables cruzados, si la máquina está ocupada." },
          { id: "posteriores-mancuernas", note: "sentado e inclinado, con mancuernas livianas." },
        ],
      },
      {
        icon: "i-birddog",
        title: "Bird dog",
        reps: "3 × 6 / lado",
        desc: "<b>Bloque de columna</b> (1 de los 3 de McGill): el tronco quieto mientras brazo y pierna contrarios se estiran. 5 s de pausa en cada repetición.",
        watch: "Core",
        steps: [
          "En cuatro apoyos: manos bajo los hombros, rodillas bajo la cadera, espalda neutra.",
          "Estira a la vez el brazo derecho y la pierna izquierda hasta la línea del cuerpo, <b>sin girar la cadera</b>.",
          "Sostén 5 s, vuelve y cambia de lado.",
        ],
        alternatives: [
          { id: "dead-bug", note: "el mismo patrón, boca arriba." },
          { id: "pallof", note: "en polea, sin flexionar la columna." },
        ],
      },
      {
        icon: "i-curlup",
        title: "Curl-up de McGill",
        reps: "3 × 6 · 8 s",
        desc: "<b>Bloque de columna</b> (2 de 3). El abdominal de Stuart McGill, investigador de columna: <b>levantas solo la cabeza y los hombros, sin doblar la lumbar</b>. Reemplaza al crunch en máquina.",
        watch: "Core",
        steps: [
          "Boca arriba con una rodilla doblada y la otra pierna estirada; las manos bajo la zona lumbar.",
          "Tensa el abdomen y despega apenas la cabeza y los hombros, como un bloque — <b>la lumbar ni se aplana ni se arquea</b>.",
          "Sostén 8 s respirando y baja. Cambia la pierna doblada en cada serie.",
        ],
        alternatives: [
          { id: "dead-bug", note: "abdomen con la lumbar pegada al piso." },
          { id: "pallof", note: "core en polea sin doblar la columna." },
        ],
      },
      planchaLateral("3 de 3 del bloque de McGill."),
    ],
  },
  {
    id: "dia4",
    num: "04",
    kicker: "Jueves · clase de MMA",
    title: "MMA",
    recovery: true,
    exercises: [
      {
        icon: "i-walk",
        title: "Prepárate",
        reps: "Durante el día",
        desc: "Hidrátate desde la mañana, come 2 h antes y lleva vendas, guantes, protector bucal y toalla. <b>Hoy no pisas el gym: la clase es el entrenamiento completo.</b>",
      },
      {
        icon: "i-bag",
        title: "La clase",
        reps: "Con el profe",
        desc: "Striking, lucha y rounds. <b>Avísale al profe del diagnóstico.</b> Los derribos y las caídas no los habló el ortopedista: si uno te carga la espalda, una caída o una posición te carga la espalda, sal de ese ejercicio: mejor perder un ejercicio que una semana.",
        watch: "Artes marciales",
      },
      {
        icon: "i-stretch",
        title: "Después",
        reps: "Al salir",
        desc: "Agua con electrolitos, proteína y a dormir bien: <b>hoy fue el día más duro de la semana</b>. Gato-camello y postura del niño 3 min antes de acostarte.",
        watch: "Flexibilidad",
      },
    ],
  },
  {
    id: "dia5",
    num: "05",
    kicker: "Viernes · gym · ~55 min",
    title: "Pecho, Hombros y Brazos",
    quote:
      "El día después del MMA: empuje con la espalda apoyada y bombeo de brazos, sin cargar la columna.",
    cooldown: enfriamiento("Pectoral en el marco de una puerta — <b>30 s por lado</b>"),
    exercises: [
      {
        images: img("Rope_Jumping"),
        title: "Calentamiento",
        reps: "8 min",
        desc: "5 min de cuerda + 3 min de banda para hombro. <b>Aprobada por el ortopedista:</b> pulso, muñecas y juego de pies antes de empujar.",
        watch: "Saltar la cuerda",
        steps: [
          "Cuerda a tu medida: pisándola al centro, las manijas llegan a las axilas.",
          "Salta bajo (2–3 cm), en la punta de los pies; giran las muñecas, no los brazos. Si te enredas, camina 10 s y retoma.",
          "Con tu banda: 15 separaciones al frente + 15 rotaciones externas por lado.",
          "10 círculos grandes de brazos hacia atrás y una serie liviana de press de pecho (12 reps con la mitad del peso).",
        ],
        alternatives: [
          { id: "bici-suave", note: "si llegas molido del MMA o no hay espacio para saltar." },
          { id: "eliptica-suave", note: "mismos 5 min, moviendo los brazos." },
          { id: "remo-suave-polea", note: "activa espalda y hombro antes de empujar." },
        ],
      },
      {
        images: img("Leverage_Chest_Press"),
        title: "Press de pecho en máquina",
        reps: "3 × 8–10",
        desc: "<b>RIR 1–2.</b> La máquina de press sentado (Matrix), <b>con la espalda apoyada</b>: empuja explosivo como un golpe y vuelve en 2–3 s.",
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
          { id: "peck-fly", note: "estación 26, si quieres más pecho." },
        ],
      },
      {
        images: img("Leverage_Shoulder_Press"),
        title: "Press de hombro en máquina",
        reps: "3 × 8–10",
        desc: "<b>RIR 2.</b> Reemplaza el push press: hombro fuerte <b>sentado y con respaldo</b>, sin cargar la columna de pie.",
        watch: "Fuerza tradicional",
        steps: [
          "Ajusta el asiento: manijas a la altura de las orejas, espalda pegada al respaldo.",
          "Empuja arriba sin bloquear los codos y <b>sin arquear la lumbar</b>.",
          "Baja controlado en 2 s.",
        ],
        alternatives: [
          { id: "press-hombro-smith", note: "sentado en la Smith, con respaldo." },
          { id: "press-hombro-mancuernas", note: "sentado con respaldo alto." },
        ],
      },
      {
        icon: "i-lateral",
        title: "Elevación lateral en máquina",
        reps: "3 × 12–15",
        desc: "Estación 55: <b>hombros anchos sin cargar la articulación</b> — peso moderado y repeticiones limpias.",
        watch: "Fuerza tradicional",
        steps: [
          "Ajusta el asiento: hombros alineados con el eje de la máquina.",
          "Sube los brazos hasta la horizontal, <b>sin encoger los hombros</b>.",
          "Baja en 2 s resistiendo el peso.",
        ],
        alternatives: [
          { id: "laterales-polea", note: "en el multifuncional, un brazo a la vez." },
          { id: "laterales-mancuernas", note: "el clásico con mancuernas." },
        ],
      },
      {
        images: img("Triceps_Pushdown_-_Rope_Attachment"),
        title: "Tríceps en polea",
        reps: "3 × 12–15",
        desc: "<b>El tríceps es el final del golpe:</b> extiende el codo en el último tramo del recto. Codos pegados; aquí sí puedes llegar al fallo. <b>En superserie con el curl</b> de abajo.",
        watch: "Fuerza tradicional",
        steps: [
          "Cuerda en la polea alta; codos pegados al cuerpo y torso quieto.",
          "Extiende hasta abrir la cuerda abajo y aprieta 1 s.",
          "Sube controlado sin que los codos se despeguen.",
          "Pasa directo al curl martillo y luego descansa 60 s.",
        ],
        alternatives: [
          { id: "maquina-triceps", note: "la Arm Extension, si el multifuncional está lleno." },
          { id: "press-frances-z", note: "del día B de tu app." },
          { id: "fondos-banco", note: "pies adelante, sin equipo." },
        ],
      },
      {
        images: img("Cable_Hammer_Curls_-_Rope_Attachment"),
        title: "Curl martillo en polea",
        reps: "3 × 10–12",
        desc: "Con la misma cuerda pasada a la polea baja: agarre neutro, codos quietos. <b>Antebrazo y bíceps que sostienen el gancho</b> y no sueltan el agarre.",
        watch: "Fuerza tradicional",
        steps: [
          "Pasa la misma cuerda a la polea baja, justo después del tríceps.",
          "Agarre neutro (pulgares arriba), codos pegados y quietos.",
          "Sube hasta la máxima flexión <b>sin balancear el torso</b>.",
          "Baja en 2 s resistiendo: el antebrazo trabaja todo el recorrido.",
        ],
        alternatives: [
          { id: "curl-maquina", note: "la Bíceps Curl de tu app, si la polea está lejos." },
          { id: "curl-martillo-mancuernas", note: "el clásico con mancuernas." },
          { id: "curl-barra-z", note: "agarre supino para variar el estímulo." },
        ],
      },
      {
        images: img("Dip_Machine"),
        title: "Tríceps press en máquina",
        reps: "3 × 10–12",
        desc: "El <b>Tríceps Press de tu app</b> (fondos sentado con placas): empuja pesado sin colgarte de nada. <b>En superserie con el Scott</b> de abajo.",
        watch: "Fuerza tradicional",
        steps: [
          "Ajusta el asiento: las manijas a la altura del pecho bajo, espalda apoyada.",
          "Empuja hasta estirar los codos y <b>aprieta 1 s</b>.",
          "Sube lento resistiendo la placa.",
          "Pasa directo al curl Scott y luego descansa 60 s.",
        ],
        alternatives: [
          { id: "maquina-triceps", note: "la Arm Extension: mismo músculo, otra máquina." },
          { id: "press-frances-z", note: "con barra Z en banco." },
          { id: "fondos-banco", note: "la versión sin máquina." },
        ],
      },
      {
        images: img("Machine_Preacher_Curls"),
        title: "Curl en máquina Scott",
        reps: "3 × 10–12",
        desc: "El banco predicador en máquina, del catálogo de tu app: con el brazo apoyado <b>el bíceps no puede hacer trampa</b>. Justo después de cada serie de tríceps press.",
        watch: "Fuerza tradicional",
        steps: [
          "Axilas al borde del cojín, brazos completamente apoyados.",
          "Sube hasta la contracción máxima sin despegar los codos.",
          "Baja lento hasta casi estirar. <b>Sin rebotes abajo.</b>",
        ],
        alternatives: [
          { id: "curl-maquina", note: "la Bíceps Curl sentado, también de tu app." },
          { id: "curl-barra-z", note: "de pie, si las máquinas están llenas." },
          { id: "curl-martillo-mancuernas", note: "agarre neutro para variar." },
        ],
      },
      {
        images: img("Pallof_Press"),
        title: "Pallof press en polea",
        reps: "3 × 10 / lado",
        desc: "<b>Bloque de columna.</b> Anti-rotación: la polea quiere girarte y tu core no la deja. Pausa de 2 s con los brazos estirados.",
        watch: "Core",
        steps: [
          "Polea a la altura del pecho; párate de lado a la torre y da un paso para tensar el cable.",
          "Manos al pecho; extiende los brazos al frente <b>sin dejar que el torso gire</b> y sostén 2 s.",
          "Vuelve al pecho. Termina el lado y cambia: mismas reps por lado.",
        ],
        alternatives: [
          { id: "pallof-rodilla", note: "de rodilla: más estable, misma polea." },
          { id: "pallof-banda", note: "con tu banda, si la polea está ocupada." },
        ],
      },
      planchaLateral("Cierra la semana de gym con la misma plancha del lunes y el miércoles."),
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
        desc: "Tobillos, cadera, hombro con banda y gato-camello. <b>Los primeros 10 min, peloteo suave</b>: no entres frío.",
      },
      {
        icon: "i-padel",
        title: "El partido",
        reps: "1–2 h",
        desc: "Tu cardio del finde, jugado. Ojo: el ortopedista pidió <b>evitar caminatas largas y senderismo</b> y no habló del pádel, que es 1–2 h de pie y desplazándote. <b>Mejor 1 h que 2</b> hasta preguntarle; si la espalda molesta al día siguiente, acórtalo. Hidrátate entre sets.",
        watch: "Pádel",
      },
      {
        icon: "i-stretch",
        title: "Después + el otro día",
        reps: "5 min",
        desc: "Estira pantorrillas, antebrazos y hombro; gato-camello y postura del niño. El otro día del fin de semana es <b>descanso total</b>: el lunes se arranca de nuevo.",
        watch: "Flexibilidad",
      },
    ],
  },
];
