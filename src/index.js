import React from "react";
import ReactDOM from "react-dom";
import "@fontsource/roboto";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { colors, ThemeProvider } from "@material-ui/core";
import createTheme from "@material-ui/core/styles/createTheme";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: colors.pink[500],
    },
    secondary: {
      main: colors.pink[500],
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
