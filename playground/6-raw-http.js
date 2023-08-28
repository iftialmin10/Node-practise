// here we can request URL with help of request library or module

const https = require('https');
const url = 'https://........';

https.request(url, response => {
  // response.on() a function that allow us to register a handler
  response.on('data', chunk => {});

  response.on('end', () => {
    // its indicate the finished job
  });
});
