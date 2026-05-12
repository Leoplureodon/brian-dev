import { Box } from "@mui/material";

// Components
import Intro from "../components/Intro";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
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
    </>
  );
}

export default Home;
