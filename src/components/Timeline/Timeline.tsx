import timelineElements from "./timelineElements";
import schoolIcon from "../../assets/school.svg";
import workIcon from "../../assets/work.svg";
import { Box, Typography, Tooltip } from "@mui/material";

interface TimelineElement {
  id: number;
  startDate: string; // ISO date format: YYYY-MM-DD
  endDate: string; // ISO date format: YYYY-MM-DD
  color: string; // This will still be used to apply specific colors if necessary
  icon: string;
  title: string;
  location: string;
  description: string;
  tech: string[];
  buttonText: string;
}

// Format ISO start/end date strings to just year
const formatYearRange = (startDate: string, endDate: string) => {
  const startYear = new Date(startDate).getFullYear();
  const endYear = new Date(endDate).getFullYear();

  return `${startYear} - ${endYear}`;
};

// Calculate duration between two ISO date strings and format as "X years Y months"
export const formatDuration = (startDate: string, endDate: string) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  let totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  // if there are leftover days, round up
  if (end.getDate() >= start.getDate()) {
    totalMonths += 1;
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts: string[] = [];

  if (years > 0) {
    parts.push(`${years} year${years !== 1 ? "s" : ""}`);
  }

  if (months > 0) {
    parts.push(`${months} month${months !== 1 ? "s" : ""}`);
  }

  return parts.length ? parts.join(" ") : "0 months";
};

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
              <Tooltip
                title={formatDuration(element.startDate, element.endDate)}
                arrow
              >
                <Box
                  style={{
                    color: "var(--deep-blue)", // Light text
                    fontSize: "0.875rem",
                    textAlign: index % 2 === 1 ? "left" : "right", // Text alignment
                  }}
                >
                  <Typography variant="h5">
                    {formatYearRange(element.startDate, element.endDate)}
                  </Typography>
                </Box>
              </Tooltip>
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
                <Typography variant={"h5"} sx={{ color: "#3B82F6" }}>
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
                <Typography sx={{ color: "#FFFFFF" }}>
                  {element.description}
                </Typography>
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
