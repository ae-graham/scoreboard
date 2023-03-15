import React from "react";

const Counter = (props) => {
  const id = props.id; //we must create a variable 'const id' to assign it the actual id of each team passed down through props. 
  //Then we can pass this as a parameter on the onclick event, were it will then be passed up again to the parent App component and used to update the state change.
  
  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => props.changeScore(id, -1)}> - </button> {/*We must not forget the '()'
      at the end of the function we are calling through props.*/}
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment" onClick={() => props.changeScore(id, 1)}> + </button>
    </div>
  );
  
}

export default Counter;
