import bannerImage from "../../assets/banner-image.png";

export default function BannerImage() {
  return (
    <div>
      <img className="h-auto w-auto " src={bannerImage} alt="" />
    </div>
  );
}
