import { Box, Typography, Container, Stack, Button, Grid } from "@mui/material";

import Typewriter from "typewriter-effect";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Code } from "@mui/icons-material";

export default function Hero() {
  return (
    <Box
      sx={(theme) => ({
        minHeight: 600,
        display: "flex",
        alignItems: "center",
      })}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {/* LEFT CONTENT */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Box
              sx={{
                textAlign: { xs: "center", md: "left" },

                maxWidth: 600,
              }}
            >
              {/* Greeting */}
              <Typography
                variant="h5"
                sx={{
                  color: "text.primary",
                  mb: 1,
                  opacity: 0.9,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "center", md: "flex-start" },
                  gap: 1,
                }}
              >
               👋 Hi, I'm
              </Typography>

              {/* Name */}
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
                  fontWeight: 700,
                }}
              >
                Mahadev Waghmode
              </Typography>

              {/* Role */}
              <Typography
                variant="h3"
                sx={{
                  background: "linear-gradient(180deg, #6e56cf 0%, #7c3aed 20%, #a855f7 40%, #c084fc 60%, #e879f9 80%, #b455f6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: { xs: "1.2rem", sm: "1.7rem", md: "2.2rem" },
                  fontWeight: 500,
                  mb: 2,
                }}
              >
                <Typewriter
                  options={{
                    strings: ["Java Developer", "Full Stack Developer"],
                    autoStart: true,
                    loop: true,
                    delay: 70,
                    deleteSpeed: 40,
                    pauseFor: 1200,
                    cursor: "|",
                  }}
                />
              </Typography>

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  color: "text.primary",
                  mb: 4,
                  opacity: 0.85,
                  maxWidth: 500,
                  mx: { xs: "auto", md: 0 },
                }}
              >
                Passionate about building powerful backend systems
                and elegant user interfaces.
                I transform ideas into scalable,
                high-performance digital solutions using Java,
                Spring Boot, React, and modern cloud-ready technologies.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{
                  mb: 4,
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Button variant="contained" size="large" onClick={() => {
                  document.getElementById("project")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}>
                  View Projects
                </Button>

                <Button variant="outlined" size="large">
                  Contact Me
                </Button>
              </Stack>
            </Box>
          </Grid>

          {/* RIGHT AVATAR + SOCIALS */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack alignItems="center" spacing={3}>
              <Box
                sx={(theme) => ({
                  width: 280,
                  height: 280,
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  p: "6px",
                  position: "relative",

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: -15,
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    filter: "blur(40px)",
                    opacity: 0.4,
                    zIndex: -1,
                  },
                })}
              >
                <Box
                  component="img"
                  src="./profile.png"
                  alt="profile"
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                    bgcolor: "background.paper",
                  }}
                />
              </Box>

              <Stack direction="row" spacing={2} mt={2}>
                {[
                  { Icon: GitHubIcon, color: "text.primary", link: "https://github.com/MahadevWaghmode" },
                  { Icon: LinkedInIcon, color: "#0A66C2", link: "https://www.linkedin.com/in/mahadev-waghmode" },
                  { Icon: EmailIcon, color: "text.primary", link: "mailto:mahadevwaghmode2@gmail.com" },
                  { Icon: Code, color: "success.main", link: "https://www.hackerrank.com/profile/mahadevwaghmode2" },
                ].map(({ Icon, color, link }, i) => (
                  <Button
                    key={i}
                    component="a"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    variant="outlined"
                    sx={{
                      minWidth: 0,
                      color,
                      transition: "all .25s ease",
                      "&:hover": {
                        backgroundColor: "primary.light",
                        transform: "translateY(-3px)",
                        boxShadow: (theme) =>
                          theme.palette.mode === "dark"
                            ? "0 6px 18px rgba(110,86,207,.45)"
                            : "0 6px 16px rgba(110,86,207,.25)",
                      },
                    }}
                  >
                    <Icon />
                  </Button>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
