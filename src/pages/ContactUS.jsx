import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import { Box, Typography } from "@mui/material";
import cu from "../assets/BannerImage/Contactus.png";
import { FaLocationDot } from "react-icons/fa6";
import { Phone, Email } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

const ContactUS = () => {
  const theme = useTheme();
  return (
    <>
      <Navbar />
      {/* Banner Section */}
      <Banner
        image={cu}
        contentDiv={
          <Box
            sx={{
              textAlign: "start",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            {/* Title */}
            <Typography
              variant="h2"
              sx={{
                fontWeight: "900",
                fontSize: {
                  xs: "1.8rem",
                  sm: "2.2rem",
                  md: "2.8rem",
                  lg: "3rem",
                },
                marginBottom: { xs: 2, sm: 3 },
                textAlign: "start",
                width: "100%",
              }}
            >
              CONTACT US
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
                lineHeight: { xs: 1.4, sm: 1.6, md: 1.8 },
                marginBottom: { xs: 2, sm: 3 },
                textAlign: { xs: "justify", md: "start" },
                maxWidth: "100%",
              }}
            >
              We at Vymanika Aerospace are always here to help! Whether you have
              questions, need assistance, or want to collaborate, feel free to
              reach out to us.
            </Typography>

            {/* Contact Info */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "justify", md: "flex-start" },
                gap: { xs: 2, sm: 3 },
                width: "100%",
                maxWidth: "100%",
              }}
            >
              {/* Phone */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 1.5, sm: 2 },
                  justifyContent: "start",
                  width: "100%",
                }}
              >
                <Phone
                  sx={{
                    fontSize: {
                      xs: "1.2rem",
                      sm: "1.5rem",
                    },
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.2rem" },
                    textAlign: "start",
                    flex: 1,
                  }}
                >
                  +91 89053 65128
                </Typography>
              </Box>

              {/* Email */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 1.5, sm: 2 },
                  justifyContent: "start",
                  width: "100%",
                }}
              >
                <Email sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }} />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "0.9rem", sm: "1.2rem" },
                    textAlign: "justify",
                    width: "100%",
                  }}
                >
                  Vymanikaaerospace@gmail.com
                </Typography>
              </Box>

              {/* Address */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 1.5, sm: 2 },
                  justifyContent: { xs: "start", md: "start" },
                  width: "100%",
                }}
              >
                <FaLocationDot style={{ fontSize: "1.2rem" }} />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.2rem" },
                    textAlign: { xs: "justify", md: "start" },
                    width: "100%",
                  }}
                >
                  204, Royal Business Hub, Variyav Road, Surat
                </Typography>
              </Box>
            </Box>
          </Box>
        }
      />
    </>
  );
};

export default ContactUS;
