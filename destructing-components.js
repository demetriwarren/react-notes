//syntax for destructuring components

function Greeter({first, last, age}) {
  // let {first, last, age} = props
  return (<h2>Hello, {first} {last}. He is {age} years old.</h2>)
};

ReactDOM.createRoot(document.getElementById("root")).render(<Greeter first="Demetri" last="Warren" age="24" />);