const request = require('request');

const url =
  'https://api.openweathermap.org/data/2.5/weather?lat=37.8267&lon=-122.4233&appid=df4190d5f6797b089117492ddd1e9dcb';

//call request function with two argument, 1st is an option object which outline what we'd like to do, thats where we provide the url and other information. 2nd argument is a function to run once we actually have that response.
request({ url: url }, (error, response) => {
  //here error message shown when no internet or find any issue and response for output
  const data = JSON.parse(response.body); // response is a string and we can find result json data file by parse data
  console.log(data);
}); //request({option_object: variable_name},function run and send response )
