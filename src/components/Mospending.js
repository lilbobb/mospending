import { memo } from "react";
import NoiseIcon from "./NoiseIcon";
import "./Mospending.css";

const Mospending1 = memo(({ mospending11, showMospending11 }) => {
  return (
    <div className="mospending2">
      <div className="frame">
        {showMospending11 && (
          <img className="mospending-1-1" alt="" src={mospending11} />
        )}
      </div>
      <div className="frame1">
        <img className="mospending-1-2" alt="" src="/mospending-1-2@2x.png" />
        <NoiseIcon />
      </div>
    </div>
  );
});

export default Mospending1;
