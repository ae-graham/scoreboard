import React from "react";
import Header from "./Header";
import Team from "./Team";


const App = () => {
  const [teams, setTeams] = React.useState([
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

  const handleRemoveTeam = (id) => {
    setTeams(prevTeams => prevTeams.filter(element => element.id !== id));
    //we include the state variable through prevTeams, so that we can filter through each element of the array --> (object),
    //in the callback function of the filter method we pass the object/element through 'element' and target the 'id' property.
    //This is how we change the state, by creating a new array of elements.
  }

  const handleChangeScore = (id, delta) => {                //takes in the id of the team and the delta the score should change by,
    setTeams(prevTeam => prevTeam.map(element => {          //then we call the SetTeams function, which takes in the prevTeam and maps through the array. 
      if(element.id === id) {                               //If the element(team) id matches the id in the parameter,
        return {                                            //we'll return to map a new team object with:  
          name: element.name,                               //the same team name
          score: element.score+delta,                       //the score changing by delta
          id: id                                            //and with the same team id.
        };
      } else {                                              //If the team's id doesnt match the parameters id, 
        return element;                                     //then we just return the team object.
      }
    }));
  }
  

  return (
    <div className="scoreboard">
      <Header
        title="Scoreboard"
        totalTeams={teams.length}
      />

      {/* Players list */}
      {teams.map(element =>
        <Team
          name={element.name}
          score={element.score}
          id={element.id}
          key={element.id.toString()}
          removeTeam={handleRemoveTeam} /*This is how we call handleRemoveTeam which changes the state*/
          changeScore={handleChangeScore} /*This passes down data from App down to Counter were the function will be called through the onclick event */
        />
      )}
    </div>
  );

}

export default App;
