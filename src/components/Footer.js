import logoFooter from "../assets/shared/desktop/logoFooter.svg";
import facebookIcon from "../assets/shared/desktop/facebook.svg";
import youTubeIcon from "../assets/shared/desktop/youtube.svg";
import twitterIcon from "../assets/shared/desktop/twitter.svg";
import pinterestIcon from "../assets/shared/desktop/pinterest.svg";
import instagramIcon from "../assets/shared/desktop/instagram.svg";
import arrow from "../assets/shared/desktop/arrow.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logoFooter} alt="proba" />
      </div>
      <div className="footer-links">
        <img src={facebookIcon} alt="proba" />
        <img src={youTubeIcon} alt="proba" />
        <img src={twitterIcon} alt="proba" />
        <img src={pinterestIcon} alt="proba" />
        <img src={instagramIcon} alt="proba" />
      </div>
      <div className="footer-social">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/stories">Stories</Link>
          </li>
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
        </ul>
      </div>
      <div className="footer-invite">
        <button>
          Get an invite
          <img src={arrow} alt="proba" />
        </button>
      </div>
      <div className="footer-copyright">
        Copyright <span>{new Date().getFullYear()}</span>. All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
