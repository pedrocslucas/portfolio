// src/components/Hero.tsx
import React from "react";
import { Box, Typography, Avatar, Button } from "@mui/material";
import { motion } from "framer-motion";
import  { heroData } from "../mocks/data";

interface HeroProps {
  name: string;
  title: string;
  photo: string;
}

const Hero: React.FC<HeroProps> = ({ name, title, photo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        py={8}
        gap={4}
      >
        {/* Avatar Neomórfico */}
        <Avatar
          src={heroData.photo}
          alt={heroData.name}
          sx={{
            width: 150,
            height: 150,
            borderRadius: "50%",
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
              transform: "scale(1.05)",
            },
          }}
        />

        {/* Textos + Botão */}
        <Box textAlign={{ xs: "center", md: "left" }}>
          <Typography variant="h3" fontWeight="bold">
            {heroData.name}
          </Typography>
          <Typography variant="h5" color="text.secondary" mb={2}>
            {heroData.title}
          </Typography>

          {/* Botão Neomórfico */}
          <Button
            href="#projects"
            sx={{
              mt: 2,
              px: 4,
              py: 1.2,
              borderRadius: "30px",
              fontWeight: "bold",
              background: "#f5f5f5",
              color: "#1976d2",
              boxShadow: `
                6px 6px 12px #d1d1d1,
                -6px -6px 12px #ffffff
              `,
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: `
                  inset 4px 4px 8px #d1d1d1,
                  inset -4px -4px 8px #ffffff
                `,
                background: "#f0f0f0",
              },
            }}
          >
            Ver Projetos
          </Button>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Hero;
