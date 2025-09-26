import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { aboutData } from "../mocks/data";
import Grid from "@mui/material/Grid";
import Skills from "./Skills";

const About: React.FC = () => {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Box mb={8} px={2}>
        {/* Título */}
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={3}
          textAlign="center"
          sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
        >
          Sobre Mim
        </Typography>

        {/* Texto principal */}
        <Typography
          variant="body1"
          textAlign="justify"
          maxWidth="900px"
          mx="auto"
          mb={6}
          sx={{ fontSize: { xs: "1rem", md: "1.25rem" }, lineHeight: 1.8 }}
        >
          {aboutData.text}
        </Typography>

        {/* Skills extraídas para componente separado */}
        <Skills />

        {/* Cards de diferenciais */}
        <Grid container spacing={4} justifyContent="center" mt={6}>
          {aboutData.highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <Grid item xs={12} md={4} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                >
                  <Paper
                    sx={{
                      p: 4,
                      borderRadius: 4,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      background: "#f5f5f5",
                      boxShadow:
                        "8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        boxShadow:
                          "inset 6px 6px 12px #d1d1d1, inset -6px -6px 12px #ffffff",
                        transform: "scale(1.02)",
                      },
                    }}
                  >
                    <Box mb={2}>
                      <Icon size={48} color="#1976d2" />
                    </Box>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      gutterBottom
                      sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontSize: { xs: "0.95rem", md: "1.1rem" } }}
                    >
                      {item.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </motion.div>
  );
};

export default About;
