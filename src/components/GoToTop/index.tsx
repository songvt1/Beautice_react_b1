import GoTOp from "../../assets/img/ToTopButton.png";
import "./goToTop.css";

function GoToTop() {
  const handleGoToTOp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="scroll-top" onClick={handleGoToTOp}>
      <img src={GoTOp} />
    </div>
  );
}

export default GoToTop;
