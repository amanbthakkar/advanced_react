import React from "react";
import { data } from "../../../data";
//can look at file for the example array
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data); //data array, can import inline also
  const [action, setAction] = React.useState("Delete");
  const deletePeople = () => {
    if (people.length > 0) {
      setPeople([]);
      setAction("Get Back");
    } else {
      setPeople(data);
      setAction("Delete");
    }
  };
  const removeItem = (id) => {
    //filter out the matching id;
    let newPeople = people.filter((person) => person.id != id);
    setPeople(newPeople);
    if (newPeople.length > 0) setAction("Delete");
    else setAction("Get Back");
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={deletePeople}>
        {action} People
      </button>
    </>
  );
};

export default UseStateArray;
