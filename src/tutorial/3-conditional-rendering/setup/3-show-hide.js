import { cleanup } from "@testing-library/react";
import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      <button
        className="btn"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide
      </button>
      {show ? <Item /> : <></>}
    </React.Fragment>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("In useEffect");
    window.addEventListener("resize", checkSize); //toggle is rerendering the Item component again and again, so just an empty dependency list wont work!
    //we will need to add a cleanup function to close the window event listener!
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []); //empty dependence so only initial render
  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>window</h1>
      <h2>size: {size}</h2>
    </div>
  );
};
export default ShowHide;

//remember that cleanup function is always needed on some side effect functionality
//what was side effect? changing things outside the component
//will be needed for the eventListener on the DOM window
