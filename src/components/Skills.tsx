import type { ReactElement } from "react";
import { Box, Grid, Typography } from "@mui/material";
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
  FaTerminal,
} from "react-icons/fa";
import {
  SiVite,
  SiTypescript,
  SiUnrealengine,
  SiJavascript,
  SiPostgresql,
  SiUnity,
  SiCsswizardry,
  SiAdobephotoshop,
} from "react-icons/si";
import { AiOutlineApi, AiFillPicture } from "react-icons/ai";
import { MdCloudSync, MdCloudDone } from "react-icons/md";
import { GrMysql } from "react-icons/gr";
import { TbAugmentedReality, TbBrandCSharp } from "react-icons/tb";
import { BsHeadsetVr } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa6";
import { TiFlowChildren } from "react-icons/ti";
import { BiLogoVisualStudio } from "react-icons/bi";
import { VscAzureDevops } from "react-icons/vsc";

type SkillType = "web" | "languages" | "games" | "tools";

interface Skill {
  skillType: SkillType;
  name: string;
  icon: ReactElement;
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
  { skillType: "web", name: "Node JS", icon: <FaNodeJs /> },
  { skillType: "languages", name: "TypeScript", icon: <SiTypescript /> },
  { skillType: "languages", name: "C#", icon: <TbBrandCSharp /> },
  { skillType: "languages", name: "Java", icon: <FaJava /> },
  { skillType: "languages", name: "JavaScript", icon: <SiJavascript /> },
  { skillType: "languages", name: "Python", icon: <FaPython /> },
  { skillType: "languages", name: "Batch", icon: <FaTerminal /> },
  { skillType: "games", name: "Unity", icon: <SiUnity /> },
  { skillType: "games", name: "Unreal Engine", icon: <SiUnrealengine /> },
  { skillType: "games", name: "AR", icon: <TbAugmentedReality /> },
  { skillType: "games", name: "VR", icon: <BsHeadsetVr /> },
  { skillType: "tools", name: "Scrum Agile", icon: <TiFlowChildren /> },
  { skillType: "tools", name: "Visual Studio", icon: <BiLogoVisualStudio /> },
  { skillType: "tools", name: "Azure Dev Ops", icon: <VscAzureDevops /> },
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
      <Box style={{ padding: 16 }}>
        {Object.keys(groupedSkills).map((skillType) => (
          <div key={skillType}>
            <Typography
              color="#64b5f6"
              variant="h4"
              style={{ marginBottom: 16 }}
            >
              {skillType.charAt(0).toUpperCase() + skillType.slice(1)}
            </Typography>
            <Grid container spacing={2}>
              {groupedSkills[skillType as SkillType].map((skill, index) => (
                <Grid item xs={3} sm={2} md={2} lg={2} key={index}>
                  <div
                    style={{
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
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
                    <Typography variant="body1" style={{ marginTop: 8 }}>
                      {skill.name}
                    </Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        ))}
      </Box>
    </>
  );
}

export default Skills;
