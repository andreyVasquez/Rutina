/**
 * Plan de ascenso al Acatenango (perfil de Valeria) — fechas y fases.
 *
 * ÚNICO valor que hay que cambiar si se mueve el ascenso: FECHA_ASCENSO.
 * Las fases se cuentan hacia atrás desde esa fecha con duraciones fijas
 * (Descarga 2 semanas, Mantener 2, Pico 5, Carga 5) y la Base ocupa desde
 * FECHA_INICIO hasta donde empieza Carga. Todo lo demás —fechas de cada fase,
 * hitos de la descarga, fase y semana de hoy— se deriva de aquí.
 */

/** Día del ascenso (YYYY-MM-DD). */
export const FECHA_ASCENSO = "2027-02-15";
/** Lunes en que arranca el plan (Fase 1 · Base). */
export const FECHA_INICIO = "2026-10-12";

const DIA = 86_400_000;
const SEMANA = 7 * DIA;

/** "YYYY-MM-DD" → Date al mediodía UTC (evita saltos por zona horaria). */
export const fecha = (iso: string): Date => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d, 12));
};
const sumarDias = (f: Date, n: number): Date => new Date(f.getTime() + n * DIA);

/** "12 de oct" */
export const corta = (f: Date): string =>
  new Intl.DateTimeFormat("es-CO", { day: "numeric", month: "short", timeZone: "UTC" })
    .format(f)
    .replace(".", "");
/** "15 de febrero de 2027" */
export const larga = (f: Date): string =>
  new Intl.DateTimeFormat("es-CO", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(f);

export interface Fase {
  id: "base" | "carga" | "pico" | "mantener" | "descarga";
  num: string;
  nombre: string;
  /** Primer día de la fase (inclusive). */
  inicio: Date;
  /** Último día de la fase (inclusive). */
  fin: Date;
  semanas: number;
  /** Caminadora del martes: siempre al 15 % de inclinación y 4,0 km/h. */
  caminadora: string;
  /** Escaladora del jueves: siempre a ritmo moderado. */
  escaladora: string;
  /** Caminata en montaña del sábado. */
  sabado: string;
  /** Ajuste de las sesiones de fuerza. */
  fuerza: string;
  /** Caminadora resuelta para la semana n (1-based) de la fase, si progresa semana a semana. */
  caminadoraSemana?: (n: number) => string;
}

const FUERZA_PROGRESION = "Series según lo escrito, con progresión de peso.";

export function calcularFases(ascensoISO = FECHA_ASCENSO, inicioISO = FECHA_INICIO): Fase[] {
  const ascenso = fecha(ascensoISO);
  const inicio = fecha(inicioISO);
  const descargaIni = sumarDias(ascenso, -14);
  const mantenerIni = sumarDias(ascenso, -28);
  const picoIni = sumarDias(ascenso, -63);
  const cargaIni = sumarDias(ascenso, -98);
  const semanas = (a: Date, b: Date) => Math.round((b.getTime() + DIA - a.getTime()) / SEMANA);

  return [
    {
      id: "base",
      num: "1",
      nombre: "Base",
      inicio,
      fin: sumarDias(cargaIni, -1),
      semanas: semanas(inicio, sumarDias(cargaIni, -1)),
      caminadora: "Semana 1: 35 min; +3 min por semana hasta 45 min. Sin mochila.",
      caminadoraSemana: (n) => `${Math.min(35 + 3 * (n - 1), 45)} min, sin mochila`,
      escaladora: "15 min sin mochila.",
      sabado: "2–3 h sin peso (Cristo Rey o Kilómetro 18).",
      fuerza: FUERZA_PROGRESION,
    },
    {
      id: "carga",
      num: "2",
      nombre: "Carga",
      inicio: cargaIni,
      fin: sumarDias(picoIni, -1),
      semanas: 5,
      caminadora: "45 min. Mochila de 4 kg la primera semana, +1 kg por semana hasta 7 kg.",
      caminadoraSemana: (n) => `45 min con ${Math.min(4 + (n - 1), 7)} kg`,
      escaladora: "20 min sin mochila.",
      sabado: "3–4 h con 5–6 kg.",
      fuerza: FUERZA_PROGRESION,
    },
    {
      id: "pico",
      num: "3",
      nombre: "Pico",
      inicio: picoIni,
      fin: sumarDias(mantenerIni, -1),
      semanas: 5,
      caminadora: "55 min con 8 kg.",
      escaladora: "25 min con 6 kg.",
      sabado:
        "5–6 h con 8–10 kg y mucho desnivel (Pico de Loro o similar). Al menos un fin de semana doble (sábado + domingo).",
      fuerza: FUERZA_PROGRESION,
    },
    {
      id: "mantener",
      num: "4",
      nombre: "Mantener",
      inicio: mantenerIni,
      fin: sumarDias(descargaIni, -1),
      semanas: 2,
      caminadora: "45 min con 8 kg.",
      escaladora: "20 min con 6 kg.",
      sabado: "3–4 h con 8 kg.",
      fuerza: "Mantener pesos, sin subir.",
    },
    {
      id: "descarga",
      num: "5",
      nombre: "Descarga",
      inicio: descargaIni,
      fin: ascenso,
      semanas: 2,
      caminadora: "30 min con 4 kg.",
      escaladora: "15 min sin mochila.",
      sabado: "1,5–2 h sin peso.",
      fuerza:
        "2 series por ejercicio. Sin step-downs los últimos 5 días antes del ascenso. Última sesión de pierna 3 días antes de subir.",
    },
  ];
}

export const fases = calcularFases();
export const ascenso = fecha(FECHA_ASCENSO);
export const inicio = fecha(FECHA_INICIO);
export const totalSemanas = Math.round((ascenso.getTime() - inicio.getTime()) / SEMANA);
/** Número de semana del plan (1-based) en la que cae una fecha. */
export const semanaPlanDe = (f: Date): number =>
  Math.min(Math.floor((f.getTime() - inicio.getTime()) / SEMANA) + 1, totalSemanas);

/** Hitos de la descarga, derivados de la fecha del ascenso. */
export const hitos = {
  /** Desde este día, sin step-downs (últimos 5 días antes del ascenso). */
  sinStepDownsDesde: sumarDias(ascenso, -5),
  /** Última sesión de pierna (3 días antes de subir). */
  ultimaPierna: sumarDias(ascenso, -3),
};

export interface Hoy {
  estado: "antes" | "plan" | "despues";
  fase?: Fase;
  semanaPlan?: number;
  semanaFase?: number;
  diasParaAscenso: number;
  caminadora?: string;
  escaladora?: string;
  sabado?: string;
  fuerza?: string;
  sinStepDowns?: boolean;
}

/** Fase, semana y prescripciones que tocan en una fecha dada. */
export function estadoDe(hoy: Date, lista: Fase[] = fases): Hoy {
  const diasParaAscenso = Math.round((ascenso.getTime() - hoy.getTime()) / DIA);
  if (hoy < inicio) return { estado: "antes", diasParaAscenso };
  if (hoy > ascenso) return { estado: "despues", diasParaAscenso };
  const fase = lista.find((f) => hoy >= f.inicio && hoy <= f.fin) ?? lista[lista.length - 1];
  const semanaPlan = Math.min(Math.floor((hoy.getTime() - inicio.getTime()) / SEMANA) + 1, totalSemanas);
  const semanaFase = Math.min(Math.floor((hoy.getTime() - fase.inicio.getTime()) / SEMANA) + 1, fase.semanas);
  return {
    estado: "plan",
    fase,
    semanaPlan,
    semanaFase,
    diasParaAscenso,
    caminadora: fase.caminadoraSemana ? fase.caminadoraSemana(semanaFase) : fase.caminadora,
    escaladora: fase.escaladora,
    sabado: fase.sabado,
    fuerza: fase.fuerza,
    sinStepDowns: hoy >= hitos.sinStepDownsDesde,
  };
}

/** Hoy, en la zona horaria del dispositivo, normalizado al mediodía UTC. */
export function hoyLocal(): Date {
  const h = new Date();
  const p = (n: number) => String(n).padStart(2, "0");
  return fecha(`${h.getFullYear()}-${p(h.getMonth() + 1)}-${p(h.getDate())}`);
}
