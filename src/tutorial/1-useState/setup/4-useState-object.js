import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: "24",
    message: "Random message",
  });
  console.log(person);
  function changeMessage() {
    // setPerson("Hello world!"); //this will wipe out the whole obj and replace with one string!
    //SO USE A SPREAD OPERATOR!!
    setPerson({ ...person, message: "Hello world" });
  }
  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.message}</h2>
      <button className="btn" onClick={changeMessage}>
        Change message
      </button>
    </>
  );
};

export default UseStateObject;
