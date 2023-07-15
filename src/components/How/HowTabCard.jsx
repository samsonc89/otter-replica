const TabCard = () => {
  return (
    <div className="how-tab-content-wrapper active-tab">
      <div className="how--tab-image-wrapper">
        <img src={tab3} className="tab-image" />
      </div>
      <div className="how-tab-text-wrapper">
        <p>
          We like to keep it simple. Tell us your name, contact information, and
          a little bit about you and your kids. Just like that, you're all set.
        </p>
      </div>
    </div>
  );
};

export default TabCard;
