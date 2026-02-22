import { Box, Typography, Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";
import Heading from "./Heading";

const projects = [
  {
    title: "Quick Salon",
    duration: "November 2023 – June 2024",
    description:
      "Quick Salon is a real-time salon booking platform that allows users to discover nearby salons, book appointments instantly, and manage schedules efficiently. It includes separate dashboards for admins and customers with secure authentication and location-based filtering.",
    image: "/projects/quicksalon.png",
    points: [
      "Real-time appointment booking system.",
      "Location-based salon discovery.",
      "Admin & customer dashboards",
    ],
    techStack: ["React", "Java", "MySQL"],
    link: "https://github.com/MahadevWaghmode/QuickSalon",
    live: "", // add if deployed
  },

  {
    title: "Digital Board",
    duration: "November 2021 – June 2022",
    description:
      "Digital Board is an AI-powered air canvas that allows users to draw in the air using hand gestures. Built using MediaPipe and OpenCV, it detects hand movements in real time and converts them into digital strokes.",
    image: "/projects/digitalboard.png",
    points: [
      "Air canvas using hand gestures.",
      "Built with MediaPipe & OpenCV.",
      "Real-time drawing experience",
    ],
    techStack: ["Python", "MediaPipe", "OpenCV"],
    link: "https://github.com/MahadevWaghmode/DigitalBoard",
    live: "",
  },

  {
    title: "King Query",
    duration: "January 2019 – March 2019",
    description:
      "King Query is an ad-free smart search engine that aggregates results from multiple sources. It uses Scrapy for web scraping and Django as backend to serve structured and optimized search results.",
    image: "/projects/kingquery.png",
    points: [
      "Ad-free smart search platform.",
      "Web scraping with Scrapy.",
      "Backend using Django & MySQL",
    ],
    techStack: ["Python", "Django", "Scrapy", "MySQL"],
    link: "https://github.com/MahadevWaghmode/KingQuery",
    live: "",
  },

  {
    title: "Guess Game",
    duration: "January 2021 – February 2021",
    description:
      "Guess Game is an interactive browser-based card game with randomized logic and animated UI components. It focuses on smooth user interaction and engaging gameplay mechanics.",
    image: "/projects/guessgame.png",
    points: [
      "Interactive web card game.",
      "Randomized gameplay logic.",
      "Clean UI with animations",
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/MahadevWaghmode/Guess-Game",
    live: "",
  },

  {
    title: "Code Compiler",
    duration: "January 2021 – February 2021",
    description:
      "Online Code Compiler supports multiple programming languages with instant code execution. It includes theme toggling, real-time output display, and a clean developer-friendly interface powered by React and Spring Boot.",
    image: "/projects/compiler.png",
    points: [
      "Multi-language compile and run support",
      "View results immediately after writing code.",
      "Toggle between light and dark themes",
    ],
    techStack: ["React", "Chakra UI", "Java", "Spring Boot"],
    link: "https://github.com/MahadevWaghmode/Online-Code-Compiler",
    live: "",
  },
];

export default function Projects() {
  return (
    <Box sx={{ mt: 8, pt: 2 }}>
      <Heading heading="Projects" />
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, i) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i} >
            <ProjectCard
              project={project}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
