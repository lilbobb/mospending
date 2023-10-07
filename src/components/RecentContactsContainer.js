import { memo } from "react";
import "./RecentContactsContainer.css";

const RecentContactsContainer = memo(() => {
  return (
    <div className="contacts-pannel">
      <div className="recipients">18 recipients</div>
      <div className="card">
        <div className="card-child" />
        <div className="card-item" />
        <div className="group-party">
          <span>Group</span>
          <span className="span">{` `}</span>
          <span className="party">Party</span>
        </div>
        <img className="card-inner" alt="" src="/ellipse-364@2x.png" />
        <img className="card-child1" alt="" src="/group-912.svg" />
        <div className="ellipse-parent1">
          <div className="group-child31" />
          <div className="div31">+5</div>
        </div>
        <img className="card-child2" alt="" src="/group-875.svg" />
        <img className="vector-icon19" alt="" src="/vector1.svg" />
        <div className="dakota-milk-parent">
          <div className="dakota-milk">Dakota Milk</div>
          <div className="div32">$ 420.00</div>
        </div>
      </div>
      <div className="users">
        <img className="users-child" alt="" src="/ellipse-357@2x.png" />
        <img className="users-item" alt="" src="/ellipse-358@2x.png" />
        <img className="users-inner" alt="" src="/ellipse-359@2x.png" />
        <img className="users-child1" alt="" src="/ellipse-360@2x.png" />
        <div className="ellipse-parent2">
          <div className="group-child32" />
          <div className="ds">DS</div>
        </div>
        <img className="vector-icon20" alt="" src="/vector2.svg" />
        <div className="users-child2" />
      </div>
      <div className="top">
        <div className="dakota-milk">Recent Contacts</div>
        <img className="search-icon" alt="" src="/search.svg" />
        <img className="edit-ic-icon" alt="" src="/edit-ic.svg" />
      </div>
    </div>
  );
});

export default RecentContactsContainer;
