//template literals are just another name for interpolated strings. 

let person = {
    first: "Demetri",
    last: "Warren"
};

//this is one way of doing it. 

let sentence = "My full name is " + person.first + " " + person.last + "." 
console.log(sentence);

//this is the better way to do it. 

let sentence = `My full name is ${person.first} ${person.last}.`
console.log(sentence);
