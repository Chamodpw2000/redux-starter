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

// Pure functions are functions that do not have side effects and always return the same output for the same input. They do not modify any external state or rely on it. This makes them easier to reason about and test.

// no randomness, no external state, no side effects
// no current time, no current date, no current user, no current environment, no current state
// no global variables, no global state, no global functions
// no current configuration, no current settings, no current preferences
// no mutation of parameters

// bbenifits of pure functions:
// 1. Easier to test: Pure functions are easier to test because they do not rely on external state or have side effects.
// 2. Easier to reason about: Pure functions are easier to reason about because they always return the same output for the same input.
// 3. Easier to compose: Pure functions can be easily composed together to create more complex functions.

// Immtabblity 

// In a pure functional programming language data can not mutate, but in javascript we can mutate objects and arrays but string can not mutate. 
// So javascript is not a pure functional programming language. But we can use immutability libraries like Immutable.js or Immer.js to achieve immutability in JavaScript.

// Pros of immutability:
// 1. Easier to reason about: Immutable data structures are easier to reason about because they do not change over time.
// 2. Easier to test: Immutable data structures are easier to test because they do not rely on external state or have side effects.
// 3. Easier to debug: Immutable data structures are easier to debug because they do not change over time.
// 4. Easier to optimize: Immutable data structures can be optimized by the JavaScript engine because they do not change over time.
// 5. Easier to share: Immutable data structures can be shared between different parts of the application without worrying about side effects.
// 6. Easier to cache: Immutable data structures can be cached because they do not change over time.
// 7. Easier to parallelize: Immutable data structures can be parallelized because they do not change over time.
// 8. Easier to memoize: Immutable data structures can be memoized because they do not change over time.
// 9. Easier to serialize: Immutable data structures can be serialized because they do not change over time.
// 10. Easier to clone: Immutable data structures can be cloned because they do not change over time.


// Cons of immutability:
// 1. Performance: Immutable data structures can be slower than mutable data structures because they require copying the entire data structure to create a new one.
// 2. Memory: Immutable data structures can use more memory than mutable data structures because they require copying the entire data structure to create a new one.
// 3. Complexity: Immutable data structures can be more complex to work with because they require creating new data structures instead of modifying existing ones.

// in redux we use immutability to avoid side effects and make the state predictable.

