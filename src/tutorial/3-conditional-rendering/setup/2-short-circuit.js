import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const TestComponent = () => {
  return (
    <ul>
      <li>This is displayed</li>
      <li>As a test component</li>
      <li>When the error is false</li>
    </ul>
  );
};

const ShortCircuit = () => {
  const [text, setText] = useState(""); //leave it empty for true and false
  // const firstValue = text || "hello world"; //when true returns first value
  // const secondValue = text && "hello world"; //when true returns second value, false returns first

  const [isError, setIsError] = useState(false);

  return (
    <>
      {/* <h1>Value:{secondValue}</h1> */}
      <h1>{text || "Empty string"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {/* returns 'Its empty' when the String is empty */}
      {/* {isError && <h1>Error is true </h1>} */}
      {isError ? <h1>Error is true</h1> : <TestComponent />}
    </>
  );
};

export default ShortCircuit;
//we need to return something in our JSX right,
//hence if statements are not allowed in react.
//that's why we use short circuit operators!
//so we can display something completely
//now we have done multiple returns for multiple cases,
//but conditional rendering is where you want to show or hide something based on a condition

// for or operator, if LHS is true then LHS is returned
// for and operator, if LHS is true then RHS is returned
// and if LHS is false then nothing is returned
