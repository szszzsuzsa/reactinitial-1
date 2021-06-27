import React from 'react'

function Player({player, voted, vote}) {
    return (
        <div>
           {player.name} - {voted === false ? <button onClick={ () => vote(player.id)}>Vote</button>
           : voted === "..." ? voted: "Voted"}
            
        </div>
    )
}

export default Player