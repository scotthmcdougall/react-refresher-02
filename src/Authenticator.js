import React from "react";
import "./styles.css";

function AuthMessage(props) {

  return (
    <div>{props.text}</div>
  )
}

export default function Authenticator(props) {

  console.log(props);
  console.log(props.children);

  const isAuthenticated = props.isAuthenticated;
  const isPermitted = props.isPermitted;

  return (
    <div className="App">
     {isAuthenticated && isPermitted ? <AuthMessage text="Access Granted" /> : <AuthMessage text="Access Denied" />}
     {props.children}
    </div>
  );
}
