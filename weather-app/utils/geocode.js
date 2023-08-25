const request = reqiure('request');

const geoCode = (address, callback) => {
  const url = 'https:.....' + encodeURIComponent(address) + '.json?......'; // instead concating , use encodeURIComponent() function bcz its return string and avoid special character . Sometimes special char may occur crash

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to location service!', undefined);
    } else if (response.body.features.length === 0) {
      callback('Unable to find location. Try another search.', undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.feature[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
