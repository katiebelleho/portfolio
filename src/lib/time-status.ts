// TODO: replace with the real hour-by-hour status copy.
// `hour` is the start of the range (24h, NY local time); the label applies
// until the next entry's hour.
const hourlyStatus: { hour: number; label: string }[] = [
  { hour: 0, label: "Currently sleeping" },
  { hour: 6, label: "Currently waking up" },
  { hour: 9, label: "Currently working" },
  { hour: 12, label: "Currently at lunch" },
  { hour: 13, label: "Currently working" },
  { hour: 18, label: "Currently unwinding" },
  { hour: 22, label: "Currently sleeping" },
];

export function getStatusForHour(hour: number): string {
  let current = hourlyStatus[0].label;
  for (const entry of hourlyStatus) {
    if (hour >= entry.hour) current = entry.label;
  }
  return current;
}
