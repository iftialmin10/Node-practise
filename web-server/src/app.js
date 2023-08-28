const express = require('express');

const app = express(); // declare variable to store express and for generate the application use express. Express function doesnt take any argument instead we configure our server by using various methods provided on the application itself

// if user go to this url than what reurn or get , html or json.
app.get('', (req, res) => {
  // this function gets called with two argument. first is an object containing information about the incoming request to the server called as req for request. Second one is response this contains a bunch of methods allowing us to customize what we are going to send back to the requester.
  //res.send('Hello express'); //here we can also send html and json file also
  res.send('<h1>Title in HTML</h1>');
}); //This function tske two argument. first is route and second one is functoin. in the function section we describe what we want to show the user if they visit this URL

// new route
app.get('/help', (req, res) => {
  res.send({
    //object
    forecast: 60,
    location: 'Dhaka',
  }); // to send json file we provide either an object or array
});

//3rd route
app.get('/about', (req, res) => {
  res.send([
    {
      // array
      name: 'Ifti',
    },
    {
      name: 'maria',
    },
  ]);
});

//4th route
app.get('/weather', (req, res) => {
  res.send('weather page');
});

// app.com (only domain)
// app.com/help (run on a single express server)
// app.com/about

// for running our server for single time

// in app.listen function first one is port number
// in our local machine port 3000 is working well
app.listen(3000, () => {
  // second callback function is optional for checking the request up

  console.log('Server is up on port 3000'); //this message doesnt show on the browser its show only for developer in console
});
// for looking for the server use "localhost:3000" and also see the other page by "localhost:3000/help"
