import './App.css';
import Teams from "./Components/Teams";
import React, {useState, useEffect} from "react";

const App = () => {

  const [teams, setTeams] = useState(false);
  const [voted, setVoted] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch('api/teams')
        .then(response => response.json())
        .then(data => setTeams(data));
  }, []);

  function vote(playerId) {
    setVoted('...');
        fetch('api/vote', {
          method: 'POST',
          headers: { 'Content-Type' : 'application/json'},
          body: { 'id': playerId }
        })
          .then(response => response.json())
          .then(data => {
              if(data.success) setVoted(true);
          });
  }


  return (
    <div className="App">
      <h1>NBA Teams - all star voting</h1>
      <p>
        <input type="text" onChange={ (e) => setInput(e.target.value)} />
      </p>
      {teams && teams.map((team, i) =>
      <Teams key={i} team={team} voted={voted} vote={vote} input={input} /> )}
   

    </div>
  )
}

export default App
