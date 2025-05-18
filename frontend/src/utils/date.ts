import dayjs from "dayjs";

export function formatDate(
  date: string | number | Date,
  format: string = "YYYY-MM-DD"
): string {
  return dayjs(date).format(format);
}
