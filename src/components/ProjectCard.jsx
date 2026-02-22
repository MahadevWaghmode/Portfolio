import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  Button,
  Chip,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useState } from "react";
import { ArrowOutwardOutlined } from "@mui/icons-material";
import DetailModal from "./DetailModal";

export default function ProjectCard({ project }) {

  const [selectedProject, setSelectedProject] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card
      sx={(theme) => ({
        p: 3,
        borderRadius: 4,
        position: "relative",
        overflow: "hidden",
        background: theme.palette.background.paper,
        border: `1px solid ${theme.palette.divider}`,
        transition: "all .4s ease",
        backdropFilter: "blur(1px)",

        // 🔥 Top Gradient Glow Line
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "3px",
          background: `linear-gradient(90deg,
            ${theme.palette.primary.main},
            ${theme.palette.secondary.main}
          )`,
        },

        "&:hover": {
          transform: "scale(1.02)",
          borderColor: theme.palette.primary.main,
          boxShadow: `0 20px 50px ${theme.palette.primary.main}22`,
        },
      })}
    >
      <CardContent sx={{ p: 0 }}>
        {/* Header */}
        <Stack spacing={0.5} mb={2}>
          <Typography variant="h5" fontWeight={700}>
            {project.title}
          </Typography>

          <Typography
            variant="body2"
            sx={(theme) => ({
              color: theme.palette.text.secondary,
            })}
          >
            <Box
              component="span"
              sx={{ color: "primary.main", fontWeight: 600 }}
            >
              Period:
            </Box>{" "}
            {project.duration}
          </Typography>
        </Stack>

        {/* Description Points */}
        <Box component="ul" sx={{ pl: 2, mb: 2 }}>
          {project.points?.length ? (
            <>
              {project.points.slice(0, 3).map((pt, idx) => (
                <Typography
                  key={idx}
                  component="li"
                  variant="body2"
                  sx={{ mb: 0.8, lineHeight: 1.6 }}
                >
                  {pt} {idx >1 && (
                    <Box component="span"
                    color="primary.main"
                    >
                      ...
                    </Box>
                  )}
                </Typography>
              ))}


            </>
          ) : (
            <Typography variant="body2" color="text.secondary">
              No project details available.
            </Typography>
          )}
        </Box>

        {/* Tech Stack */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            my: 2,
          }}
        >
          {project.techStack.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={(theme) => ({
                fontWeight: 500,
                background: `${theme.palette.primary.main}15`,
                color: theme.palette.primary.main,
                border: `1px solid ${theme.palette.primary.main}40`,
                maxWidth: "100%",
              })}
            />
          ))}
        </Box>

        {/* Footer Buttons */}
        <Stack direction="row" justifyContent="flex-start" gap={2} >
          <Button
            href={project.link}
            target="_blank"
            startIcon={<GitHubIcon />}
            sx={(theme) => ({
              textTransform: "none",
              fontWeight: 600,
              background: `linear-gradient(135deg,
                ${theme.palette.primary.main},
                ${theme.palette.secondary.main}
              )`,
              color: "#fff",
              px: 2.5,
              borderRadius: "9px",
              "&:hover": {
                opacity: 0.9,
              },
            })}
          >
            View Code
          </Button>
          <Button
            variant="outlined"
            endIcon={<ArrowOutwardOutlined />}
            onClick={() => handleOpen(project)}
            sx={(theme) => ({
              textTransform: "none",
              fontWeight: 600,
              px: 2.5,
              borderRadius: "9px",
              "&:hover": {
                opacity: 0.9,
              },
            })}
          >
            Details
          </Button>

        </Stack>
      </CardContent>

      <DetailModal
        open={open}
        onClose={handleClose}
        project={selectedProject}
      />
    </Card>
  );
}