import { Box, Typography } from "@mui/material";
import Timeline from "./Timeline/Timeline";

function About() {
  return (
    <>
      <Typography variant="h2" gutterBottom>
        About
      </Typography>
      <Typography>
        I’m a developer with experience in web, game design, and interactive
        digital projects. I’ve worked on small independent ventures as the sole
        developer, and large international collaborations, delivering
        high-quality solutions in both.
      </Typography>
      <br />
      <Typography>
        I’m passionate about pushing technology's limits to create immersive
        user experiences. My work spans entertainment, tech, and business, from
        optimizing web apps to building engaging games and interactive
        interfaces.
      </Typography>
      <br />
      <Typography>
        Outside of work, I enjoy video games, home automation, 3D printing, and
        the occasional Magic: The Gathering match.
      </Typography>
      <Box className="flex flex-col justify-center items-center bg-white-900 text-white text-base pb-8 sm:text-lg">
        <Timeline />
      </Box>
    </>
  );
}

export default About;
