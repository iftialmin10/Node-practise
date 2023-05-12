const command = process.argv[2];

console.log(process.argv);

if (command === 'add') {
  console.log('Adding note');
} else if (command === 'remove') {
  console.log('Removing note');
}

// Challenge 4
const chalk = require('chalk');

// console.log(chalk.green('Success!'));
// console.log(chalk.bgRed('Erorr!!!'));

// argv
// argv stands for argument vector
// if we use index after argv[] than only specific value show
// console.log(process.argv[2]); //(process.property_name[which_line])

//npm package
// here for load npm package we use the package name only ,not path or short name
// require return us the stuff that the validator package provides us
//  for any information or usecase always check documentation
// const validator = require('validator');

// console.log(validator.isEmail('ifti@gmail.com')); // in log (package_name.typeOfWork('string'))
// console.log(validator.isURL('https://sites.google.com/view/mdalaminifti'));

// challenge 2
// const getNotes = require('./notes');

// const notes = getNotes();

// console.log(notes);

// Lecture 3 part 3
// path to connect another file under same directory
// here require module load the utils file and utlis file return the variable value in string, also variable name is independent for both file.
// can call the function by load with require and require return the function

// const add = require('./utils.js');

// const sum = add(5, -9);

// //console.log(nam1);
// console.log(sum);
