export default function (value) {
  if (typeof value !== 'number') {
    return value;
  }

  return Math.round(value);
}
