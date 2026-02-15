import {
  Box,
  Typography,
  Paper,
  Button,
  IconButton,
  CircularProgress,
  TextField,
  Card,
} from "@mui/material";
import { useState } from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { SendSharp, SwapHorizSharp } from "@mui/icons-material";
import { toast } from "react-toastify";

const Token = ({ color, children }) => (
  <Box component="span" sx={{ color }}>
    {children}
  </Box>
);

const TerminalDesign = () => {
  const [loading, setLoading] = useState(false);

  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!from.trim()) return toast.error("Please enter your email address");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from.trim()))
      return toast.error("Please enter a valid email address");

    if (!subject.trim()) return toast.error("Subject cannot be empty");
    if (!message.trim()) return toast.error("Message cannot be empty");

    setLoading(true);

    setTimeout(() => {
      const data = {
        from,
        to: "mahadevwaghmode2@gmail.com",
        subject,
        message,
      };

      console.log("📨 Contact Form Object:", data);

      toast.success("Message sent successfully!");
      toast.success("Thanks for reaching out! I'll get back to you soon.");

      setLoading(false);

      // ✅ reset AFTER send completes
      setFrom("");
      setSubject("");
      setMessage("");
    }, 1500);
  };

  const handleReset = () => {
    setFrom("");
    setSubject("");
    setMessage("");
    toast.info("Form reseted");
  };

  return (
    <Card
      // elevation={8}
      sx={{
        
        minHeight: 400,
        maxHeight: 500,
        bgcolor: "grey.900",
        color: "grey.100",
        fontFamily: '"JetBrains Mono", "Cascadia Code", Consolas, monospace',
        borderRadius: 2,
        overflow: "hidden",
        border: 1,
        borderColor: false ? "error.main" : "grey.800",
        position: "relative",
        "&:focus": {
          outline: "none",
          // borderColor: true ? "error.main" : "primary.main",
        },
      }}
    >
      {/* Header with controls */}
      <Box
        sx={{
          bgcolor: "grey.800",
          px: 3,
          py: 1.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: 1,
          borderColor: false ? "error.main" : "grey.700",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                bgcolor: "error.main",
              }}
            />
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                bgcolor: "warning.main",
              }}
            />
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                bgcolor: "success.main",
              }}
            />
          </Box>
          <Typography
            variant="caption"
            sx={{
              color: "grey.400",
              fontFamily: "inherit",
            }}
          >
            ContactForm.java
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton
            size="small"
            onClick={handleReset}
            sx={{
              color: "grey.400",
              "&:hover": { bgcolor: "grey.700" },
            }}
          >
            <RestartAltIcon fontSize="small" />
          </IconButton>

          <Button
            variant="contained"
            size="small"
            startIcon={
              loading ? (
                <CircularProgress size={18} color="inherit" />
              ) : (
                <SendSharp />
              )
            }
            disabled={loading}
            onClick={handleSend}
            sx={{
              fontFamily: "inherit",
              textTransform: "none",
              bgcolor: "warning.main",
              "&:hover": { bgcolor: "warning.dark" },
              "&.Mui-disabled": {
                bgcolor: "grey.700",
                color: "grey.400",
              },
            }}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </Box>
      </Box>

      {/* Code content */}
      <Box sx={{ p: 3, overflow: "auto", height: "calc(100% - 110px)" }}>
        {/* Import statements */}
        <Box
          sx={{
            fontFamily: "inherit",
            fontSize: "0.95rem",
            lineHeight: 1.8,
          }}
        >
          <Token color="#4fc3f7">public</Token>{" "}
          <Token color="#4fc3f7">class</Token>{" "}
          <Token color="#ffd54f">ContactForm</Token> {"{"}
          <br />
          &nbsp;&nbsp;
          <Token color="#4fc3f7">public</Token>{" "}
          <Token color="#4fc3f7">static</Token>{" "}
          <Token color="#4fc3f7">void</Token>{" "}
          <Token color="#ce93d8">main</Token>(String[] args) {"{"}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Token color="#4fc3f7">String</Token> from = "
          <TextField
            variant="standard"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="your@email.com"
            InputProps={{
              disableUnderline: true,
              sx: {
                color: "#a5d6a7",
                fontFamily: "inherit",
                ml: 1,
                width: 220,
              },
            }}
          />
          ";
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Token color="#4fc3f7">String</Token> to ={" "}
          <Token color="#a5d6a7">"mahadevwaghmode2@gmail.com"</Token>;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Token color="#4fc3f7">String</Token> subject = "
          <TextField
            variant="standard"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Regarding collaboration"
            InputProps={{
              disableUnderline: true,
              sx: {
                color: "#a5d6a7",
                fontFamily: "inherit",
                ml: 1,
                width: 220,
              },
            }}
          />
          ";
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Token color="#4fc3f7">String</Token> message = "
          <TextField
            multiline
            minRows={1}
            maxRows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="type your message..."
            variant="standard"
            InputProps={{
              disableUnderline: true,
              sx: {
                color: "#a5d6a7",
                fontFamily: "inherit",
                ml: 20,
                width: 420,
                lineHeight: 1.6,

                /* hide scrollbar */
                overflow: "hidden",

                "& textarea": {
                  overflow: "hidden",
                  resize: "none",
                },

                /* optional smoother growth */
                transition: "height 0.15s ease",
              },
            }}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Token color="#ffd54f">MessageService</Token> service ={" "}
          <Token color="#ffd54f">new</Token>{" "}
          <Token color="#ffd54f">EmailService</Token>();
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Token color="#4fc3f7">String</Token> reply = service.send(form);
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Token color="#ce93d8">System</Token>.
          <Token color="#ce93d8">out</Token>.
          <Token color="#ce93d8">println</Token>(reply);
          <br />
          &nbsp;&nbsp;{"}"}
          <br />
          {"}"}
        </Box>
      </Box>

      {/* Footer with instructions */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(10px)",
          p: 2,
          borderTop: 1,
          borderColor: "grey.800",
          display: "flex",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <SwapHorizSharp sx={{ fontSize: 16, color: "grey.400" }} />
          <Typography
            variant="caption"
            sx={{ color: "grey.400", fontFamily: "inherit" }}
          >
             Tab for next field
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: "auto" }}>
          <BackspaceIcon sx={{ fontSize: 16, color: "grey.400" }} />
          <Typography
            variant="caption"
            sx={{ color: "grey.400", fontFamily: "inherit" }}
          >
            {false ? "Not editable" : "Backspace to delete"}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}></Box>
      </Box>
    </Card>
  );
};

export default TerminalDesign;
