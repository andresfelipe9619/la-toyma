import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CountUp from "react-countup";
import Logo from "../assets/Logo Circulo.png";

const time = 3;

function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, time * 1600);
  }, []);

  if (!show) return <CountPage />;

  return (
    <>
      <Header />
      <Typography variant="h2">TE AMO PELU!! ❤️</Typography>
    </>
  );
}

function CountPage() {
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
      <img src={Logo} alt="logo la toyma" width="30%" />
      <CountUp start={2021} end={1997} duration={time} delay={0}>
        {({ countUpRef }) => <Typography variant="h1" ref={countUpRef} />}
      </CountUp>
    </Box>
  );
}

export default Home;
