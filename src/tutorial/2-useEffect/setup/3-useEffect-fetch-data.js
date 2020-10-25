import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    // console.log(users);
  };
  useEffect(() => {
    //we want a fetch request
    //useEffect cannot be an async function!!
    //async functions return a promise and that is not allowed here
    //so set up async Inside the callback, or as a separate function Outside
    getUsers();
  }, []); //add dependency array to prevent rerender on useState() - infinite loop avoiding
  return (
    <>
      <h1>Github users</h1>
      <ul className="users">
        {users.map((user) => {
          //add a key whenever you map over array!
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login}></img>
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
