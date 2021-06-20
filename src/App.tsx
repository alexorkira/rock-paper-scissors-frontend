import React from "react";
import "./App.css";
import WeaponButton from "./components/weapon/weaponButton";
import WeaponEnum from "./components/weapon/weapon.enum";

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function App(): React.ReactElement {
  return (
    <div className="App">
      <h1>
        {Object.values(WeaponEnum).map((weaponName) => {
          return `${capitalizeFirstLetter(weaponName)} `;
        })}
      </h1>
      <div className="weaponPack">
        {Object.values(WeaponEnum).map((weaponName) => {
          return <WeaponButton key={weaponName} weaponName={weaponName} />;
        })}
      </div>
    </div>
  );
}

export default App;
