import React from "react";

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
        {props.name}
      </span>

      <Counter />
    </div>
  );
}

const Counter = () => {
  const [score, setScore] = React.useState(0);

  const incrementScore = () => {
    setScore(prevScore => prevScore + 1);
  }

  const decrementScore = () => {
    setScore(prevScore => prevScore - 1);
  }

  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => decrementScore()}> - </button>
      <span className="counter-score">{score}</span>
      <button className="counter-action increment" onClick={() => incrementScore()}> + </button>
    </div>
  );

}

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
        <Player
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
