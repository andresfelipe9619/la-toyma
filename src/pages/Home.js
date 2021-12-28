import React, { lazy, useState } from "react";
import Header from "../components/header";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Footer from "../components/footer/Footer";

const CustomCarousel = lazy(() => import(/* webpackChunkName: "splash" */ "../components/carousel"));
const Contact = lazy(() => import(/* webpackChunkName: "splash" */ "./Contact"));
const Menu = lazy(() => import(/* webpackChunkName: "splash" */ "./Menu"));
const SplashPage = lazy(() => import(/* webpackChunkName: "splash" */ "./Splash"));

function Home() {
  const [show, setShow] = useState(false);

  if (!show) return <SplashPage setShow={setShow} />;

  return (
    <>
      <Header />
      <Grid
        container
        justifyContent="center"
        spacing={4}
        component={Box}
        mt={6}
      >
        <Grid item xs={12}>
          <CustomCarousel />
        </Grid>
        <Grid item xs={8}>
          <Divider variant="middle">
            <Typography variant="h2" align="center" gutterBottom>
              Restaurante
            </Typography>
          </Divider>
        </Grid>
        <Grid item md={8} xs={12}>
          <Typography align="center" gutterBottom>
            Pariatur adipisicing ipsum deserunt ut. Incididunt consectetur id
            non proident voluptate ea sit. Nostrud consectetur voluptate duis
            non nisi est duis enim. Ex duis Lorem ex officia amet voluptate duis
            quis occaecat Lorem ex ex est incididunt. Dolore rem enim molestias
            quod ipsa modi sint labore eos facilis repellat, numquam aspernatur
            dicta excepturi corrupti laboriosam ex nihil saepe tenetur.
          </Typography>
        </Grid>
        <Menu />
        <Grid item md={10} xs={12}>
          <Contact />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default Home;
