import "./mainService.css";

import serviceData from "../../assets/data/service";
import BannerService from "../Container/BannerService";

function MainService() {
  return (
    <div className="core-service">
      <div className="service-content">
        <div className="main-service">Main Services</div>
        <div className="learn">Learn services to focus on your beauty</div>
        <p className="content">
          Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
          Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
          turpis.
        </p>
      </div>
      <div className="service-banner">
        {serviceData.map((item, index) => (
          <BannerService
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default MainService;
