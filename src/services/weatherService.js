import Location from '@/models/Location';
import Weather from '@/models/Weather';
import CurrentWeather from '@/models/CurrentWeather';
import DailyWeather from '@/models/DailyWeather';

const http = require('axios');
const jsonp = require('jsonp');

export default {
  getLocationForAddress(address) {
    return http
      .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}`)
      .then((response) => {
        const result = response.data.results[0];

        const name = result.formatted_address;
        const { lat, lng } = result.geometry.location;

        return new Location(lat, lng, name);
      });
  },

  getWeather(location, unit) {
    return new Promise((resolve, reject) => {
      const url = `https://api.forecast.io/forecast/4891dee8e0ca9cf8fdb7ad6dd07fef9f/${location.latitude},${location.longitude}?units=${unit.value}&exclude=minutely,hourly,alerts,flag`;
      jsonp(url, (err, result) => {
        if (err) {
          return reject(err);
        }

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

        const weather = new Weather(location, currentWeather, forecast);

        return resolve(weather);
      });
    });
  },
};
