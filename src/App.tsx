// Functionality
import { useState } from "react";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import "./App.css";

// Pages
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to get CSS variable value
  const getCSSVariable = (variable: string): string => {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(variable)
      .trim();
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: getCSSVariable("--main-blue"), // Using JS to get the value
      },
      secondary: {
        main: getCSSVariable("--accent-green"), // Using JS to get the value
      },
      background: {
        default: isDarkMode
          ? getCSSVariable("--dark-gray")
          : getCSSVariable("--white"),
      },
      text: {
        primary: isDarkMode
          ? getCSSVariable("--light-gray")
          : getCSSVariable("--dark-gray"),
      },
    },
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          style={{
            fontFamily: theme.typography.fontFamily,
          }}
        >
          <Box className="intro">
            <Intro />
          </Box>
          <Box className="about">
            <About />
          </Box>
          <Box
            style={{ backgroundColor: "#0d47a1", color: "#ffffff" }}
            className="skills"
          >
            <Skills />
          </Box>
          <Box className="contact">
            <Contact />
          </Box>
        </SnackbarProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
