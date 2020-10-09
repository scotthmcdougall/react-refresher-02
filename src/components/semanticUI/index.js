import React, { useState } from "react";
import { Image, Menu, Button } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"

export default function SemanticUI() {

  const [activeItem, setActiveItem] = useState("home")
  return (
    <>
      <h1>Semantic UI</h1>

      <Menu pointing>
        <Image src="https://react.semantic-ui.com/logo.png" size='mini' spaced="left"/>
        <Menu.Item 
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
        >
          Home
        </Menu.Item>
        <Menu.Item 
          name="accounts"
          active={activeItem === "accounts"}
          onClick={handleItemClick}
        >
          Accounts
        </Menu.Item>
        <Menu.Item 
          name="logout"
          position="right"
          //active={activeItem === "logout"}
          onClick={handleItemClick}
        >
          Log Out
        </Menu.Item>
      </Menu>

      <Button primary loading={false}>Primary</Button>
      <Button secondary>Secondary</Button>

    </>
  );

  function handleItemClick(e, {name}){

    switch(name) {
      case 'logout':
        alert('Log Out...');
        break;

      default:
        setActiveItem(name);
    }
  }
  
}