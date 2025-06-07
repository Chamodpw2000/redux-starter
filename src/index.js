import {compose, pipe} from 'lodash/fp'; 

// Functional Programming in JavaScript

// Functions are first-class citizens in JavaScript, meaning they can be passed around as arguments, returned from other functions, and assigned to variables.

function sayHello(){

    return "Hello, World!";
};

// Assigning the function to a variable
let fn = sayHello;

fn(); // Calling the function through the variable

// Passing a function as an argument
function greet(fnMessage) {
    console.log(fnMessage());
}

greet(sayHello);

// Returning a function from another function
function sayHello2(){
    return function(){
        return "Hello from the inner function!";
    }
}

let innerFn = sayHello2();
console.log(innerFn()); // Calling the inner function

// Higher-order functions are functions that take other functions as arguments or return them as results.

let numbers = [1, 2, 3, 4, 5];
// Using map to apply a function to each element in the array
let doubled = numbers.map((number)=>{
    number * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]

// Map  , filter , setTimeout, setInterval, and reduce are all examples of higher-order functions.

// functional Composition is the process of combining two or more functions to produce a new function. This is often done using the pipe or compose functions.

let input = " Java ScRiPt ";
let output = "<div>" + input.trim().toLowerCase() + "</div>";
console.log(output); // <div>javascript</div>

// Functional composition can be achieved using a simple function that takes multiple functions as arguments and returns a new function that applies them in sequence.

const trim = (str) => str.trim();
const toLowerCase = (str) => str.toLowerCase();
const wrapInDiv = (str) => `<div>${str}</div>`;

const result = wrapInDiv(toLowerCase(trim(input)));
console.log(result); // <div>javascript</div>

// This is a simple example of functional composition, where we apply multiple functions to an input in a sequential manner.
// In this approach we have some difficulties such as the need to pass the output of one function as the input to the next function, which can lead to less readable code and many parentheses can be cumbersome.

// Composing and piping functions can help to make the code more readable and maintainable. Libraries like Ramda or Lodash provide utilities for functional composition and piping.

// Lodash is a popular utility library that provides many functions for functional programming, including `_.map`, `_.filter`, and `_.reduce`. It also provides `_.flow` and `_.pipe` for function composition.


const transform = compose(wrapInDiv, toLowerCase, trim); // <div>javascript</div>

console.log(transform(input)); // <div>javascript</div>

// Using pipe to apply functions in a left-to-right manner
const transformPipe = pipe(trim, toLowerCase, wrapInDiv);

// defference between compose and pipe
// compose applies functions from right to left, while pipe applies them from left to right.


// Currrying


// const wrapInDiv = (str) => `<div>${str}</div>`;
const wrapInSpan = (str) => `<span>${str}</span>`;

// we can use one fuction like this instead of these functions
const wrap = (type,str)=> `<${type}>${str}</${type}>`;


// const transform = pipe(trim, toLowerCase, wrap("div")); 
// This ios not working because the wrap function is not curried, it takes two arguments, so we need to use a curried version of the wrap function.

// const wrap = (type,str)=> `<${type}>${str}</${type}>`; this function is not curried, so we need to create a curried version of it.
const wrapCurried = (type) => (str) => `<${type}>${str}</${type}>`;

const transformCurried = pipe(trim, toLowerCase, wrapCurried("div"));

console.log(transformCurried(input)); // <div>javascript</div>