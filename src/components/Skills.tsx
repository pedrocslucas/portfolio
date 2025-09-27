import React, { useState } from "react";
import { Typography, Box, Paper, Tooltip } from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import { aboutData } from "../mocks/data";
import NeoButton from "../widgets/NeoButton";

const Skills: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  // Mostra só 6 como padrão
  const skillsToShow = showAll ? aboutData.skills : aboutData.skills.slice(0, 6);

  return (
    <Box mt={6}>
      {/* Título */}
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={3}
        textAlign="center"
        sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
      >
        Tecnologias
      </Typography>

      {/* Grid de skills */}
      <Grid container spacing={3} justifyContent="center">
        {skillsToShow.map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <Grid
              item
              xs={6}
              sm={4}
              md={2}
              key={idx}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Tooltip title={skill.description} arrow placement="top">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ width: "100%" }}
                >
                  <Paper
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#f5f5f5",
                      boxShadow: "8px 8px 16px #d1d1d1, -8px -8px 16px #ffffff",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      "&:hover": {
                        boxShadow:
                          "inset 6px 6px 12px #d1d1d1, inset -6px -6px 12px #ffffff",
                      },
                    }}
                  >
                    <Icon size={42} color="#1976d2" />
                    <Typography
                      mt={1}
                      fontWeight="bold"
                      fontSize={{ xs: "0.85rem", md: "1rem" }}
                      textAlign="center"
                    >
                      {skill.name}
                    </Typography>
                  </Paper>
                </motion.div>
              </Tooltip>
            </Grid>
          );
        })}
      </Grid>

      <Box textAlign="center" mt={4}>
        <NeoButton
            variant="outlined"
            color="primary"
            onClick={() => setShowAll(!showAll)}
        >
            {showAll ? "Ver menos" : "Ver mais"}
        </NeoButton>
        </Box>
    </Box>
  );
};

export default Skills;
