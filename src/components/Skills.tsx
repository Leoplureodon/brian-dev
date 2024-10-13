import { Box, Grid, Paper, Typography } from "@mui/material";
import {
  FaReact,
  FaHtml5,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaBitbucket,
  FaPython,
  FaDatabase,
  FaCloudDownloadAlt,
  FaGooglePlay,
  FaAppStore,
} from "react-icons/fa";
import {
  SiVite,
  SiTypescript,
  SiWindowsterminal,
  SiUnrealengine,
  SiVisualstudiocode,
  SiAzuredevops,
  SiCsharp,
  SiJavascript,
  SiPostgresql,
  SiUnity,
  SiCsswizardry,
  SiAdobephotoshop,
} from "react-icons/si";
import { AiOutlineApi, AiFillPicture } from "react-icons/ai";
import { MdCloudSync, MdCloudDone } from "react-icons/md";
import { LiaNode } from "react-icons/lia";
import { GrMysql } from "react-icons/gr";

type SkillType = "web" | "languages" | "games" | "tools";

interface Skill {
  skillType: SkillType;
  name: string;
  icon: JSX.Element;
}

const mySkills: Skill[] = [
  { skillType: "web", name: "React", icon: <FaReact /> },
  { skillType: "web", name: "HTML", icon: <FaHtml5 /> },
  { skillType: "web", name: "CSS", icon: <SiCsswizardry /> },
  { skillType: "web", name: "Vite", icon: <SiVite /> },
  { skillType: "web", name: "REST API", icon: <AiOutlineApi /> },
  { skillType: "web", name: "Databases", icon: <FaDatabase /> },
  { skillType: "web", name: "Front End", icon: <AiFillPicture /> },
  { skillType: "web", name: "Back End", icon: <FaCloudDownloadAlt /> },
  { skillType: "web", name: "Dev Ops", icon: <MdCloudDone /> },
  { skillType: "web", name: "CI/CD", icon: <MdCloudSync /> },
  { skillType: "web", name: "Node JS", icon: <LiaNode /> },
  { skillType: "languages", name: "TypeScript", icon: <SiTypescript /> },
  { skillType: "languages", name: "C#", icon: <SiCsharp /> },
  { skillType: "languages", name: "Java", icon: <FaJava /> },
  { skillType: "languages", name: "JavaScript", icon: <SiJavascript /> },
  { skillType: "languages", name: "Python", icon: <FaPython /> },
  { skillType: "languages", name: "Batch", icon: <SiWindowsterminal /> },
  { skillType: "games", name: "Unity", icon: <SiUnity /> },
  { skillType: "games", name: "Unreal Engine", icon: <SiUnrealengine /> },
  { skillType: "tools", name: "Visual Studio", icon: <SiVisualstudiocode /> },
  { skillType: "tools", name: "Azure Dev Ops", icon: <SiAzuredevops /> },
  { skillType: "tools", name: "PostgreSQL", icon: <SiPostgresql /> },
  { skillType: "tools", name: "MySQL", icon: <GrMysql /> },
  { skillType: "tools", name: "Git", icon: <FaGitAlt /> },
  { skillType: "tools", name: "GitHub", icon: <FaGithub /> },
  { skillType: "tools", name: "Bitbucket", icon: <FaBitbucket /> },
  { skillType: "tools", name: "Docker", icon: <FaDocker /> },
  { skillType: "tools", name: "App Store", icon: <FaAppStore /> },
  { skillType: "tools", name: "Play Store", icon: <FaGooglePlay /> },
  { skillType: "tools", name: "Photoshop", icon: <SiAdobephotoshop /> },
];

const groupedSkills = mySkills.reduce(
  (acc: Record<SkillType, Skill[]>, skill) => {
    if (!acc[skill.skillType]) acc[skill.skillType] = [];
    acc[skill.skillType].push(skill);
    return acc;
  },
  { web: [], languages: [], games: [], tools: [] }
);

function Skills() {
  return (
    <>
      <Typography variant="h2" gutterBottom>
        Skills
      </Typography>
      <Paper style={{ padding: 16 }}>
        {Object.keys(groupedSkills).map((skillType) => (
          <div key={skillType}>
            <Typography variant="h6" style={{ marginBottom: 16 }}>
              {skillType.charAt(0).toUpperCase() + skillType.slice(1)}
            </Typography>
            <Grid container spacing={2}>
              {groupedSkills[skillType as SkillType].map((skill, index) => (
                <Grid item xs={3} sm={2} md={2} lg={2} key={index}>
                  <div style={{ textAlign: "center" }}>
                    <Box
                      style={{ fontSize: 40 }}
                      sx={{
                        fontSize: 40,
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.3)",
                        },
                      }}
                    >
                      {skill.icon ? skill.icon : "N/A"}
                    </Box>
                    <Typography variant="body1">{skill.name}</Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        ))}
      </Paper>
    </>
  );
}

export default Skills;
