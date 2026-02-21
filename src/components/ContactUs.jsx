import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  Typography,
  IconButton,
  TextField,
  Button,
  Stack,
  Divider,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import TerminalDesign from "./TerminalDesign";
import { Code } from "@mui/icons-material";

export default function ContactUs() {
  return (
    <Box sx={{ py: 6 }}>
      {/* INTRO TEXT */}
      <Box sx={{ textAlign: "center", maxWidth: 700, mx: "auto", mb: 5 }}>
        <Typography variant="h4" fontWeight="bold" mb={1}>
          Let’s Connect!
        </Typography>

        <Typography color="text.secondary" fontSize="1.05rem">
          I'm always open to new opportunities and collaborations. Feel free to
          reach out through any of the platforms above. Whether you have a
          question, want to discuss a project, or just want to say hi, I'd love
          to hear from you!
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {/* LEFT PROFILE CARD */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ p: 3, textAlign: "center", height: "100%" }}>
            <Box
              sx={(theme) => ({
                position: "relative",
                width: { xs: 120, sm: 170, md: 220 },
                height: { xs: 120, sm: 170, md: 220 },
                mx: "auto",
                mb: 2,

                // 🔥 Aura Glow Background
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: -15,
                  borderRadius: "50%",
                  background: `radial-gradient(circle,
        ${theme.palette.primary.main}55 0%,
        ${theme.palette.primary.main}22 40%,
        transparent 70%
      )`,
                  filter: "blur(25px)",
                  zIndex: 0,
                },
              })}
            >
              <Avatar
                src="./profile.png"
                sx={(theme) => ({
                  width: "100%",
                  height: "100%",
                  border: "4px solid",
                  borderColor: theme.palette.primary.main,
                  position: "relative",
                  zIndex: 1,
                  boxShadow: `0 0 25px ${theme.palette.primary.main}40`,
                })}
              />
            </Box>

            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: {
                  xs: "1.8rem", // mobile
                  sm: "2.2rem",
                  md: "2.5rem", // desktop size close to h4
                },
              }}
            >
              Mahadev Waghmode
            </Typography>

            <Typography color="text.secondary" mb={2}>
              Full Stack Developer
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Stack direction="row" justifyContent="center" spacing={2} mt={2}>
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
                    py: 1,
                    px: 2,
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
          </Card>
        </Grid>

        {/* RIGHT CONTACT FORM */}
        <Grid size={{ Xs: 12, md: 6 }}>
          <TerminalDesign />
        </Grid>
      </Grid>
    </Box>
  );
}
