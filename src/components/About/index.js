import React from "react";
import { Link } from "react-router-dom";

export default function About(){
  return (
    <>
      <h1>About</h1>
      <h3>Link to <Link to="/">Root</Link></h3>
      <h3>Link to <Link to="/home">Home</Link></h3>
    </>
  )
};
