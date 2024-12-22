import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import AboutUs_Banner from "../assets/BannerImage/Aboutus.png";
import { Box, Typography } from "@mui/material";
import OMV from "../assets/SectionImage/Business Plan-bro.png";
import jadu from "../assets/Vector.png";
import jadu2 from "../assets/Vector2.png";
import vsrp from "../assets/SectionImage/Vision statement-rafiki.png";
import Vision_Section from "../components/Vision_Section";

const AboutUS = () => {
  return (
    <>
      <Navbar />
      <Banner
        reverse={true}
        image={AboutUs_Banner}
        contentDiv={
          <Box>
            {/* Title Section */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: 900,
                textAlign: "start",
                fontSize: { xs: "1.7rem", sm: "2rem" },
              }}
            >
              About Vymanika Aerospace
            </Typography>
            {/* Body Description */}
            <Typography
              variant="body1"
              sx={{
                marginTop: 2,
                color: "#000000",
                fontWeight: 400,
                textAlign: "justify",
                fontSize: { xs: "1rem", sm: "1.1rem" },
              }}
            >
              Vymanika Aerospace is a pioneering startup redefining the
              aerospace industry through innovation and expertise in unmanned
              aerial vehicles (UAVs). Our mission is to revolutionize UAV
              technology by designing and integrating cutting-edge components
              tailored for commercial and defense applications. As a
              forward-thinking company, we are committed to advancing UAV
              capabilities and meeting the ever-evolving demands of modern
              aviation and robotics.
            </Typography>
          </Box>
        }
      />
      {/* Vision Section */}
      <Vision_Section
        title="Our Mission"
        vectorImage={OMV}
        backgroundimage={jadu}
        bigDroneImage={false}
        description="At Vymanika Aerospace's mission is to advance the aerospace industry with innovative unmanned aerial vehicles (UAVs) and components. We are dedicated to delivering high-performance, reliable solutions that enhance UAV capabilities, meet diverse industry needs, and drive the future of unmanned aviation for a safer, more connected world."
      />
      <Vision_Section
        title="Our Vision"
        vectorImage={vsrp}
        backgroundimage={jadu2}
        bigDroneImage={false}
        smallDroneImage={true}
        description="Vymanika Aerospace envisions a future where unmanned aerial vehicles seamlessly enhance industries and daily life. We aim to lead in UAV innovation, setting new standards and unlocking transformative possibilities in aerospace technology. Our goal is to create a more efficient, connected world through advanced unmanned aviation solutions."
        reverse={true}
      />
    </>
  );
};

export default AboutUS;
