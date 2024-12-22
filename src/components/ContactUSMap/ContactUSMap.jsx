import { useTheme } from "@emotion/react";
import { Box, Container } from "@mui/material";
import React from "react";
import GoogleMap from "./GoogleMap";
import ContactForm from "./ContactForm";

const ContactUSMap = () => {
  const theme = useTheme();
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      <Container
        sx={{
          maxWidth: {
            sm: theme.values.tablet,
            md: theme.values.laptop,
            lg: theme.values.desktop,
            xl: "xl",
            position: "relative",
          },
        }}
      >
        {/* Map and Form Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: theme.spacing(4),
            marginTop: theme.spacing(4),
            width: "100%",
            mb: 10,
          }}
        >
          {/* Google Map */}
          <Box
            sx={{
              width: { xs: "100%", md: "49%" },
              height: { xs: "auto", md: "500px" }, // Auto height for small screens
              aspectRatio: { xs: "1 / 1", md: "auto" }, // Square aspect ratio for smaller screens
              border: "1px solid #000000",
              boxShadow: "5px 5px 0px rgba(0, 71, 174, 1)",
              overflow: "hidden",
            }}
          >
            <GoogleMap />
          </Box>

          {/* Placeholder for Additional Content */}
          <Box
            sx={{
              width: { xs: "100%", md: "49%" },
              height: { xs: "auto", md: "500px" }, // Auto height for small screens
              aspectRatio: { xs: "1 / 1", md: "auto" }, // Square aspect ratio for smaller screens
              border: "1px solid #000000",
              boxShadow: "5px 5px 0px rgba(0, 71, 174, 1)",
            }}
          >
            <ContactForm />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUSMap;
