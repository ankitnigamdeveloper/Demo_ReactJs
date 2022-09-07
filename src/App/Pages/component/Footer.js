import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { Grid } from "@material-ui/core";
import MailIcon from "@mui/icons-material/Mail";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
// import { Link } from "@mui/material";
// import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  rootBox: {
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },

    padding: 20,

    backgroundColor: "#d9d9d9",
    display: "flex",
    alignItems: "center",
  },
  imgView: {
    display: "flex",
    flexWrap: "wrap",

    // backgroundColor: "red",
  },
  footerNav: {
    display: "flex",
    flexWrap: "wrap",

    justifyContent: "center",
    marginRight: "auto",
    paddingLeft: theme.spacing(3),
    paddingBottom: theme.spacing(0),

    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginLeft: "auto",
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },
  },
  mainText: {
    marginTop: 0,
    fontWeight: "bold",
    marginLeft: 5,
  },
  footerLink: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(2),
    },
    img: {
      height: 30,
      width: 30,
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles(props);

  const content = {
    brand: { image: "/logo192.png", width: 30 },
    copy: "© 2020 Nereus All rights reserved.",
    link1: "First Link",
    link2: "Second Link",
    link3: "Third Link",
    link4: "Fourth Link",
    ...props.content,
  };

  let brand;

  if (content.brand.image) {
    brand = (
      <img src={`${content.brand.image}`} alt="" width={content.brand.width} />
    );
  } else {
    brand = content.brand.text || "";
  }

  return (
    // <footer>
    <Container maxWidth="xl" className={classes.rootBox}>
      <Box
        // className={classes.rootBox}
        sx={{
          // display: "flex",
          display: {
            xs: "inline-block",
            md: "inline-block",
            lg: "flex",
            xl: "flex",
          },
        }}
      >
        <Box
          sx={{
            width: { lg: "50%", xl: "50%", md: "100%", xs: "100%" },
            marginRight: 10,
          }}
        >
          <h3>MindMines Infotech</h3>
          <p>
            At MindMines Infotech, our role is to deliver functional mobile
            {"\n"}
            application and marketing solutions that will help drive more{"\n"}
            potential clients for your businesses{" "}
          </p>
        </Box>
        <Box>
          <Box
            sx={{
              width: "100%",
              display: {
                xs: "inline-block",
                md: "flex",
                xl: "flex",
                lg: "flex",
              },
            }}
          >
            <Box sx={{ marginRight: 10 }}>
              <Grid
                className={classes.imgView}
                // sx={{ flexDirection: "row" }}
                // sx={{ width: { lg: "25%", md: "50%", xs: "100%" } }}
                direction={{ md: "row", lg: "row" }}
              >
                {/* <img className={classes.img} src="/assets/Images/marker.png" /> */}
                <Avatar
                  alt="marker"
                  // sx={{ bgcolor: "white" }}
                  src="/assets/Images/marker.png"
                  sx={{ width: 24, height: 24 }}
                />
                <p className={classes.mainText}>Address</p>
              </Grid>
              <p style={{ marginTop: 0 }}>
                In front of Deshhera maidan
                <br /> Indore,458880
              </p>
            </Box>
            <Box>
              <Grid
                className={classes.imgView}
                // sx={{ flexDirection: "row" }}
                direction={{ md: "row", lg: "row" }}
              >
                <PhoneIphoneIcon />
                <p className={classes.mainText}>Social</p>
              </Grid>
              <Box sx={{ display: "flex" }}>
                <FacebookIcon sx={{ marginRight: 1, marginLeft: 1 }} />
                <TwitterIcon sx={{ marginRight: 1 }} />
                <InstagramIcon sx={{ marginRight: 1 }} />
                <LinkedInIcon sx={{ marginRight: 1 }} />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: {
                xs: "inline-block",
                md: "flex",
                xl: "flex",
                lg: "flex",
              },
            }}
          >
            <Box sx={{ marginRight: 10 }}>
              <Grid
                className={classes.imgView}
                direction={{ md: "row", lg: "row" }}
              >
                <MailIcon />
                <p className={classes.mainText}>Email</p>
              </Grid>

              <a href="mailto:mindmines101@gmail.com">
                <p style={{ marginTop: 0 }}>mindmines101@gmail.com</p>
              </a>
            </Box>
            <Box>
              <Grid
                className={classes.imgView}
                direction={{ md: "row", lg: "row" }}
              >
                <PhoneInTalkIcon />
                <p className={classes.mainText}>Phone</p>
              </Grid>
              <p style={{ marginTop: 0 }}>+917999123456</p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
    // </footer>
  );
}
