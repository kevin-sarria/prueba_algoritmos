/**
 * Format a given date into a human-readable string like "28 septiembre, 2025".
 * Removes default "de" from Spanish locale and adds a comma before the year.
 * @param date - Date object or ISO string
 * @returns formatted string
 */
export function formatDate(date: Date | string): string {

  if( !date ) return "--"

  const d = typeof date === "string" ? new Date(date) : date;

  const formatted = d.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return formatted.replace(/ de /g, " ").replace(/ (\d{4})$/, ", $1");
}
