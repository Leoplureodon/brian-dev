// Functionality
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// MUI
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";

import "./App.css";

// Pages
import Home from "./pages/Home";

// Components
import Portfolio from "./pages/Portfolio";

function App() {
  const [isDarkMode] = useState(false);

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
        main: getCSSVariable("--main-blue"),
      },
      secondary: {
        main: getCSSVariable("--accent-green"),
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
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        style={{
          fontFamily: theme.typography.fontFamily,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/portfolio"
              element={
                <Box className="portfolio">
                  <Portfolio />
                </Box>
              }
            />
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
