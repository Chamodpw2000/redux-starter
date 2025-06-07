// Upddating Objects with Immutability

const person = {
  name: 'John'}

const person2 =  Object.assign({}, person, { name: 'Doe' });

const person3 = { ...person, name: 'Doe' };

// here we do shallow copy and it is nopt working with nested objects when using spread operator or Object.assign

// for nested objects we need to use a deep copy method

const person4 = {
  name: 'John',
  address: {
    city: 'New York',
    state: 'NY'
  }
};

const person5 = {
    ...person4,
    address: { ...person4.address,
    city: 'Los Angeles' }
}; // shallow copy of address

const person6 = Object.assign({}, person4, {
  address: Object.assign({}, person4.address, { city: 'Los Angeles' })
});

// if we use shallow coppy here it will not work as expected because the address object is a reference to the original object, so if we change the city in person5 or person6, it will also change in person4.

// Update arrays with Immutability

const numbers = [1, 2, 3, 4, 5];

const numbers2 = [...numbers, 6]; // Adding an element

const index = numbers.indexOf(3);
const numbers3 = [
  ...numbers.slice(0, index), // Elements before the index
  10, // New element
  ...numbers.slice(index + 1) // Elements after the index
]; // Replacing an element

const numbers4 = numbers.filter(num => num !== 3); // Removing an element

const numbers5 = numbers.map(num => (num === 3 ? 10 : num)); // Replacing an element using map

// Libraries for Immutability
// Libraries like Immutable.js, Immer, Mori and Ramda provide utilities for working with immutable data structures in JavaScript.







