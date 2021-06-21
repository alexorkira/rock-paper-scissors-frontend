import React from "react";
import "./matchResultPopup.css";
import MatchResult, { MatchResultInfo } from "./matchResult";

export type MatchResultPopupProps = {
  open: boolean;
  matchResult: MatchResultInfo;
  onClose: () => void;
};

const MatchResultPopup: React.FC<MatchResultPopupProps> = ({
  open,
  matchResult,
  onClose,
}) => {
  const { firstWeapon, secondWeapon, result, winner } = matchResult;

  const headerClasses = `header ${winner}`;
  return (
    <div className="popup">
      <div className="popup-inner">
        <button type="button" className="close-btn" onClick={onClose}>
          close
        </button>
        <div className={headerClasses}>
          <h3>{result}</h3>
        </div>
        <MatchResult firstWeapon={firstWeapon} secondWeapon={secondWeapon} />
      </div>
    </div>
  );
};

export default MatchResultPopup;
