import {
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Typography,
    Box,
    Stack,
    Button,
    Slide,
    Chip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function DetailModal({ open, onClose, project }) {
    if (!project) return null;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="md"
            disableRestoreFocus
            sx={{
                backdropFilter: "blur(8px)",
            }}
            slots={{ transition: Slide }}
            slotProps={{
                transition: {
                    direction: "up",
                },
            }}
        >
            <DialogTitle sx={{ pr: 6 }}>
                {project.title}
                <IconButton
                    onClick={onClose}
                    sx={{ position: "absolute", right: 16, top: 16 }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent dividers>
                {/* Image */}
                <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                        width: "100%",
                        borderRadius: 2,
                        mb: 3,
                    }}
                />

                {/* Description */}
                <Typography sx={{ mb: 2 }}>
                    {project.description}
                </Typography>

                {/* Points */}
                {project.points?.length > 0 && (
                    <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                        {project.points.map((point, index) => (
                            <Typography
                                key={index}
                                component="li"
                                variant="body2"
                                sx={{ mb: 1, lineHeight: 1.7 }}
                            >
                                {point}
                            </Typography>
                        ))}
                    </Box>
                )}

                {/* ✅ Used Technologies */}
                {project.techStack?.length > 0 && (
                    <Box sx={{ mb: 3 }}>
                        <Typography
                            variant="subtitle1"
                            fontWeight={600}
                            sx={{ mb: 1 }}
                        >
                            Used Technologies
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 1,
                            }}
                        >
                            {project.techStack.map((tech) => (
                                <Chip
                                    key={tech}
                                    label={tech}
                                    sx={(theme) => ({
                                        fontWeight: 500,
                                        background: `${theme.palette.primary.main}15`,
                                        color: theme.palette.primary.main,
                                        border: `1px solid ${theme.palette.primary.main}40`,
                                    })}
                                />
                            ))}
                        </Box>
                    </Box>
                )}

                {/* Buttons */}
                <Stack direction="row" spacing={2}>
                    {project.link && (
                        <Button
                            variant="outlined"
                            component="a"
                            href={project.link}
                            target="_blank"
                        >
                            GitHub
                        </Button>
                    )}

                    <Button
                        disabled={!project.live}
                        variant="contained"
                        component="a"
                        href={project.live}
                        target="_blank"
                    >
                        Live Demo
                    </Button>
                </Stack>
            </DialogContent>
        </Dialog>
    );
}