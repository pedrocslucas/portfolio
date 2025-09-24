// src/components/Projects.tsx
import { Box, Typography, Paper, Button} from "@mui/material";
import { motion } from "framer-motion";
import { projectsData } from "../mocks/data";
import Slider from "react-slick";
import Grid from "@mui/material/Grid";

// Estilos do carrossel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <Box my={8} id="projects" px={2}>
      <Typography
        variant="h4"
        textAlign="center"
        mb={6}
        fontWeight="bold"
        sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, textShadow: "2px 2px 6px #bebebe" }}
      >
        Projetos
      </Typography>

      <Box display="flex" flexDirection="column" gap={6}>
        {projectsData.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <Paper
              elevation={0}
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                minHeight: 420,
                background: "#e0e0e0",
                boxShadow: "9px 9px 16px #bebebe, -9px -9px 16px #ffffff",
              }}
            >
              {/* Carrossel de imagens */}
              <Box
                flex={1}
                sx={{
                  minWidth: { xs: "100%", md: "50%" },
                  "& .slick-dots li button:before": { color: "#1976d2", fontSize: "12px" },
                }}
              >
                <Slider {...sliderSettings}>
                  {project.images.map((img, i) => (
                    <Box
                      key={i}
                      sx={{
                        height: 420,
                        backgroundImage: `url(${img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: { xs: "0", md: "16px 0 0 16px" },
                      }}
                    />
                  ))}
                </Slider>
              </Box>

              {/* Conteúdo do projeto */}
              <Box
                flex={1}
                p={4}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                sx={{
                  background: "#e0e0e0",
                  boxShadow: "inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff",
                  borderRadius: { xs: "0 0 16px 16px", md: "0 16px 16px 0" },
                }}
              >
                <Typography
                  variant="h5"
                  mb={2}
                  fontWeight="bold"
                  sx={{ fontSize: { xs: "1.4rem", md: "1.8rem" } }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body1"
                  mb={3}
                  color="text.secondary"
                  sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, lineHeight: 1.6 }}
                >
                  {project.description}
                </Typography>

                {/* Techs com ícones (do próprio mock) */}
                <Grid container spacing={2}>
                  {project.techs.map((tech, i) => {
                    const Icon = tech.icon; // vem direto do mock
                    return (
                      <Grid
                        item
                        xs={6}
                        sm={4}
                        md={3}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        key={i}
                      >
                        <Paper
                          sx={{
                            p: 1.5,
                            borderRadius: 3,
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "#e0e0e0",
                            boxShadow: "4px 4px 8px #bebebe, -4px -4px 8px #ffffff",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              boxShadow: "inset 3px 3px 6px #bebebe, inset -3px -3px 6px #ffffff",
                              transform: "scale(1.05)",
                            },
                          }}
                        >
                          <Icon size={36} color="#1976d2" />
                          <Typography
                            mt={1}
                            fontWeight="bold"
                            fontSize={{ xs: "0.85rem", md: "1rem" }}
                            textAlign="center"
                          >
                            {tech.name}
                          </Typography>
                        </Paper>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Paper>
          </motion.div>
        ))}
      </Box>

      {/* Botão Ver Mais */}
      <Box textAlign="center" mt={6}>
        <Button
          variant="contained"
          href="https://github.com/pedrocslucas?tab=repositories"
          target="_blank"
          sx={{
            px: 4,
            py: 1.5,
            borderRadius: 3,
            background: "#e0e0e0",
            boxShadow: "6px 6px 12px #bebebe, -6px -6px 12px #ffffff",
            color: "#000",
            fontWeight: 600,
            textTransform: "none",
            "&:hover": {
              boxShadow: "inset 3px 3px 6px #bebebe, inset -3px -3px 6px #ffffff",
              transform: "scale(1.05)",
            },
          }}
        >
          Ver mais no GitHub
        </Button>
      </Box>
    </Box>
  );
};

export default Projects;
