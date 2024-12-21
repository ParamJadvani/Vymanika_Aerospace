// import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import bannerimage from "../assets/BannerImage/Home.png";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

const Home = () => {
  const theme = useTheme();
  return (
    <div>
      <Navbar />
      <Banner
        image={bannerimage}
        contentDiv={
          <Box>
            <Typography
              variant="h4"
              sx={{ fontWeight: 900, textAlign: "start" ,color:theme.headerTextColor }}
              
            >
              Innovating the Future of UAV Technology
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                marginTop: 2,
                fontStyle: "italic",
                fontWeight: 700,
                textAlign: "start",
              }}
            >
              “Shaping the Future of Aerospace with Cutting-Edge UAV Solutions”
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginTop: 2, textAlign: "justify" }}
            >
              At Vymanika Aerospace, we deliver innovative UAV technology,
              advancing aviation with unparalleled reliability and efficiency
              for commercial, defense, and beyond. Explore the limitless
              possibilities with us.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                marginTop: 3,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  fontSize: "13px",
                  backgroundColor: "#0047AE",
                  padding: "10px 30px",
                  textTransform: "none",
                  borderRadius: "0px",
                  fontWeight: 700,
                  border:"2px solid #5C76DD"
                }}
              >
                Know More
              </Button>
            </Box>
          </Box>
        }
      />
    </div>
  );
};

export default Home;
