// // Asynchronus callback function
// // its a nodejs API
// setTimeout(() => {
//   console.log('Two seconds are up');
// }, 2000);

// // Synchronus callback function
// // Its a javaScript API
// const names = ['Ifti', 'Maria', 'Alvie'];
// const shortNames = names.filter(name => {
//   return name.length <= 4;
// });

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0,
//     };
//     callback(data);
//   }, 2000);
// };

// geocode('Dhaka', data => {
//   console.log(data);
// });

// test

const add = (num1, num2, callback) => {
  setTimeout(() => {
    const add = num1 + num2;
    callback(add);
  }, 2000);
};

add(1, 4, sum => {
  console.log(sum); // Should print: 5
});
