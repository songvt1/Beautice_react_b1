import FooterLogo from "../../assets/img/FooterLogo.png";
import Vector from "../../assets/img/Vector.png";

import FacebookFT from "../../assets/img/facebookbt.png";
import TwitterFT from "../../assets/img/twitterbt.png";
import InLinkFT from "../../assets/img/inlinkbt.png";
import YoutubeFT from "../../assets/img/youtobebt.png";
import InstagramFT from "../../assets/img/instagrambt.png";

import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="container-footer">
          <div className="detail">
            <div className="footer-logo">
              <img src={FooterLogo} />
            </div>
            <div className="title">
              <strong>Beautice </strong>is a Beauty Clinic WordPress Theme.
            </div>
            <div className="address">Baker Steet 101, NY, United States.</div>
            <div className="phone-email">
              <div className="phone-number">+521 569 8966.</div>
              <div className="email">mail@company.com.</div>
            </div>
          </div>
          <div className="pages">
            <div className="title">Pages</div>
            <div className="footer-page-information">
              <img src={Vector} /> Home
            </div>
            <div className="footer-page-information">
              <img src={Vector} /> About
            </div>
            <div className="footer-page-information">
              <img src={Vector} /> Services
            </div>
            <div className="footer-page-information">
              <img src={Vector} /> Gallery
            </div>
            <div className="footer-page-information">
              <img src={Vector} /> Team
            </div>
          </div>
          <div className="information">
            <div className="title">Informations</div>
            <div className="footer-page-information">
              <img src={Vector} /> Terms & conditions
            </div>
            <div className="footer-page-information">
              <img src={Vector} /> Privacy policy
            </div>
            <div className="footer-page-information">
              <img src={Vector} /> Blog
            </div>
            <div className="footer-page-information">
              <img src={Vector} /> Contact
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="social-footer">
          <img className="social" src={FacebookFT} />
          <img className="social" src={TwitterFT} />
          <img className="social" src={InLinkFT} />
          <img className="social" src={YoutubeFT} />
          <img className="social" src={InstagramFT} />
        </div>
        <div className="copy-right">
          © AltDesain Studio 2021 - All right reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
