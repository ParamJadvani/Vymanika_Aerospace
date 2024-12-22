import { useTheme } from "@emotion/react";
import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
} from "@mui/material";
import React from "react";

const BlogGrid = ({ blogData = [] }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "hidden",
        marginTop: 10,
        paddingBottom: 1,
      }}
    >
      <Container
        sx={{
          maxWidth: {
            sm: theme.values.tablet,
            md: theme.values.laptop,
            lg: theme.values.desktop - 35,
            xl: 1500,
          },
          display: "flex",
          flexDirection: {
            xs: "column", // Stack vertically on small screens
            md: "row", // Row on small screens and up
            lg: "row", // Row on large screens
          },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2, // Adds spacing between the cards
        }}
      >
        {blogData.map((item, index) => (
          <Card
            key={index}
            sx={{
              width: {
                xs: "100%", // Full width on small screens
                md: "48%", // Slightly less than half on larger screens
                lg: "48%",
              },
              backgroundColor: "transparent",
              border: "1px solid #000000",
              boxShadow:
                "5px 5px 0px rgba(0, 71, 174,1), -1px 0px 0px rgba(0, 71, 174,1)",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              overflow: "hidden",
              height: "100%",
              borderRadius: "0px",
            }}
          >
            {/* Icon Section */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center", // Centering the image
                alignItems: "center",
                width: "100%",
                height: "300px", // Fixed height for image
                overflow: "hidden", // Ensure no overflow
              }}
            >
              <CardMedia
                component="img"
                src={item.image}
                alt={item.title}
                sx={{
                  objectFit: "cover", // Ensures the image covers the area
                  width: "100%", // Fill the width of the container
                  height: "100%", // Fill the height of the container
                  imageRendering: "auto", // Avoids blurry images
                }}
              />
            </Box>

            {/* Title and Description Section */}
            <CardContent
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                overflow: "hidden",
                marginTop: 1,
                padding: 2, // Optimized padding
              }}
            >
              <Typography
                component="div"
                sx={{
                  fontWeight: 800,
                  color: theme.headerTextColor,
                  textAlign: "start",
                  fontSize: {
                    xs: "0.85rem", // Responsive font sizes
                    sm: "1rem",
                    md: "1.1rem",
                    lg: "1.2rem",
                  },
                  height: "30%",
                  paddingBottom: 1,
                }}
              >
                {item.title}
              </Typography>

              <Box
                sx={{
                  height: "70%", // Adjusted height to fit content better
                }}
              >
                <Typography
                  variant="body2"
                  color="#000000"
                  sx={{
                    textAlign: "start",
                    marginTop: 1,
                    fontWeight: 500,
                    fontSize: {
                      xs: "0.95rem",
                      sm: "1rem",
                      lg: "1.1rem",
                    },
                  }}
                >
                  {item.description}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end", // Align button to the right
                  marginTop: "10px",
                  width: "100%",
                }}
              >
                <Button
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: theme.headerTextColor,
                    textTransform: "none",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    "&:hover": {
                      backgroundColor: theme.headerTextColor,
                      color: "#ffffff",
                    },
                  }}
                >
                  Know More
                  <Box
                    sx={{
                      width: "24px",
                      height: "24px",
                      backgroundColor: theme.headerTextColor,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        width: "7.5px",
                        height: "7.5px",
                        borderRight: "2px solid white",
                        borderBottom: "2px solid white",
                        transform: "rotate(-45deg)",
                        marginRight: "1.5px",
                      }}
                    ></Box>
                  </Box>
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Container>
    </Box>
  );
};

export default BlogGrid;
