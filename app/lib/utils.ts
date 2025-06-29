// Format calories burned (e.g., 350 -> "350 kcal")
export function formatCalories(value: number): string {
  return `${value} kcal`;
}

// Optional: Format duration (in minutes to "X min")
export function formatDuration(minutes: number): string {
  return `${minutes} min`;
}

// Format dates (e.g., 2024-06-01 -> "Jun 1, 2024")
export const formatDateToLocal = (
  dateStr: string,
  locale: string = 'en-US',
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

// Generate pagination pages (used for paginated workouts, etc.)
export const generatePagination = (
  currentPage: number,
  totalPages: number,
): (number | string)[] => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};
