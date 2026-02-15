import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

const ExpCard = ({ exp }) => {
  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 2,
        ml: 1,
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" fontWeight="bold">
          {exp.role}
        </Typography>

        <Typography color="text.secondary" mb={1}>
          {exp.company} • {exp.period}
        </Typography>

        <Box component="ul" sx={{ pl: 2, m: 0 }}>
          {exp.points.map((point, i) => (
            <li key={i}>
              <Typography variant="body2">{point}</Typography>
            </li>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ExpCard;
