/* eslint-disable react/prop-types */
import "./footer.css";

const Footer = () => {
  return (
    <footer className="main-section">
      <div className="footer-wrapper">
        <div className="footer-cta">
          <div className="footer-cta-shape"></div>
          <h2 className="footer-cta-heading">The bright side of petcare</h2>
          <p className="footer-cta-text">
            Get reliable on demand petcare from vetted sitters in your
            community.
          </p>
          <div className="btn btn-signup">Get Started</div>
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
            <div className="footer-right-shape"></div>
          </div>
          <div className="footer-row footer-row-bottom">
            <div className="footer-links-wrapper">
              <a href="">Terms of Use</a>
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
