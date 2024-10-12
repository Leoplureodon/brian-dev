import {
  Tooltip,
  Avatar,
  Typography,
  ButtonGroup,
  Button,
  Grid,
} from "@mui/material";
import image from "../images/avatar.webp";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Intro() {
  const scrollToSection = (section: string, behavior: ScrollBehavior) => {
    const contactSection = document.querySelector("." + section);
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: behavior });
    }
  };

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
      style={{ padding: "20px", textAlign: "center", minHeight: "70vh" }}
    >
      {/* Avatar section */}
      <Grid
        item
        xs={12}
        sm={6}
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px", // Reduce margin for mobile
        }}
      >
        <Avatar
          src={image}
          alt="Portrait photo of Brian O'Rourke"
          sx={{
            width: { xs: 150, sm: 300 }, // Responsive sizing
            height: { xs: 150, sm: 300 },
          }}
        />
      </Grid>

      {/* Text section */}
      <Grid item xs={12} sm={6}>
        <Typography
          variant="h1"
          sx={{
            marginBottom: { xs: "5px", sm: "10px" }, // Adjust for mobile
            fontSize: { xs: "2rem", sm: "3rem" },
            lineHeight: { xs: 1.2, sm: 1.1 },
          }}
        >
          Brian O'Rourke
        </Typography>
        <Typography
          variant="h3"
          sx={{
            marginBottom: { xs: "5px", sm: "10px" }, // Adjust for mobile
            fontSize: { xs: "1.5rem", sm: "2rem" },
            lineHeight: { xs: 1.2, sm: 1.1 },
          }}
        >
          Full Stack Engineer | Game Developer
        </Typography>
        <Typography
          variant="h4"
          sx={{
            marginBottom: { xs: "15px", sm: "20px" }, // Adjust for mobile
            fontSize: { xs: "1.25rem", sm: "1.5rem" },
            lineHeight: { xs: 1.2, sm: 1.1 },
          }}
        >
          Innovative, Dedicated, Collaborative
        </Typography>
        <Typography
          sx={{
            marginBottom: "20px",
            fontSize: { xs: "0.875rem", sm: "1rem" },
            lineHeight: { xs: 1.5, sm: 1.5 },
          }}
        >
          Award-winning developer with a passion for creating impactful
          experiences.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ marginBottom: "20px" }}
        >
          Download CV
        </Button>
        <br />
        <br />
        <ButtonGroup style={{ marginBottom: "20px" }}>
          <Tooltip title="Visit my LinkedIn profile" arrow>
            <Button
              component="a"
              href="https://www.linkedin.com/in/leoplureodon/"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              color="primary"
            >
              <FaLinkedin style={{ fontSize: 30 }} />
            </Button>
          </Tooltip>
          <Tooltip title="Visit my GitHub" arrow>
            <Button
              component="a"
              href="https://github.com/Leoplureodon"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              color="primary"
            >
              <FaGithub style={{ fontSize: 30 }} />
            </Button>
          </Tooltip>
          <Tooltip title="Contact Me" arrow>
            <Button
              onClick={() => scrollToSection("contact", "instant")}
              variant="outlined"
              color="primary"
            >
              <MdEmail style={{ fontSize: 30 }} />
            </Button>
          </Tooltip>
        </ButtonGroup>
        <Button
          style={{
            position: "absolute",
            bottom: "50px", // Keeps it at the bottom of the page
            left: "50%",
            transform: "translateX(-50%)", // Center the button horizontally
            color: "white", // Set the text color to white
            backgroundColor: "transparent", // Make the background transparent
            border: "1px solid white", // Add a white border
          }}
          className="see-more"
          onClick={() => scrollToSection("about", "smooth")}
        >
          See More
        </Button>
      </Grid>
    </Grid>
  );
}

export default Intro;
