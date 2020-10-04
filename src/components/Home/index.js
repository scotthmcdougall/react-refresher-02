import React, {useState} from "react";
import { Link }from "react-router-dom";
import Authenticator from "../../Authenticator";
import AuthenticatorGreeting from "../../AuthenticatorGreeting";
import Array01 from "../../Array01";

export default function Home() {

  // Declare
  const [authenticated, setAuthenticated] = useState(true);
  const [permitted, setPermitted] = useState(true);

  // Return
  return (
    <>
      <h1>Home</h1>
      <h3>Link to <Link to="/">Root</Link></h3>
      <h3>Link to <Link to="/about">About</Link></h3>

      <br/><hr/><br/>

      <p>Authenticated: <input type="checkbox" checked={authenticated} onChange={onAuthenticatedChange}/></p>
      <p>Permitted: <input type="checkbox" checked={permitted} onChange={onPermittedChange}/></p>

      <br/><hr/><br/>

      <Authenticator isAuthenticated={authenticated} isPermitted={permitted}>
        <AuthenticatorGreeting />
      </Authenticator>

      <br/><hr/><br/>

      <Array01 />
    </>
  );

   // Methods
  function onAuthenticatedChange(e){
    setAuthenticated(e.target.checked);
  }

  function onPermittedChange(e){
    setPermitted(e.target.checked);
  }

};