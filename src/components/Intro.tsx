import { Avatar, Typography, ButtonGroup, Button, Grid } from "@mui/material";
import React from "react";

function Intro() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector(".about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
      style={{ padding: "20px", textAlign: "center", minHeight: "100vh" }}
    >
      {/* Avatar section */}
      <Grid
        item
        xs={12}
        sm={6}
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <Avatar
          sx={{
            width: 400, // Adjust size for better fit
            height: 400,
          }}
        />
      </Grid>

      {/* Text section */}
      <Grid item xs={12} sm={6}>
        <Typography variant="h1" style={{ marginBottom: "10px" }}>
          Brian O'Rourke
        </Typography>
        <Typography variant="h3" style={{ marginBottom: "10px" }}>
          Full Stack Engineer | Game Developer
        </Typography>
        <Typography variant="h4" style={{ marginBottom: "20px" }}>
          Innovative, Dedicated, Collaborative
        </Typography>
        <Typography style={{ marginBottom: "20px" }}>
          I'm an award-winning developer with a passion for creating impactful
          web, game, and interactive experiences. Whether working solo or as
          part of a global team, I thrive on pushing creative and technical
          boundaries.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ marginBottom: "20px" }}
        >
          Download CV
        </Button>
        <ButtonGroup style={{ marginBottom: "20px" }}>
          <Button variant="outlined" color="primary">
            LinkedIn
          </Button>
          <Button variant="outlined" color="primary">
            Github
          </Button>
          <Button variant="outlined" color="primary">
            Contact
          </Button>
        </ButtonGroup>
        <Button className="see-more" onClick={scrollToAbout}>
          See More
        </Button>
      </Grid>
    </Grid>
  );
}

export default Intro;
