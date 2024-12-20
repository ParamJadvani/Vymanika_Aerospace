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
});

const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);

export default ThemeProvider;
