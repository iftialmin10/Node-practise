const chalk = require('chalk');
// Yargs for argument parsing
const yargs = require('yargs');
const notes = require('./notes');

const command = process.argv[2];

// add, remove, read, list
// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  // here builder is an option configaration
  builder: {
    // here builder is a another property which have two object those are describe in details about command
    title: {
      describe: 'Note title',
      demandOption: true, // if required than its worked
      type: 'string',
    },
    body: {
      describe: 'Body of the note',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body); // using this method we call addNote function to use its data

    //console.log('Title: ' + argv.title); // here argv.title match with title property and add here
  },
});

// Challenge Setup command option

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a new note',
  builder: {
    title: {
      describe: 'note Title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List a new note',
  handler() {
    //console.log('Listing notes!!!');
    notes.listNote();
  },
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a new note',
  builder: {
    title: {
      describe: 'note Title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

//console.log(yargs.argv); // here yargs show or read argument property from terminal and also we can access them from command

// Instead use
yargs.parse(); // by using this we can avoid double log

//console.log(process.argv);

// Customize yargs version
//yargs.version('1.1.1');

// without yargs
// if (command === 'add') {
//   console.log('Adding note');
// } else if (command === 'remove') {
//   console.log('Removing note');
// }

// Challenge 4

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
