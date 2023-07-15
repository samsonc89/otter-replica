/* eslint-disable react/prop-types */
const TabCard = ({ props }) => {
  return (
    <div className="how-tab-content-wrapper active-tab">
      <div className="how--tab-image-wrapper">
        <img src={props.img} className="tab-image" />
      </div>
      <div className="how-tab-text-wrapper">
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default TabCard;
