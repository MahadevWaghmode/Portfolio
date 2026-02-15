import { Card, Typography, Grid, Stack, Box } from "@mui/material";

export default function SkillCard({ title, skills }) {
  return (
    <Card
      sx={(theme) => ({
        height: "100%",
        p: 4,
        borderRadius: 4,
        border: `1px solid ${theme.palette.divider}`,
        // boxShadow:
        //   theme.palette.mode === "light"
        //     ? "0 12px 28px rgba(0,0,0,.12)"
        //     : "0 12px 28px rgba(0,0,0,.45)",
        transition: ".3s",
        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: theme.palette.primary.main,
        },
      })}
    >
      <Typography
        variant="h6"
        mb={3}
        fontWeight={700}
        sx={(theme) => ({
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        })}
      >
        {title}
      </Typography>

      {/* Gradient Bar */}
      <Box
        sx={(theme) => ({
          mt: -2,
          mb: 3,
          height: "2px",
          width: "100%",
          borderRadius: 2,
          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        })}
      />

      <Grid container spacing={3}>
        {skills.map((skill) => (
          <Grid size={{ xs: 4, sm: 2.4 }}  key={skill.name}>
            <Stack
              alignItems="center"
              spacing={1}
              sx={{
                transition: ".25s",
                "&:hover": {
                  transform: "scale(1.08)",
                },
              }}
            >
              <Box
                sx={(theme) => ({
                  p: 2,
                  borderRadius: 3,
                  bgcolor: "text.primary",
                  border: `1px solid ${theme.palette.divider}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
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
                  }}
                />
              </Box>

              <Typography fontSize={13} fontWeight={500} color="text.primary">
                {skill.name}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
}
