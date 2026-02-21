import { Box } from "@mui/material";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import { ToastContainer } from "react-toastify";
import ContactUs from "./components/ContactUs";
import SkillsSection from "./components/SkillsSection";


function App() {
  return (
    <Box>
      <NavBar />
      {/* offset for fixed navbar */}
      <Box sx={{ pt: 10, px: 4, py: 2 }}>
        <Box id="home">
          <Hero />
        </Box>
        <Box id="education">
          <Education />
        </Box>
        <Box id="skills">
          <SkillsSection />
      
        </Box>
        <Box id="projects">
          <Projects />
        </Box>
        <Box id="experience">
          <Experience />
        </Box>
        <Box id="contact">
          <ContactUs />
        </Box>
      </Box>
      <ToastContainer position="bottom-center" theme="dark" />
    </Box>
  );
}

export default App;
