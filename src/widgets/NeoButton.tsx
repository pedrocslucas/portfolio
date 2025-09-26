// src/components/NeoButton.tsx
import React from "react";
import { Button, type ButtonProps } from "@mui/material";

const NeoButton: React.FC<ButtonProps<"a">> = (props) => {
  return (
    <Button
      {...props}
      component={props.href ? "a" : "button"} // se tiver href, vira <a>
      sx={{
        px: 4,
        py: 1.2,
        borderRadius: "30px",
        fontWeight: "bold",
        background: "#f5f5f5",
        color: "#1976d2",
        textTransform: "none",
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
          transform: "scale(1.05)",
        },
      }}
    />
  );
};

export default NeoButton;
