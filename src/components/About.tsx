import { Box, Typography } from "@mui/material";
import Timeline from "./Timeline/Timeline";

function About() {
  return (
    <>
      <Typography variant="h2" gutterBottom>
        About
      </Typography>
      <Typography>
        I'm a software engineer with over a decade of experience spanning game
        development, immersive technologies, and full-stack web applications.
        I've worked on everything from independent projects as a sole developer
        to large-scale initiatives within global organizations, delivering
        solutions used by both consumers and internal business teams.
      </Typography>
      <br />
      <Typography>
        Throughout my career I've built games, AR/VR experiences, vehicle
        configurators, interactive visualizations, and modern web applications.
        I enjoy solving complex technical challenges and creating intuitive user
        experiences that balance performance, scalability, and usability.
        Outside of work, I enjoy video games, home automation, 3D printing, and
        the occasional game of Magic: The Gathering.
      </Typography>

      <Box className="flex flex-col justify-center items-center bg-white-900 text-white text-base pb-8 sm:text-lg">
        <Timeline />
      </Box>
    </>
  );
}

export default About;
