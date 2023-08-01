/* eslint-disable react/prop-types */
import "./footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="main-section">
      <div className="clipPaths-container">
        <svg>
          <clipPath id="footer-shape-left" clipPathUnits="objectBoundingBox">
            <path d="M0.955,0.125 C0.926,0.069,0.871,-0.001,0.794,0 C0.718,0.001,0.182,0.255,0.108,0.331 C0.041,0.4,-0.01,0.589,0.002,0.657 C0.014,0.725,0.101,0.929,0.195,0.964 C0.383,1,0.685,1,0.88,0.879 C1,0.758,0.985,0.18,0.955,0.125"></path>
          </clipPath>
        </svg>
        <svg>
          <clipPath id="footer-shape-right" clipPathUnits="objectBoundingBox">
            <path d="M0,0.676 C0,0.747,0.014,0.848,0.076,0.894 C0.129,0.933,0.533,1,0.701,1 C0.701,1,0.701,1,0.701,1 C0.728,1,0.748,0.998,0.76,0.995 C0.843,0.97,0.963,0.82,0.982,0.748 C0.991,0.714,1,0.639,1,0.561 C1,0.561,1,0.561,1,0.56 C1,0.474,0.99,0.384,0.958,0.337 C0.838,0.157,0.585,0,0.378,0 C0.176,0.001,0,0.605,0,0.676"></path>
          </clipPath>
        </svg>
      </div>
      <div className="footer-wrapper">
        <div className="footer-cta">
          <div className="footer-cta-shape"></div>
          <div className="footer-cta-content">
            <h2 className="footer-cta-heading">The bright side of petcare</h2>
            <p className="footer-cta-text">
              Get reliable on demand petcare from vetted sitters in your
              community.
            </p>
            <button className="footer-btn btn btn-signup">Get Started</button>
          </div>
        </div>
        <div className="footer-right-wrapper">
          <div className="footer-row">
            <div className="footer-links-wrapper">
              <div className="footer-links">
                <a href="">Parents</a>
                <a href="">Sitters</a>
                <a href="">Trust & Safety</a>
              </div>
              <div className="footer-links">
                <a href="">FAQ</a>
                <a href="">Careers</a>
                <a href="">Blog</a>
                <a href="">Contact</a>
              </div>
              <div className="footer-links">
                <a href="">Instagram</a>
                <a href="">Facebook</a>
                <a href="">Twitter</a>
                <a href="">Linkedin</a>
              </div>
            </div>
            <div className="footer-right-shape-container">
              <div className="footer-right-shape"></div>
              <div className="footer-logo">
                <img src={logo} alt="" />
              </div>
            </div>
          </div>
          <div className="footer-row footer-row-bottom">
            <div className="footer-links-wrapper footer-links-bottom">
              <a href="">Terms of Use</a>
              <div className="footer-dot"></div>
              <a href="">Privacy Policy</a>
            </div>
            <p>© 2023 Sitter Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
