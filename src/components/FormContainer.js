import { memo } from "react";
import "./FormContainer.css";

const FormContainer = memo(() => {
  return (
    <div className="send-money-list">
      <div className="button">
        <div className="button-child" />
        <div className="send-money">Send Money</div>
      </div>
      <div className="cards">
        <div className="div24">
          <div className="child" />
          <div className="group-parent11">
            <img className="group-child28" alt="" src="/group-897.svg" />
            <div className="debit1">Debit</div>
            <div className="parent6">
              <div className="div25">$</div>
              <div className="div26">10.680</div>
            </div>
            <img className="vector-icon18" alt="" src="/vector.svg" />
          </div>
        </div>
        <div className="div27">
          <div className="item" />
          <div className="ellipse-container">
            <img className="ellipse-icon" alt="" src="/ellipse-351@2x.png" />
            <div className="enter-the-amount">Enter the amount</div>
            <div className="parent7">
              <div className="div25">$</div>
              <div className="div29">800.00</div>
            </div>
            <div className="group-child29" />
            <img className="group-child30" alt="" src="/group-903.svg" />
          </div>
        </div>
        <div className="div30">
          <img className="inner" alt="" src="/ellipse-355@2x.png" />
          <div className="astrid-hayes">Astrid Hayes</div>
          <img className="child1" alt="" src="/group-906.svg" />
        </div>
      </div>
      <div className="tittle">Send Money</div>
    </div>
  );
});

export default FormContainer;
