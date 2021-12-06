import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LogoTitulo from "../../assets/Logo Título Positivos.png";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <img src={LogoTitulo} alt="La Toyma" height={60} width="auto" />
          <Typography variant="h6" component="div" color="inherit">
            Desde 1997
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
