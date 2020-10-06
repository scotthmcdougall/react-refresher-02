import React, { useEffect } from "react";

export default function ContextAPIState() {

  // Using basic JS localstorage
  useEffect(() => {
    
    let myToken = 123;
    console.log(myToken);

    localStorage.setItem("token", myToken);
    myToken = localStorage.getItem("token");
    console.log(myToken);

    localStorage.setItem("token", 456);
    myToken = localStorage.getItem("token");
    console.log(myToken);

  });

  return (
    <div>
      <h1>Local Storage (console output)</h1>
    </div>
  );
}