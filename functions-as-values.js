


//normal function syntax
function handleTimeout(){       //can be passed as a parameter in another function as a value, or a callback function. When using as a value, omit the parens, to use as a function, use parens. 
    console.log("Timed out.")   //using as a value, the function will be called at a later time, when the timeout is reached. Using as a function, the function will be called immediately.
}
setTimeout(handleTimeout, 2000); //after 2 seconds, the function handleTimeout will be called and "Timed out." will be logged to the console.

//variable holding an anonymous function syntax
let handleTimeout2 = () => {
    console.log("Timed out again.")
}
setTimeout(handleTimeout2, 3000); //after 3 seconds, the function handleTimeout2 will be called and "Timed out again." will be logged to the console.


//syntax for an anonymous function being passed as a value.
setTimeout(() => {console.log("Timed out one more time.")}, 4000); //after 4 seconds, the anonymous function will be called and "Timed out again again." will be logged to the console. This is an example of an anonymous function being passed as a value.