import { Box, Grid, Icon, Stack, Typography } from "@mui/material";
import Heading from "./Heading";
import Marquee from "react-fast-marquee";
import { useState } from "react";


const Skills = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", category: "Languages" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", category: "Languages" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", category: "Languages" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", category: "Languages" },
  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg", category: "Languages" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", category: "Backend" },
  { name: "Hibernate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg", category: "Backend" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg", category: "Backend" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", category: "Backend" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", category: "Backend" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", category: "Backend" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", category: "Backend" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", category: "Frontend" },
  { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg", category: "Frontend" },
  { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg", category: "Frontend" },
  { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg", category: "Frontend" },
  // { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", category: "DevTools" },
  // { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", category: "DevTools" },
  // { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", category: "DevTools" },
  // { name: "Eclipse", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg", category: "DevTools" },
  // { name: "PyCharm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg", category: "DevTools" },
  // { name: "Android Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg", category: "DevTools" },
  // { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", category: "DevTools" },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(Skills[0].category);

  return (
    <Box sx={{ mt: 8, pt: 2 }}>
      <Heading heading="Skills" />
      <Box p={5}>
        <Marquee
          gradient={false}
          speed={100}
          pauseOnHover={true}
          pauseOnClick={false}
          delay={0}
          play={true}
          direction="left"
          autoFill={true}
        >

          {Skills.map((skill) => (

            <Box
              key={skill.name}
              sx={{
                width: 140,
                m: 3,
                transition: "all 0.4s ease",
                cursor: "pointer",

              }}
            >
              <Box
                sx={(theme) => ({
                  p: 3,
                  borderRadius: 3,
                  textAlign: "center",
                  backgroundColor: theme.palette.background.paper,
                  border: `1px solid ${theme.palette.divider}`,
                  transition: "all 0.4s ease",
                  
                  "&:hover": {
                    transform: "scale(1.15)",
                    borderColor: theme.palette.primary.main,
                    boxShadow: `0 0 25px ${theme.palette.primary.main}40`,
                  },
                })}
              >
                <Box
                  component="img"
                  src={skill.icon}
                  alt={skill.name}
                  sx={{
                    width: 34,
                    height: 34,
                    objectFit: "contain",
                    mb: 1,
                  }}
                />

                <Typography
                  sx={(theme) => ({
                    color: theme.palette.text.primary,
                    fontWeight: 500,
                  })}
                >
                  {skill.name}
                </Typography>
              </Box>
            </Box>
          ))}
        </Marquee>
      </Box>

    </Box>
  );
}