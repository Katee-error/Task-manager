import { format, isValid, parse } from "date-fns";

const DATE_FORMAT = "dd.MM.yyyy";
const BASE_DATE = new Date();
BASE_DATE.setHours(0, 0, 0, 0);

export const formatDate = (date: Date) => format(date, DATE_FORMAT);
export const safeParseDate = (dateStr: string, defaultDate: Date) => {
  const parsed = parse(
    dateStr,
    DATE_FORMAT,
    // Used for parts of date missing in string, e.g. hours, minutes, seconds, ms
    // in our case all are 0s
    BASE_DATE
  );
  if (!isValid(parsed)) {
    return defaultDate;
  }
  return parsed;
};
