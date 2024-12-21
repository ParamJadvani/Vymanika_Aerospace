import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import bannerimage from "../assets/BannerImage/Home.png";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const theme = useTheme();
  const isXL = useMediaQuery(theme.breakpoints.up("xl"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <Banner
        image={bannerimage}
        contentDiv={
          <Box>
            <Typography
              variant={isXL ? "h3" : isSmall ? "h5" : "h4"}
              sx={{
                fontWeight: 900,
                textAlign: "start",
              }}
            >
              Innovating the Future of UAV Technology
            </Typography>
            <Typography
              variant={isXL ? "h5" : isSmall ? "subtitle2" : "subtitle1"}
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
              variant={isXL ? "body1" : isSmall ? "body2" : "body1"}
              sx={{
                marginTop: 2,
                textAlign: "justify",
                fontSize: isXL ? "1.2rem" : "1rem",
              }}
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
                  fontSize: isXL ? "16px" : isSmall ? "12px" : "14px",
                  backgroundColor: "#0047AE",
                  padding: "10px 30px",
                  textTransform: "none",
                  borderRadius: "0px",
                  fontWeight: 700,
                }}
                onClick={() => navigate("/about")}
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
