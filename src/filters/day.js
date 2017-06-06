const days = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
];

export default function (value) {
  if (typeof value !== 'number') {
    return value;
  }

  const date = new Date(value);

  return days[date.getDay()];
}
