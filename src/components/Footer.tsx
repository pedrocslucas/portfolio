// src/components/Footer.tsx
import { Box, Typography, IconButton } from "@mui/material";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      component="footer"
      py={6}
      mt={8}
      textAlign="center"
      sx={{
        backgroundColor: "#f5f5f5",
        boxShadow: "inset 4px 4px 8px #d1d1d1, inset -4px -4px 8px #ffffff",
        borderRadius: 3,
      }}
    >
      <Typography variant="body1" mb={2} fontWeight={500}>
        Desenvolvido por Pedro Lucas
      </Typography>

      <Box display="flex" justifyContent="center" gap={3} mb={2}>
        {[{
          icon: <FaGithub />,
          link: "https://github.com/pedrocslucas"
        },{
          icon: <FaLinkedin />,
          link: "https://www.linkedin.com/in/pedrocslucas/"
        },{
          icon: <FaEnvelope />,
          link: "mailto:lucassilvach33r@gmail.com"
        }].map((item, i) => (
          <IconButton
            key={i}
            href={item.link}
            target="_blank"
            sx={{
              background: "#f5f5f5",
              boxShadow: "4px 4px 6px #d1d1d1, -4px -4px 6px #ffffff",
              borderRadius: 2,
              color: "#1976d2",
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: "inset 2px 2px 5px #d1d1d1, inset -2px -2px 5px #ffffff",
                transform: "scale(1.1)",
              },
            }}
          >
            {item.icon}
          </IconButton>
        ))}
      </Box>

      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()} Pedro Lucas. Todos os direitos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
