import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((prevState) => {
        //basically have an other arrow function inside, parameter is prevValue
        return prevState + 1; //always return something!
      });
    }, 2000);
  };

  //does not work if you click multiple times before 2 seconds are up!!
  //the setValue function is async
  return (
    <React.Fragment>
      <section
        style={{ margin: "4rem 0", padding: "2rem 0", border: "2px solid red" }}
      >
        <h2>Regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increase
        </button>
      </section>
      <br />
      <section
        style={{ margin: "4rem 0", padding: "2rem 0", border: "2px solid red" }}
      >
        <h2>Complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          Increase later
        </button>
      </section>
    </React.Fragment>
  );
};

export default UseStateCounter;

//till now we just did value update
