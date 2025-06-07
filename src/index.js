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

