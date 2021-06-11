export class SecondsFormatter {
  constructor(private seconds: number) {}

  inMinute(): number {
    return Math.floor((this.seconds / 60) % 60);
  }

  inHour(): number {
    return Math.floor((this.seconds / (60 * 60)) % 24);
  }

  inMinuteAndHour(): string {
    return `${this.inHour()} ч ${this.inMinute()} м`;
  }
}
