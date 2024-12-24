import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Container,
  Alert,
} from "@mui/material";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xeooqrpk");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setError("");
    setSuccess(false);
  };
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  // const validateEmail = (email) => {
  //   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  //   return emailRegex.test(email);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { name, email, message } = formData;

  //   if (!name || !email || !message) {
  //     setError("All fields are required.");
  //     return;
  //   }

  //   if (!validateEmail(email)) {
  //     setError("Please enter a valid email address.");
  //     return;
  //   }

  //   // Simulate sending a congratulatory email
  //   setTimeout(() => {
  //     setSuccess(true);
  //     setFormData({ name: "", email: "", message: "" }); // Reset form
  //   }, 1000);
  // };

  return (
    <Container maxWidth="sm" sx={{ py: 5 }}>
      {/* Title */}
      <Typography
        variant="h4"
        align="center"
        fontWeight={700}
        gutterBottom
        sx={{
          color: "#0047AE",
          fontSize: { xs: "1.8rem", sm: "2.2rem" },
        }}
      >
        Send a Message
      </Typography>

      {/* Success Message */}
      {success && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Congratulations! Your message has been sent.
        </Alert>
      )}

      {/* Error Message */}
      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      {/* Form Container */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          padding: { xs: 2, sm: 3 },
        }}
      >
        <Grid container spacing={2}>
          {/* Name Field */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="name"
              placeholder="Name"
              variant="outlined"
              value={formData.name}
              onChange={handleInputChange}
              InputProps={{
                sx: {
                  border: "1px solid #000000",
                  boxShadow: "5px 5px 0px rgba(0, 71, 174, 1)",
                  background: "white",
                  borderRadius: "0px",
                },
              }}
            />
          </Grid>

          {/* Email Field */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="email"
              placeholder="E-Mail"
              variant="outlined"
              value={formData.email}
              onChange={handleInputChange}
              InputProps={{
                sx: {
                  border: "1px solid #000000",
                  boxShadow: "5px 5px 0px rgba(0, 71, 174, 1)",
                  background: "white",
                  borderRadius: "0px",
                },
              }}
            />
          </Grid>

          {/* Message Field */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="message"
              placeholder="Message"
              variant="outlined"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              InputProps={{
                sx: {
                  border: "1px solid #000000",
                  boxShadow: "5px 5px 0px rgba(0, 71, 174, 1)",
                  background: "white",
                  borderRadius: "0px",
                },
              }}
            />
          </Grid>
        </Grid>

        {/* Submit Button */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 3,
            marginInline: "auto",
            borderRadius: "0px",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: "50%",
              backgroundColor: "#0047AE",
              color: "white",
              fontWeight: 700,
              fontSize: "1rem",
              textTransform: "none",
              borderRadius: "0px",
              boxShadow:
                "0px 5px 0px #003a8c, 0px 8px 15px rgba(0, 71, 174, 0.2)",
              "&:hover": {
                backgroundColor: "#003a8c",
                boxShadow:
                  "0px 3px 0px #002b6d, 0px 5px 10px rgba(0, 58, 140, 0.3)",
              },
              transition: "all 0.2s ease",
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactForm;
