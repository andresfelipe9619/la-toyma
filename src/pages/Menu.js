import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import { Item } from "../components/carousel";
import B005 from "../assets/banner/005.webp";

export default function Menu() {
  return (
    <>
      <Grid item xs={8}>
        <Divider variant="middle">
          <Typography variant="h2" align="center" gutterBottom>
            MENU
          </Typography>
        </Divider>
      </Grid>
      <Grid item xs={10}>
        <Item
          item={{
            name: "$ 14.000",
            image: B005,
          }}
        />
      </Grid>
    </>
  );
}
