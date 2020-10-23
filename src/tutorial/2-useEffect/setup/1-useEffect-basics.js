import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter**
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    //stuff inside callback will run on every render
    console.log("Called after every render");
    if (value > 0) document.title = `New messages(${value})`;
    // });//can also pass 2nd argument here!
  }, [value]); //if empty, it is not called on re-render
  console.log("Render component");
  return (
    <>
      <h2>{value}</h2>
      <button type="button" className="btn" onClick={() => setValue(value + 1)}>
        Change
      </button>
    </>
  );
};

export default UseEffectBasics;

//what else about the 2nd parameter?
//that array has values, and the function will run only if any of the values present in the
//array is changed. So if 'value' is changed by the setValue function, then the useEffect will run.
//otherwise it will not run.
//can have more than one useEffects! if you have another one with empty array then it will
//not be run on further re-renders!
