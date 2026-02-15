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

export default function ProjectCard({ project }) {
  return (
    <Card
      sx={(theme) => ({
        p: 3,
        maxWidth: 520,
        borderRadius: 4,
        background: theme.palette.background.paper,
        color: theme.palette.text.primary,
        border: `1px solid ${theme.palette.divider}`,
        boxShadow: "0 12px 28px rgba(0,0,0,0.12)",
        position: "relative",
        transition: "all .35s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 18px 40px rgba(0,0,0,0.18)",
          borderColor: theme.palette.primary.main,
        },
      })}
    >
      {/* Gradient Details Button */}
      <Button
        size="small"
        sx={(theme) => ({
          position: "absolute",
          top: 20,
          right: 20,
          color: theme.palette.text.primary,
          borderRadius: "999px",
          px: 2,
          fontWeight: 600,
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          boxShadow: `0 4px 12px ${theme.palette.primary.main}66`,
          textTransform: "none",
          "&:hover": {
            background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
            boxShadow: `0 6px 18px ${theme.palette.primary.main}99`,
          },
        })}
      >
        Details
      </Button>

      <CardContent sx={{ p: 0 }}>
        <Typography variant="h5" fontWeight={700}>
          {project.title}
        </Typography>

        <Typography sx={(theme) => ({ color: theme.palette.text.secondary, mt: 0.5 })}>
          <Box
            component="span"
            sx={(theme) => ({
              color: theme.palette.primary.main,
              fontWeight: 500,
            })}
          >
            Period:
          </Box>{" "}
          {project.duration}
        </Typography>

        <Box component="ul" sx={{ pl: 2, mt: 2 }}>
          {project.points.length > 0 ? (
            project.points.map((pt, idx) => (
              <Typography
                component="li"
                key={idx}
                fontSize={14}
                sx={(theme) => ({
                  color: theme.palette.text.primary,
                  mb: 0.7,
                  lineHeight: 1.6,
                })}
              >
                {pt}
              </Typography>
            ))
          ) : (
            <Typography fontSize={14} sx={(theme) => ({ color: theme.palette.text.secondary })}>
              No project details available.
            </Typography>
          )}
        </Box>

        {/* Tech Stack */}
        <Stack direction="row" spacing={1} flexWrap="wrap" mt={2}>
          {project.techStack.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={(theme) => ({
                backgroundColor: theme.palette.background.default,
                color: theme.palette.primary.main,
                border: `1px solid ${theme.palette.primary.light}`,
                fontWeight: 500,
              })}
            />
          ))}
        </Stack>

        {/* GitHub Button */}
        <Stack mt={3}>
          <Button
            href={project.link}
            variant="outlined"
            startIcon={<GitHubIcon />}
            sx={(theme) => ({
              alignSelf: "flex-start",
              textTransform: "none",
              fontWeight: 500,
              color: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
              "&:hover": {
                bgcolor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              },
            })}
          >
            View Code
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
