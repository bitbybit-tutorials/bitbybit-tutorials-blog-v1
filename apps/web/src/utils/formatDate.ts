import dayjs from "dayjs";

export function formatDate(date: string) {
  return dayjs(date.replace(/-/g, "/")).format("MMMM D, YYYY");
}
