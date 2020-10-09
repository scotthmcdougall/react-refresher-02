import React, { useState }from "react";
import Header from "./header";
import Movies from "./movies";

export default function MaterialUI() {

  const [searchTerm, setSearchTerm] = useState("Bond");

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Movies searchTerm={searchTerm} />
    </>    
  );


}
