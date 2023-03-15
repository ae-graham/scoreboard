import React from "react";
import Stats from "./Stats";

const Header = (props) => {
    return (
      <header>
      <Stats teams={props.teams}/>
        <h1>{props.title}</h1>
      </header>
    );
}

export default Header;