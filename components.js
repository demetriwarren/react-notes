//component syntax for React that displays an h2 that says hello
function Greeter(){
    return <h2>Hello</h2>
 }
 
 ReactDOM.createRoot(document.getElementById("root")).render(<Greeter />);




//component syntax for React that says "Hello, Calvin Broadus" in an h2 on the client 

let props = {
    first: "Calvin",
    last: "Broadus"
  };
  
  function Greeter(props){
    return <h2>Hello, {props.first} {props.last}</h2>       //must identify the props you want to reference here
  };
  
  ReactDOM.createRoot(document.getElementById("root")).render(<Greeter first="Calvin" last="Broadus" />);      
  // the line above: you have to identify the attribute data(first and last name) in the greeter function on the render for it to be displayed

  