import { useTheme } from "@emotion/react";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import { IoPaperPlaneOutline } from "react-icons/io5";

const ContactUsInput = () => {
  const theme = useTheme();
  return (
    <div>
      
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
    </div>
  );
};

export default ContactUsInput;
