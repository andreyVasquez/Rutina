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
  /** Los días de descanso usan una grilla compacta (.recov) en vez de .cards. */
  recovery?: boolean;
  exercises: Exercise[];
}

/** Perfiles disponibles en la app. */
export type ProfileId = "andrey" | "valeria";

export interface ProfileMeta {
  id: ProfileId;
  /** Nombre mostrado en el switch y el selector. */
  name: string;
  /** Título del documento. */
  title: string;
  /** theme-color del navegador. */
  themeColor: string;
}

export const profiles: Record<ProfileId, ProfileMeta> = {
  andrey: {
    id: "andrey",
    name: "Andrey",
    title: "Rutina de Andrey — Fuerza + MMA",
    themeColor: "#0b0b0d",
  },
  valeria: {
    id: "valeria",
    name: "Valeria",
    title: "Rutina de Valeria — Fuerza + Línea",
    themeColor: "#100b11",
  },
};
