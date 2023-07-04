import LogoTwitter from "../../../assets/img/Twitter.png";
import LogoFacebook from "../../../assets/img/Facebook.png";
import LogoInstagram from "../../../assets/img/Instagram.png";

import "./bannerProfessional.css";

function BannerProfessional({
  image,
  name,
  position,
  description,
}: {
  image: string;
  position: string;
  name: string;
  description: string;
}) {
  return (
    <div className="banner-professional">
      <img className="image-avatar" src={image} />
      <div className="position ">{position}</div>
      <div className="name">{name}</div>
      <div className="description">{description}</div>
      <div className="social">
        <div className="twitter">
          <img className="image" src={LogoTwitter} />
        </div>
        <div className="facebook">
          <img className="image" src={LogoFacebook} />
        </div>
        <div className="instagram">
          <img className="image" src={LogoInstagram} />
        </div>
      </div>
    </div>
  );
}

export default BannerProfessional;
