const geocode = require('./utils/geocode');
const forecast = require('.utils/forecast');

const address = process.argv[2]; // for reading data from console log

// const url =
//   'https://api.openweathermap.org/data/2.5/weather?lat=37.8267&lon=-122.4233&units=metric&appid=';
// // for adding query as string , after URL use "?key=keyvalue&otherkey=othervalue
// // 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places/';
// //'https://visual-crossing-weather.p.rapidapi.com/forecast?rapidapi-key=&lat=37.8267&lon=-122.4233';
// //'https://air-quality.p.rapidapi.com/current/airquality?rapidapi-key=&lat=37.8267&lon=-122.4233';
// //call request function with two argument, 1st is an option object which outline what we'd like to do, thats where we provide the url and other information. 2nd argument is a function to run once we actually have that response.

// request({ url: url, json: true }, (error, response) => {
//   // here only one parameter could be true at the same time. Its may be error or may response
//   // we use json in small leter and give value true to parse automatically into json data
//   //request({option_object: variable_name},function run and send response )
//   //here error message shown when no internet or find any issue and response for output

//   if (error) {
//     // for no internet connection thats mean we have no response
//     console.log('Unable to connect to weather service');
//   } else if (response.body.error) {
//     // low level response or invalid or incomplete location address , in this case server return a response but in this response we get error
//     console.log('Unable to find location');
//   } else {
//     console.log(
//       response.body.weather[0].description + // use weather[0] bcz its an array and element only one
//         ' It is currently ' +
//         response.body.main.temp +
//         ' degrees out. There is a ' +
//         response.body.main.humidity +
//         ' of humidity'
//     );
//   }

//   // if we use "json: true" thats mean we parse this as json. we dont need to below code to convert the body into object
//   //const data = JSON.parse(response.body); // response is a string and we can find result json data file by parse data
//   //console.log(data); //"data.currently" used for current weather;
// });

// Geocoding
// two types of geocoding : forward geocoding and reverse geocoding
// forward geocoding: address to longitude and latitude
// reverse geocoding: longitude and latitude to address
// by Geo_coding we can convert location name to geocode or geocode to location name

if (!address) {
  console.log('please provide an address');
} else {
  geoCode(address, (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log(error); // if we use return than dont need to use else
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forecast);
    });
  });
}
