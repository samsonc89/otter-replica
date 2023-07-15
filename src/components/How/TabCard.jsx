/* eslint-disable react/prop-types */
import "./tabCard.css";

const TabCard = ({ props, extraClass }) => {
  return (
    <div className={`how-tab-content-wrapper ${extraClass}`}>
      <div className="how-tab-image-wrapper">
        <img src={props.img} className="tab-image" />
      </div>
      <div className="how-tab-text-wrapper">
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default TabCard;
