import "./slide.css";
import Frame1 from "../../assets/img/Frame1.png";

function Slide() {
  return (
    <>
      <div className="main-slide">
        <div className="slide">
          <div className="content">
            <div className="title ">Clinic & beauty consultant</div>
            <p className="description">
              It is a long established fact that a reader will be by the
              readable content of a page.
            </p>
            <div className="btn-more">More Details</div>
          </div>
          <div className="image">
            <img src={Frame1} />
          </div>
        </div>
      </div>
      <div className="change-slide">
        <button className="btn-slide"></button>
        <button className="btn-slide-active"></button>
        <button className="btn-slide"></button>
      </div>
    </>
  );
}

export default Slide;
