import React from "react";
import Header from "./Header";
import Team from "./Team";


const App = () => {
  const [players, setPlayers] = React.useState([
    {
      name: "Sydney Roosters",
      score: 0,
      id: 1
    },
    {
      name: "Brisbane Broncos",
      score: 0,
      id: 2
    },
    {
      name: "Parramatta Eels",
      score: 0,
      id: 3
    },
    {
      name: "Melbourne Storm",
      score: 0,
      id: 4
    }
  ]);

  const handleRemovePlayer = (id) => {
    setPlayers(prevPlayers => prevPlayers.filter(element => element.id !== id));
    //we include the state variable through prevPlayer, so that we can filter through each element of the array --> (object),
    //in the callback function of the filter method we pass the object/element through 'element' and target the 'id' property.
    //This is how we change the state, by creating a new array of elements.
  }

  const handleChangeScore = (id, delta) => {                //takes in the id of the team and the delta the score should change by, then we call the SetPlayers function,
    setPlayers(prevPlayer => prevPlayer.map(element => {    //which takes in the PrevPlayer and maps through the array. 
      if(element.id === id) {                               //If the element(player) id matches the id in the parameter,
        return {                                            //we'll return to map a new player object with:  
          name: element.name,                               //the same player name
          score: element.score+delta,                       //the score changing by delta
          id: id                                            //and with the same player id.
        };
      } else {                                              //If the player's id doesnt match the parameters id, 
        return element;                                     //then we just return the player object.
      }
    }));
  }
  

  return (
    <div className="scoreboard">
      <Header
        title="Scoreboard"
        totalPlayers={players.length}
      />

      {/* Players list */}
      {players.map(element =>
        <Team
          name={element.name}
          score={element.score}
          id={element.id}
          key={element.id.toString()}
          removePlayer={handleRemovePlayer} /*This is how we call handleRemovePlayer which changes the state*/
          changeScore={handleChangeScore} /*This passes down data from App down to Counter were the function will be called through the onclick event */
        />
      )}
    </div>
  );

}

export default App;
