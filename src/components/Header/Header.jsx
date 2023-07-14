import "./header.css";
import dog from "../../assets/dog1.jpg";

const Header = () => {
  return (
    <header className="header-wrapper container">
      <div className="clipPaths-container">
        <svg>
          <clipPath id="top-left" clipPathUnits="objectBoundingBox">
            <path
              id="thePath"
              d="M134.77421633680706 138.86093862718718C219.50475883762084 31.675307828847338 299.4448808062081 31.37591004238901 425.7921911903227 100.23818166917937C552.1395015744387 169.10045329596971 598.5466899899662 238.26212270921843 513.8161474891514 345.4477535075583C429.08560498833697 452.6333843058981 297.94787407199584 490.65734569098925 171.60056368788128 421.7950740641989C45.25325330376671 352.93280243740855 50.043673835993275 246.04656942552703 134.77421633680706 138.86093862718718C219.50475883762084 31.675307828847338 299.4448808062081 31.37591004238901 425.7921911903227 100.23818166917937 "
              transform="scale(0.0020694728502946573,0.0020694728502946573) matrix(0.6830375776401323,0.8323602463300699,-1.018961446480023,0.6151202951071995,265.0892015408703,-170.1428817603486)"
            ></path>
          </clipPath>
        </svg>
        <svg>
          <clipPath id="middle-left" clipPathUnits="objectBoundingBox">
            <path d="M0.924,0.106 C0.986,0.152,1,0.253,1,0.324 C1,0.395,0.824,0.999,0.622,1 C0.415,1,0.162,0.843,0.042,0.663 C-0.018,0.573,-0.001,0.324,0.018,0.252 C0.037,0.18,0.157,0.03,0.24,0.005 C0.33,-0.022,0.863,0.061,0.924,0.106"></path>
          </clipPath>
        </svg>
      </div>

      <div className="hero-container">
        <div className="hero-column">
          <div className="hero-shape-top-left-container hero-shape-container">
            <div className="hero-shape hero-shape-top-left">
              <img src={dog} className="dog-image" />
            </div>
          </div>
          <div className=" hero-shape-container  hero-shape-middle-left-container">
            <div className="hero-shape hero-shape-middle-left"></div>
          </div>
          <div className="hero-shape-container hero-shape-bottom-left-container">
            <div className="hero-shape-bottom-left hero-shape"></div>
          </div>
        </div>
        <div className="hero-column"></div>
      </div>
      <div className="hero-text">
        <h1 className="light-text">Reliable petcare on demand</h1>
        <p className="light-text main-text hero-p">
          Sitter matches pet-parents who need care with trusted sitters in their
          community, on-demand.
        </p>
      </div>
    </header>
  );
};

export default Header;
