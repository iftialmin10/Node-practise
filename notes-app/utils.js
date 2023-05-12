console.log('Utils.js');

const nam = 'Ifti';

const add = (a, b) => {
  return a + b;
};

// here this module share the define variable under this file
// we can also export or share function just change variable name with function name
module.exports = add;
