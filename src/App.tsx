// Functionality
import { useState } from "react";
import { Box, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";

// Pages
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
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
  });

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box className="intro">
          <Intro />
          {/* <Button variant="contained" color="primary" onClick={toggleTheme}>
            Toggle Theme
          </Button> */}
        </Box>
        <Box className="about">
          <h2>About</h2>
          <About />
        </Box>
        <Box className="skills">
          <h2>Skills</h2>
          <Skills />
        </Box>
        <Box className="projects">
          <h2>Projects</h2>
          <Projects />
        </Box>
        <Box className="contact">
          <h2>Contact</h2>
          <Contact />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
