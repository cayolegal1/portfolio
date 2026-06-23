const MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365.25;

// Años completos transcurridos desde la fecha de inicio de carrera.
// Se calcula en cada render, así no hay que actualizarlo manualmente.
export const getYearsOfExperience = (startDate: string): number => {
  const start = new Date(startDate).getTime();
  if (Number.isNaN(start)) return 0;
  return Math.max(0, Math.floor((Date.now() - start) / MS_PER_YEAR));
};
