import "./bannerService.css";

function BannerService({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="banner-service">
      <div className="image">
        <img src={image} />
      </div>
      <div className="title">{title}</div>
      <p className="description">{description}</p>
    </div>
  );
}

export default BannerService;
