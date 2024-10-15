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
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  // Toasts

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

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <Box className="intro">
            <Intro />
            {/* <Button variant="contained" color="primary" onClick={toggleTheme}>
            Toggle Theme
          </Button> */}
          </Box>
          <Box className="about">
            <About />
          </Box>

          {/* :root {
  --main-blue: #1976d2; /* Primary color 
  --light-blue: #64b5f6; /* Light blue shade 
  --sky-blue: #87ceeb; /* Sky blue shade 
  --dark-blue: #0d47a1; /* Dark blue shade 
  --deep-blue: #0a74da; /* Deep blue shade 
  --white: #ffffff; /* Light background 
  --dark-gray: #121212; /* Dark background 
  --light-gray: #f5f5f5; /* Light text 
  --accent-green: #4caf50;
} */}

          <Box
            style={{ backgroundColor: "#0d47a1", color: "#ffffff" }}
            className="skills"
          >
            <Skills />
          </Box>
          <Box className="projects">
            <Projects />
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
