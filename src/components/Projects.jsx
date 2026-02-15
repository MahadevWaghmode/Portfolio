import { Box, Typography, Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";
import Heading from "./Heading";

const projects = [
  {
    title: "Quick Salon",
    duration: "November 2023 – June 2024",
    points: [
      "Real-time appointment booking system.",
      "Location-based salon discovery.",
      "Admin & customer dashboards.",
    ],
    techStack: ["React", "Java", "MySQL"],
    link: "https://github.com/MahadevWaghmode/QuickSalon",
  },
  {
    title: "Digital Board",
    duration: "November 2021 – June 2022",
    points: [
      "Air canvas using hand gestures.",
      "Built with MediaPipe & OpenCV.",
      "Real-time drawing experience.",
    ],
    techStack: ["Python", "MediaPipe", "OpenCV"],
    link: "https://github.com/MahadevWaghmode/DigitalBoard",
  },
  {
    title: "King Query",
    duration: "January 2019 – March 2019",
    points: [
      "Ad-free smart search platform.",
      "Web scraping with Scrapy.",
      "Backend using Django & MySQL.",
    ],
    techStack: ["Python", "Django", "Scrapy", "MySQL"],
    link: "https://github.com/MahadevWaghmode/KingQuery",
  },
  {
    title: "Guess Game",
    duration: "January 2021 – February 2021",
    points: [
      "Interactive web card game.",
      "Randomized gameplay logic.",
      "Clean UI with animations.",
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/MahadevWaghmode/Guess-Game",
  },
  {
    title: "Code Compiler",
    duration: "January 2021 – February 2021",
    points: [
      "Multi-language Compile and run support",
      "View results immediately after writing code.",
      "Toggle between light and dark themes.",
    ],
    techStack: ["react", "chakra-ui", "Java", "Spring Boot"],
    link: "https://github.com/MahadevWaghmode/Online-Code-Compiler",
  },
];

export default function Projects() {
  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 2 }}>
    <Heading heading="Projects" /> 

      <Grid container spacing={4}>
        {projects.map((project, i) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
            <ProjectCard
              project={project}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
