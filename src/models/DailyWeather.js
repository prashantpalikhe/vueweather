export default class DailyWeather {
  constructor(max, min, time, icon, summary) {
    this.max = max;
    this.min = min;
    this.time = time;
    this.icon = icon;
    this.summary = summary;
  }
}
