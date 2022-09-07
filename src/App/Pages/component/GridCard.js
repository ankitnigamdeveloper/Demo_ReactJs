// import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Array = [
  {
    name: "IPhone 13 pro",
    price: 135000,
    img: "/assets/Images/iphone13pro.jpg",
  },
  { name: "IPhone 13", price: 130000, img: "/assets/Images/iphone13.webp" },
  {
    name: "IPhone 12 mimi",
    price: 125000,
    img: "/assets/Images/iphone12mini.jpg",
  },
  { name: "IPhone 12", price: 120000, img: "/assets/Images/iphone12.webp" },
  {
    name: "IPhone 11 pro",
    price: 115000,
    img: "/assets/Images/iphone13pro.jpg",
  },
  { name: "IPhone 11 ", price: 100000, img: "/assets/Images/iphone12mini.jpg" },
  { name: "IPhone 8 ", price: 80000, img: "/assets/Images/iphone8.jpg" },
];

function FormRow() {
  return (
    <React.Fragment>
      {Array.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardMedia
              style={{
                height: "190px",
                // marginLeft: "113px",
                paddingLeft: "15%",
                // paddingTop: "10", // 16:9,
                // marginTop: "20px",
                width: "70%",
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
              component="img"
              height="200"
              image={item.img}
              alt={item.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography gutterBottom variant="body1" component="div">
                Price: $ {item.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                6.1 inches (15.49 cm) 460 ppi, (diagonal) all‑screen OLED Super
                Retina XDR Display 512 GB ROM
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View Details</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </React.Fragment>
  );
}

export default function GridCard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3} mx={2} mt={2}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}
