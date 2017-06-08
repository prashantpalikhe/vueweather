import Location from '@/models/Location';
import Weather from '@/models/Weather';
import CurrentWeather from '@/models/CurrentWeather';
import DailyWeather from '@/models/DailyWeather';
import Vue from 'vue';

const APIS = {
  GEOCODE: 'https://maps.googleapis.com/maps/api/geocode/json?address=',
  FORECAST: 'https://api.forecast.io/forecast/4891dee8e0ca9cf8fdb7ad6dd07fef9f/',
  LOCATOR: 'http://ip-api.com/json',
};

export default {
  getLocationForAddress(address) {
    return Vue.http
      .get(`${APIS.GEOCODE}${address}`)
      .then(response => response.json())
      .then((response) => {
        const result = response.results[0];

        const name = result.formatted_address;
        const { lat, lng } = result.geometry.location;

        return new Location(lat, lng, name);
      });
  },

  getWeather(location, unit) {
    const url = `${APIS.FORECAST}${location.latitude},${location.longitude}?units=${unit.value}&exclude=minutely,hourly,alerts,flag`;

    return Vue.http
      .jsonp(url)
      .then(response => response.json())
      .then((result) => {
        const today = result.daily.data.shift();
        const currentWeather = new CurrentWeather(
          result.currently.temperature,
          result.currently.apparentTemperature,
          result.currently.summary,
          result.currently.icon,
          result.currently.precipProbability,
          result.currently.humidity,
          result.currently.windSpeed,
          result.currently.windBearing,
          result.currently.cloudCover,
          result.currently.pressure,
          (result.currently.time > today.sunsetTime || result.currently.time < today.sunriseTime) ? 'night' : 'day',
        );

        const forecast = result.daily.data.map(({ temperatureMax, temperatureMin, time, icon, summary }) => {
          return new DailyWeather(
            temperatureMax,
            temperatureMin,
            time,
            icon,
            summary,
          );
        });

        return new Weather(location, currentWeather, forecast);
      });
  },

  getCurrentLocation() {
    return Vue.http.get(APIS.LOCATOR)
      .then(response => response.json())
      .then((result) => {
        return new Location(result.lat, result.lon, `${result.city}, ${result.country}`);
      });
  },
};
