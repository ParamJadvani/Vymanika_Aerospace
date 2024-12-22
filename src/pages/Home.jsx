// import React from "react";
import Navbar from "/src/components/Navbar";
import Banner from "/src/components/Banner";
import bannerimage from "/src/assets/BannerImage/Home.png";
import {
  Box,
  Button,
  Typography,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
import OMV from "/src/assets/SectionImage/Business Plan-bro.png";
import jadu from "/src/assets/Vector.png";
import jadu2 from "/src/assets/Vector2.png";
import vsrp from "/src/assets/SectionImage/Vision statement-rafiki.png";
import Vision_Section from "/src/components/Vision_Section";
import drone_delivery from "/src/assets/CardImage/drone-delivery.png";
import support from "/src/assets/CardImage/support.png";
import drone from "/src/assets/CardImage/drone.png";
import GridCard from "/src/components/Card/GridCard/GridCard";
import SliderCard from "/src/components/Card/SliderCard/SliderCard";
import certificate from "/src/assets/CardImage/winner.png";
import mapping from "/src/assets/CardImage/mapping.png";
import pilot from "/src/assets/CardImage/pilot.png";
import smallDrone from "/src/assets/Image PNG/freepik--drone-1--inject-1-3.png";
import blackBigDrone from "/src/assets/Image PNG/freepik--drone-2--inject-1.png";

import "/src/css/vision_section.css";
import DroneBanner from "../components/DroneBanner";
import { IoPaperPlaneOutline } from "react-icons/io5";

const servicesData = [
  {
    image: drone_delivery,
    title: "Drone Show",
    description:
      "Drone Shows are synchronized aerial displays using drones to create visuals, replacing traditional fireworks for entertainment and awareness.",
  },
  {
    image: support,
    title: "Surveying & Mapping",
    description:
      "Drone surveying provides accurate data faster mapping, improved safety, and 3D models, revolutionizing land and construction surveying processes.",
  },
  {
    image: drone,
    title: "Agriculture Spraying",
    description:
      "Agriculture drones ensure efficient crop spraying, reducing pesticide use, improving precision, saving time, and covering larger areas effectively.",
  },
];

const trainingData = [
  {
    image: certificate,
    title: "DGCA Certified Remote Pilot Certificate (RPC)",
    description:
      "Get certified by DGCA with hands-on training to become a licensed drone operator. Learn safety protocols, legal requirements, and technical skills to excel in UAV operations.",
  },
  {
    image: pilot,
    title: "Photography & Videography",
    description:
      "Capture breathtaking aerial visuals for events, films, or real estate promotions.",
  },
  {
    image: mapping,
    title: "Fertilizer/Pesticide Application in Agriculture",
    description:
      "Specialized training to use drones for efficient and precise agricultural spraying, ensuring better crop yields and reduced waste.",
  },
];

const Home = () => {
  const theme = useTheme();
  const isXL = useMediaQuery(theme.breakpoints.up("xl"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Banner
        image={bannerimage}
        contentDiv={
          <Box>
            <Typography
              variant={isXL ? "h3" : isSmall ? "h5" : "h4"}
              sx={{
                fontWeight: 900,
                fontsize: {
                  xs: theme.fontsize.xs,
                  sm: theme.fontsize.sm,
                  md: theme.fontsize.md,
                  lg: theme.fontsize.lg,
                  xl: theme.fontsize.xl,
                },
                textAlign: "start",
                color: theme.headerTextColor,
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
                  border: "2px solid #5C76DD",
                }}
                onClick={() => navigate("/about")}
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

      {/* "Our Services" Section */}
      <GridCard
        data={servicesData}
        title="Our Services"
        onclickEvent={() => navigate("/services")}
        leftImage={
          <Box
            component="img"
            src={smallDrone}
            className="smallDrone"
            sx={{
              position: "absolute",
              height: { xs: "70px", md: "85px" },
              zIndex: 100,
              left: { xs: "-0%", sm: "-5%", md: "-5%", lg: "-3%", xl: "-1%" },
              top: { xs: "1%", sm: "3%", lg: "0%" },
            }}
          />
        }
        rightImage={
          <Box
            component="img"
            src={blackBigDrone}
            sx={{
              position: "absolute",
              height: { xs: "60px", sm: "70px", md: "100px", lg: "120px" },
              zIndex: 100,
              right: {
                xs: "-0%",
                sm: "-5%",
                md: "-5%",
                lg: "-6%",
                xl: "-5%",
              },
              top: { xs: "-0%", sm: "0%", lg: "6.5%" },
            }}
          />
        }
      />

      {/* Testimonial Card */}
      <SliderCard />

      {/* "Training & Courses" Section */}
      <GridCard
        data={trainingData}
        title="Training & Courses"
        onclickEvent={() => navigate("/training")}
        rightImage={
          <Box
            component="img"
            src={smallDrone}
            className="smallDrone"
            sx={{
              position: "absolute",
              height: { xs: "70px", md: "85px" },
              zIndex: 100,
              right: { xs: "-0%", sm: "-5%", md: "-5%", lg: "-3%", xl: "-1%" },
              top: { xs: "50%", lg: "0%" },
              display: {
                xs: "none",
                sm: "inline",
              },
            }}
          />
        }
      />

      {/* Drone Banner */}
      <DroneBanner />

      {/* Contact Us */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            padding: theme.spacing(3, 2), // Top-bottom and left-right padding
            maxWidth: "600px", // Ensure max width is applied
            width: "100%",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              color: "#0047AE", // Custom color
              fontWeight: 900,
              fontStyle: "capitalize",
              mb: theme.spacing(3), // Margin bottom using theme
              fontSize: { xs: "1.5rem", sm: "2rem", lg: "2.5rem" },
            }}
          >
            {"contact us".toUpperCase()}
          </Typography>

          <Box
            sx={{
              marginInline: "auto",
              border: "1px solid #000000",
              boxShadow:
                "5px 5px 0px rgba(0, 71, 174, 1), -1px 0px 0px rgba(0, 71, 174, 1)",
              position: "relative",
              display: "flex",
              flexDirection: "row", // Stack vertically on small screens
              justifyContent: "space-between",
              alignItems: "center",
              overflow: "hidden",
              paddingInline: 1.5,
              backgroundColor: "white",
            }}
          >
            {/* TextField for input */}
            <TextField
              variant="outlined"
              placeholder="Enter text"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none", // Remove default border to match your style
                  },
                  backgroundColor: "white", // White background for input
                  fontSize: "1rem",
                },
                input: {
                  padding: {
                    xs: "8px",
                    sm: "10px",
                  },
                },
              }}
            />

            {/* Send Icon Button */}
            <IconButton
              size="small"
              sx={{
                color: "rgba(0, 71, 174, 1)",
                padding: {
                  xs: "0px",
                  sm: "10px",
                },
                marginLeft: { xs: 0, sm: 1 }, // Remove left margin on small screens
              }}
            >
              <IoPaperPlaneOutline
                style={{
                  fontSize: "20px", // Default size
                }}
                size={window.innerWidth < 600 ? 19 : 30}
              />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
