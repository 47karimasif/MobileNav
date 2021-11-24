import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1500,
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontWeightLight: 300,
    fontWeightRegular: "400",
    fontWeightMedium: 500,
    fontWeightBold: 700,
    lineHeight: "1.6",
    h1: {
      fontSize: "48px",
    },
    h2: {
      fontSize: "40px",
    },
    h3: {
      fontSize: "32px",
    },
    h4: {
      fontSize: "22px",
    },
    h5: {
      fontSize: "20px",
    },
    body1: {
      fontSize: "18px",
    },
    body2: {
      fontSize: "16px",
    },
    body3: {
      fontSize: "15px",
    },
  },
});

export default theme;
