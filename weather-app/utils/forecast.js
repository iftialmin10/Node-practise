const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = 'https//....' + latitude + '&' + longitude + 'api-key';
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service', undefined);
    } else if (response.body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(undefined, {
        forecast:
          response.body.weather[0].description +
          ' It is currently ' +
          response.body.main.temp +
          'degrees out. There is a ' +
          response.body.main.humidity +
          ' of humidity',
      });
    }
  });
};
module.exports = forecast;
