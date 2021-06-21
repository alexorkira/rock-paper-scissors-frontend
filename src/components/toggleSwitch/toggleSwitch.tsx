import React from "react";
import "./toggleSwitch/toggleSwitch.scss";

const ToggleSwitch: React.FC = () => {
  // const { selected, toggleSelected } = this.props;
  const selected = true;

  return (
    <div className="toggle-container">
      <div className={`dialog-button ${selected ? "" : "disabled"}`}>
        {selected ? "YES" : "NO"}
      </div>
    </div>
  );

  // return (
  //   <div className="toggle-switch">
  //     <input
  //       type="checkbox"
  //       className="toggle-switch-checkbox"
  //       name="toggleSwitch"
  //       id="toggleSwitch"
  //     />
  //     {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
  //     <label className="toggle-switch-label" htmlFor="toggleSwitch">
  //       <span className="toggle-switch-inner" />
  //       <span className="toggle-switch-switch" />
  //     </label>
  //   </div>
  // );
};

export default ToggleSwitch;
