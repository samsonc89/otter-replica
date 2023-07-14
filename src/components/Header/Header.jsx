import "./header.css";
import topLeft from "../../assets/topleft.jpg";
import bottomLeft from "../../assets/bottomLeft.jpg";
import bottomRight from "../../assets/bottomRight.jpg";

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
        <svg>
          <clipPath id="bottom-left" clipPathUnits="objectBoundingBox">
            <path d="M0.517,0 C0.58,0.003,0.64,0.02,0.694,0.049 C0.747,0.079,0.791,0.12,0.821,0.169 C0.868,0.245,1,0.955,0.955,0.996 C0.842,1,0.7,0.869,0.453,0.806 C0.218,0.747,0.032,0.737,0.003,0.628 C-0.025,0.519,0.134,0.188,0.202,0.126 C0.285,0.05,0.398,0.005,0.517,0"></path>
          </clipPath>
        </svg>
        <svg>
          <clipPath id="top-right" clipPathUnits="objectBoundingBox">
            <path d="M0.704,0.043 C0.64,0.017,0.448,-0.023,0.349,0.018 C0.245,0.062,0.117,0.317,0.072,0.418 C0.028,0.519,-0.027,0.818,0.016,0.897 C0.045,0.95,0.109,1,0.242,0.979 C0.411,0.898,0.976,0.458,0.999,0.381 C1,0.305,0.768,0.069,0.704,0.043"></path>
          </clipPath>
        </svg>
        <svg>
          <clipPath id="bottom-right" clipPathUnits="objectBoundingBox">
            <path d="M0.996,0.23 C1,0.296,0.946,0.473,0.861,0.648 C0.776,0.823,0.71,0.984,0.613,0.999 C0.519,1,0.337,0.862,0.218,0.735 C0.131,0.643,0.048,0.549,0.025,0.502 C-0.013,0.426,-0.006,0.312,0.038,0.257 C0.085,0.197,0.175,0.204,0.417,0.139 C0.602,0.089,0.668,-0.008,0.76,0 C0.837,0.007,0.975,0.164,0.996,0.23"></path>
          </clipPath>
        </svg>
      </div>

      <div className="hero-container">
        <div className="hero-column">
          <div className="hero-shape-top-left-container hero-shape-container">
            <div className="hero-shape hero-shape-top-left">
              <img src={topLeft} className="topLeft-image hero-shape-image" />
            </div>
          </div>
          <div className=" hero-shape-container  hero-shape-middle-left-container">
            <div className="hero-shape hero-shape-middle-left"></div>
          </div>
          <div className="hero-shape-container hero-shape-bottom-left-container">
            <div className="hero-shape-bottom-left hero-shape">
              <img
                src={bottomLeft}
                className="bottomLeft-image hero-shape-image"
              />
            </div>
          </div>
        </div>
        <div className="hero-column hero-column-right">
          <div className=" hero-shape-container  hero-shape-top-right-container">
            <div className="hero-shape hero-shape-top-right"></div>
          </div>
          <div className=" hero-shape-container  hero-shape-bottom-right-container">
            <div className="hero-shape hero-shape-bottom-right">
              {" "}
              <img
                src={bottomRight}
                className="bottomRight-image hero-shape-image"
              />
            </div>
          </div>
        </div>
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
