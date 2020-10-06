import React, { useContext, useState } from "react";

const MyContext = React.createContext();

// Child function to pass context state to
function PersonName(props) {

  const person = useContext(MyContext);
  return <h2>ChildComponent1 : {person.name}</h2>
}

// Child function to pass context state to
function PersonAge() {

  const state = useContext(MyContext);
  return <h2>ChildComponent2 : {state.age}</h2>
}


// Main componet
export default function ContextAPIState() {

  const [person, setPerson] = useState({name: 'Scott', age: 21});

  return (
    <MyContext.Provider value={person}>

      <div>
        <h1>Context API State (console output...)</h1>
      </div>
      
      <div>
        <PersonName />
        <PersonAge />
      </div>

      <div>
        <button onClick={() => onUpdatePerson({name: 'Dave', age: 34})}>Set Name to Dave</button>
      </div>
    
    </MyContext.Provider>
  );

  function onUpdatePerson(newPerson) {
    setPerson(newPerson);
  }

}