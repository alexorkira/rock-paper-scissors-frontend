import React from "react";
import "./matchResultPopup.css";
import MatchResult, { MatchResultInfo } from "./MatchResult";

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

// const PopUp = ({ idMessage }) => {
//   // create state `open` with default as false
//   const [open, setOpen] = useState(false);
//   return (
//     <>
//       {/* click of button toggles `open` value therefore visibility */}
//       <button
//         onClick={() => setOpen(!open)}
//         type="button"
//         className="btn btn-primary"
//         data-toggle="modal"
//         data-target={`#${idMessage}`}
//       >
//         {idMessage}
//       </button>
//       {/* If open is true show your <div /> */}
//       {open && (
//         <div
//           className="modal fade"
//           id={idMessage}
//           tabIndex="-1"
//           role="dialog"
//           aria-labelledby="exampleModalLabel"
//           aria-hidden="true"
//         >
//           content
//         </div>
//       )}
//     </>
//   );
// };

export default MatchResultPopup;
