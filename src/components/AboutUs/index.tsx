import "./aboutUs.css";
import PlayBtn from "../../assets/img/Play_button.png";

function AboutUs() {
  return (
    <div className="about-us-container ">
      <div className="content">
        <p className="about-us">About Us</p>
        <div className="title">We are the best beauty clinic</div>
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
            suscipit purus donec amet. Egestas volutpat facilisi eu libero.
            Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
            suspendisse placerat.
          </p>
          <p>
            Id dui erat sed quam tellus in purus. Pellentesque congue fringilla
            cras tellus enim..
          </p>
        </div>
        <div className="btn">
          <div className="btn-learn">Learn More</div>
          <div className="btn-play ">
            <img src={PlayBtn} />
            Watch Video
          </div>
        </div>
      </div>
      <div className="image"></div>
    </div>
  );
}

export default AboutUs;
