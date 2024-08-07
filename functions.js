

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



