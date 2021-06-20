import React from "react";
import "./App.css";
import WeaponButton from "./components/weapon/weaponButton";
import WeaponEnum from "./components/weapon/weapon.enum";

function App(): React.ReactElement {
  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>
      <div className="weaponPack">
        {Object.values(WeaponEnum).map((weaponName) => {
          return <WeaponButton key={weaponName} weaponName={weaponName} />;
        })}
      </div>
    </div>
  );
}

export default App;
