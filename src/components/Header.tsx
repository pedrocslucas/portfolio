import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const sections = ["home", "sobre", "projetos", "experiencias", "contatos"];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(245,245,245,0.7)",
          boxShadow: `
            4px 4px 6px #d1d1d1,
            -4px -4px 6px #ffffff
          `,
        }}
      >
        <Toolbar>
          {/* Nome com destaque azul */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              color: "#11579eff",
              letterSpacing: 1,
            }}
          >
            Pedro Lucas
          </Typography>

          {/* Menu desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {sections.map((section) => (
              <Button
                key={section}
                onClick={() => handleScroll(section)}
                sx={{
                  borderRadius: "30px",
                  px: 3,
                  py: 1,
                  background: "#f5f5f5",
                  boxShadow: `
                    6px 6px 12px #d1d1d1,
                    -6px -6px 12px #ffffff
                  `,
                  textTransform: "capitalize",
                  color: "#11579eff",
                  fontWeight: 600,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: `
                      inset 4px 4px 8px #d1d1d1,
                      inset -4px -4px 8px #ffffff
                    `,
                    background: "#f0f0f0",
                    transform: "scale(1.05)",
                  },
                }}
              >
                {section}
              </Button>
            ))}
          </Box>

          {/* Botão menu mobile */}
          <IconButton
            edge="end"
            onClick={toggleDrawer}
            sx={{
              display: { xs: "flex", md: "none" },
              background: "#f5f5f5",
              boxShadow: `
                4px 4px 6px #d1d1d1,
                -4px -4px 6px #ffffff
              `,
              "&:hover": {
                boxShadow: `
                  inset 2px 2px 5px #d1d1d1,
                  inset -2px -2px 5px #ffffff
                `,
              },
            }}
          >
            <MenuIcon sx={{ color: "#11579eff" }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer lateral (mobile) */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={toggleDrawer}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 240,
            background: "#f5f5f5",
            boxShadow: `
              inset 4px 4px 6px #d1d1d1,
              inset -4px -4px 6px #ffffff
            `,
          },
        }}
      >
        <Box sx={{ p: 2 }} role="presentation">
          <List>
            {sections.map((section) => (
              <ListItem key={section} disablePadding>
                <ListItemButton
                  onClick={() => handleScroll(section)}
                  sx={{
                    borderRadius: "30px",
                    mb: 1,
                    px: 2,
                    boxShadow: `
                      4px 4px 6px #d1d1d1,
                      -4px -4px 6px #ffffff
                    `,
                    "&:hover": {
                      boxShadow: `
                        inset 2px 2px 5px #d1d1d1,
                        inset -2px -2px 5px #ffffff
                      `,
                    },
                  }}
                >
                  <ListItemText
                    primary={section.charAt(0).toUpperCase() + section.slice(1)}
                    primaryTypographyProps={{
                      fontWeight: 600,
                      color: "#11579eff",
                      textAlign: "center",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
