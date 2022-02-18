type Term = {
  startDate: Date;
  endDate: Date;
};

export const padding = (value: number) => `00${value}`.slice(-2);

export const dateToString = (time: Date): string => {
  const dateObj = new Date(time);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const date = dateObj.getDate();

  return `${year}.${padding(month)}.${padding(date)}`;
};

export const addDaysFromToday = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);

  return date;
};

export function isOpen({ startDate, endDate }: Term): boolean {
  const todayMidnight = new Date().setHours(0, 0, 0);
  const start = startDate.setHours(0, 0, 0);
  const end = endDate.setHours(24, 0, 0);
  return start <= todayMidnight && end > todayMidnight;
}

function formatDateString(date: string): string {
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);

  return `${year}.${month}.${day}`;
}

export default formatDateString;
