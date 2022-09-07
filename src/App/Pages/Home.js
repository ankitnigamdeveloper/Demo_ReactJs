import ImageCarousel from "./component/imageSlider";
import GridCard from "./component/GridCard";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <div>
      <ImageCarousel />
      <Typography
        gutterBottom
        variant="h3"
        component="div"
        align="center"
        mt={10}
      >
        Our Products
      </Typography>
      <GridCard />
    </div>
  );
}
