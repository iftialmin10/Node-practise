// we can change default value in parameter
const greeter = (name = 'anonymous', age) => {
  console.log('Hey ' + name);
};

greeter('Ifti');

greeter();
