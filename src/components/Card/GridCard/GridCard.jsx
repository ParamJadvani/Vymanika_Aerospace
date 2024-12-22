import { useTheme } from "@emotion/react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import ResponsiveCard from "./ResponsiveCard";
import blueBigDrone from "/src/assets/Image PNG/freepik--drone-3--inject-1-1.png";

import "/src/css/vision_section.css";

const GridCard = ({
  data = [],
  title = "",
  leftImage = (
    <Box
      component="img"
      src={blueBigDrone}
      alt="Big Drone"
      className="bigDrone"
      sx={{
        position: "absolute",
        height: { xs: "110px", md: "130px", lg: "150px" },
        zIndex: 100,
        left: {
          xs: "-1%",
          sm: "-14%",
          md: "-7%",
          lg: "-7%",
          xl: "-5.5%",
        },
        display: {
          xs: "none",
          sm: "inline",
        },
        top: { xs: "-1%", sm: "1%", md: "1.5%", lg: "1%", xl: "4%" },
      }}
    />
  ),
  rightImage,
  onclickEvent = "#",
}) => {
  const theme = useTheme();
  return (
    <div>
      <Box sx={{ width: "100%", marginY: 10 }}>
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
          {leftImage}
          {rightImage}
          <Box>
            {/* Title Section */}
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                fontWeight: 900,
                fontStyle: "capitalize",
                color: theme.headerTextColor,
                fontSize: {
                  xs: theme.fontsize.xs,
                  sm: theme.fontsize.sm,
                  md: theme.fontsize.md,
                  lg: theme.fontsize.lg,
                  xl: theme.fontsize.xl,
                },
                marginBottom: { xs: "0.5rem", lg: "2.5rem" },
                width: "100%",
              }}
            >
              {title.toUpperCase()}
            </Typography>
            <Grid container rowSpacing={3}>
              {data.map(({ image, title, description }, index) => {
                const totalItemsInLastRow =
                  data.length % 3 === 0 ? 3 : data.length % 3;
                const isLastRowCard =
                  index >= data.length - totalItemsInLastRow;

                const lgSize =
                  isLastRowCard && totalItemsInLastRow === 1
                    ? 12
                    : isLastRowCard && totalItemsInLastRow === 2
                    ? 6
                    : 4;

                const isLastCardInRow = (index + 1) % 3 === 0;
                const isFirstCard = index % 3 === 0;

                const isSingleLastCardInRow =
                  isLastRowCard && data.length % 3 !== 0;

                const justifyContent =
                  totalItemsInLastRow === 1
                    ? "center"
                    : totalItemsInLastRow === 2 && isLastRowCard
                    ? "center"
                    : index % 3 === 0
                    ? "flex-start"
                    : (index + 1) % 3 === 0 || index === data.length - 1
                    ? "flex-end"
                    : "center";

                return (
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={lgSize}
                    xl={4}
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: {
                        xs: "center",
                        lg: justifyContent,
                        xl: isFirstCard
                          ? "flex-start" // Align to start for the first card
                          : isSingleLastCardInRow
                          ? "center" // Align to center for a single last card in an incomplete row
                          : isLastCardInRow || isLastRowCard
                          ? "flex-end" // Align to end for the last card in a full row
                          : "center", // Center-align for other cards
                      },
                      alignItems: "center",
                    }}
                  >
                    <ResponsiveCard
                      image={image}
                      title={title}
                      description={description}
                      index={index}
                    />
                  </Grid>
                );
              })}
            </Grid>

            {data.length === 3 && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { md: "end", xs: "end" },
                  marginTop: "10px",
                  width: { lg: "100%", sm: "80%", md: "70%" },
                }}
              >
                <Button
                  onClick={onclickEvent}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: theme.headerTextColor,
                    textTransform: "none",
                    fontWeight: "bold",
                    position: { md: "absolute", xs: "relative" },
                    fontSize: "1rem",
                    right: { md: "1%" },
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
            )}
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default GridCard;
