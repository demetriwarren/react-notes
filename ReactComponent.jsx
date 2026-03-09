

export default function ReactComponent(title, firstName, lastName, age) {
  return;
  <>

  {/*these are the props being returned after they are passed into the Component (function).*/}
    <H1>Normal Props:</H1>
    <h2>{title}</h2>
    <p>First Name: {firstName}</p>
    <p>Last Name: {lastName}</p>
    <p>Age: {age}</p>

    <H1>Child Props:</H1>
  {/* these are the child props being used. These are brought from the file referencing this component, and then passed in from what is between the tags. Like an HTML element tag. */}
    {/* e.g. of what component would like in another file to use the children props: <ReactComponent>Child content</ReactComponent> */ }
    <p>{props.children}</p>
  </>;
}
