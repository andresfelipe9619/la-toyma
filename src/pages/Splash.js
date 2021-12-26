import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import { useCountUp } from "react-countup";
import LogoSVG from "../assets/Logo.svg";
import { motion } from "framer-motion";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";

const TIME = 3.2;

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "6rem",
  },
  logo: {
    [theme.breakpoints.down("md")]: {
      width: "60%",
    },
    [theme.breakpoints.up("md")]: {
      width: "30%",
    },
  },
}));

export default function SplashPage({ setShow }) {
  const countUpRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const classes = useStyles();
  const duration = (TIME * 1000) / 1.5;

  const handleEnd = () => {
    setTimeout(() => {
      setAnimate(true);
    }, duration / 2);

    setTimeout(() => {
      setShow(true);
    }, duration);
  };

  const { start } = useCountUp({
    ref: countUpRef,
    start: 2021,
    end: 1997,
    delay: TIME / 2,
    duration: TIME,
    onEnd: handleEnd,
  });

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      backgroundColor="#ffeab6"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <img
        src={LogoSVG}
        alt="La toyma Logo"
        onLoad={() => start()}
        className={classes.logo}
      />
      <Typography variant="h1" className={classes.title} ref={countUpRef} />
      {animate && <MagicBox />}
    </Box>
  );
}

function MagicBox() {
  return (
    <motion.div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        background: "#82ac74",
      }}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
    />
  );
}
