import React from "react";


const Stats = (props) => {
    const totalPoints = props.teams.reduce((acc, cur) => acc + cur.score, 0)
    return (
        <table className="stats">
            <tbody>
                <tr>
                <td>Teams:</td>
                <td>{props.teams.length}</td>
                </tr>
                <tr>
                <td>Total Points:</td>
                <td>{totalPoints}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Stats;