import type { AltDetail, DayData } from "./types";

/** Fotos de free-exercise-db (dominio público), descargadas a /public/exercises. */
const img = (id: string): [string, string] => [
  `/exercises/${id}_0.jpg`,
  `/exercises/${id}_1.jpg`,
];

/**
 * Preparación para el ascenso al volcán Acatenango (Guatemala):
 * ~1.500 m de desnivel el primer día con mochila de 6–10 kg, campamento a
 * ~3.600 m y bajada exigente para las rodillas. Smart Fit, 5 días/semana,
 * sesiones de máximo 1,5 h. De los objetivos anteriores solo se mantiene la
 * postura.
 *
 * Semana tipo: Lun Pierna A (fuerza) · Mar caminadora inclinada + core y
 * estabilidad · Mié espalda, hombros y postura · Jue Pierna B + escaladora ·
 * Vie descanso · Sáb caminata en montaña · Dom descanso.
 *
 * Cada sesión tiene tres partes: `warmup` (calentamiento), las tarjetas del
 * bloque principal y `cooldown` (enfriamiento); los tres son obligatorios.
 *
 * Reglas generales (ver Rules.astro): 90 s entre series (60 s en el bloque de
 * core del martes), ~2 reps en reserva y subir el peso en la siguiente sesión
 * al completar todas las series y reps.
 *
 * Las tarjetas de caminadora, escaladora y caminata dependen de la fase: los
 * valores de hoy los rellena el script de Phases.astro en los <b data-hoy> a
 * partir de src/data/plan-valeria.ts (fecha del ascenso configurable).
 *
 * Cada ejercicio trae `steps` (técnica, paso a paso) y `alternatives` (ids del
 * catálogo de abajo, 1–2 por ejercicio, siempre con una opción de máquina).
 */
export const altCatalog: Record<string, AltDetail> = {
  /* ---- Cardio ---- */
  "escaladora": {
    title: "Escaladora",
    reps: "mismo tiempo y mochila",
    images: img("Stairmaster"),
    desc: "Si la caminadora está ocupada: ritmo moderado, con el mismo tiempo y la misma mochila que marca la fase.",
    steps: [
      "Pisa el escalón completo, sin quedarte en la punta.",
      "Ritmo moderado y constante; no te cuelgues de las manijas.",
      "Mochila ajustada y pegada a la espalda.",
    ],
  },
  "caminadora-inclinada": {
    title: "Caminadora inclinada",
    reps: "mismo tiempo y mochila",
    images: img("Walking_Treadmill"),
    desc: "Si la escaladora está ocupada: 15 % de inclinación y 4,0 km/h, con el tiempo y la mochila de la fase.",
    steps: [
      "Inclinación al 15 % y velocidad en 4,0 km/h.",
      "Camina erguida, sin agarrarte de las barandas.",
      "Mochila ajustada, cargada al peso de la fase.",
    ],
  },

  /* ---- Pierna ---- */
  "hack-squat": {
    title: "Hack squat",
    reps: "4 × 10",
    images: img("Hack_Squat"),
    desc: "Sentadilla guiada en máquina: el mismo empuje de la prensa, de pie.",
    steps: [
      "Hombros bajo las almohadillas, pies un paso adelante.",
      "Baja controlada con la espalda pegada al respaldo.",
      "Sube sin bloquear las rodillas.",
    ],
  },
  "sentadilla-smith": {
    title: "Sentadilla en Smith",
    reps: "4 × 10",
    images: img("Smith_Machine_Squat"),
    desc: "La barra guiada hace de máquina: recorrido fijo y seguro.",
    steps: [
      "Barra en los trapecios, pies un pasito adelante del cuerpo.",
      "Baja controlada hasta donde la técnica se mantenga limpia.",
      "Sube empujando con toda la planta.",
    ],
  },
  "prensa-unilateral": {
    title: "Prensa unilateral",
    reps: "3 × 12 por pierna",
    images: img("Leg_Press"),
    desc: "Una pierna a la vez en la prensa: el trabajo unilateral sin banco ni escalón.",
    steps: [
      "Un pie al centro de la plataforma, el otro en el piso o apoyado.",
      "Baja controlada y empuja con toda la planta, sin bloquear la rodilla.",
      "Termina la pierna y cambia.",
    ],
  },
  "zancadas-mancuernas": {
    title: "Zancadas con mancuernas",
    reps: "3 × 10 por pierna",
    images: img("Dumbbell_Lunges"),
    desc: "Si no hay banco ni escalón libre: el paso largo con mancuernas trabaja lo mismo.",
    steps: [
      "Mancuernas a los lados, paso largo al frente.",
      "Baja hasta que la rodilla de atrás casi toque el piso, torso recto.",
      "Empuja con el talón de adelante para volver.",
    ],
  },
  "femoral-sentado": {
    title: "Curl femoral sentado",
    reps: "3 × 12",
    images: img("Seated_Leg_Curl"),
    desc: "La versión sentada del curl femoral: mismo isquio, otro ángulo.",
    steps: [
      "Ajusta el respaldo: la rodilla alineada con el eje de la máquina.",
      "Flexiona hasta la máxima contracción.",
      "Vuelve en 2–3 s resistiendo, sin que la placa rebote.",
    ],
  },
  "femoral-tumbado": {
    title: "Curl femoral acostado",
    reps: "3 × 12",
    images: img("Lying_Leg_Curls"),
    desc: "La versión boca abajo del curl femoral.",
    steps: [
      "Boca abajo, rodillo sobre los tobillos, cadera pegada al banco.",
      "Lleva los talones al glúteo con control.",
      "Baja en 2–3 s sin soltar la tensión.",
    ],
  },
  "puente-suelo": {
    title: "Puente de glúteo en el piso",
    reps: "3 × 10",
    images: img("Butt_Lift_Bridge"),
    desc: "Sin máquina: el mismo empuje de cadera en colchoneta.",
    steps: [
      "Boca arriba, pies plantados al ancho de cadera.",
      "Empuja con los talones y sube la cadera hasta la línea recta.",
      "Aprieta el glúteo arriba y baja controlada.",
    ],
  },
  "patada-gluteo-polea": {
    title: "Patada de glúteo en polea",
    reps: "3 × 10 por pierna",
    images: img("Glute_Kickback"),
    desc: "Tobillera en la polea baja: extensión de cadera de a una pierna.",
    steps: [
      "Tobillera puesta, apóyate del marco de la polea.",
      "Patea atrás y arriba con la rodilla flexionada, empujando con el talón.",
      "Aprieta al final; la lumbar no se arquea.",
    ],
  },
  "gemelos-sentado": {
    title: "Gemelos sentado en máquina",
    reps: "3 × 15",
    images: img("Seated_Calf_Raise"),
    desc: "La máquina de gemelos con rodilla flexionada.",
    steps: [
      "Cojín sobre los muslos, punta de los pies en la plataforma.",
      "Sube hasta la máxima contracción.",
      "Baja lento hasta el estiramiento completo, sin rebote.",
    ],
  },
  "gemelos-de-pie": {
    title: "Gemelos de pie en máquina",
    reps: "3 × 20",
    images: img("Standing_Calf_Raises"),
    desc: "La máquina de gemelos de pie: rodilla extendida, rango completo.",
    steps: [
      "Hombros bajo las almohadillas, punta de los pies en el escalón.",
      "Sube a la punta de los pies y sostén un instante.",
      "Baja lento hasta que el talón quede por debajo del escalón.",
    ],
  },
  "gemelos-prensa": {
    title: "Gemelos en la prensa",
    reps: "mismas series y reps",
    images: img("Calf_Press_On_The_Leg_Press_Machine"),
    desc: "Empujando la plataforma de la prensa solo con la punta del pie.",
    steps: [
      "Piernas casi extendidas, solo la punta del pie en la plataforma.",
      "Empuja hasta la máxima extensión.",
      "Baja lento hasta el estiramiento completo.",
    ],
  },
  "abductora-maquina": {
    title: "Abductora en máquina",
    reps: "3 × 15",
    images: img("Thigh_Abductor"),
    desc: "Glúteo medio en máquina: el que estabiliza la rodilla en cada paso.",
    steps: [
      "Espalda pegada al respaldo, piernas dentro de los cojines.",
      "Abre contra la placa hasta tu rango máximo.",
      "Cierra lento, sin que las placas choquen.",
    ],
  },
  "aduccion-polea": {
    title: "Aducción en polea",
    reps: "3 × 15 por pierna",
    images: img("Cable_Hip_Adduction"),
    desc: "Tobillera en la polea baja: el aductor trabaja de pie, una pierna a la vez.",
    steps: [
      "Tobillera en la pierna cercana a la torre; apóyate del marco.",
      "Cruza la pierna por delante del cuerpo contra el cable.",
      "Regresa lento; termina el lado y cambia.",
    ],
  },

  /* ---- Espalda, hombros y postura ---- */
  "jalon-neutro": {
    title: "Jalón al pecho, agarre neutro",
    reps: "4 × 10",
    images: img("Close-Grip_Front_Lat_Pulldown"),
    desc: "Palmas enfrentadas: el jalón más cómodo para hombros y codos.",
    steps: [
      "Triángulo o agarre neutro en la polea alta, pecho arriba.",
      "Jala con los codos hacia las costillas.",
      "Sube controlada en 2 s.",
    ],
  },
  "dominada-asistida": {
    title: "Dominada asistida",
    reps: "4 × 10",
    images: img("Band_Assisted_Pull-Up"),
    desc: "El patrón completo del jalón con la ayuda de la máquina de contrapeso.",
    steps: [
      "Contrapeso que te deje completar las repeticiones limpias.",
      "Jala hasta pasar la barbilla, pecho a la barra.",
      "Baja en 2–3 s.",
    ],
  },
  "remo-polea": {
    title: "Remo sentado en polea",
    reps: "4 × 10",
    images: img("Seated_Cable_Rows"),
    desc: "El remo en el multifuncional si la máquina está ocupada.",
    steps: [
      "Rodillas apenas flexionadas, pecho firme.",
      "Jala el agarre al abdomen llevando los codos atrás.",
      "Aprieta los omóplatos y regresa controlada.",
    ],
  },
  "remo-mancuerna": {
    title: "Remo con mancuerna a una mano",
    reps: "4 × 10 por lado",
    images: img("One-Arm_Dumbbell_Row"),
    desc: "Mano y rodilla en el banco: un lado a la vez, espalda plana.",
    steps: [
      "Mano y rodilla en el banco, espalda plana como una mesa.",
      "Jala la mancuerna a la cadera llevando el codo atrás.",
      "Baja hasta estirar y repite.",
    ],
  },
  "reverse-peck": {
    title: "Pec deck invertido",
    reps: "3 × 15",
    images: img("Reverse_Machine_Flyes"),
    desc: "Hombro posterior guiado por la máquina: mismo trabajo que el face pull.",
    steps: [
      "Siéntate de frente al respaldo con las manijas atrás.",
      "Abre los brazos hacia atrás llevando los codos.",
      "Aprieta los omóplatos y regresa lento.",
    ],
  },
  "facepull-polea": {
    title: "Face pull en polea",
    reps: "3 × 15",
    images: img("Face_Pull"),
    desc: "Hombro posterior y espalda alta en la polea alta: el gesto de la postura.",
    steps: [
      "Cuerda a la altura de la cara; un paso atrás para tensar.",
      "Jala hacia la frente abriendo la cuerda, codos altos.",
      "Aprieta atrás y regresa lento.",
    ],
  },
  "posteriores-mancuernas": {
    title: "Posteriores con mancuernas",
    reps: "3 × 15",
    images: img("Seated_Bent-Over_Rear_Delt_Raise"),
    desc: "Sentada e inclinada al frente: hombro posterior con mancuernas livianas.",
    steps: [
      "Sentada, torso inclinado casi al muslo.",
      "Abre los brazos a los lados como alas, codos suaves.",
      "Baja lento sin impulso.",
    ],
  },
  "press-hombro-smith": {
    title: "Press de hombro en Smith",
    reps: "3 × 10",
    images: img("Smith_Machine_Overhead_Shoulder_Press"),
    desc: "La barra guiada hace de máquina: recorrido fijo y seguro.",
    steps: [
      "Banco con respaldo alto bajo la barra de la Smith.",
      "Baja la barra al frente hasta la altura de la barbilla.",
      "Empuja arriba sin bloquear los codos.",
    ],
  },
  "press-hombro-mancuernas": {
    title: "Press de hombro con mancuernas",
    reps: "3 × 10",
    images: img("Seated_Dumbbell_Press"),
    desc: "Sentada con respaldo si la máquina está ocupada.",
    steps: [
      "Respaldo casi vertical, mancuernas a la altura de las orejas.",
      "Empuja arriba sin chocarlas ni bloquear los codos.",
      "Baja en 2 s.",
    ],
  },
  "hiperextension-banco": {
    title: "Extensión lumbar en banco 45°",
    reps: "3 × 12",
    images: img("Hyperextensions_Back_Extensions"),
    desc: "El banco romano si la máquina de lumbar está ocupada.",
    steps: [
      "Cojín en el pliegue de la cadera, brazos cruzados al pecho.",
      "Baja controlada con la espalda larga.",
      "Sube hasta la línea recta, sin pasarte arriba.",
    ],
  },
  "superman": {
    title: "Superman en el piso",
    reps: "3 × 12",
    images: img("Superman"),
    desc: "Lumbar sin ningún equipo: brazos y piernas al aire.",
    steps: [
      "Boca abajo, brazos extendidos al frente.",
      "Despega brazos y piernas a la vez y sostén un instante.",
      "Baja con control, sin rebotar.",
    ],
  },

  /* ---- Core y estabilidad ---- */
  "plancha-rodillas": {
    title: "Plancha con rodillas apoyadas",
    reps: "3 × 40 s",
    images: img("Plank"),
    desc: "La versión amable de la plancha: mismo core, menos palanca.",
    steps: [
      "Antebrazos y rodillas al piso, cuerpo en línea de rodillas a cabeza.",
      "Aprieta glúteo y abdomen; la cadera ni sube ni se cae.",
      "Respira normal hasta completar el tiempo.",
    ],
  },
  "plancha-lateral": {
    title: "Plancha lateral",
    reps: "3 × 30 s por lado",
    images: img("Side_Bridge"),
    desc: "El core lateral sin equipo: de lado sobre el antebrazo.",
    steps: [
      "De lado sobre el antebrazo, codo bajo el hombro.",
      "Cadera arriba: cuerpo en línea recta de pies a cabeza.",
      "Aguanta el tiempo respirando normal; cambia de lado.",
    ],
  },
  "crunch-polea": {
    title: "Crunch en polea con cuerda",
    reps: "mismas series y reps",
    images: img("Cable_Crunch"),
    desc: "Core con placas en el multifuncional.",
    steps: [
      "Arrodillada frente a la polea alta, cuerda a los lados de la cabeza.",
      "Encorva las costillas hacia la cadera; la cadera no se mueve.",
      "Regresa lento manteniendo la tensión.",
    ],
  },
  "pallof": {
    title: "Pallof press en polea",
    reps: "3 × 12 por lado",
    icon: "i-pallof",
    desc: "Anti-rotación en la polea: el mismo trabajo lateral del core, de pie.",
    steps: [
      "Polea a la altura del pecho, párate de lado y da un paso para tensar.",
      "Extiende los brazos al frente y vuelve al pecho sin girar.",
      "Termina el lado y cambia.",
    ],
  },
  "dead-bug": {
    title: "Dead bug",
    reps: "3 × 10 por lado",
    images: img("Dead_Bug"),
    desc: "Core anti-extensión en colchoneta: brazo y pierna contrarios, lumbar pegada al piso.",
    steps: [
      "Boca arriba, brazos al techo y rodillas a 90°.",
      "Estira el brazo y la pierna contrarios sin despegar la lumbar del piso.",
      "Vuelve y cambia de lado.",
    ],
  },
  "bird-dog": {
    title: "Bird dog",
    reps: "3 × 10 por lado",
    icon: "i-birddog",
    desc: "Estabilidad del tronco en cuadrupedia: brazo y pierna contrarios.",
    steps: [
      "En cuatro apoyos, manos bajo los hombros y rodillas bajo la cadera.",
      "Estira el brazo y la pierna contrarios sin girar la cadera.",
      "Vuelve con control y cambia de lado.",
    ],
  },
  "farmer-dos-manos": {
    title: "Caminata con dos mancuernas",
    reps: "3 × 40 m",
    images: img("Farmers_Walk"),
    desc: "Si solo hay mancuernas pesadas libres: una en cada mano, misma distancia.",
    steps: [
      "Una mancuerna en cada mano, hombros atrás y abajo.",
      "Camina erguida con pasos cortos y firmes.",
      "Completa la distancia y descansa.",
    ],
  },
  "equilibrio-piso": {
    title: "Equilibrio en una pierna en el piso",
    reps: "3 × 30 s por pierna",
    icon: "i-balance",
    desc: "Sin bosu: el mismo equilibrio en el piso.",
    steps: [
      "De pie sobre una pierna, rodilla apenas flexionada.",
      "Mirada al frente, cadera nivelada; aguanta el tiempo.",
      "Cambia de pierna.",
    ],
  },
};

/* Calentamiento y enfriamiento compartidos por Pierna A (lunes) y Pierna B (jueves). */
const calentamientoPierna = {
  items: [
    "<b>5 min de bicicleta</b> a ritmo suave",
    "Balanceo de pierna adelante-atrás — <b>10 por lado</b>",
    "Balanceo de pierna lateral — <b>10 por lado</b>",
    "Círculos de cadera — <b>10 por lado</b>",
    "Puente de glúteo en el piso — <b>2 × 10</b>",
    "Serie de aproximación en prensa: <b>10 reps con la mitad del peso de trabajo</b>",
  ],
};

const enfriamientoPierna = {
  items: [
    "<b>5 min de bicicleta</b> muy suave",
    "Estiramientos, <b>45 s cada uno por lado</b>: cuádriceps de pie, isquiotibiales, gemelo contra la pared, flexor de cadera en zancada, glúteo en figura 4",
  ],
};

const reglaFuerza = "<b>~2 repeticiones en reserva</b> al terminar cada serie; 90 s de descanso.";
const reglaCore = "60 s de descanso entre series.";

export const days: DayData[] = [
  {
    id: "dia1",
    num: "01",
    kicker: "Lunes · ~70–75 min",
    title: "Pierna A (Fuerza)",
    quote: "La fuerza que sube 1.500 m de desnivel con la mochila puesta.",
    warmup: calentamientoPierna,
    cooldown: enfriamientoPierna,
    exercises: [
      {
        images: img("Leg_Press"),
        title: "Prensa de pierna",
        reps: "4 × 10",
        desc: reglaFuerza,
        steps: [
          "Pies al centro de la plataforma, al ancho de cadera.",
          "Baja controlada hasta donde la espalda y la cadera se mantengan pegadas al respaldo.",
          "Empuja con toda la planta, sin bloquear las rodillas arriba.",
        ],
        alternatives: [
          { id: "hack-squat", note: "si la prensa está ocupada." },
          { id: "sentadilla-smith", note: "con la barra guiada." },
        ],
      },
      {
        images: img("Dumbbell_Step_Ups"),
        title: "Step-ups a banco (~40 cm)",
        reps: "3 × 10 por pierna",
        desc: `Banco de unos 40 cm. ${reglaFuerza}`,
        steps: [
          "Pie completo sobre el banco, rodilla alineada con la punta del pie.",
          "Sube empujando con la pierna de arriba, sin impulsarte con la de abajo.",
          "Baja controlada y completa las 10 antes de cambiar de pierna.",
        ],
        alternatives: [
          { id: "prensa-unilateral", note: "en máquina, si no hay banco libre." },
          { id: "zancadas-mancuernas", note: "con mancuernas, sin banco." },
        ],
      },
      {
        images: img("Leg_Extensions"),
        title: "Extensión de cuádriceps",
        reps: "3 × 12",
        desc: reglaFuerza,
        steps: [
          "Rodillo sobre los tobillos, rodilla alineada con el eje de la máquina.",
          "Extiende hasta arriba con control.",
          "Baja en 2 s sin que la placa rebote.",
        ],
        alternatives: [
          { id: "hack-squat", note: "cuádriceps en máquina guiada." },
          { id: "prensa-unilateral", note: "una pierna a la vez en la prensa." },
        ],
      },
      {
        images: img("Lying_Leg_Curls"),
        title: "Curl femoral acostado",
        reps: "3 × 12",
        desc: reglaFuerza,
        steps: [
          "Boca abajo, rodillo sobre los tobillos, cadera pegada al banco.",
          "Lleva los talones al glúteo con control.",
          "Baja en 2–3 s sin soltar la tensión.",
        ],
        alternatives: [
          { id: "femoral-sentado", note: "la versión sentada." },
          { id: "puente-suelo", note: "sin máquina." },
        ],
      },
      {
        images: img("Barbell_Hip_Thrust"),
        title: "Hip thrust en máquina",
        reps: "3 × 10",
        desc: reglaFuerza,
        steps: [
          "Espalda alta apoyada, cojín sobre la cadera, pies al ancho de cadera.",
          "Empuja con los talones hasta quedar recta de rodillas a hombros.",
          "Aprieta el glúteo arriba y baja controlada.",
        ],
        alternatives: [
          { id: "patada-gluteo-polea", note: "en polea con tobillera." },
          { id: "puente-suelo", note: "en colchoneta." },
        ],
      },
      {
        images: img("Standing_Calf_Raises"),
        title: "Gemelos de pie en máquina",
        reps: "3 × 15",
        desc: reglaFuerza,
        steps: [
          "Hombros bajo las almohadillas, punta de los pies en el escalón.",
          "Sube a la punta de los pies y sostén un instante.",
          "Baja lento hasta que el talón quede por debajo del escalón.",
        ],
        alternatives: [
          { id: "gemelos-prensa", note: "en la prensa, si la máquina está ocupada." },
          { id: "gemelos-sentado", note: "la versión sentada." },
        ],
      },
      {
        images: img("Plank"),
        title: "Plancha frontal",
        reps: "3 × 40 s",
        desc: "90 s de descanso entre series.",
        steps: [
          "Antebrazos al piso, codos bajo los hombros, cuerpo en línea recta.",
          "Aprieta glúteo y abdomen: la cadera ni sube ni se cae.",
          "Respira normal hasta completar los 40 s.",
        ],
        alternatives: [
          { id: "crunch-polea", note: "core con placas en la polea." },
          { id: "plancha-rodillas", note: "para acumular segundos limpios." },
        ],
      },
    ],
  },
  {
    id: "dia2",
    num: "02",
    kicker: "Martes · ~70 min en fase 1 a ~90 min en fase 3",
    title: "Caminadora Inclinada + Core y Estabilidad",
    quote: "La cuesta se entrena en la caminadora; el tronco que la aguanta, en el piso.",
    warmup: {
      items: [
        "<b>5 min en caminadora</b> al 5 % de inclinación y 4,5 km/h",
        "Balanceo de pierna adelante-atrás — <b>10 por lado</b>",
        "Círculos de tobillo — <b>10 por lado en cada dirección</b>",
        "Gato-camello en el piso — <b>10 repeticiones</b>",
      ],
    },
    cooldown: {
      items: [
        "<b>3 min en caminadora</b> al 0 % y 4,0 km/h",
        "Estiramientos, <b>45 s cada uno por lado</b>: gemelo contra la pared, flexor de cadera en zancada, isquiotibiales, pectoral en el marco de una puerta",
      ],
    },
    exercises: [
      {
        images: img("Walking_Treadmill"),
        title: "Caminadora inclinada",
        reps: "15 % · 4,0 km/h",
        desc: "Siempre al <b>15 % de inclinación y 4,0 km/h, sin agarrarse de las barandas</b>. El tiempo y la mochila los marca la fase — hoy: <b data-hoy=\"caminadora\">según la fase</b>. Mochila: la misma del viaje, cargada con botellas de agua (1 L = 1 kg).",
        steps: [
          "Inclinación al 15 % y velocidad en 4,0 km/h antes de subirte.",
          "Si la fase lo pide, la mochila del viaje con botellas de agua al peso indicado (1 L = 1 kg), bien ajustada.",
          "Camina erguida, sin agarrarte de las barandas, el tiempo que marca la fase.",
        ],
        alternatives: [
          { id: "escaladora", note: "si la caminadora está ocupada: ritmo moderado, mismo tiempo y mochila." },
        ],
      },
      {
        images: img("Dead_Bug"),
        title: "Dead bug",
        reps: "3 × 10 por lado",
        desc: `Core y estabilidad. ${reglaCore}`,
        steps: [
          "Boca arriba, brazos al techo y rodillas a 90°, lumbar pegada al piso.",
          "Estira el brazo y la pierna contrarios hacia el piso sin que la lumbar se despegue.",
          "Vuelve con control y cambia de lado; completa las 10 por lado.",
        ],
        alternatives: [
          { id: "bird-dog", note: "el mismo patrón, en cuatro apoyos." },
          { id: "crunch-polea", note: "core con placas en la polea." },
        ],
      },
      {
        icon: "i-pallof",
        title: "Pallof press en polea",
        reps: "3 × 12 por lado",
        desc: `Core y estabilidad. ${reglaCore}`,
        steps: [
          "Polea a la altura del pecho; párate de lado y da un paso para tensar el cable.",
          "Extiende los brazos al frente sin que el torso gire, y vuelve al pecho.",
          "Completa las 12 y cambia de lado.",
        ],
        alternatives: [
          { id: "plancha-lateral", note: "core lateral sin polea." },
          { id: "crunch-polea", note: "si la polea del pecho está ocupada, la alta con cuerda." },
        ],
      },
      {
        icon: "i-birddog",
        title: "Bird dog",
        reps: "3 × 10 por lado",
        desc: `Core y estabilidad. ${reglaCore}`,
        steps: [
          "En cuatro apoyos: manos bajo los hombros, rodillas bajo la cadera.",
          "Estira el brazo y la pierna contrarios hasta la línea del cuerpo, sin girar la cadera.",
          "Vuelve con control y cambia de lado; completa las 10 por lado.",
        ],
        alternatives: [
          { id: "dead-bug", note: "el mismo patrón, boca arriba." },
          { id: "crunch-polea", note: "core con placas en la polea." },
        ],
      },
      {
        icon: "i-walk",
        title: "Caminata con mancuerna de 8 kg en una mano",
        reps: "3 × 40 m por lado",
        desc: `Mancuerna de 8 kg en una sola mano. ${reglaCore}`,
        steps: [
          "Mancuerna de 8 kg en una mano, hombros atrás y abajo, torso recto sin inclinarte al lado del peso.",
          "Camina 40 m con pasos cortos y firmes.",
          "Cambia de mano y vuelve los 40 m.",
        ],
        alternatives: [
          { id: "farmer-dos-manos", note: "si solo hay mancuernas pesadas libres." },
          { id: "pallof", note: "anti-rotación en la polea." },
        ],
      },
      {
        icon: "i-balance",
        title: "Equilibrio en una pierna sobre bosu",
        reps: "3 × 30 s por pierna",
        desc: `Sobre bosu, o en el piso si no hay. ${reglaCore}`,
        steps: [
          "Un pie al centro del bosu, rodilla apenas flexionada.",
          "Mirada al frente, cadera nivelada; aguanta los 30 s.",
          "Cambia de pierna.",
        ],
        alternatives: [
          { id: "equilibrio-piso", note: "si no hay bosu." },
          { id: "abductora-maquina", note: "el glúteo medio que estabiliza, en máquina." },
        ],
      },
    ],
  },
  {
    id: "dia3",
    num: "03",
    kicker: "Miércoles · ~70–75 min",
    title: "Espalda, Hombros y Postura",
    quote: "La postura es lo único que se queda de los objetivos anteriores — y la que sostiene la mochila.",
    warmup: {
      items: [
        "<b>5 min de elíptica</b> a ritmo suave, moviendo también los brazos",
        "Círculos de brazos — <b>10 hacia adelante y 10 hacia atrás</b>",
        "Gato-camello en el piso — <b>10 repeticiones</b>",
        "Face pull muy ligero en polea — <b>1 × 15</b>",
        "Serie de aproximación en jalón al pecho: <b>12 reps con la mitad del peso de trabajo</b>",
      ],
    },
    cooldown: {
      items: [
        "<b>5 min caminando</b> en caminadora al 0 % y 4,0 km/h",
        "Estiramientos, <b>45 s cada uno</b> (por lado cuando aplique): pectoral en el marco de una puerta, dorsal agarrada a una columna, trapecio superior (inclinar la cabeza hacia el hombro), postura del niño",
      ],
    },
    exercises: [
      {
        images: img("Wide-Grip_Lat_Pulldown"),
        title: "Jalón al pecho",
        reps: "4 × 10",
        desc: reglaFuerza,
        steps: [
          "Agarre un poco más ancho que los hombros, pecho arriba.",
          "Jala la barra al pecho con los codos hacia el piso.",
          "Sube controlada en 2 s.",
        ],
        alternatives: [
          { id: "jalon-neutro", note: "agarre neutro, más cómodo para el hombro." },
          { id: "dominada-asistida", note: "con el contrapeso de la máquina." },
        ],
      },
      {
        images: img("Leverage_Iso_Row"),
        title: "Remo sentado en máquina",
        reps: "4 × 10",
        desc: reglaFuerza,
        steps: [
          "Pecho apoyado en la almohadilla, agarre neutro.",
          "Jala llevando los codos atrás y aprieta los omóplatos.",
          "Regresa hasta estirar del todo la espalda.",
        ],
        alternatives: [
          { id: "remo-polea", note: "en el multifuncional." },
          { id: "remo-mancuerna", note: "a una mano en el banco." },
        ],
      },
      {
        images: img("Face_Pull"),
        title: "Face pull en polea",
        reps: "3 × 15",
        desc: reglaFuerza,
        steps: [
          "Cuerda a la altura de la cara; un paso atrás para tensar.",
          "Jala hacia la frente abriendo la cuerda, codos altos y anchos.",
          "Aprieta la parte trasera del hombro y regresa lento.",
        ],
        alternatives: [
          { id: "reverse-peck", note: "en máquina, si la polea está ocupada." },
          { id: "posteriores-mancuernas", note: "inclinada con mancuernas." },
        ],
      },
      {
        images: img("Leverage_Shoulder_Press"),
        title: "Press de hombro en máquina",
        reps: "3 × 10",
        desc: reglaFuerza,
        steps: [
          "Ajusta el asiento: manijas a la altura de las orejas.",
          "Empuja arriba sin bloquear los codos.",
          "Baja controlada en 2 s, espalda pegada al respaldo.",
        ],
        alternatives: [
          { id: "press-hombro-smith", note: "con la barra guiada." },
          { id: "press-hombro-mancuernas", note: "sentada con respaldo." },
        ],
      },
      {
        images: img("Reverse_Machine_Flyes"),
        title: "Pec deck invertido (deltoide posterior)",
        reps: "3 × 15",
        desc: reglaFuerza,
        steps: [
          "Siéntate de frente al respaldo con las manijas atrás.",
          "Abre los brazos hacia atrás llevando los codos, no las manos.",
          "Aprieta los omóplatos y regresa lento.",
        ],
        alternatives: [
          { id: "facepull-polea", note: "en la polea alta, mismo músculo." },
          { id: "posteriores-mancuernas", note: "con mancuernas livianas." },
        ],
      },
      {
        icon: "i-lumbar",
        title: "Extensión lumbar en máquina",
        reps: "3 × 12",
        desc: reglaFuerza,
        steps: [
          "Ajusta el cojín a la altura de los omóplatos y fija los pies.",
          "Empuja hacia atrás con la espalda larga hasta la extensión completa.",
          "Vuelve lento, sin dejar caer la placa.",
        ],
        alternatives: [
          { id: "hiperextension-banco", note: "en el banco 45°, si la máquina está ocupada." },
          { id: "superman", note: "en el piso, sin equipo." },
        ],
      },
      {
        images: img("Side_Bridge"),
        title: "Plancha lateral",
        reps: "3 × 30 s por lado",
        desc: "90 s de descanso entre series.",
        steps: [
          "De lado sobre el antebrazo, codo bajo el hombro.",
          "Cadera arriba: cuerpo en línea recta de pies a cabeza.",
          "Aguanta los 30 s respirando normal; cambia de lado.",
        ],
        alternatives: [
          { id: "pallof", note: "anti-rotación en la polea." },
          { id: "plancha-rodillas", note: "versión frontal con rodillas apoyadas." },
        ],
      },
    ],
  },
  {
    id: "dia4",
    num: "04",
    kicker: "Jueves · ~75 min en fase 1 a ~90 min en fase 3",
    title: "Pierna B y Escaladora",
    quote: "La bajada se entrena bajando lento.",
    warmup: { title: "Calentamiento (el mismo del lunes)", ...calentamientoPierna },
    cooldown: { title: "Enfriamiento (el mismo del lunes)", ...enfriamientoPierna },
    exercises: [
      {
        icon: "i-stepdown",
        title: "Step-downs lentos (escalón ~25 cm)",
        reps: "3 × 10 por pierna",
        desc: `Desde un escalón de unos 25 cm, <b>bajando en 3 s</b>. ${reglaFuerza}`,
        steps: [
          "De pie sobre el escalón, el peso en la pierna que se queda arriba.",
          "Baja el otro pie hacia el piso contando 3 s, con la rodilla de apoyo alineada con la punta del pie.",
          "Toca el piso apenas y vuelve a subir; completa las 10 antes de cambiar de pierna.",
        ],
        alternatives: [
          { id: "prensa-unilateral", note: "en máquina, si no hay escalón." },
          { id: "zancadas-mancuernas", note: "con mancuernas, sin escalón." },
        ],
      },
      {
        images: img("Leg_Press"),
        title: "Prensa unilateral",
        reps: "3 × 12 por pierna",
        desc: reglaFuerza,
        steps: [
          "Un pie al centro de la plataforma, el otro en el piso o apoyado.",
          "Baja controlada y empuja con toda la planta, sin bloquear la rodilla.",
          "Termina la pierna y cambia.",
        ],
        alternatives: [
          { id: "hack-squat", note: "en máquina guiada, con las dos piernas." },
          { id: "zancadas-mancuernas", note: "unilateral con mancuernas." },
        ],
      },
      {
        images: img("Thigh_Abductor"),
        title: "Abductora",
        reps: "3 × 15",
        desc: reglaFuerza,
        steps: [
          "Espalda pegada al respaldo, piernas dentro de los cojines.",
          "Abre contra la placa hasta tu rango máximo.",
          "Cierra lento, sin que las placas choquen.",
        ],
        alternatives: [
          { id: "patada-gluteo-polea", note: "en la polea baja con tobillera." },
          { id: "puente-suelo", note: "en colchoneta." },
        ],
      },
      {
        images: img("Thigh_Adductor"),
        title: "Aductora",
        reps: "3 × 15",
        desc: reglaFuerza,
        steps: [
          "Ajusta la apertura a un rango cómodo, espalda apoyada.",
          "Cierra las piernas apretando.",
          "Abre lento resistiendo la placa.",
        ],
        alternatives: [
          { id: "aduccion-polea", note: "con tobillera en la polea baja." },
          { id: "abductora-maquina", note: "si solo alcanza para una de las dos." },
        ],
      },
      {
        images: img("Seated_Leg_Curl"),
        title: "Curl femoral sentado",
        reps: "3 × 12",
        desc: reglaFuerza,
        steps: [
          "Ajusta el respaldo: la rodilla alineada con el eje de la máquina.",
          "Flexiona hasta la máxima contracción.",
          "Vuelve en 2–3 s resistiendo, sin que la placa rebote.",
        ],
        alternatives: [
          { id: "femoral-tumbado", note: "la versión acostada." },
          { id: "puente-suelo", note: "sin máquina." },
        ],
      },
      {
        images: img("Seated_Calf_Raise"),
        title: "Gemelos sentado",
        reps: "3 × 20",
        desc: reglaFuerza,
        steps: [
          "Cojín sobre los muslos, punta de los pies en la plataforma.",
          "Sube hasta la máxima contracción.",
          "Baja lento hasta el estiramiento completo, sin rebote.",
        ],
        alternatives: [
          { id: "gemelos-de-pie", note: "la máquina de pie." },
          { id: "gemelos-prensa", note: "en la prensa." },
        ],
      },
      {
        images: img("Stairmaster"),
        title: "Escaladora",
        reps: "ritmo moderado",
        desc: "Siempre a <b>ritmo moderado</b>. El tiempo y la mochila los marca la fase — hoy: <b data-hoy=\"escaladora\">según la fase</b>.",
        steps: [
          "Ritmo moderado y constante: pisa el escalón completo.",
          "Si la fase lo pide, la mochila del viaje con botellas de agua al peso indicado (1 L = 1 kg).",
          "Sin colgarte de las manijas, el tiempo que marca la fase.",
        ],
        alternatives: [
          { id: "caminadora-inclinada", note: "si la escaladora está ocupada: 15 % y 4,0 km/h, mismo tiempo y mochila." },
        ],
      },
    ],
  },
  {
    id: "dia5",
    num: "05",
    kicker: "Viernes · descanso",
    title: "Descanso",
    recovery: true,
    exercises: [
      {
        icon: "i-walk",
        title: "Día de descanso",
        reps: "Descanso",
        desc: "Sin entreno. Mañana toca la caminata en montaña: deja lista la mochila con las botellas de agua al peso de la fase (1 L = 1 kg).",
      },
    ],
  },
  {
    id: "dia6",
    num: "06",
    kicker: "Sábado · montaña",
    title: "Caminata en Montaña",
    warmup: {
      items: [
        "Antes de arrancar: balanceo de pierna adelante-atrás y lateral — <b>10 por lado</b>; círculos de tobillo — <b>10 por lado</b>",
        "<b>Primeros 10 min</b> de la caminata a ritmo muy suave",
      ],
    },
    cooldown: {
      items: [
        "<b>Últimos 5–10 min</b> a ritmo suave en terreno plano",
        "Estiramientos al llegar, <b>45 s cada uno por lado</b>: cuádriceps, isquiotibiales, gemelo, flexor de cadera, glúteo en figura 4",
      ],
    },
    exercises: [
      {
        images: img("Trail_Running_Walking"),
        title: "Caminata en montaña",
        reps: "según la fase",
        desc: "Duración y carga de hoy: <b data-hoy=\"sabado\">según la fase</b>. Mochila: la misma del viaje, cargada con botellas de agua (1 L = 1 kg).",
        steps: [
          "Carga la mochila del viaje con botellas de agua al peso que marca la fase (1 L = 1 kg).",
          "Camina el tiempo que marca la fase, a un ritmo que puedas sostener.",
          "Anota la ruta, el tiempo y el peso: así se ve el progreso fase a fase.",
        ],
      },
    ],
  },
  {
    id: "dia7",
    num: "07",
    kicker: "Domingo · descanso",
    title: "Descanso",
    recovery: true,
    exercises: [
      {
        icon: "i-walk",
        title: "Día de descanso",
        reps: "Descanso",
        desc: "Sin entreno. <b>Excepción en la fase Pico:</b> al menos un fin de semana doble, con caminata sábado y domingo.",
      },
      {
        icon: "i-stretch",
        title: "Registro de la semana",
        reps: "5 min",
        desc: "Revisa los pesos: cuando se completaron todas las series y repeticiones con un peso, <b>toca subirlo en la siguiente sesión</b>.",
      },
    ],
  },
];
