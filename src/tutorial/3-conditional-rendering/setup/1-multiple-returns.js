import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setisError] = useState(false);
  const [user, setUser] = useState("Default user");

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setisError(true);
          throw new Error(resp.statusText);
        } //check status here
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => {
        //actually fetch errors are just network errors, not like 404 - data not found
        console.log(error);
      });
  }, []); //just initial render
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }
  const buttonClick = (user) => {
    console.log(`User is ${user}`);
  };
  const ref = buttonClick;
  return (
    <div>
      <h1>{user}</h1>
      <button className="btn" onClick={(x) => ref(x)}>
        Click me
      </button>
    </div>
  );
};

export default MultipleReturns;
