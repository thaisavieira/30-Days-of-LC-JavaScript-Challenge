// Write a function createHelloWorld. It should return a new function that always returns "Hello World".


function createHelloWorld (){
    return function createHelloWorld() {
        return "Hello World";
    }
}

console.log(createHelloWorld);


// For this challenge I used the basic syntax of a function and the feature of JS to create functions within other functions and return it!