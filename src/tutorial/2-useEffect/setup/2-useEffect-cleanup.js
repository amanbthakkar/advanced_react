import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
    // window.removeEventListener("resize", checkSize); if I add this, then the value also stops changing!
  };
  useEffect(
    () => {
      console.log("There is a rerender");
      window.addEventListener("resize", checkSize); //it's checkSize, not checkSize()
      // return () => {
      //   console.log("Cleanup");
      //   window.removeEventListener("resize", checkSize);
      // };
    } /*,[]*/
  );
  return (
    <>
      <h1>window</h1>
      <h2>{size}</h2>
    </>
  );
};

export default UseEffectCleanup;

//want to set up a listener on the browser window
//remember - useState automatically triggers a rerender because of value change
//eventListener added each and everytime if:
//1. [] is not included
//2. cleanup is not applied
//eventListener is diff - once created it stays unless destroyed or cleaned up!
//this part if unclear is best understood thru video:
//https://youtu.be/4UZrsTqkcW4?t=19043
