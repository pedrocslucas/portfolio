// src/components/Experiences.tsx
import React from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { motion } from "framer-motion";
import { experiencesData } from "../mocks/data";
import { History } from "lucide-react"; // substituímos Timeline por History

const Experiences = () => {
  return (
    <Box my={8} px={2}>
      <Typography
        variant="h4"
        textAlign="center"
        mb={6}
        fontWeight="bold"
      >
        Experiências Profissionais
      </Typography>

      <Box display="flex" flexDirection="column" gap={6}>
        {experiencesData.map((exp, idx) => (
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
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                borderRadius: "20px",
                overflow: "hidden",
                p: 3,
                background: "#f5f5f5",
                boxShadow: `
                  7px 7px 15px #d9d9d9,
                  -7px -7px 15px #ffffff
                `,
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: `
                    4px 4px 10px #d9d9d9,
                    -4px -4px 10px #ffffff
                  `,
                  transform: "translateY(-4px)",
                },
              }}
            >
              {/* Lado esquerdo: detalhes da experiência */}
              <Box flex={1} pr={{ md: 3 }}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  mb={1}
                  sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                >
                  {exp.company}
                </Typography>
                <Typography
                  variant="h6"
                  mb={1}
                  sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
                >
                  {exp.role}
                </Typography>

                <Box display="flex" alignItems="center" gap={1} mb={2}>
                  <History size={20} />
                  <Typography variant="body1" fontWeight="500">
                    {exp.duration.includes("Atualmente")
                      ? "Em andamento"
                      : exp.duration}
                  </Typography>
                </Box>

                <List dense>
                  {exp.description.map((item, i) => (
                    <ListItem key={i} disablePadding>
                      <ListItemText
                        primary={`• ${item}`}
                        primaryTypographyProps={{
                          fontSize: { xs: "0.9rem", md: "1rem" },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>

              {/* Lado direito: imagem da empresa */}
              <Box
                flex={1}
                sx={{
                  minHeight: 200,
                  borderRadius: "15px",
                  backgroundImage: `url(${exp.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: `
                    inset 5px 5px 10px #d1d1d1,
                    inset -5px -5px 10px #ffffff
                  `,
                }}
              />
            </Paper>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Experiences;
