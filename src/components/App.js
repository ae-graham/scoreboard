import React from "react";
import Header from "./Header";
import Team from "./Team";
import Counter from "./Counter";


const App = () => {
  const [players, setPlayers] = React.useState([
    {
      name: "Sydney Roosters",
      id: 1
    },
    {
      name: "Brisbane Broncos",
      id: 2
    },
    {
      name: "Parramatta Eels",
      id: 3
    },
    {
      name: "Melbourne Storm",
      id: 4
    }
  ]);

  const handleRemovePlayer = (id) => {
    setPlayers(prevPlayers => prevPlayers.filter(element => element.id !== id));
    {/*we include the state variable through prevPlayer, so that we can filter through each element of the array --> (object),
    in the callback function of the filter method we pass the object/element through 'element' and target the 'id' property.
    This is how we change the state, by creating a new array of elements.*/} 
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
          id={element.id}
          key={element.id.toString()}
          removePlayer={handleRemovePlayer} /*This is how we call handleRemovePlayer which changes the state*/
        />
      )}
    </div>
  );

}

export default App;
