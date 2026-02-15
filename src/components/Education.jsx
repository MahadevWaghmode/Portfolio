import { Box, Typography, Paper, useTheme, useMediaQuery, Card } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
  timelineItemClasses,
  timelineOppositeContentClasses,
} from "@mui/lab";
import Heading from "./Heading";

const education = [
  {
    title: "BTech in Computer Science",
    institute: "JSPM Bhagwant Institute of Technology",
    duration: "2019 – 2022",
    location: "Barshi, Solapur",
    icon: <WorkspacePremiumIcon />,
    color: "primary",
  },
  {
    title: "Diploma in Computer Technology",
    institute: "Government Polytechnic",
    duration: "2015 – 2019",
    location: "Solapur",
    icon: <SchoolIcon />,
    color: "secondary",
  },
  {
    title: "10th Standard",
    institute: "K.N.M. Gadsing Mitra Vidyalaya",
    duration: "2014 – 2015",
    location: "Malegaon, Solapur",
    icon: <EmojiEventsIcon />,
    color: "success",
  },
];

export default function Education() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ py: 10, px: { xs: 2, md: 6 } }}>
      <Heading heading="Education Journey" />
      <Box
        sx={{
          mx: "auto",
          maxWidth: 1100,
        }}
      >
        <Timeline
          position={isMobile ? "right" : "alternate-reverse"}
          sx={{
            "& .MuiTimelineItem-root:before": {
              flex: 0,
              padding: 0,
            },

            "& .MuiTimelineConnector-root": {
              width: 3,
              background: "linear-gradient(180deg,#6366f1,#22c55e)",
            },

            ...(isMobile && {
              [`& .${timelineOppositeContentClasses.root}`]: {
                display: "none", // hide date column on mobile
              },
            }),
          }}
        >
          {education.map((edu, i) => (
            <TimelineItem key={i}>
              <TimelineOppositeContent
                sx={{
                  m: "auto 0",
                  color: "#64748b",
                  fontWeight: 600,
                  fontSize: ".9rem",
                }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                {edu.duration}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot
                  color={edu.color}
                  sx={{
                    p: 1.2,
                    boxShadow: "0 0 0 6px rgba(99,102,241,.15)",
                  }}
                >
                  {edu.icon}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Card
                  sx={(theme) => ({
                    p: 3,
                    borderRadius: 4,
                    backgroundColor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                    transition: ".3s",

                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow:
                        theme.palette.mode === "light"
                          ? "0 20px 40px rgba(0,0,0,.15)"
                          : "0 20px 40px rgba(0,0,0,.45)",
                    },
                  })}
                >
                  <Typography fontWeight={800}>{edu.title}</Typography>

                  <Typography
                    sx={(theme) => ({
                      color: theme.palette.primary.main,
                      mt: 0.5,
                    })}
                  >
                    {edu.institute}
                  </Typography>

                  {isMobile && (
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: ".9rem",
                      }}
                      variant="body2"
                      color="text.secondary"
                    >
                      {edu.duration}
                    </Typography>
                  )}

                  <Typography
                    variant="body2"
                    sx={(theme) => ({
                      color: theme.palette.text.secondary,
                      mt: 0.5,
                    })}
                  >
                    {edu.location}
                  </Typography>
                </Card>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </Box>
  );
}
