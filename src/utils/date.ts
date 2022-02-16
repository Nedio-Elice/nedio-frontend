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

export function isOpen(startDate: Date, endDate: Date): boolean {
  const todayMidnight = new Date().setHours(0, 0, 0, 0);
  const startDateToString = startDate.toString();
  const endDateToString = endDate.toString();

  return (
    Date.parse(startDateToString) < todayMidnight &&
    Date.parse(endDateToString) > todayMidnight
  );
}
