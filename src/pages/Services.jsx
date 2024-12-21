import React from "react";
import Navbar from "../components/Navbar";
import Services_banner from "../assets/BannerImage/Service.png";
import Banner from "../components/Banner";
import { Box, Typography } from "@mui/material";

const Services = () => {
  return (
    <>
      <Navbar />
      {/* About Banner with Content */}
      <Banner
        image={Services_banner}
        contentDiv={
          <Box>
            {/* Title Section */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: 900,
                textAlign: "start",
                fontSize: {
                  xs: "1.51rem",
                  sm: "2.2rem",
                  md: "2.5rem",
                  lg: "2.5rem",
                  xl: "3.5rem",
                },
                marginBottom: { xs: 2, sm: 3, md: 4 },
              }}
            >
              Overview of Services
            </Typography>

            {/* Body Description */}
            <Typography
              variant="body1"
              sx={{
                marginTop: 2,
                fontWeight: 400,
                textAlign: "justify",
                fontSize: {
                  xs: "0.89rem",
                  sm: "1.1rem",
                  md: "1.1rem",
                  lg: "1.2rem",
                  xl: "1.4rem",
                },
                lineHeight: { xs: 1.5, sm: 1.6, md: 1.8 },
                letterSpacing: { xs: "0.2px", sm: "0.5px" },
              }}
            >
              At Vymanika Aerospace, we specialize in delivering cutting-edge
              UAV solutions tailored to diverse industries. Our state-of-the-art
              drones and services are designed to enhance efficiency, safety,
              and accuracy across a wide range of applications. Whether you need
              precise agricultural spraying or advanced infrastructure
              inspections, our expertise ensures that your operational goals are
              met with unparalleled quality and reliability.
            </Typography>
          </Box>
        }
      />
    </>
  );
};

export default Services;
