// object property shorthand
// In this case we take value from variable and use as object property value
// But if variable name and object property name is exactly same than only use the variable name and automatically variable name convert the value into the object property

const name = 'Ifti';
const userAge = 26;

const user = {
  name,
  age: userAge,
  location: 'Dhaka',
};

console.log(user);

// Object destructuring: when we want to access object property we need de-structuring
// destructring, structure with the object property_name as variable_name and store the property value
const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
};
// destructuring means extract value from object property
// destructuring syntax
//const label = product.label // for single property extract

//for multiple property extraction
const { label: productLabel, stock, rating = 5 } = product; // const {which property want to extract} = object_name

// if want to change or rename the variable value which takes value from object , than syntax is const{property_name: expected_variable_name}
// we can set a default value incase the variable_name not match or exist in the object property
console.log(productLabel);
console.log(stock);
console.log(rating);

// we can destructuring object property as a function argument
const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction('order', product);
