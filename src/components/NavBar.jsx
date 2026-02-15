import {
  DarkMode,
  LightMode,
  Menu,
} from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Container,
  Stack,
  Box,
  Button,
  Drawer,
} from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "../theme/ThemeContext";

const navItems = ["Home", "Education", "Skills", "Projects", "Experience", "Contact"];

const NavBar = ({ position = "sticky" }) => {
  const { mode, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <AppBar
        position={position}
        elevation={0}
        sx={{
          backdropFilter: "blur(12px)",
          background:
            mode === "dark"
              ? "rgba(10,10,25,.85)"
              : "rgba(255,255,255,.7)",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {/* BRAND */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                cursor: "pointer",
                background: "linear-gradient(90deg,#6e56cf,#b455f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              onClick={() => scrollTo("home")}
            >
              Mahadev.dev
            </Typography>

            {/* DESKTOP MENU */}
            <Stack
              direction="row"
              spacing={3}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {navItems.map((item) => (
                <Button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  sx={{
                    color: "text.primary",
                    fontWeight: 500,
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: 0,
                      height: 2,
                      left: 0,
                      bottom: -4,
                      backgroundColor: "primary.main",
                      transition: "width .3s ease",
                    },
                    "&:hover::after": {
                      width: "100%",
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Stack>

            {/* RIGHT ACTIONS */}
            <Box>
              <IconButton onClick={toggleTheme} sx={{ mr: 1 }}>
                {mode === "light" ? <DarkMode /> : <LightMode />}
              </IconButton>

              <IconButton
                sx={{ display: { xs: "inline-flex", md: "none" } }}
                onClick={() => setOpen(true)}
              >
                <Menu />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 220, p: 3 }}>
          <Stack spacing={2}>
            {navItems.map((item) => (
              <Button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
              >
                {item}
              </Button>
            ))}
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};

export default NavBar;
