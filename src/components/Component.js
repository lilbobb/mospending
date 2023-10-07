import { memo, useMemo } from "react";
import "./Component.css";

const Component = memo(
  ({
    prop,
    divBorderRadius,
    divWidth,
    divHeight,
    divPosition,
    iconBorderRadius,
  }) => {
    const divStyle = useMemo(() => {
      return {
        borderRadius: divBorderRadius,
        width: divWidth,
        height: divHeight,
        position: divPosition,
      };
    }, [divBorderRadius, divWidth, divHeight, divPosition]);

    const iconStyle = useMemo(() => {
      return {
        borderRadius: iconBorderRadius,
      };
    }, [iconBorderRadius]);

    return (
      <div className="div21" style={divStyle}>
        <img className="icon6" alt="" src={prop} style={iconStyle} />
      </div>
    );
  }
);

export default Component;
