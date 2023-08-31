const path = require('path'); //core module dont need to install
const express = require('express');
const hbs = require('hbs');

// Node actually provide us two variable
//console.log(__dirname); // in console that contains a path to the directory the current script lives in
//console.log(__filename); // in console provides the path to the file itself
// through path.join() join function we can go to root directory with a specific file in second argument
//console.log(path.join(__dirname, '../public')); // here we join two path together in one

const app = express(); // declare variable to store express and for generate the application use express. Express function doesnt take any argument instead we configure our server by using various methods provided on the application itself

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public'); //here we select a file which we want run in our root or home-page
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials'); // .. means root folder

// Setup handlebars engine and views location
// After installing hbs , we need to tell express which templating we installed
app.set('view engine', 'hbs'); //set allows us to set a key and a value for a given express setting
// after setting absolute path than need to set value
app.set('views', viewsPath);
hbs.registerPartials(partialsPath); // registerPartials takes a path to the directory where partials live

// Setup static directory to serve
app.use(express.static(publicDirectoryPath)); //express.static() is function takes path to the folder as a argument

//after set the hbs than need to route
app.get('', (req, res) => {
  // render allow us to render one of our views. here no need to extension only match up with name of the template
  res.render('index', {
    title: 'Weather',
    name: 'Ifti',
  }); // res.render(1st arg is the name of the view to render, second arg is an object which contains all of the values want that view to able to access)
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About me',
    name: 'Ishrak',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'Maria',
  });
});

// if user go to this url than what reurn or get , html or json.
// below route doesnt work if the path.join() run first
// app.get('', (req, res) => {
//   // this function gets called with two argument. first is an object containing information about the incoming request to the server called as req for request. Second one is response this contains a bunch of methods allowing us to customize what we are going to send back to the requester.
//   //res.send('Hello express'); //here we can also send html and json file also
//   res.send('<h1>Title in HTML</h1>');
// }); //This function tske two argument. first is route and second one is functoin. in the function section we describe what we want to show the user if they visit this URL

// new route
// They are not working bcz of new method
// app.get('/help', (req, res) => {
//   res.send({
//     //object
//     forecast: 60,
//     location: 'Dhaka',
//   }); // to send json file we provide either an object or array
// });

// //3rd route
// app.get('/about', (req, res) => {
//   res.send([
//     {
//       // array
//       name: 'Ifti',
//     },
//     {
//       name: 'maria',
//     },
//   ]);
// });

//4th route
app.get('/weather', (req, res) => {
  res.send('weather page');
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Ifti',
    error_message: 'Help article not found',
  });
});

app.get('*', (req, res) => {
  //here in url we use * sign which is provided by express as wild-card and useful for any unmatched url
  res.render('404', {
    title: '404',
    name: 'Ifti',
    error_message: 'Page not found',
  });
});

// app.com (only domain)
// app.com/help (run on a single express server)
// app.com/about

// for running our server for single time

// in app.listen() function first argument is port number
// in our local machine port 3000 is working well
// second argument is callback function an optional for checking the request up
app.listen(3000, () => {
  console.log('Server is up on port 3000'); //this message doesnt show on the browser its show only for developer in console
});
// for looking for the server use "localhost:3000" and also see the other page by "localhost:3000/help"
