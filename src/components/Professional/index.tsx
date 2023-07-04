import "./professional.css";
import BannerProfessional from "../Container/BannerProfessional";

import professionalData from "../../assets/data/professional";

function Professional() {
  return (
    <div className="professional-container">
      <div className="professional">
        <p className="title">Professional Teams</p>
        <div className="content">The Professional expert</div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </div>
      </div>
      <div className="professional-banner">
        {professionalData.map((item, index) => (
          <BannerProfessional
            key={index}
            image={item.image}
            position={item.position}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Professional;
