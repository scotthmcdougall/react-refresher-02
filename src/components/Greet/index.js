import React from "react";
import {useParams} from "react-router-dom"

export default function Greet(){

  const params = useParams();

  console.log(params);

  return (
    <>
      <h1>Greetings {params.name} ({params.age})</h1>
    </>
  );
}