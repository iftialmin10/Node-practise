const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const api =
    'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=df4190d5f6797b089117492ddd1e9dcb';
  const url = 'https//....' + latitude + '&' + longitude + 'api-key';
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(undefined, {
        forecast:
          body.weather[0].description +
          ' It is currently ' +
          body.main.temp +
          'degrees out. There is a ' +
          body.main.humidity +
          ' of humidity',
      });
    }
  });
};
module.exports = forecast;
