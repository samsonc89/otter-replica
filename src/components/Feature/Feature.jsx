import "./feature.css";
import forbes from "../../assets/forbes.svg";
import NYT from "../../assets/NYT.svg";
import mom from "../../assets/mom.svg";
import parents from "../../assets/parents.svg";

const Feature = () => {
  return (
    <section className="main-section featured-section">
      <div className="featured-content">
        <p className="small-heading">As featured in</p>
        <div className="companies-wrapper">
          <div className="company">
            <img src={forbes} />
          </div>
          <div className="company">
            <img src={parents} />
          </div>
          <div className="company">
            <img src={NYT} />
          </div>
          <div className="company">
            <img src={mom} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
