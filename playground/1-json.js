//integrate fs(file System) with JSON
const fs = require('fs');

// Challenge time
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = 'Ifti'; //data is an object and in this object we set new value
data.age = 24;

const userJSON = JSON.stringify(data); // override the value with original

fs.writeFileSync('1-json.json', userJSON);
console.log(data.planet);

// //book is an object and object have property
// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
// };
// store data in json and can access by a method stringify
//const bookJSON = JSON.stringify(book); //bookJSON is not an object ,its a string
//fs.writeFileSync('1-json.json', bookJSON); // by using this we can store data in another file and access them from there

// work of fs.readfilesync
// for read object property from another object file that was saved before use
// fs.readFileSync('data_stor_file_name')
// const dataBuffer = fs.readFileSync('1-json.json'); // object property to number
// const dataJSON = dataBuffer.toString(); // number to string
// const data = JSON.parse(dataJSON); // string to object
// console.log(data.author); //access data from it

//console.log(dataBuffer); // if we log dataBuffer we see a number which are converted value of string

//console.log(bookJSON); //cant access any value of book object

//JSON.parse is js object method.
//through this method we can access object property
//its convert the json string to an array or object
// const parseData = JSON.parse(bookJSON);
// console.log(parseData.author);
