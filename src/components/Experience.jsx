import { Box, Typography, Paper } from "@mui/material";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import ExpCard from "./ExpCard";
import Heading from "./Heading";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Plutecoder Technology",
    period: "Mar 2023 – Jan 2024",
    points: [
      "Built full-stack app using React & Spring Boot",
      "Created 20+ responsive UI components",
      "Developed 15+ REST APIs",
      "Improved performance by 35%",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Freelance",
    period: "Feb 2024 – Present",
    points: [
      "Built modern dashboards using React & MUI",
      "Improved UX performance by 40%",
      "Created reusable UI systems",
      "Optimized performance & SEO",
    ],
  },
];

export default function Experience() {
  return (
    <Box sx={{ mt:4 }}>
     <Heading heading="Experience" />

      <Timeline
        sx={{
          // pl: 0,
          "& .MuiTimelineItem-root:before": {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {index !== experiences.length && <TimelineConnector />}
            </TimelineSeparator>

            <TimelineContent sx={{ pb: 4 }}>
              <ExpCard exp={exp} />
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}
