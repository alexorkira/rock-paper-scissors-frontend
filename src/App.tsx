import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>
      {/* eslint-disable-next-line react/button-has-type */}
      <button
        onClick={() => {
          console.log("Your choice: rock");
        }}
      >
        <img style={{ width: "100%" }} src="/img/weapon/rock.png" alt="ROCK" />
      </button>
      {/* eslint-disable-next-line react/button-has-type */}
      <button
        onClick={() => {
          console.log("Your choice: paper");
        }}
      >
        <img
          style={{ width: "100%" }}
          src="/img/weapon/paper.png"
          alt="PAPER"
        />
      </button>
      {/* eslint-disable-next-line react/button-has-type */}
      <button
        onClick={() => {
          console.log("Your choice: scissors");
        }}
      >
        <img
          style={{ width: "100%" }}
          src="/img/weapon/scissors.png"
          alt="SCISSORS"
        />
      </button>
    </div>
  );
}

export default App;
