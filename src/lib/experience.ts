export interface CommercialPeriod {
  start: string;
  /** Опустить для текущего места работы — конец берётся как «сегодня». */
  end?: string;
}

// Коммерческий (штатный) опыт. Длительность каждого периода суммируется.
// Соответствует блокам «Опыт работы» в резюме. При добавлении новой работы —
// добавь сюда одну строку, и стаж на странице пересчитается автоматически.
export const COMMERCIAL_PERIODS: CommercialPeriod[] = [
  { start: "2022-11-01", end: "2023-06-01" }, // Black Wall Group
  { start: "2023-08-01", end: "2024-05-01" }, // EmotionalEgghead
  { start: "2025-07-01" }, // Яндекс (по наст. время)
];

const YEAR_MS = 365.25 * 24 * 60 * 60 * 1000;

/** Суммарный коммерческий стаж в полных годах (минимум 1). */
export function getCommercialExperienceYears(now: Date = new Date()): number {
  const totalMs = COMMERCIAL_PERIODS.reduce((acc, period) => {
    const start = new Date(period.start).getTime();
    const end = period.end ? new Date(period.end).getTime() : now.getTime();
    return acc + Math.max(0, end - start);
  }, 0);

  return Math.max(1, Math.floor(totalMs / YEAR_MS));
}
