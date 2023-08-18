const fs = require('fs');
const chalk = require('chalk');
// json file act like data base, we can store data here and also can
// export those data

const getNotes = () => {
  return 'Your notes...';
};

const addNote = (title, body) => {
  const notes = loadNote(); //return array

  // const duplicateNotes = notes.filter(note => note.title === title); // here filter method search iteam until the last position found though searched iteam found before
  const duplicateNote = notes.find(note => note.title === title); // find method stop searching immediately when its found the iteam

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNote(notes);
    console.log('New note taken!');
  } else {
    console.log('Note title taken!');
  }
};

const removeNote = title => {
  const notes = loadNote();

  const removeTitle = notes.filter(note => note.title === title);
  if (removeTitle != 0) {
    notes.pop({ title: title });
    saveNote(notes);
    console.log(chalk.green.inverse('Title removed'));
  } else console.log(chalk.red.inverse('Title not matched'));
};

const listNotes = () => {
  const notes = loadNote();
  console.log(chalk.bgYellow('Your notes'));
  notes.forEach(note => {
    console.log(note.title);
  });
};

const readNote = title => {
  const notes = loadNote();
  const findNote = notes.find(note => note.title === title);
  if (findNote) {
    console.log(chalk.bgGreen(findNote.title));
    console.log(chalk.bgYellow(findNote.body));
  } else console.log(chalk.bgRed('Not found'));
};

//reuseable function to store data
const saveNote = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON); // create a file with json extension
};

// return array value
const loadNote = () => {
  // there are no such json file exist. if we want to work with a data file
  // which are not exist than use try-catch method

  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

// we can export multiple function from notes.js file by using object and
// use functions as property instead set one function
//module.exports = getNotes;

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNote: listNotes,
  readNote: readNote,
};
