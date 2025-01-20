import { format } from "date-fns";

const DATE_FORMAT = "dd.MM.yyyy";

export const formatDate = (date: Date): string => format(date, DATE_FORMAT);
