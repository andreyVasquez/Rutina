import type { AltDetail, DayData } from "./types";

const img = (id: string): [string, string] => [
  `/exercises/${id}_0.jpg`,
  `/exercises/${id}_1.jpg`,
];

/**
 * Rutina Smart Fit — 20 días · 5 días/semana · solo máquinas.
 * Enfoque: hombros (anchura y línea), espalda alta (postura), glúteo
 * (3 días/semana) y piernas con protección de rodilla.
 * Semana: Lun (hombros/espalda alta), Mar (piernas/core), Mié (descanso),
 * Jue (pecho/hombro/tríceps), Vie (espalda/bíceps), Sáb (glúteo/hombros),
 * Dom (descanso).
 *
 * Cada ejercicio trae `steps` (paso a paso) y `alternatives` (ids del catálogo
 * de abajo); al tocar la tarjeta se abren en un popup, y cada alternativa
 * abre a su vez su propia mini-guía.
 */
export const altCatalog: Record<string, AltDetail> = {
  /* ---- Cardio ---- */
  "eliptica": {
    title: "Elíptica",
    reps: "12–15 min",
    images: img("Elliptical_Trainer"),
    desc: "Cardio sin ningún impacto: la mejor amiga de la rodilla.",
    steps: [
      "Ritmo constante en el que puedas conversar.",
      "Postura erguida, sin colgarte de las manijas.",
      "Sube un punto de resistencia cada 5 min si va muy suave.",
    ],
  },
  "bici": {
    title: "Bici estática",
    reps: "12–15 min",
    images: img("Bicycling_Stationary"),
    desc: "Con el sillín alto la rodilla se flexiona menos: cardio seguro y cómodo.",
    steps: [
      "Sube el sillín: la rodilla casi estirada en el punto más bajo.",
      "Pedalea a ritmo constante y conversacional.",
      "Nada de sprints: hoy el cardio acompaña, no castiga.",
    ],
  },
  "caminadora-plana": {
    title: "Caminadora plana",
    reps: "12–15 min",
    images: img("Running_Treadmill"),
    desc: "Caminar rápido en plano — sin pendiente ni trote: la rodilla no necesita impacto.",
    steps: [
      "Inclinación en 0, velocidad de caminata rápida.",
      "Camina erguida, sin agarrarte de las barandas.",
      "Si aparece molestia en la rodilla, cambia a bici o elíptica.",
    ],
  },

  /* ---- Hombro ---- */
  "press-hombro-smith": {
    title: "Press de hombro en Smith",
    reps: "3–4 × 10–12",
    images: img("Smith_Machine_Overhead_Shoulder_Press"),
    desc: "La barra guiada hace de máquina: mismo press, recorrido fijo y seguro.",
    steps: [
      "Banco con respaldo alto bajo la barra de la Smith.",
      "Baja la barra al frente hasta la altura de la barbilla.",
      "Empuja arriba sin bloquear los codos.",
    ],
  },
  "press-hombro-mancuernas": {
    title: "Press de hombro con mancuernas",
    reps: "3–4 × 10–12",
    images: img("Seated_Dumbbell_Press"),
    desc: "Sentada con respaldo: más estabilización si la máquina está ocupada.",
    steps: [
      "Respaldo casi vertical, mancuernas a la altura de las orejas.",
      "Empuja arriba sin chocarlas ni bloquear los codos.",
      "Baja en 2 s hasta las orejas.",
    ],
  },
  "laterales-polea": {
    title: "Elevación lateral en polea",
    reps: "3–4 × 12–15",
    images: img("Cable_Seated_Lateral_Raise"),
    desc: "En el multifuncional, un brazo a la vez: tensión pareja en todo el recorrido.",
    steps: [
      "Polea baja al costado; toma el maneral con la mano contraria.",
      "Sube el brazo hasta la altura del hombro, codo suave.",
      "Baja en 2 s resistiendo; termina el lado y cambia.",
    ],
  },
  "laterales-mancuernas": {
    title: "Elevación lateral con mancuernas",
    reps: "3–4 × 12–15",
    images: img("Side_Lateral_Raise"),
    desc: "El clásico de pie: mancuernas livianas y técnica limpia.",
    steps: [
      "De pie, mancuernas a los lados, codos apenas flexionados.",
      "Sube hasta la altura del hombro <b>sin encoger los hombros</b>.",
      "Baja en 2 s. Si balanceas el cuerpo, es mucho peso.",
    ],
  },
  "frontal-mancuernas": {
    title: "Elevación frontal con mancuernas",
    reps: "3 × 12",
    images: img("Front_Dumbbell_Raise"),
    desc: "La versión con mancuernas si la polea está ocupada: peso ligero siempre.",
    steps: [
      "Mancuernas al frente de los muslos, brazos casi rectos.",
      "Sube hasta la altura del hombro, alternando o a la vez.",
      "Baja en 2 s sin balancearte.",
    ],
  },
  "reverse-peck": {
    title: "Pec deck invertido",
    reps: "3 × 12–15",
    images: img("Reverse_Machine_Flyes"),
    desc: "El pec deck al revés: hombro posterior y espalda alta guiados por la máquina.",
    steps: [
      "Siéntate de frente al respaldo con las manijas atrás.",
      "Abre los brazos hacia atrás apretando los omóplatos.",
      "1 s de apretón y regresa lento.",
    ],
  },
  "posteriores-mancuernas": {
    title: "Posteriores con mancuernas",
    reps: "3 × 12–15",
    images: img("Seated_Bent-Over_Rear_Delt_Raise"),
    desc: "Sentada e inclinada al frente: hombro posterior con mancuernas livianas.",
    steps: [
      "Sentada, torso inclinado casi al muslo.",
      "Abre los brazos a los lados como alas, codos suaves.",
      "Baja lento sin dar impulso con el torso.",
    ],
  },
  "facepull-polea": {
    title: "Face pull en polea",
    reps: "3 × 15",
    images: img("Face_Pull"),
    desc: "El seguro de la postura: jala hacia la cara con los codos altos.",
    steps: [
      "Cuerda a la altura de la cara; un paso atrás para tensar.",
      "Jala hacia la frente <b>abriendo la cuerda</b>, codos altos.",
      "Aprieta atrás 1 s y regresa lento. Peso ligero.",
    ],
  },

  /* ---- Espalda ---- */
  "jalon-ancho": {
    title: "Jalón al pecho agarre ancho",
    reps: "4 × 10–12",
    images: img("Wide-Grip_Lat_Pulldown"),
    desc: "La espalda ancha se construye aquí: al pecho, nunca detrás de la nuca.",
    steps: [
      "Agarre un poco más ancho que los hombros, pecho arriba.",
      "Jala la barra a la clavícula con los codos hacia el piso.",
      "Aprieta 1 s abajo y sube controlado.",
    ],
  },
  "jalon-neutro": {
    title: "Jalón al pecho agarre neutro",
    reps: "3–4 × 10–12",
    images: img("Close-Grip_Front_Lat_Pulldown"),
    desc: "Palmas enfrentadas: el jalón más cómodo para hombros y codos.",
    steps: [
      "Triángulo o agarre neutro en la polea alta.",
      "Pecho arriba: jala con los codos hacia las costillas.",
      "Aprieta 1 s abajo y sube en 2 s.",
    ],
  },
  "dominada-asistida": {
    title: "Dominada asistida",
    reps: "3 × 6–8",
    images: img("Band_Assisted_Pull-Up"),
    desc: "El patrón completo de la dominada con la ayuda justa de la máquina de contrapeso.",
    steps: [
      "Contrapeso que te deje sacar 6–8 limpias.",
      "Jala hasta pasar la barbilla, pecho a la barra.",
      "Baja en 2–3 s. Cada semana, un poco menos de ayuda.",
    ],
  },
  "remo-polea": {
    title: "Remo sentado en polea",
    reps: "3–4 × 10–12",
    images: img("Seated_Cable_Rows"),
    desc: "El remo clásico: espalda quieta, los brazos hacen el viaje.",
    steps: [
      "Rodillas apenas flexionadas, pecho firme.",
      "Jala el agarre al abdomen llevando los codos atrás.",
      "Aprieta los omóplatos 1 s y regresa controlado.",
    ],
  },
  "remo-maquina": {
    title: "Remo en máquina de palanca",
    reps: "3–4 × 10–12",
    images: img("Leverage_Iso_Row"),
    desc: "Con el pecho apoyado la lumbar descansa: solo trabaja la espalda.",
    steps: [
      "Pecho apoyado en la almohadilla, agarre neutro.",
      "Jala llevando los codos atrás y aprieta 1 s.",
      "Regresa hasta estirar del todo el dorsal.",
    ],
  },
  "remo-mancuerna": {
    title: "Remo con mancuerna a una mano",
    reps: "3 × 10–12 / lado",
    images: img("One-Arm_Dumbbell_Row"),
    desc: "Mano y rodilla en el banco: un lado a la vez, espalda plana como una mesa.",
    steps: [
      "Mano y rodilla en el banco, espalda plana.",
      "Jala la mancuerna a la cadera llevando el codo atrás.",
      "1 s de apretón arriba; baja hasta estirar.",
    ],
  },
  "pullover-mancuerna": {
    title: "Pull-over con mancuerna",
    reps: "3 × 12–15",
    images: img("Bent-Arm_Dumbbell_Pullover"),
    desc: "Acostada en el banco: el mismo arco del pull-over, con una mancuerna.",
    steps: [
      "Acostada, una mancuerna sujeta con ambas manos sobre el pecho.",
      "Bájala en arco por detrás de la cabeza hasta sentir el estirón del dorsal.",
      "Vuelve al pecho apretando la espalda, codos suaves.",
    ],
  },
  "encogimientos-palanca": {
    title: "Encogimientos en máquina",
    reps: "3 × 12–15",
    images: img("Leverage_Shrug"),
    desc: "La máquina de palanca para trapecio: sube, sostén y baja sin cuidar el equilibrio.",
    steps: [
      "De pie en la máquina, agarres a los lados.",
      "Encoge los hombros hacia las orejas y <b>sostén 1 s</b>.",
      "Baja lento hasta estirar el trapecio.",
    ],
  },
  "encogimientos-mancuernas": {
    title: "Encogimientos con mancuernas",
    reps: "3 × 12–15",
    images: img("Dumbbell_Shrug"),
    desc: "El clásico con mancuernas a los lados si las poleas están llenas.",
    steps: [
      "Mancuernas a los lados, brazos largos.",
      "Encoge los hombros hacia las orejas y sostén 1 s.",
      "Baja lento, sin girar los hombros.",
    ],
  },

  /* ---- Pierna y glúteo ---- */
  "prensa-parcial": {
    title: "Prensa 45° (rango parcial)",
    reps: "3–4 × 12–15",
    images: img("Leg_Press"),
    desc: "La prensa con la regla de oro de la rodilla: bajar solo hasta 90°.",
    steps: [
      "Pies a media altura de la plataforma, al ancho de cadera.",
      "Baja controlado <b>solo hasta 90° de rodilla</b> — ni un grado más.",
      "Empuja fuerte sin bloquear las rodillas arriba.",
    ],
  },
  "extension-suave": {
    title: "Extensión de cuádriceps (suave)",
    reps: "3 × 15",
    images: img("Leg_Extensions"),
    desc: "Peso ligero y solo el último tercio del recorrido: cuádriceps sin quejas de rodilla.",
    steps: [
      "Peso ligero-moderado; ajusta el rodillo sobre los tobillos.",
      "Extiende solo el <b>último tercio</b> del recorrido.",
      "Sostén 2 s arriba y baja lento.",
    ],
  },
  "femoral-sentado": {
    title: "Curl femoral sentado",
    reps: "3–4 × 12–15",
    images: img("Seated_Leg_Curl"),
    desc: "Isquios fuertes = rodilla más estable: el seguro de todo el plan.",
    steps: [
      "Ajusta el respaldo: la rodilla alineada con el eje de la máquina.",
      "Flexiona con fuerza hasta la máxima contracción.",
      "Vuelve en 2–3 s resistiendo, sin que la placa rebote.",
    ],
  },
  "femoral-tumbado": {
    title: "Curl femoral tumbado",
    reps: "3 × 12–15",
    images: img("Lying_Leg_Curls"),
    desc: "La versión boca abajo: mismo isquio, otro ángulo.",
    steps: [
      "Boca abajo, rodillo sobre los tobillos, cadera pegada al banco.",
      "Lleva los talones al glúteo con control.",
      "Baja en 2–3 s sin soltar la tensión.",
    ],
  },
  "abductora-maquina": {
    title: "Abductora en máquina",
    reps: "3 × 15–20",
    images: img("Thigh_Abductor"),
    desc: "Glúteo medio: la clave para que la rodilla no se vaya hacia adentro.",
    steps: [
      "Espalda pegada al respaldo, piernas dentro de los cojines.",
      "Abre contra la placa hasta tu rango máximo y sostén 1 s.",
      "Cierra lento, sin que las placas choquen.",
    ],
  },
  "aduccion-polea": {
    title: "Aducción en polea",
    reps: "3 × 12–15 / lado",
    images: img("Cable_Hip_Adduction"),
    desc: "Tobillera en la polea baja: el aductor trabaja de pie, una pierna a la vez.",
    steps: [
      "Tobillera en la pierna cercana a la torre; apóyate del marco.",
      "Cruza la pierna por delante del cuerpo contra el cable.",
      "Regresa lento; termina el lado y cambia.",
    ],
  },
  "patada-gluteo-polea": {
    title: "Patada de glúteo en polea",
    reps: "3 × 12–15 / lado",
    images: img("Glute_Kickback"),
    desc: "Tobillera en la polea baja: glúteo aislado, una pierna a la vez.",
    steps: [
      "Tobillera puesta, apóyate del marco de la polea.",
      "Patea atrás y arriba con la rodilla flexionada, empujando con el talón.",
      "Aprieta 1 s al final; la lumbar no se arquea.",
    ],
  },
  "puente-suelo": {
    title: "Puente de glúteo en el piso",
    reps: "3 × 15",
    images: img("Butt_Lift_Bridge"),
    desc: "Cero máquinas y cero rodilla: glúteo puro en colchoneta.",
    steps: [
      "Boca arriba, pies plantados al ancho de cadera.",
      "Empuja con los talones y sube la cadera hasta la línea recta.",
      "Aprieta el glúteo 2 s arriba y baja controlado.",
    ],
  },
  "gemelos-sentado": {
    title: "Gemelos sentado en máquina",
    reps: "4 × 15–20",
    images: img("Seated_Calf_Raise"),
    desc: "La máquina de gemelos con rodilla flexionada: trabaja el sóleo, cero impacto.",
    steps: [
      "Cojín sobre los muslos, punta de los pies en la plataforma.",
      "Sube hasta la máxima contracción y sostén 1 s.",
      "Baja lento hasta el estiramiento completo, sin rebote.",
    ],
  },
  "talones-de-pie": {
    title: "Elevación de talones con mancuerna",
    reps: "4 × 15–20",
    images: img("Standing_Dumbbell_Calf_Raise"),
    desc: "En un escalón con una mancuerna: gemelos con rango completo.",
    steps: [
      "Punta del pie en el escalón, mancuerna del mismo lado.",
      "Sube a la punta del pie y sostén 1 s.",
      "Baja lento hasta que el talón quede por debajo del escalón.",
    ],
  },

  /* ---- Pecho y brazos ---- */
  "press-pecho-mancuernas": {
    title: "Press de pecho con mancuernas",
    reps: "3–4 × 10–12",
    images: img("Dumbbell_Bench_Press"),
    desc: "En banco plano: más rango y estabilización que la máquina.",
    steps: [
      "Mancuernas a los lados del pecho, omóplatos juntos.",
      "Empuja hasta casi juntarlas arriba, sin chocarlas.",
      "Baja en 2–3 s hasta un estiramiento cómodo.",
    ],
  },
  "pec-deck": {
    title: "Aperturas en pec deck",
    reps: "3 × 12–15",
    images: img("Butterfly"),
    desc: "Aísla el pecho con el hombro protegido por la máquina.",
    steps: [
      "Asiento ajustado: manijas a la altura del pecho.",
      "Junta las manijas al frente con los codos apenas flexionados.",
      "Aprieta 1 s y abre lento hasta el estiramiento cómodo.",
    ],
  },
  "cruces-polea": {
    title: "Cruces en polea",
    reps: "3 × 12–15",
    images: img("Cable_Crossover"),
    desc: "El pecho en el multifuncional: tensión constante en todo el recorrido.",
    steps: [
      "Poleas altas, un paso al frente con el torso apenas inclinado.",
      "Junta las manos al frente en arco, codos casi rectos.",
      "Aprieta 1 s y abre lento.",
    ],
  },
  "triceps-cuerda": {
    title: "Tríceps en polea con cuerda",
    reps: "3 × 12–15",
    images: img("Triceps_Pushdown_-_Rope_Attachment"),
    desc: "La cuerda deja abrir las manos abajo: más contracción, muñecas cómodas.",
    steps: [
      "Cuerda en la polea alta, codos pegados al cuerpo.",
      "Extiende hasta abrir la cuerda abajo y aprieta 1 s.",
      "Sube controlado sin despegar los codos.",
    ],
  },
  "maquina-triceps": {
    title: "Máquina de tríceps",
    reps: "3 × 12–15",
    images: img("Machine_Triceps_Extension"),
    desc: "La extensión de tríceps guiada: siéntate, selecciona placa y trabaja.",
    steps: [
      "Ajusta el asiento: codos alineados con el eje.",
      "Extiende hasta el final y aprieta 1 s.",
      "Regresa lento sin soltar la tensión.",
    ],
  },
  "curl-polea": {
    title: "Curl de bíceps en polea",
    reps: "3 × 12–15",
    images: img("Standing_Biceps_Cable_Curl"),
    desc: "En la polea baja: tensión pareja de principio a fin.",
    steps: [
      "Barra o manerales en la polea baja, codos pegados.",
      "Sube hasta la máxima flexión sin balancear el torso.",
      "Baja en 2 s resistiendo.",
    ],
  },
  "curl-barra-z": {
    title: "Curl con barra Z",
    reps: "3 × 12–15",
    images: img("EZ-Bar_Curl"),
    desc: "La barra Z cuida las muñecas: el curl clásico de pie.",
    steps: [
      "Agarre a la anchura de los hombros, codos pegados.",
      "Sube sin balancear el cuerpo.",
      "Baja en 2 s hasta estirar del todo.",
    ],
  },

  /* ---- Core ---- */
  "crunch-polea": {
    title: "Crunch en polea con cuerda",
    reps: "3 × 15",
    images: img("Cable_Crunch"),
    desc: "Abdomen con placas en el multifuncional, si la máquina abdominal está ocupada.",
    steps: [
      "Arrodillada frente a la polea alta, cuerda a los lados de la cabeza.",
      "Encorva las costillas hacia la cadera — la cadera no se mueve.",
      "Regresa lento manteniendo la tensión.",
    ],
  },
  "plancha-rodillas": {
    title: "Plancha con rodillas apoyadas",
    reps: "3 × 30–45 s",
    images: img("Plank"),
    desc: "La versión amable: mismo core, menos palanca. Perfecta para acumular segundos limpios.",
    steps: [
      "Antebrazos y rodillas al piso, cuerpo en línea de rodillas a cabeza.",
      "Aprieta glúteo y abdomen; la cadera ni sube ni se cae.",
      "Respira normal; cuando la forma se rompa, termina la serie.",
    ],
  },
};

export const days: DayData[] = [
  {
    id: "dia1",
    num: "01",
    kicker: "Lunes · 75–90 min",
    title: "Hombros y Espalda Alta",
    quote:
      "Hombros con línea y espalda derecha: la postura se construye aquí, no frente al espejo.",
    exercises: [
      {
        images: img("Bicycling_Stationary"),
        title: "Calentamiento",
        reps: "8–10 min",
        desc: "5 min de bici o elíptica suave + movilidad de hombro y cuello + serie de aproximación. <b>Nada de caminadora en pendiente ni trote</b>: la rodilla se cuida desde el minuto uno.",
        steps: [
          "5 min de bici o elíptica a ritmo suave: que suba el pulso sin agitarte.",
          "Movilidad seguida, sin descanso: círculos de hombro atrás ×12 por lado, retracción escapular (junta omóplatos 2 s) ×15, doble mentón contra la pared (3 s) ×10 y extensión torácica sentada ×10.",
          "Serie de aproximación: el primer ejercicio del día con la mitad del peso, 12 reps suaves.",
        ],
        alternatives: [
          { id: "eliptica", note: "si la bici está ocupada." },
          { id: "caminadora-plana", note: "caminando rápido, siempre sin pendiente." },
        ],
      },
      {
        images: img("Leverage_Shoulder_Press"),
        title: "Press de hombro en máquina",
        reps: "4 × 10–12",
        desc: "Descansa 75 s entre series. <b>No bloquees el codo arriba</b>: la tensión se queda en el hombro.",
        steps: [
          "Ajusta el asiento: manijas a la altura de las orejas.",
          "Empuja arriba sin bloquear los codos.",
          "Baja controlada en 2 s hasta las orejas.",
          "Espalda pegada al respaldo, sin arquear la lumbar.",
        ],
        alternatives: [
          { id: "press-hombro-smith", note: "la barra guiada si la máquina está ocupada." },
          { id: "press-hombro-mancuernas", note: "sentada con respaldo." },
        ],
      },
      {
        icon: "i-lateral",
        title: "Elevaciones laterales en máquina",
        reps: "4 × 12–15",
        desc: "Descansa 60 s. <b>Sube hasta la altura del hombro, no más</b> — ahí está toda la anchura.",
        steps: [
          "Ajusta el asiento: hombros alineados con el eje de la máquina.",
          "Sube los brazos hasta la horizontal, sin encoger los hombros.",
          "Baja en 2 s resistiendo la placa.",
        ],
        alternatives: [
          { id: "laterales-polea", note: "en el multifuncional, un brazo a la vez." },
          { id: "laterales-mancuernas", note: "el clásico de pie." },
        ],
      },
      {
        images: img("Reverse_Machine_Flyes"),
        title: "Pec deck invertido",
        reps: "4 × 12–15",
        desc: "Descansa 60 s. Deltoide posterior: <b>el motor son los codos, no las manos</b>.",
        steps: [
          "Siéntate de frente al respaldo con las manijas atrás.",
          "Abre los brazos hacia atrás <b>llevando los codos</b>, no las manos.",
          "Aprieta los omóplatos 1 s y regresa lento.",
        ],
        alternatives: [
          { id: "facepull-polea", note: "en la polea alta, mismo músculo." },
          { id: "posteriores-mancuernas", note: "inclinada con mancuernas livianas." },
        ],
      },
      {
        images: img("Close-Grip_Front_Lat_Pulldown"),
        title: "Jalón al pecho, agarre neutro",
        reps: "3 × 10–12",
        desc: "Descansa 75 s. Pecho arriba y <b>tira con los codos hacia las costillas</b>.",
        steps: [
          "Agarre neutro (palmas enfrentadas), pecho arriba.",
          "Jala la barra al pecho llevando los codos a las costillas.",
          "Aprieta 1 s abajo y sube controlada en 2 s.",
        ],
        alternatives: [
          { id: "jalon-ancho", note: "agarre ancho para variar." },
          { id: "dominada-asistida", note: "con el contrapeso de la máquina." },
        ],
      },
      {
        images: img("Face_Pull"),
        title: "Face pull en polea alta",
        reps: "3 × 15",
        desc: "Descansa 45 s. <b>El ejercicio postural más importante de la semana</b> — peso ligero y perfecto.",
        steps: [
          "Cuerda a la altura de la cara; un paso atrás para tensar.",
          "Jala hacia la frente <b>abriendo la cuerda</b>, codos altos y anchos.",
          "Aprieta la parte trasera del hombro 1 s y regresa lento.",
        ],
        alternatives: [
          { id: "reverse-peck", note: "en máquina, si la polea está ocupada." },
          { id: "posteriores-mancuernas", note: "inclinada con mancuernas." },
        ],
      },
      {
        images: img("Cable_Shrugs"),
        title: "Encogimiento de trapecio en polea",
        reps: "3 × 12–15",
        desc: "Descansa 45 s. <b>Sube y sostén 1 s</b>: el trapecio remata la línea de los hombros.",
        steps: [
          "Barra o manerales en la polea baja, brazos largos.",
          "Encoge los hombros hacia las orejas y <b>sostén 1 s</b>.",
          "Baja lento hasta estirar; el cuello queda relajado.",
        ],
        alternatives: [
          { id: "encogimientos-palanca", note: "en la máquina de palanca." },
          { id: "encogimientos-mancuernas", note: "con mancuernas a los lados." },
        ],
      },
      {
        images: img("Bicycling_Stationary"),
        title: "Cardio: bici o elíptica",
        reps: "15 min",
        desc: "Ritmo constante, de los que dejan conversar. Cierra con los 8 min de estiramiento (sección al final).",
        steps: [
          "Ritmo parejo: esfuerzo 5–6 de 10.",
          "Puedes conversar sin ahogarte: esa es la medida.",
          "Al bajarte: 3 min muy suaves y pasa al estiramiento.",
        ],
        alternatives: [
          { id: "eliptica", note: "mismo tiempo, cero impacto." },
          { id: "caminadora-plana", note: "plana y rápida, sin pendiente." },
        ],
      },
    ],
  },
  {
    id: "dia2",
    num: "02",
    kicker: "Martes · 75–90 min",
    title: "Piernas (Rodilla Protegida) y Core",
    quote:
      "Isquios y glúteo fuertes = rodilla estable. Hoy se entrena alrededor de la rodilla, nunca contra ella.",
    exercises: [
      {
        images: img("Bicycling_Stationary"),
        title: "Calentamiento",
        reps: "8–10 min",
        desc: "El de siempre + extra de pierna: <b>elevaciones de talones ×15 y sentadilla al aire solo hasta media flexión ×10</b>.",
        steps: [
          "5 min de bici o elíptica a ritmo suave.",
          "Movilidad seguida: círculos de hombro ×12, retracción escapular ×15, doble mentón ×10, extensión torácica ×10.",
          "Extra de pierna: elevaciones de talones ×15 + sentadilla al aire <b>solo hasta media flexión</b> ×10.",
          "Serie de aproximación: prensa con la mitad del peso, 12 reps suaves.",
        ],
        alternatives: [
          { id: "eliptica", note: "si la bici está ocupada." },
          { id: "caminadora-plana", note: "sin pendiente." },
        ],
      },
      {
        images: img("Leg_Press"),
        title: "Prensa 45°, pies a media altura",
        reps: "4 × 12–15",
        desc: "Descansa 90 s. <b>Rango parcial: baja solo hasta ~90° de rodilla</b> — la regla de oro de todo el plan.",
        steps: [
          "Pies a media altura de la plataforma, al ancho de cadera.",
          "Baja controlada <b>solo hasta 90° de rodilla</b>, ni un grado más.",
          "Empuja fuerte con toda la planta, sin bloquear arriba.",
          "Si la rodilla avisa (punzada, chasquido con dolor), baja peso y rango.",
        ],
        alternatives: [
          { id: "extension-suave", note: "en máquina, último tercio del recorrido." },
          { id: "puente-suelo", note: "glúteo sin cargar la rodilla." },
        ],
      },
      {
        images: img("Seated_Leg_Curl"),
        title: "Curl femoral sentado",
        reps: "4 × 12–15",
        desc: "Descansa 60 s. <b>Isquios fuertes = rodilla más estable</b>: este es el seguro del plan.",
        steps: [
          "Ajusta el respaldo: la rodilla alineada con el eje de la máquina.",
          "Flexiona con fuerza hasta la máxima contracción.",
          "Vuelve en 2–3 s resistiendo, sin que la placa rebote.",
        ],
        alternatives: [
          { id: "femoral-tumbado", note: "boca abajo, mismo músculo." },
          { id: "puente-suelo", note: "también activa isquios, sin máquina." },
        ],
      },
      {
        images: img("Leg_Extensions"),
        title: "Extensión de cuádriceps",
        reps: "3 × 15",
        desc: "Descansa 60 s. Peso ligero-moderado, <b>solo el último tercio del recorrido</b> y sostén 2 s arriba.",
        steps: [
          "Peso ligero; rodillo sobre los tobillos.",
          "Extiende <b>solo el último tercio</b> del recorrido.",
          "Sostén 2 s arriba y baja lento.",
          "Nada de rangos completos con peso: la rótula lo agradece.",
        ],
        alternatives: [
          { id: "prensa-parcial", note: "si la extensión molesta incluso ligera." },
          { id: "puente-suelo", note: "cambia el estímulo sin tocar la rodilla." },
        ],
      },
      {
        images: img("Thigh_Abductor"),
        title: "Abductora en máquina",
        reps: "3 × 15",
        desc: "Descansa 45 s. Glúteo medio: <b>la clave para que la rodilla no se vaya hacia adentro</b>.",
        steps: [
          "Espalda pegada al respaldo, piernas dentro de los cojines.",
          "Abre contra la placa hasta tu rango máximo y sostén 1 s.",
          "Cierra lento, sin que las placas choquen.",
        ],
        alternatives: [
          { id: "patada-gluteo-polea", note: "en la polea baja con tobillera." },
          { id: "puente-suelo", note: "con pausa arriba." },
        ],
      },
      {
        images: img("Thigh_Adductor"),
        title: "Aductora en máquina",
        reps: "3 × 15",
        desc: "Descansa 45 s. La pareja de la abductora: cara interna del muslo, rodillas alineadas.",
        steps: [
          "Ajusta la apertura a un rango cómodo, espalda apoyada.",
          "Cierra las piernas apretando fuerte y sostén 1 s.",
          "Abre lento resistiendo la placa.",
        ],
        alternatives: [
          { id: "aduccion-polea", note: "con tobillera en la polea baja." },
          { id: "abductora-maquina", note: "prioriza la abductora si falta tiempo." },
        ],
      },
      {
        images: img("Hyperextensions_Back_Extensions"),
        title: "Hiperextensión en banco 45°",
        reps: "3 × 12–15",
        desc: "Descansa 60 s. <b>Versión de glúteo</b>: espalda redondeada y mentón al pecho — trabaja el glúteo, no la lumbar.",
        steps: [
          "Cojín en el pliegue de la cadera.",
          "Redondea la espalda y lleva el mentón al pecho — así se queda.",
          "Sube apretando el glúteo, sin extender la lumbar, y baja controlada.",
        ],
        alternatives: [
          { id: "patada-gluteo-polea", note: "en polea, glúteo de a un lado." },
          { id: "puente-suelo", note: "en colchoneta." },
        ],
      },
      {
        images: img("Calf_Press_On_The_Leg_Press_Machine"),
        title: "Gemelos en máquina",
        reps: "4 × 15–20",
        desc: "Descansa 45 s. <b>Rango completo, sin rebote</b>: arriba 1 s, abajo estiramiento total.",
        steps: [
          "Punta de los pies en la plataforma, piernas casi extendidas.",
          "Sube hasta la máxima contracción y sostén 1 s.",
          "Baja lenta hasta el estiramiento completo. El rebote no cuenta.",
        ],
        alternatives: [
          { id: "gemelos-sentado", note: "en la máquina sentada (sóleo)." },
          { id: "talones-de-pie", note: "en un escalón con mancuerna." },
        ],
      },
      {
        images: img("Ab_Crunch_Machine"),
        title: "Máquina abdominal",
        reps: "3 × 15",
        desc: "Descansa 45 s. Abdomen con placa seleccionada: progresa como cualquier máquina.",
        steps: [
          "Ajusta el asiento: el eje de giro a la altura del pecho.",
          "Encorva las costillas hacia la cadera al exhalar.",
          "Regresa lento sin soltar la placa.",
        ],
        alternatives: [
          { id: "crunch-polea", note: "arrodillada con la cuerda." },
          { id: "plancha-rodillas", note: "isométrico amable." },
        ],
      },
      {
        images: img("Plank"),
        title: "Plancha",
        reps: "3 × 30 s",
        desc: "Descansa 45 s. Core quieto y respiración normal: 30 segundos limpios valen más que 60 torcidos.",
        steps: [
          "Antebrazos al piso, codos bajo los hombros, cuerpo en línea recta.",
          "Aprieta glúteo y abdomen: la cadera ni sube ni se cae.",
          "Cuando la forma se rompa, se acabó la serie.",
        ],
        alternatives: [
          { id: "crunch-polea", note: "si prefieres trabajar con peso." },
          { id: "plancha-rodillas", note: "para acumular más segundos limpios." },
        ],
      },
      {
        images: img("Bicycling_Stationary"),
        title: "Cardio: bici",
        reps: "15 min",
        desc: "<b>Sillín alto = menos flexión de rodilla.</b> Ritmo conversacional y al estiramiento.",
        steps: [
          "Sube el sillín: rodilla casi estirada abajo.",
          "Ritmo parejo, esfuerzo 5–6 de 10.",
          "Cierra con 3 min muy suaves y pasa al estiramiento de pierna.",
        ],
        alternatives: [
          { id: "eliptica", note: "si la bici está ocupada." },
        ],
      },
    ],
  },
  {
    id: "dia3",
    num: "03",
    kicker: "Miércoles · descanso",
    title: "Pausa de Mitad de Semana",
    recovery: true,
    exercises: [
      {
        icon: "i-walk",
        title: "Hoy se descansa",
        reps: "Descanso",
        desc: "Dos días duros hechos. <b>El músculo se construye hoy</b>, no en el gym: camina algo, come proteína en cada comida y duerme 7–9 h.",
      },
      {
        icon: "i-stretch",
        title: "Movilidad suave (opcional)",
        reps: "10 min",
        desc: "Solo si el cuerpo lo pide: los estiramientos de la sección final, en casa y sin prisa. Nada intenso — mañana hay empuje.",
      },
    ],
  },
  {
    id: "dia4",
    num: "04",
    kicker: "Jueves · 75–90 min",
    title: "Pecho, Hombro y Tríceps",
    exercises: [
      {
        images: img("Bicycling_Stationary"),
        title: "Calentamiento",
        reps: "8–10 min",
        desc: "5 min de bici o elíptica + movilidad de hombro y cuello + serie de aproximación del press.",
        steps: [
          "5 min de bici o elíptica a ritmo suave.",
          "Movilidad seguida: círculos de hombro ×12, retracción escapular ×15, doble mentón ×10, extensión torácica ×10.",
          "Serie de aproximación: press de pecho con la mitad del peso, 12 reps suaves.",
        ],
        alternatives: [
          { id: "eliptica", note: "si la bici está ocupada." },
          { id: "caminadora-plana", note: "sin pendiente." },
        ],
      },
      {
        images: img("Leverage_Chest_Press"),
        title: "Press de pecho en máquina",
        reps: "4 × 10–12",
        desc: "Descansa 75 s. <b>Omóplatos apoyados y juntos</b> durante toda la serie.",
        steps: [
          "Ajusta el asiento: manijas a la altura de la mitad del pecho.",
          "Junta los omóplatos contra el respaldo y déjalos ahí.",
          "Empuja hasta casi extender los codos, sin bloquearlos.",
          "Vuelve controlada en 2 s.",
        ],
        alternatives: [
          { id: "press-pecho-mancuernas", note: "en banco plano." },
          { id: "pec-deck", note: "si prefieres aislar sin press." },
        ],
      },
      {
        images: img("Butterfly"),
        title: "Pec deck",
        reps: "3 × 12–15",
        desc: "Descansa 60 s. Aísla el pecho con el hombro protegido por la máquina.",
        steps: [
          "Asiento ajustado: manijas a la altura del pecho.",
          "Junta las manijas al frente con los codos apenas flexionados.",
          "Aprieta 1 s y abre lento hasta el estiramiento cómodo.",
        ],
        alternatives: [
          { id: "cruces-polea", note: "en el multifuncional." },
          { id: "press-pecho-mancuernas", note: "si prefieres empujar." },
        ],
      },
      {
        icon: "i-lateral",
        title: "Elevaciones laterales en máquina",
        reps: "4 × 12–15",
        desc: "Descansa 45 s. <b>Tu ejercicio estrella: no lo saltes nunca.</b>",
        steps: [
          "Hombros alineados con el eje de la máquina.",
          "Sube hasta la horizontal sin encoger los hombros.",
          "Baja en 2 s resistiendo.",
        ],
        alternatives: [
          { id: "laterales-polea", note: "un brazo a la vez en el multifuncional." },
          { id: "laterales-mancuernas", note: "el clásico de pie." },
        ],
      },
      {
        images: img("Front_Cable_Raise"),
        title: "Elevación frontal en polea baja",
        reps: "3 × 12",
        desc: "Descansa 45 s. <b>Peso ligero</b>: el hombro frontal ya empujó bastante hoy.",
        steps: [
          "De espaldas a la torre, barra o maneral en la polea baja.",
          "Sube los brazos al frente hasta la altura del hombro.",
          "Baja en 2 s resistiendo el cable.",
        ],
        alternatives: [
          { id: "press-hombro-smith", note: "si prefieres más press y menos frontal." },
          { id: "frontal-mancuernas", note: "con mancuernas livianas." },
        ],
      },
      {
        images: img("Triceps_Pushdown"),
        title: "Tríceps en polea con barra",
        reps: "3 × 12–15",
        desc: "Descansa 45 s. <b>Codos pegados al cuerpo</b>: si se abren, es el hombro el que trabaja.",
        steps: [
          "Barra recta o Z en la polea alta, codos pegados.",
          "Extiende hasta abajo y aprieta 1 s.",
          "Sube controlada sin despegar los codos.",
        ],
        alternatives: [
          { id: "maquina-triceps", note: "la extensión guiada en máquina." },
          { id: "triceps-cuerda", note: "con cuerda, muñecas más cómodas." },
        ],
      },
      {
        images: img("Face_Pull"),
        title: "Face pull en polea alta",
        reps: "2 × 15",
        desc: "Descansa 45 s. <b>Compensa todo el empuje del día</b> — no es opcional.",
        steps: [
          "Cuerda a la altura de la cara, codos altos.",
          "Jala abriendo la cuerda hacia la frente.",
          "Aprieta atrás 1 s y regresa lento.",
        ],
        alternatives: [
          { id: "reverse-peck", note: "en máquina." },
          { id: "posteriores-mancuernas", note: "inclinada con mancuernas." },
        ],
      },
      {
        images: img("Barbell_Hip_Thrust"),
        title: "Hip thrust en máquina",
        reps: "3 × 12",
        desc: "Descansa 75 s. Bloque corto de glúteo <b>sin fatigar la rodilla</b>: pausa arriba y a casa.",
        steps: [
          "Espalda alta apoyada, cojín sobre la cadera, pies al ancho de cadera.",
          "Empuja con los talones hasta quedar recta de rodillas a hombros.",
          "Aprieta el glúteo 1–2 s arriba y baja controlada.",
        ],
        alternatives: [
          { id: "patada-gluteo-polea", note: "en polea con tobillera." },
          { id: "puente-suelo", note: "en colchoneta." },
        ],
      },
      {
        images: img("Thigh_Abductor"),
        title: "Abductora, torso inclinado adelante",
        reps: "3 × 20",
        desc: "Descansa 45 s. <b>Inclinarte adelante cambia el énfasis al glúteo mayor</b>: agárrate del asiento y abre.",
        steps: [
          "Siéntate y luego inclina el torso hacia adelante, agarrada del asiento.",
          "Abre contra la placa hasta el rango máximo.",
          "Cierra lento; las 20 deben arder al final.",
        ],
        alternatives: [
          { id: "patada-gluteo-polea", note: "glúteo de a un lado." },
          { id: "puente-suelo", note: "con pausa de 2 s." },
        ],
      },
      {
        images: img("Elliptical_Trainer"),
        title: "Cardio: elíptica",
        reps: "12–15 min",
        desc: "Ritmo conversacional y al estiramiento de tren superior.",
        steps: [
          "Ritmo parejo, esfuerzo 5–6 de 10.",
          "Brazos y piernas empujan a la vez.",
          "Cierra con 3 min suaves y estira.",
        ],
        alternatives: [
          { id: "bici", note: "con el sillín alto." },
          { id: "caminadora-plana", note: "sin pendiente." },
        ],
      },
    ],
  },
  {
    id: "dia5",
    num: "05",
    kicker: "Viernes · 75–90 min",
    title: "Espalda Completa y Bíceps",
    exercises: [
      {
        images: img("Bicycling_Stationary"),
        title: "Calentamiento",
        reps: "8–10 min",
        desc: "5 min de bici o elíptica + movilidad + serie de aproximación del jalón.",
        steps: [
          "5 min de bici o elíptica a ritmo suave.",
          "Movilidad seguida: círculos de hombro ×12, retracción escapular ×15, doble mentón ×10, extensión torácica ×10.",
          "Serie de aproximación: jalón con la mitad del peso, 12 reps suaves.",
        ],
        alternatives: [
          { id: "eliptica", note: "si la bici está ocupada." },
          { id: "caminadora-plana", note: "sin pendiente." },
        ],
      },
      {
        images: img("Wide-Grip_Lat_Pulldown"),
        title: "Jalón al pecho, agarre ancho",
        reps: "4 × 10–12",
        desc: "Descansa 75 s. <b>Al pecho, nunca detrás de la nuca.</b>",
        steps: [
          "Agarre un poco más ancho que los hombros, pecho arriba.",
          "Jala la barra a la clavícula con los codos hacia el piso.",
          "Aprieta 1 s abajo y sube controlada.",
        ],
        alternatives: [
          { id: "jalon-neutro", note: "agarre neutro, más cómodo para el hombro." },
          { id: "dominada-asistida", note: "con contrapeso." },
        ],
      },
      {
        images: img("Seated_Cable_Rows"),
        title: "Remo sentado en polea, agarre neutro",
        reps: "4 × 10–12",
        desc: "Descansa 75 s. <b>Espalda quieta: solo se mueven los brazos.</b>",
        steps: [
          "Rodillas apenas flexionadas, pecho firme.",
          "Jala el agarre al abdomen llevando los codos atrás.",
          "Aprieta los omóplatos 1 s y regresa controlada — el torso no se mece.",
        ],
        alternatives: [
          { id: "remo-maquina", note: "con el pecho apoyado." },
          { id: "remo-mancuerna", note: "a una mano en el banco." },
        ],
      },
      {
        images: img("Leverage_Iso_Row"),
        title: "Remo en máquina, codos abiertos a 90°",
        reps: "3 × 12",
        desc: "Descansa 60 s. Con los codos abiertos trabaja <b>trapecio medio y romboides = hombros hacia atrás</b>.",
        steps: [
          "Pecho apoyado en la almohadilla, agarre ancho.",
          "Jala con los codos abiertos a la altura de los hombros.",
          "Aprieta los omóplatos 1 s y regresa lento.",
        ],
        alternatives: [
          { id: "remo-polea", note: "con los codos altos, mismo objetivo." },
          { id: "reverse-peck", note: "también acerca los omóplatos." },
        ],
      },
      {
        images: img("Straight-Arm_Pulldown"),
        title: "Pull-over en polea alta",
        reps: "3 × 12–15",
        desc: "Descansa 60 s. <b>Ensancha la espalda</b>: brazos casi rectos, el dorsal hace el viaje.",
        steps: [
          "Barra en la polea alta; da un paso atrás, torso apenas inclinado.",
          "Con los brazos casi rectos, lleva la barra a los muslos.",
          "Siente el dorsal todo el recorrido; sube controlada.",
        ],
        alternatives: [
          { id: "jalon-ancho", note: "si la polea alta está ocupada." },
          { id: "pullover-mancuerna", note: "acostada en un banco." },
        ],
      },
      {
        images: img("Reverse_Machine_Flyes"),
        title: "Pec deck invertido",
        reps: "3 × 15",
        desc: "Descansa 45 s. La dosis de hombro posterior de cada día de jalón: postura que se nota.",
        steps: [
          "De frente al respaldo, manijas atrás.",
          "Abre llevando los codos, no las manos.",
          "Aprieta 1 s y regresa lento.",
        ],
        alternatives: [
          { id: "facepull-polea", note: "en la polea alta." },
          { id: "posteriores-mancuernas", note: "con mancuernas livianas." },
        ],
      },
      {
        images: img("Machine_Bicep_Curl"),
        title: "Curl de bíceps en máquina",
        reps: "3 × 12–15",
        desc: "Descansa 45 s. Brazos apoyados, placa seleccionada: <b>el bíceps no puede hacer trampa</b>.",
        steps: [
          "Axilas sobre el cojín, brazos apoyados por completo.",
          "Sube hasta la contracción máxima sin levantar los hombros.",
          "Baja lento hasta casi estirar.",
        ],
        alternatives: [
          { id: "curl-polea", note: "en la polea baja." },
          { id: "curl-barra-z", note: "de pie con barra Z." },
        ],
      },
      {
        images: img("Bicycling_Stationary"),
        title: "Cardio: bici o elíptica",
        reps: "15 min",
        desc: "Ritmo conversacional; cierra con el estiramiento de tren superior.",
        steps: [
          "Ritmo parejo, esfuerzo 5–6 de 10.",
          "3 min suaves al final.",
          "Estiramiento de tren superior: sección al final de la página.",
        ],
        alternatives: [
          { id: "eliptica", note: "cero impacto." },
          { id: "caminadora-plana", note: "sin pendiente." },
        ],
      },
    ],
  },
  {
    id: "dia6",
    num: "06",
    kicker: "Sábado · 75–90 min",
    title: "Glúteo e Isquios + Hombros",
    quote:
      "El día favorito: glúteo con descansos completos, hombros para cerrar y la semana queda firmada.",
    exercises: [
      {
        images: img("Bicycling_Stationary"),
        title: "Calentamiento",
        reps: "8–10 min",
        desc: "El de pierna: bici suave + movilidad + <b>talones ×15 y sentadilla al aire a media flexión ×10</b> + aproximación del hip thrust.",
        steps: [
          "5 min de bici a ritmo suave.",
          "Movilidad seguida: círculos de hombro ×12, retracción escapular ×15, doble mentón ×10, extensión torácica ×10.",
          "Extra de pierna: talones ×15 + sentadilla al aire a media flexión ×10.",
          "Hip thrust con la mitad del peso, 12 reps suaves.",
        ],
        alternatives: [
          { id: "eliptica", note: "si la bici está ocupada." },
          { id: "caminadora-plana", note: "sin pendiente." },
        ],
      },
      {
        images: img("Barbell_Hip_Thrust"),
        title: "Hip thrust en máquina",
        reps: "4 × 10–12",
        desc: "Descansa 90 s. <b>El mejor constructor de glúteo</b>: pausa de 2 s arriba apretando.",
        steps: [
          "Espalda alta apoyada, cojín sobre la cadera, pies al ancho de cadera.",
          "Empuja con los talones hasta quedar recta de rodillas a hombros.",
          "<b>Pausa de 2 s arriba</b> apretando el glúteo.",
          "Baja controlada sin arquear la lumbar. Anota el peso: aquí se progresa.",
        ],
        alternatives: [
          { id: "patada-gluteo-polea", note: "en polea con tobillera." },
          { id: "puente-suelo", note: "en colchoneta con pausa." },
        ],
      },
      {
        images: img("Glute_Kickback"),
        title: "Máquina de glúteo (patada de cadera)",
        reps: "4 × 12–15 / pierna",
        desc: "Descansa 60 s. <b>Empuja con el talón, sin arquear la lumbar</b>: el glúteo trabaja, la espalda no.",
        steps: [
          "Acomódate en la máquina (o tobillera en la polea baja).",
          "Empuja atrás y arriba <b>con el talón</b>, rodilla flexionada.",
          "Aprieta 1 s al final; la lumbar quieta.",
          "Termina la pierna y cambia.",
        ],
        alternatives: [
          { id: "abductora-maquina", note: "glúteo medio en máquina." },
          { id: "puente-suelo", note: "las dos piernas a la vez." },
        ],
      },
      {
        images: img("Lying_Leg_Curls"),
        title: "Curl femoral tumbado",
        reps: "3 × 12–15",
        desc: "Descansa 60 s. Isquios desde otro ángulo: cadera pegada al banco.",
        steps: [
          "Boca abajo, rodillo sobre los tobillos.",
          "Lleva los talones al glúteo con control.",
          "Baja en 2–3 s sin soltar la tensión.",
        ],
        alternatives: [
          { id: "femoral-sentado", note: "la versión sentada." },
          { id: "puente-suelo", note: "sin máquina." },
        ],
      },
      {
        images: img("Leg_Press"),
        title: "Prensa 45°, pies altos y separados",
        reps: "3 × 15",
        desc: "Descansa 90 s. <b>Pies altos = más glúteo.</b> Y otra vez: <b>sin pasar de 90°</b>.",
        steps: [
          "Pies en la parte alta de la plataforma, separados y con puntas algo abiertas.",
          "Baja controlada solo hasta 90° de rodilla.",
          "Empuja con los talones: el glúteo manda.",
        ],
        alternatives: [
          { id: "patada-gluteo-polea", note: "si la prensa está ocupada." },
          { id: "puente-suelo", note: "sin cargar la rodilla." },
        ],
      },
      {
        images: img("Thigh_Abductor"),
        title: "Abductora, torso inclinado adelante",
        reps: "3 × 20",
        desc: "Descansa 45 s. La inclinación pone el énfasis en el <b>glúteo mayor</b>: 20 que arden.",
        steps: [
          "Sentada, inclina el torso adelante agarrada del asiento.",
          "Abre contra la placa hasta el rango máximo.",
          "Cierra lento y repite sin pausa larga.",
        ],
        alternatives: [
          { id: "patada-gluteo-polea", note: "de a un lado en polea." },
          { id: "puente-suelo", note: "con pausa de 2 s." },
        ],
      },
      {
        images: img("Leverage_Shoulder_Press"),
        title: "Press de hombro en máquina",
        reps: "3 × 12",
        desc: "Descansa 75 s. El toque de hombro del sábado: la anchura se riega dos veces por semana.",
        steps: [
          "Manijas a la altura de las orejas, espalda pegada.",
          "Empuja sin bloquear los codos.",
          "Baja controlada en 2 s.",
        ],
        alternatives: [
          { id: "press-hombro-smith", note: "con barra guiada." },
          { id: "press-hombro-mancuernas", note: "sentada con respaldo." },
        ],
      },
      {
        icon: "i-lateral",
        title: "Elevaciones laterales en máquina",
        reps: "4 × 15",
        desc: "Descansa 45 s. <b>Última serie: baja el peso y haz repeticiones hasta fallar</b> — el cierre de la semana.",
        steps: [
          "Hombros alineados con el eje, sube hasta la horizontal.",
          "Baja en 2 s resistiendo.",
          "En la última serie: menos peso y repeticiones hasta el fallo limpio.",
        ],
        alternatives: [
          { id: "laterales-polea", note: "un brazo a la vez." },
          { id: "laterales-mancuernas", note: "de pie con mancuernas." },
        ],
      },
      {
        images: img("Bicycling_Stationary"),
        title: "Cardio: bici",
        reps: "12 min",
        desc: "Suave, sillín alto, y el estiramiento de pierna para cerrar la semana.",
        steps: [
          "Sillín alto, ritmo conversacional.",
          "3 min suaves al final.",
          "Estiramiento de pierna: sección al final de la página.",
        ],
        alternatives: [
          { id: "eliptica", note: "si la bici está ocupada." },
        ],
      },
    ],
  },
  {
    id: "dia7",
    num: "07",
    kicker: "Domingo · descanso total",
    title: "Descanso y Recarga",
    recovery: true,
    exercises: [
      {
        icon: "i-walk",
        title: "Descanso de verdad",
        reps: "Todo el día",
        desc: "Cinco días cumplidos: <b>hoy el cuerpo cobra y construye</b>. Camina si te provoca, come bien y duerme.",
      },
      {
        icon: "i-stretch",
        title: "Deja lista la semana",
        reps: "5 min",
        desc: "Revisa tu registro de pesos: <b>¿dónde tocó subir?</b> Alista la maleta del gym y el termo — el lunes se llega solo a entrenar.",
      },
    ],
  },
];
