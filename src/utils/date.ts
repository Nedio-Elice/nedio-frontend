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
  const todayMidnight = new Date().toString();
  const startDateToString = startDate.toString();
  const endDateToString = endDate.toString();
  const day = 60 * 60 * 24 * 1000;

  return (
    Date.parse(startDateToString) <= Date.parse(todayMidnight) &&
    Date.parse(endDateToString) + day >= Date.parse(todayMidnight)
  );
}

function formatDateString(date: string): string {
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);

  return `${year}.${month}.${day}`;
}

export default formatDateString;
