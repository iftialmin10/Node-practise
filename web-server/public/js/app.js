console.log('Client side javascript file is loaded');

/* for fetch data instead callback function use 'then' method on the 
return value from fetch and we provide to it the callback function and
 then inside of the callback function we can use the response to do 
 whatever we want to do like extract the data and render to the browser 
 or dump in the console. Then method is part of a much bigger 
 API known as promises */

fetch('https://puzzle.mead.io/puzzle').then(response => {
  response.json().then(data => {
    //here response.json() have 'then' method instead call function
    console.log(data);
  });
});

//fetch weather API
fetch('https:.....').then(response => {
  response.json().then(data => {
    if (data.error) {
      return console.log(data.error);
    }
    console.log(data.location);
    console.log(data.forecast);
  });
});
