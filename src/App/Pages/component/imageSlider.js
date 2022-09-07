import useWindowDimensions from "./getDimensions";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function ImageCarousel() {
  //   render() {
  const { height, width } = useWindowDimensions();
  const Array = [
    {
      img: "https://wallpapers.com/images/hd/nature-landscape-hd-usqznq19dscdjkf8.jpg",
    },
    {
      img: "https://wallpapers.com/images/hd/4k-mountain-ranges-hwvwv8xzu1nn0vlt.webp",
    },
    {
      img: "https://wallpapers.com/images/hd/colorful-mountain-rakl02wmrkmrokye.webp",
    },
  ];
  // const height = getWindowSize()
  return (
    <Carousel showThumbs={false} autoPlay={true} infiniteLoop>
      {Array.map((item, index) => (
        <div style={{ height: height * 0.6 }}>
          <img src={item.img} style={{ height: "100%" }} />
          <p className="legend">Legend {index + 1}</p>
        </div>
      ))}
    </Carousel>
  );
}
