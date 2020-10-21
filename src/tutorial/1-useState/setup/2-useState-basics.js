import React, { useState } from "react";

const ErrorExample = () => {
  //has to be uppercase
  // console.log(useState("Hello")); //returns an array [value, function_that_changes_that_value]
  // const value = useState("Aman")[0];
  // const handler = useState("Aman")[1];
  const [text, setText] = useState("Aman"); //hooks have to start with use
  //this is array destructuring btw
  //serves as initial value
  //text is the value, setText is the function which is invoked to change this value
  //convention is to use <var>, <setVar>
  const clickHandler = () => {
    if (text === "Aman") setText("Riya");
    else setText("Aman");
  };
  return (
    <React.Fragment>
      <div className="container">
        <h2>Hii {text}</h2>
        <button type="button" className="btn" onClick={clickHandler}>
          Change name
        </button>
      </div>
    </React.Fragment>
  );
};

export default ErrorExample;
