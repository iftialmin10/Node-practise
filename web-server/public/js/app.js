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

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const message1 = document.querySelector('#message-1');
const message2 = document.querySelector('#message-2');

/* In form submission after click submission btn, all data from 
document are by default reset. To avoid this problem we have to grab the 
 argument thats provided into  our event(e) callback, */
weatherForm.addEventListener('submit', e => {
  e.preventDefault();

  const location = search.value;
  message1.textContent = 'Loading.....';
  message2.textContent = '';
  fetch('https:.....?address=' + location).then(response => {
    response.json().then(data => {
      if (data.error) {
        return (message1.textContent = data.error);
      }
      message1.textContent = data.location;
      message2.textContent = data.forecast;
    });
  });
});
