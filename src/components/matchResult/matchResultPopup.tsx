import React from "react";
import "./matchResultPopup.css";
import MatchResult, { MatchResultInfo } from "./matchResult";

export type MatchResultPopupProps = {
  id?: string;
  content: string | React.ReactNode;
  open: boolean;
  matchResult: MatchResultInfo;
  onClose: () => void;
};

const MatchResultPopup: React.FC<MatchResultPopupProps> = ({
  content,
  open,
  matchResult,
  onClose,
}) => {
  const { firstWeapon, secondWeapon, result } = matchResult;

  return (
    <div className="popup">
      <div className="popup-inner">
        <button type="button" className="close-btn" onClick={onClose}>
          close
        </button>
        <div className="header">
          <h3>{result}</h3>
        </div>
        <MatchResult firstWeapon={firstWeapon} secondWeapon={secondWeapon} />
      </div>
    </div>
  );
};

export default MatchResultPopup;
