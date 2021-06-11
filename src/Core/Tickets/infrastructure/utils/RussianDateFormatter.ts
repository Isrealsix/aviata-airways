import { DateFormatter } from "./DateFormatter";

export class RussianDateFormatter implements DateFormatter {
  format(date: Date): string {
    const day = date.toLocaleDateString("ru", { day: "numeric" });
    const month = date.toLocaleDateString("ru", { month: "short" });
    const weekday = date.toLocaleDateString("ru", { weekday: "short" });
    return `${day} ${month} ${weekday}`;
  }
}
