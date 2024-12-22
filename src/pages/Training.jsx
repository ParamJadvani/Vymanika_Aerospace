// import React from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import cap from "../assets/BannerImage/Training.png";
import Banner from "../components/Banner";
import { useTheme } from "@emotion/react";

const Training = () => {
  const theme=useTheme()
  return (
    <>
      <Navbar />
      {/* Banner Section */}
      <Banner
        reverse={true}
        image={cap}
        contentDiv={
          <Box>
            {/* Title Section */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: 900,
                fontSize: {
                  xs: "1.1rem",
                  sm: "2rem",
                  md: "2.2rem",
                  lg: "2.3rem",
                  xl: "3rem",
                },
                marginBottom: { xs: 2, sm: 3, md: 4 },
                textAlign: "start",
                color:theme.headerTextColor,
              }}
            >
              Training Programs Overview
            </Typography>

            {/* Body Description */}
            <Typography
              variant="body1"
              sx={{
                fontWeight: 400,
                fontSize: {
                  xs: "0.89rem",
                  sm: "1rem",
                  md: "1.04rem",
                  lg: "1.2rem",
                  xl: "1.49rem",
                },
                textAlign: "justify",
                maxWidth: { xs: "100%", lg: "80%" },
                marginTop: { xs: 2, sm: 3 },
              }}
            >
              Vymanika Aerospace offers comprehensive drone training programs
              designed to equip participants with the skills and certifications
              required for excelling in the UAV industry. From mastering
              agricultural spraying techniques to creating stunning aerial
              photography, our courses cater to both beginners and experienced
              professionals.
            </Typography>
          </Box>
        }
      />
    </>
  );
};

export default Training;
