import { memo } from "react";
import "./MoneyFlowFormContainer.css";

const MoneyFlowFormContainer = memo(() => {
  return (
    <div className="chart">
      <div className="chart1">
        <img className="line-icon" alt="" src="/line.svg" />
        <div className="button1">
          <img className="union-icon" alt="" src="/union.svg" />
          <div className="income">Income</div>
          <div className="div39">$ 2.600</div>
          <div className="rectangle-parent12">
            <div className="group-child38" />
            <img className="vector-icon21" alt="" src="/vector3.svg" />
          </div>
        </div>
        <div className="month">
          <div className="week">
            <span>{`DEC `}</span>
            <span className="span1">2</span>
          </div>
          <div className="dec-3">
            <span>{`DEC `}</span>
            <span className="span2">3</span>
          </div>
          <div className="dec-4">
            <span>{`DEC `}</span>
            <span className="span3">4</span>
          </div>
          <div className="dec-6">
            <span>{`DEC `}</span>
            <span className="span3">6</span>
          </div>
          <div className="dec-7">
            <span>{`DEC `}</span>
            <span className="span3">7</span>
          </div>
          <div className="dec-8">
            <span>{`DEC `}</span>
            <span className="span6">8</span>
          </div>
          <div className="dec-5">DEC 5</div>
        </div>
        <div className="counter">
          <div className="k7">4k</div>
          <div className="k8">3k</div>
          <div className="k9">2k</div>
          <div className="k10">1k</div>
          <div className="k11">0k</div>
          <div className="counter-child" />
        </div>
        <div className="user">
          <div className="ellipse-parent4">
            <div className="group-child39" />
            <img className="group-child40" alt="" src="/ellipse-348@2x.png" />
            <div className="group-child41" />
            <div className="ellipse-parent5">
              <div className="group-child42" />
              <div className="tr">TR</div>
            </div>
          </div>
        </div>
        <img className="chart-icon" alt="" src="/chart.svg" />
      </div>
      <div className="nav-bar">
        <div className="savings">Savings</div>
        <div className="div40">+6,79%</div>
        <img className="nav-bar-child" alt="" src="/group-886.svg" />
        <img className="group-icon14" alt="" src="/group1.svg" />
        <div className="rectangle-parent13">
          <div className="group-child43" />
          <div className="week-parent">
            <div className="week">Week</div>
            <img className="vector-icon22" alt="" src="/vector4.svg" />
          </div>
        </div>
      </div>
      <div className="top1">
        <div className="week">Money Flow</div>
        <img className="group-icon15" alt="" src="/group2.svg" />
        <div className="rectangle-parent14">
          <div className="group-child44" />
          <div className="rectangle-parent15">
            <div className="group-child45" />
            <div className="group-child46" />
            <div className="group-child47" />
          </div>
        </div>
      </div>
    </div>
  );
});

export default MoneyFlowFormContainer;
