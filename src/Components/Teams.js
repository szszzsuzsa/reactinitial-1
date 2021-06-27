import React, {useState} from 'react';
import Player from "./Player"

function Teams({team, voted, vote, input}) {
   
    const [show, setShow] = useState(false);
   
    return (
        <div className="Team">
            <p>{team.name}</p>
            <p>{team.stadium}</p>
            <button onClick={ () => setShow(!show)}>
                {show ? "Show less" : "Show more"}
            </button>

        {show && team.franchisePlayers.filter(player => player.name.includes(input)).map((player, i) =>
        <Player key={i} player={player} voted={voted} vote={vote}/> )}

        </div>
    )
}

export default Teams;