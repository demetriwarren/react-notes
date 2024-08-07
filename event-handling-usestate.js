//Event handling syntax. This is an event that will display a popup message "boo" when the button is clicked. 



function App(){
    let [message, setMessage] = React.useState("bruh");  //this is setting the useState hook. The first param gets the current value, the second changes it.
    let displayMessage = () => {
      setMessage("Message in the bottle.")
    }
  return <div>
    <p>{message}</p>
    <hr />
    <button onClick={display}>Display Alert</button>
    <hr />
    <button onClick={displayMessage}>Display Message</button>
    </div>
  function display(){               //this is the event. Events must always be in camelCase
    alert("This is a cool button")
  };
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);