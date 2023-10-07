import { memo, useMemo } from "react";
import "./ContainerForm.css";

const ContainerForm = memo(({ dimensionCode, propTop, propLeft }) => {
  const frameDivStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className="frame-wrapper1" style={frameDivStyle}>
      <div className="ellipse-parent7">
        <img className="frame-child6" alt="" src={dimensionCode} />
        <div className="frame-parent9">
          <div className="wrapper">
            <div className="div42">$28,900</div>
          </div>
          <div className="received-from-michael">Received from Michael V</div>
        </div>
      </div>
    </div>
  );
});

export default ContainerForm;
