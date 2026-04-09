export function Props(props) {  //example of using props(this can be named anything). This way uses the props as an object, and then we can access the properties of the object. This is the most common way to use props in React. We can also use destructuring to access the properties of the object, which is shown in the Props2 component below.
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </>
  );
}

export function Props2({ title, description }){ //example of using destructuring to access the properties of the props object. This way is more concise and easier to read, especially when there are many props being passed in.
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
}
