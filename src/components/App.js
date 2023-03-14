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
    setPlayers(prevPlayers => prevPlayers.filter(p => p.id !== id));
  }

  return (
    <div className="scoreboard">
      <Header
        title="Scoreboard"
        totalPlayers={players.length}
      />

      {/* Players list */}
      {players.map(player =>
        <Team
          name={player.name}
          id={player.id}
          key={player.id.toString()}
          removePlayer={handleRemovePlayer}
        />
      )}
    </div>
  );

}

export default App;
