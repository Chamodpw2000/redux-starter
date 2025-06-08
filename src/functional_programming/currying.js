// function add(a,b) {
//     return a + b;
// }

// Above function can write as,

function add(a){
    return function(b) {
        return a + b;
    };
}

const add1 = add(1);
add1(5);

add(1)(5); 

// This is known as currying, where a function with multiple arguments is transformed into a sequence of functions that each take a single argument.

const add2 = (a) => (b) => a + b;


// This code defines a function called add2 using arrow function syntax in JavaScript. The function demonstrates the concept of currying, which is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.

// Here, add2 is a function that takes one argument a and returns another function. The returned function then takes a second argument b and returns the sum of a and b. For example, calling add2(3) returns a new function that adds 3 to its input. If you then call this returned function with 4, like add2(3)(4), the result will be 7.

add2(3)(4); // 7
