// import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import AboutUs_Banner from "../assets/BannerImage/Aboutus.png";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";

const AboutUS = () => {
  const theme = useTheme();
  const isXL = useMediaQuery(theme.breakpoints.up("xl"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
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
              variant={isXL ? "h3" : isSmall ? "h5" : "h4"}
              sx={{
                fontWeight: 900,
                textAlign: "start",
                fontsize:{
                  xs:theme.fontsize.xs,
                  sm:theme.fontsize.sm,
                  md:theme.fontsize.md,
                  lg:theme.fontsize.lg,
                  xl:theme.fontsize.xl,
                  },
                color: theme.headerTextColor,
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
    </>
  );
};

export default AboutUS;
