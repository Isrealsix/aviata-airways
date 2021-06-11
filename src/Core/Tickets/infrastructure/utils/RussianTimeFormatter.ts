import { DateFormatter } from "./DateFormatter";

export class RussianTimeFormatter implements DateFormatter {
  format(date: Date) {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return date.toLocaleTimeString("ru", options);
  }
}
