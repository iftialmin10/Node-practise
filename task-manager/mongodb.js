// CRUD create read update delete operation

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient; //its give us access to the function necessary to connect it into the database

// Defining URL
const connectionURL = 'mongodb://127.0.0.1:27017'; // sometimes localhost can give us error or fail thats why we use '127.0.0.1'
const databaseName = 'task-manager'; // database name

// setup connection
MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database');
    }
    // "client.db(databaseName)" return us database rference
    const db = client.db(databaseName); // without creating any database we only declare a name and by this name we can create database with mongodb

    // here collection is a function and it expects the name of the collection we are trying to manipulate and insert is a method which expects an object as its first argument which are the data we want to insert
    db.collection('users').insertOne({
      name: 'ifti',
      age: 27,
    });
  }
); // 1st arg is connection-URL and 2nd arg is option object and last one is callback function is gonna get called when we are actually connected.
