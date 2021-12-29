import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { makeStyles } from "@mui/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const DOMAIN = "latoyma";
const HOST = `https://www.${DOMAIN}.com`;

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 900,
    color: "#f1f3eb",
  },
  link: {
    textDecoration: "none",
  },
  appBar: {
    margin: 0,
    top: "auto",
    bottom: 0,
    padding: 0,
    background: theme.palette.secondary.light,
  },
}));

function Copyright() {
  const classes = useStyles();

  return (
    <Box
      bgcolor="secondary.light"
      className={classes.title}
      width="100%"
      textAlign="center"
      p={1}
    >
      <Link color="inherit" href={HOST} className={classes.link}>
        {DOMAIN}.com
      </Link>{" "}
      {" ® • "}
      {new Date().getFullYear()}
    </Box>
  );
}

export default function AppFooter() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Box
          component="footer"
          display="flex"
          bottom={0}
          width="100%"
          bgcolor="secondary.light"
          py={1}
          px={0}
        >
          <Container>
            <Grid container spacing={5}>
              <Grid item container justifyContent="center">
                <IconButton size="large" aria-label="la-toyma-facebook">
                  <FacebookIcon />
                </IconButton>
                <IconButton size="large" aria-label="la-toyma-instagram">
                  <InstagramIcon />
                </IconButton>
                <IconButton size="large" aria-label="la-toyma-youtube">
                  <YouTubeIcon />
                </IconButton>
                <IconButton size="large" aria-label="la-toyma-twitter">
                  <TwitterIcon />
                </IconButton>
              </Grid>
              <Grid item container justifyContent="center">
                <Copyright />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
