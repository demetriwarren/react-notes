

const props = {                                     //intialized variable holding an object with properties 
    first: "Demetri",
    last: "Warren"
};

function Greeter(props) {
    console.log(props.first, props.last)            //function syntax
};


//destructuring the function            
function Greeter({first, last}) {                   //function syntax with destructuring
    console.log(first, last)            
};


function Greeter(props){
    let {first, last} = props;                      //function syntax with object initialized inside of the function
    console.log(first, last);
}


(firstName, lastName) => {                            //arrow function syntax with destructuring
    console.log(firstName, lastName);
}

() => {                                                
    console.log("This is an arrow function with no parameters")     //arrow function syntax with no parameters. You must include the parentheses if there are no parameters.
}

fullName => {
    console.log(fullName);                           // arrow function syntax with one parameter. You can remove the parentheses if there is only one parameter.
}



