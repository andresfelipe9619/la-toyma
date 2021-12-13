import React, { useState } from "react";
import Header from "../components/header";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useCountUp } from "react-countup";
import LogoSVG from "../assets/Logo.svg";
import { makeStyles } from "@mui/styles";
import CustomCarousel from "../components/carousel";
import Contact from "./Contact";

const TIME = 4;
const useStyles = makeStyles({
  title: {
    fontSize: "6rem",
  },
});

function Home() {
  const [show, setShow] = useState(false);

  if (!show) return <CountPage setShow={setShow} />;

  return (
    <>
      <Header />
      <CustomCarousel />
      <Typography variant="h2" align="center" gutterBottom>
        TE AMO PELU!! ❤️
      </Typography>
      <Typography variant="h2" align="center" gutterBottom>
        MENU
      </Typography>
      <CustomCarousel />
      <Contact />
    </>
  );
}

function CountPage({ setShow }) {
  const countUpRef = React.useRef(null);
  const classes = useStyles();

  const { start } = useCountUp({
    ref: countUpRef,
    start: 2021,
    end: 1997,
    delay: TIME / 2,
    duration: TIME,
    onEnd: () => {
      setTimeout(() => {
        setShow(true);
      }, (TIME * 1000) / 1.5);
    },
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
      {/* <div
        style={{
          width: "40%",
          height: "40%",
          backgroundImage: `url("${Logo}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      /> */}
      <img
        src={LogoSVG}
        alt="La toyma Logo"
        width="30%"
        onLoad={() => start()}
      />
      <Typography variant="h1" className={classes.title} ref={countUpRef} />
    </Box>
  );
}

export default Home;
