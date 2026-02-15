import { Box, Typography } from '@mui/material'
import React from 'react'

const Heading = ({heading}) => {
  return (
     <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb:8,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: 96, height: "2px", bgcolor: "#1a1443" }} />

          <Typography
            sx={{
              bgcolor: "#1a1443",
              color: "white",
              px: 3,
              py: 1,
              mx: 1.5,
              fontSize: "1.25rem",
              borderRadius: 1,
              fontWeight: 500,
            }}
          >
            {heading}
          </Typography>

          <Box sx={{ width: 96, height: "2px", bgcolor: "#1a1443" }} />
        </Box>
      </Box>
  )
}

export default Heading