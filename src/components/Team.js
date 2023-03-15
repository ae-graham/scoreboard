import React from "react";
import Counter from "./Counter";

const Team = (props) => {
  //I could have also created a const id = props.id like I did in Counter component, 
  //to then pass the variable as a parameter in the onclick event.
  
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
        {props.name}
      </span>

      <Counter score={props.score} changeScore={props.changeScore} id={props.id}/>
    </div>
  );
}

export default Team;
