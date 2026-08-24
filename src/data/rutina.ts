export interface Alternative {
  title: string;
  /** Cuándo o por qué usar esta alternativa. */
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
  /** Alternativas si la máquina está ocupada o quieres variar. */
  alternatives?: Alternative[];
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
 * Semana definitiva, construida alrededor del MMA:
 *  - Lun, Mar, Mié y Vie: gym (máquinas Matrix, pesas, saco de boxeo y zona
 *    cardio: caminadoras, elípticas, escaladora y bici de aire).
 *    Cada sesión cabe en máximo 1 hora: potencia de cadera, agarre, rotación,
 *    cuello y cardio de rounds.
 *  - Jueves: sesión personalizada 1 a 1 con el profe. Él dirige calentamiento,
 *    estiramiento y todo el trabajo — ese día no hay nada más.
 *
 * Cada ejercicio trae `steps` (paso a paso) y `alternatives` (plan B con las
 * máquinas del gym); al tocar la tarjeta se abren en un popup.
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
          { title: "Escaladora", note: "mismo tiempo; activa más glúteo y sube el pulso más rápido." },
          { title: "Bici estática o de aire", note: "suave, si las elípticas están ocupadas." },
          { title: "Caminadora en cuesta", note: "6 min caminando rápido con inclinación 8–10." },
        ],
      },
      {
        images: img("Freehand_Jump_Squat"),
        title: "Sentadilla con salto",
        reps: "4 × 5",
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
          { title: "Salto al cajón", note: "si consigues un cajón estable: mismo patrón, aterrizaje más amable." },
          { title: "Desplante pliométrico", note: "zancada con cambio de pierna en el aire, del catálogo de la app." },
          { title: "Sentadilla goblet explosiva", note: "si las rodillas se quejan hoy: sube a máxima velocidad, sin salto." },
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
          { title: "Prensa (Leg Press)", note: "estación 01: el mismo empujón con cero técnica que vigilar." },
          { title: "Sentadilla goblet", note: "mancuerna pesada al pecho si todo lo demás está ocupado." },
          { title: "Hack squat inclinado", note: "aparece en tu app como Hack Incline Squat." },
        ],
      },
      {
        images: img("Smith_Machine_Stiff-Legged_Deadlift"),
        title: "Peso muerto rumano en Smith",
        reps: "4 × 8–10",
        desc: "En la misma Smith de la sentadilla: caderas atrás, espalda neutra, la barra rozando las piernas. Glúteo y femoral: <b>el motor del golpe y del derribo</b> — la misma bisagra del sprawl.",
        watch: "Fuerza tradicional",
        steps: [
          "En la misma Smith: barra a la altura de la cadera, agarre al ancho de hombros.",
          "Rodillas apenas flexionadas: <b>empuja la cadera hacia atrás</b> y baja la barra rozando las piernas.",
          "Baja hasta sentir el estirón en los femorales (media espinilla), espalda neutra siempre.",
          "Aprieta el glúteo para volver arriba; no hiperextiendas al final.",
        ],
        alternatives: [
          { title: "Femoral en máquina (leg curl)", note: "aísla el femoral sin cargar la espalda." },
          { title: "Rumano con mancuernas", note: "si quieres más libertad de movimiento." },
          { title: "Hiperextensión con disco", note: "banco romano abrazando un disco al pecho." },
        ],
      },
      {
        images: img("Farmers_Walk"),
        title: "Acarreo del granjero",
        reps: "3 × 30–40 m",
        desc: "Mancuernas pesadas, pecho arriba, pasos cortos. <b>El agarre es la moneda del MMA</b>: controlar el clinch, cerrar el derribo y no soltar jamás.",
        watch: "Fuerza funcional",
        steps: [
          "Toma las mancuernas más pesadas que puedas sostener con buena postura.",
          "Pecho arriba, hombros atrás, core apretado: camina 30–40 m con pasos cortos y rápidos.",
          "No dejes que el peso te encorve; el agarre trabaja hasta el último metro.",
          "Suelta, descansa 60–90 s y repite.",
        ],
        alternatives: [
          { title: "Acarreo tipo maleta", note: "una sola mancuerna, cambia de mano por serie: core anti-flexión extra." },
          { title: "Colgado de barra (dead hang)", note: "3 × 30–45 s si no hay espacio para caminar." },
          { title: "Encogimientos con pausa", note: "mancuernas pesadas, aguanta 2 s arriba en cada repetición." },
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
          { title: "Pantorrilla en la prensa", note: "misma mecánica empujando con la punta del pie." },
          { title: "Talones en la Smith", note: "barra en los hombros, punta de pies sobre un disco." },
          { title: "A una pierna con mancuerna", note: "en un escalón, para emparejar izquierda y derecha." },
        ],
      },
      {
        images: img("Bicycling_Stationary"),
        title: "Finisher: sprints en bici de aire",
        reps: "6 × (30 s / 60 s)",
        desc: "La del ventilador: 30 s a tope con brazos y piernas, 60 s suave. <b>Mientras más fuerte pedaleas, más resiste</b> — cardio de rounds perfecto. Si está ocupada, cualquier bici estática sirve.",
        watch: "Bicicleta estática",
        steps: [
          "Ajusta el asiento: rodilla casi extendida en el punto más bajo del pedaleo.",
          "2 min de pedaleo suave para entrar en calor.",
          "<b>30 s a TODO</b>: brazos y piernas al máximo, como el último intercambio del round.",
          "60 s suave sin parar. Repite 6 veces.",
          "Anota distancia o calorías para superarlas la próxima semana.",
        ],
        alternatives: [
          { title: "Bici estática normal", note: "sube la resistencia en los 30 s fuertes." },
          { title: "Escaladora", note: "30 s subiendo a tope / 60 s a paso lento." },
          { title: "Caminadora con cuesta", note: "sprints inclinados si la bici está ocupada." },
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
          { title: "Escaladora o caminadora", note: "mismos 6 min si lo prefieres." },
          { title: "Remo suave en polea", note: "activa espalda y hombro antes de empujar." },
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
          { title: "Shadow con mancuernitas", note: "1–2 kg: el mismo trabajo de velocidad si el saco está ocupado." },
          { title: "Flexiones con palmada", note: "potencia de empuje sin ningún equipo." },
          { title: "Pase de pecho con balón", note: "si algún día aparece un balón medicinal en el gym." },
        ],
      },
      {
        images: img("Leverage_Chest_Press"),
        title: "Press de pecho en máquina",
        reps: "4 × 8–10",
        desc: "<b>RIR 1–2.</b> La máquina de press sentado (Matrix): empuja explosivo como un golpe, vuelve en 2–3 s. ¿Ocupada? Mancuernas en banco plano.",
        watch: "Fuerza tradicional",
        steps: [
          "Ajusta el asiento: las manijas a la altura de la mitad del pecho.",
          "Pies firmes, espalda pegada al respaldo, hombros abajo.",
          "<b>Empuja explosivo</b> hasta casi extender los codos, sin bloquearlos.",
          "Vuelve controlado en 2–3 s. Deja 1–2 en reserva y anota el peso.",
        ],
        alternatives: [
          { title: "Press con mancuernas", note: "banco plano: más rango y estabilización." },
          { title: "Press inclinado con barra", note: "del día B de tu app; pega más al pecho alto." },
          { title: "Aperturas en peck fly", note: "estación 26, como extra si quieres más pecho." },
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
          { title: "Remo con mancuerna a una mano", note: "rodilla en banco: un lado a la vez, como jalas en el clinch." },
          { title: "Remo unilateral en polea", note: "tu app lo sugiere como Remo Polea Unilateral." },
          { title: "Remo en máquina de palanca", note: "si la polea está ocupada." },
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
          { title: "Dominada asistida", note: "la estación de contrapeso: mismo patrón, más transferencia." },
          { title: "Jalón unilateral", note: "estación 33: un brazo a la vez." },
          { title: "Jalón agarre cerrado", note: "codos al frente; más bíceps y dorsal bajo." },
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
          { title: "Press francés con barra Z", note: "del día B de tu app." },
          { title: "Máquina de tríceps", note: "la Arm Extension, si el multifuncional está lleno." },
          { title: "Fondos en banco", note: "pies adelante, sin equipo." },
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
          { title: "Curl martillo con mancuernas", note: "el clásico, si la polea quedó lejos." },
          { title: "Curl en máquina Scott", note: "del catálogo de tu app; aísla más el bíceps." },
          { title: "Curl con barra Z", note: "agarre supino para variar el estímulo." },
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
          { title: "Face pull con banda", note: "tu banda en cualquier poste; idéntico." },
          { title: "Aperturas invertidas en peck fly", note: "el peck fly al revés trabaja lo mismo." },
          { title: "Posteriores con mancuernas", note: "inclinado, abriendo los brazos." },
        ],
      },
      {
        images: img("External_Rotation_with_Cable"),
        title: "Rotación externa en polea",
        reps: "2 × 15 / lado",
        desc: "Manguito rotador: pega hoy y sigue pegando en 10 años.",
        watch: "Fuerza funcional",
        steps: [
          "Polea a la altura del codo; codo pegado al cuerpo y flexionado 90°.",
          "Gira el antebrazo hacia afuera <b>sin despegar el codo</b>.",
          "Vuelve lento. Peso mínimo: esto es un seguro, no un ego lift.",
        ],
        alternatives: [
          { title: "Con banda", note: "igual de efectivo si la polea está ocupada." },
          { title: "Acostado de lado con mancuernita", note: "1–3 kg bastan." },
        ],
      },
    ],
  },
  {
    id: "dia3",
    num: "03",
    kicker: "Miércoles · ~50 min",
    title: "Rounds MMA y Core",
    quote:
      "Sin pesas hoy: cuerda, saco y core. Mañana entrenas con el profe — llega con piernas vivas y hombros frescos.",
    exercises: [
      {
        images: img("Rope_Jumping"),
        title: "Cuerda",
        reps: "3 rds × 3 min",
        desc: "El cardio clásico del combate: juego de pies, muñecas y ritmo. 1 min de descanso entre rounds; el primero, suave, es tu calentamiento.",
        watch: "Cuerda",
        steps: [
          "Cuerda a tu medida: pisándola al centro, las manijas llegan a las axilas.",
          "Salta bajo (2–3 cm), en la punta de los pies; giran las <b>muñecas</b>, no los brazos.",
          "Round 1 suave como calentamiento; sube el ritmo en el 2 y el 3.",
          "1 min de descanso entre rounds. ¿Te enredas? Sigue: cada tropiezo también cuenta.",
        ],
        alternatives: [
          { title: "Rounds en caminadora", note: "3 min fuerte / 1 min caminando." },
          { title: "Elíptica rápida", note: "mismos bloques si la cuerda aún no sale." },
          { title: "Escaladora", note: "3 min a buen paso por round." },
        ],
      },
      {
        icon: "i-bag",
        title: "Rounds de saco + sprawls",
        reps: "3 rds × 3 min",
        desc: "<b>Formato MMA:</b> combinaciones limpias y, en cada cambio de minuto, cambio de nivel + sprawl y sigues golpeando. Técnica y flow, no potencia máxima; 1 min entre rounds. ¿Saco ocupado? Shadow con sprawls o rounds de caminadora.",
        watch: "Kickboxing",
        steps: [
          "3 rounds de 3 min con 1 min de descanso: técnica y flow, no potencia máxima.",
          "Combina limpio (1-2, 1-2-3, gancho al cuerpo) y muévete alrededor del saco.",
          "En cada cambio de minuto: <b>cambio de nivel + sprawl</b>, te levantas y sigues golpeando.",
          "Guardia arriba SIEMPRE, incluso cansado: eso es lo que te llevas al jueves.",
        ],
        alternatives: [
          { title: "Shadow con sprawls", note: "sin saco: mismas combinaciones al aire." },
          { title: "Rounds en caminadora", note: "si el saco está ocupado y no quieres shadow." },
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
          { title: "Russian twist con disco", note: "sentado, giro con control." },
          { title: "Pallof press en polea", note: "anti-rotación: aguanta recto lo que la polea quiere girar." },
          { title: "Leñador con banda", note: "si el multifuncional está lleno." },
        ],
      },
      {
        images: img("Plank"),
        title: "Plancha",
        reps: "3 × 45–60 s",
        desc: "Core rígido: transfiere la fuerza de la cadera al puño sin fugas.",
        watch: "Core",
        steps: [
          "Antebrazos al piso, codos bajo los hombros, cuerpo en línea recta.",
          "Aprieta glúteo y abdomen: la cadera <b>ni sube ni se cae</b>.",
          "Respira normal; cuando la forma se rompa, se acabó la serie.",
        ],
        alternatives: [
          { title: "Plancha con toques de hombro", note: "manos al piso, toca el hombro contrario sin mecerte." },
          { title: "Plancha lateral", note: "45 s por lado: oblicuos que aguantan el clinch." },
        ],
      },
      {
        images: img("Flat_Bench_Lying_Leg_Raise"),
        title: "Elevación de piernas en banco",
        reps: "3 × 12–15",
        desc: "Abdomen bajo que aguanta golpes al cuerpo.",
        watch: "Core",
        steps: [
          "Acostado en el banco, agárrate del borde detrás de tu cabeza.",
          "Sube las piernas casi rectas hasta la vertical.",
          "Baja lento en 2–3 s <b>sin que la lumbar se despegue</b> del banco.",
          "Si la lumbar se arquea, flexiona un poco las rodillas.",
        ],
        alternatives: [
          { title: "Rodillas colgado de la barra", note: "suma agarre gratis mientras trabajas abdomen." },
          { title: "Crunch en polea alta", note: "arrodillado con la cuerda, para cargarlo con peso." },
        ],
      },
      {
        images: img("Hyperextensions_Back_Extensions"),
        title: "Hiperextensión lumbar",
        reps: "2 × 12–15",
        desc: "En el banco romano del gym. <b>La lumbar es la otra mitad del core</b>: sostiene la postura round tras round y protege la espalda cuando rotas fuerte. Sube controlado, sin hiperextender.",
        watch: "Core",
        steps: [
          "Ajusta el banco romano: el borde del cojín en el pliegue de la cadera.",
          "Baja controlado hasta donde la espalda se mantenga larga.",
          "Sube apretando glúteo y lumbar hasta quedar <b>en línea recta</b> — sin pasarte arriba.",
          "2 s abajo, 1 s arriba. Cuando 15 sean fáciles, abraza un disco.",
        ],
        alternatives: [
          { title: "Superman en el piso", note: "brazos y piernas arriba, aguanta 2 s por rep." },
          { title: "Buenos días con banda", note: "bisagra ligera de alta repetición." },
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
    kicker: "Viernes · ~55 min",
    title: "Potencia Total y Cuello",
    exercises: [
      {
        images: img("Elliptical_Trainer"),
        title: "Calentamiento",
        reps: "8 min",
        desc: "6 min de elíptica + 2 min de banda para hombro.",
        watch: "Elíptica",
        steps: [
          "6 min de elíptica subiendo el ritmo poco a poco.",
          "Banda: 15 pull-aparts + 15 rotaciones externas por lado.",
          "Antes de cargar el push press: 5 repeticiones con la barra vacía.",
        ],
        alternatives: [
          { title: "Escaladora o bici", note: "mismos 6 min." },
        ],
      },
      {
        images: img("Push_Press"),
        title: "Push press",
        reps: "4 × 5",
        desc: "<b>Primero, en fresco.</b> Piernas + brazo en un solo impulso: la mecánica exacta de golpear con la cadera. Barra o mancuernas.",
        watch: "Fuerza funcional",
        steps: [
          "Barra en las clavículas (o mancuernas a los hombros), agarre al ancho de hombros.",
          "Mini-flexión de rodillas — unos 10 cm, tronco recto.",
          "<b>Extiende todo a la vez</b>: piernas y brazos, la barra sale disparada arriba.",
          "Es la mecánica del golpe: el piso empuja, la cadera transmite, el puño llega.",
          "Baja controlado a los hombros. 5 potentes; 2 min de descanso.",
        ],
        alternatives: [
          { title: "Press militar estricto", note: "sin impulso de piernas: más hombro puro." },
          { title: "Push press con mancuernas", note: "si el rack está ocupado." },
          { title: "Press en máquina explosivo", note: "último recurso: empuja rápido, baja lento." },
        ],
      },
      {
        images: img("Barbell_Hip_Thrust"),
        title: "Hip thrust",
        reps: "4 × 8–10",
        desc: "El glúteo rota tu cadera al golpear y es <b>el puente (upa) con el que escapas cuando te montan</b>. Pausa 1 s arriba. Usa la máquina de hip thrust del gym; si está ocupada, barra sobre banco.",
        watch: "Fuerza tradicional",
        steps: [
          "En la máquina: espalda alta apoyada, cojín sobre la cadera, pies al ancho de hombros.",
          "Empuja con los talones y sube la cadera hasta quedar recto de rodillas a hombros.",
          "<b>Aprieta el glúteo 1 s arriba</b> — es tu puente (upa) cuando te montan.",
          "Baja controlado sin que la lumbar se arquee.",
        ],
        alternatives: [
          { title: "Con barra sobre banco", note: "el clásico si la máquina está ocupada." },
          { title: "Puente a una pierna", note: "en el piso, 12 por lado." },
          { title: "Patada de glúteo en polea", note: "del día A de tu app, pierna flexionada." },
        ],
      },
      {
        images: img("Pullups"),
        title: "Dominadas",
        reps: "3 × al fallo − 1",
        desc: "En la máquina asistida (Matrix): ajusta el contrapeso para sacar 6–8 limpias y ve bajando la asistencia semana a semana; sin contrapeso cuando puedas.",
        watch: "Fuerza tradicional",
        steps: [
          "En la asistida: rodillas al cojín, contrapeso que te deje sacar 6–8 limpias.",
          "Desde brazos estirados, jala hasta pasar la barbilla — <b>pecho a la barra</b>.",
          "Baja en 2–3 s: ahí está la mitad del ejercicio.",
          "Cada semana, un poco menos de contrapeso. El día que salgan 6 sin ayuda, celebra.",
        ],
        alternatives: [
          { title: "Jalón al pecho pesado", note: "si la asistida está ocupada." },
          { title: "Dominada agarre neutro", note: "más amable con hombros y codos." },
          { title: "Remo invertido", note: "en la Smith con la barra baja." },
        ],
      },
      {
        images: img("Leverage_Shoulder_Press"),
        title: "Press de hombro en máquina",
        reps: "3 × 8–10",
        desc: "Hombros que aguantan 3 minutos de guardia alta. En la máquina (Matrix) empujas seguro aun con la fatiga del push press; ¿ocupada? mancuernas.",
        watch: "Fuerza tradicional",
        steps: [
          "Asiento ajustado: manijas a la altura de las orejas.",
          "Empuja arriba <b>sin bloquear los codos</b>; baja controlado a las orejas.",
          "Espalda pegada al respaldo, sin arquear la lumbar.",
        ],
        alternatives: [
          { title: "Con mancuernas sentado", note: "más estabilización si hay banco libre." },
          { title: "Elevación lateral en máquina", note: "estación 55: si el hombro pide algo liviano hoy." },
        ],
      },
      {
        images: img("Plate_Twist"),
        title: "Russian twist con disco",
        reps: "3 × 12 / lado",
        desc: "Versión cargada del giro: potencia rotacional para el cruzado.",
        watch: "Core",
        steps: [
          "Sentado, tronco atrás 45°, disco al pecho.",
          "Gira el torso llevando el disco a un lado y al otro: <b>el giro nace en las costillas</b>, no en los brazos.",
          "Pies apoyados si lo necesitas; elévalos para el nivel pro.",
          "12 toques por lado sin encorvar la espalda.",
        ],
        alternatives: [
          { title: "Leñador en polea", note: "de pie, más parecido al golpe." },
          { title: "Sin disco, más reps", note: "si el peso te encorva." },
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
          { title: "Isométricos con la mano", note: "empuja la cabeza contra tu mano 10 s en 4 direcciones." },
          { title: "Con banda", note: "banda en un poste, resiste en las 4 direcciones." },
        ],
      },
    ],
  },
];
