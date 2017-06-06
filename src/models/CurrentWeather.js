export default class CurrentWeather {
  constructor(temperature, apparentTemperature, summary, icon, precipProbability, humidity, windSpeed, windBearing, cloudCover, pressure, period) {
    this.temperature = temperature;
    this.apparentTemperature = apparentTemperature;
    this.summary = summary;
    this.icon = icon;
    this.precipProbability = precipProbability;
    this.humidity = humidity;
    this.windSpeed = windSpeed;
    this.windBearing = windBearing;
    this.cloudCover = cloudCover;
    this.pressure = pressure;
    this.period = period;
  }
}
