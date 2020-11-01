import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    if (firstName && email) {
      console.log("Can submit");
      const person = {
        id: new Date().getTime().toString(), //usually u use some library
        firstName,
        email: email,
      }; //in ES6, can do direct like this if propery names are matching (rather than {firstName: firstName})
      setPeople((oldArray) => [...oldArray, person]);
      setFirstName("");
      setEmail("");
    } else {
      console.log("Empty");
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <button type="submit">Add person</button>
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
/*
htmlFor is used to associate a label with its corresponding input. Value of htmlFor is same as the id of that input. 
could be onSubmit or even onClick on the submit button
how to get values? we use State values
for every input field we add 2 things: 
1. value property
2. onChange event listener
*/
