import React from "react";
import "./toggleSwitch.css";

type ToggleSwitchProps = {
  selected: boolean;
  toggleSelected: () => void;
};

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  selected,
  toggleSelected,
}) => {
  return (
    <div>
      <p className="game-mode">Game Mode</p>
      <div
        tabIndex={0}
        role="button"
        className="toggle-container"
        onClick={toggleSelected}
        onKeyDown={toggleSelected}
      >
        <div className={`dialog-button ${selected ? "" : "disabled"}`}>
          {selected ? "P1" : "PC only"}
        </div>
      </div>{" "}
    </div>
  );
};

export default ToggleSwitch;
