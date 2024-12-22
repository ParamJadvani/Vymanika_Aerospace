import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";

const theme = createTheme({
  sectionbackgroundColor: "#D4E8FF",
  navFooterBackgroundColor: "#172831",
  headerTextColor: "#0047AE",
  boxBorderColor: "#263266",
  textColor: "#FFFFFF",

  values: {
    tablet: 550,
    laptop: 850,
    desktop: 1150,
  },
  fontsize:{ 
      xs: "1.1rem",
      sm: "2rem",
      md: "2.2rem",
      lg: "2.3rem",
      xl: "3rem",
    }
});

const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);

export default ThemeProvider;
