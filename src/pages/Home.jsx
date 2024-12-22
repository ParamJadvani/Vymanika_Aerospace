import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import bannerimage from "../assets/BannerImage/Home.png";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import OMV from "../assets/SectionImage/Business Plan-bro.png";
import jadu from "../assets/Vector.png";
import jadu2 from "../assets/Vector2.png";
import vsrp from "../assets/SectionImage/Vision statement-rafiki.png";
import Vision_Section from "../components/Vision_Section";

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
              sx={{ fontWeight: 900, textAlign: "start" }}
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
                }}
              >
                Know More
              </Button>
            </Box>
          </Box>
        }
      />
      {/* Vision Section */}
      <Vision_Section
        title="Our Mission"
        vectorImage={OMV}
        backgroundimage={jadu}
        description="At Vymanika Aerospace's mission is to advance the aerospace industry with innovative unmanned aerial vehicles (UAVs) and components. We are dedicated to delivering high-performance, reliable solutions that enhance UAV capabilities, meet diverse industry needs, and drive the future of unmanned aviation for a safer, more connected world."
      />
      <Vision_Section
        title="Our Vision"
        vectorImage={vsrp}
        backgroundimage={jadu2}
        description="Vymanika Aerospace envisions a future where unmanned aerial vehicles seamlessly enhance industries and daily life. We aim to lead in UAV innovation, setting new standards and unlocking transformative possibilities in aerospace technology. Our goal is to create a more efficient, connected world through advanced unmanned aviation solutions."
        reverse={true}
      />
    </div>
  );
};

export default Home;
