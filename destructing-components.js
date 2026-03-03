//syntax for destructuring components

function Greeter({first, last, age}) {
  // let {first, last, age} = props
  return (<h2>Hello, {first} {last}. He is {age} years old.</h2>)
};

//syntax for destructuring an object outside of a function.
let {firstName, lastName} = {
  firstName: "Demetri",
  lastName: "Warren"
}
Console.log(firstName, lastName); //output would be "Demetri Warren". This pulls from the object and assigns the values to the variables firstName and lastName.

//syntax for destructuring an array
let [firstName, lastName] = ["Demetri", "Warren"] //The first value in the array is assigned to the first variable, and the second value is assigned to the second variable. The var name can be anything here, unlike the object destructuring where the var name has to match the key in the object.
Console.log(firstName, lastName); //output would be "Demetri Warren". 


ReactDOM.createRoot(document.getElementById("root")).render(<Greeter first="Demetri" last="Warren" age="24" />);