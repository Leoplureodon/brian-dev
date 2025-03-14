import timelineElements from "./timelineElements";
import schoolIcon from "../../assets/school.svg";
import workIcon from "../../assets/work.svg";
import { Box, Typography } from "@mui/material";

interface TimelineElement {
  id: number;
  date: string;
  color: string; // This will still be used to apply specific colors if necessary
  icon: string;
  title: string;
  location: string;
  description: string;
  tech: string[];
  buttonText: string;
}

export default function Timeline() {
  return (
    <Box
      style={{
        position: "relative",
        padding: "20px",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      {/* Vertical line in the center */}
      <Box
        style={{
          position: "absolute",
          top: "0",
          left: "50%",
          width: "2px",
          height: "100%",
          backgroundColor: "#3B82F6", // Light blue for the vertical line
          zIndex: 0,
        }}
      ></Box>

      {timelineElements.map((element: TimelineElement, index: number) => {
        const iconSrc = element.icon === "school" ? schoolIcon : workIcon;

        return (
          <Box
            key={element.id}
            style={{
              display: "flex",
              flexDirection: index % 2 === 1 ? "row" : "row-reverse", // Alternate side for each element
              alignItems: "flex-start",
              marginBottom: "40px",
              position: "relative",
              padding: "20px 0", // Vertical padding
            }}
          >
            {/* Timeline element icon and date */}
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: index % 2 === 1 ? "flex-start" : "flex-end", // Align items based on side
                position: "relative",
                width: "30%", // Ensure it takes a specific width
              }}
            >
              {/* Timeline element icon */}
              <img
                src={iconSrc}
                alt={element.icon}
                style={{
                  width: "50px",
                  height: "50px",
                  padding: "8px",
                  zIndex: 1,
                  marginBottom: "8px", // Space below icon
                }}
              />

              {/* Date text */}
              <Box
                style={{
                  color: "var(--deep-blue)", // Light text
                  fontSize: "0.875rem",
                  textAlign: index % 2 === 1 ? "left" : "right", // Text alignment
                }}
              >
                <Typography variant="h5">{element.date}</Typography>
              </Box>
            </Box>

            {/* Main content block */}
            <Box
              style={{
                border: "1px solid #374151", // Dark gray border
                borderRadius: "8px",
                padding: "20px", // Padding for main content
                backgroundColor: "#1E3A8A", // Deep blue background
                width: "60%", // Ensure main content takes a specific width
                textAlign: "left", // Align text to the left
                position: "relative",
                zIndex: 5,
                marginLeft: index % 2 === 1 ? "10px" : "0", // Additional margin for the right side
                marginRight: index % 2 === 1 ? "0" : "10px", // Additional margin for the left side
              }}
            >
              {/* Title */}
              <Box style={{ fontSize: "1.25rem", fontWeight: "500" }}>
                <Typography variant={"h5"} color="#3B82F6">
                  {element.title}
                </Typography>
              </Box>

              {/* Location */}
              <Box
                style={{
                  color: "var(--light-gray)", // Light gray text for location
                  marginBottom: "16px",
                  fontSize: "0.875rem",
                }}
              >
                <Typography variant={"h6"}>{element.location}</Typography>
              </Box>

              {/* Description */}
              <Box style={{ marginBottom: "16px" }}>
                <Typography color="white">{element.description}</Typography>
              </Box>

              {/* Tech stack */}
              <Box
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "flex-start", // Align tech tags to the start
                  marginBottom: "16px",
                }}
              >
                {element.tech.map((tech, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: "#3B82F6", // Light blue for tech tags
                      color: "white",
                      borderRadius: "16px",
                      padding: "4px 8px",
                      fontSize: "0.875rem",
                      margin: "4px",
                    }}
                  >
                    <Typography>{tech}</Typography>
                  </span>
                ))}
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
