import dayjs from "dayjs";
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

export function formatDate(date: string) {
  return dayjs(date.replace(/-/g, "/"), "DD/MM/YYYY").format("MMMM D, YYYY");
}
