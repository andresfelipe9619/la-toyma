import Carousel from "react-material-ui-carousel";
import { Card, CardMedia, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import B001 from "../../assets/banner/001.webp";
import B002 from "../../assets/banner/002.webp";
import B003 from "../../assets/banner/003.webp";
import B004 from "../../assets/banner/004.webp";
import B005 from "../../assets/banner/005.webp";
import B006 from "../../assets/banner/006.webp";
import B007 from "../../assets/banner/007.webp";

const useStyles = makeStyles({
  Banner: {
    width: "100%",
    height: "70vh",
  },
  Media: {
    height: "100%",
    backgroundColor: "white",
    // paddingTop: '56.25%', // 16:9
    overflow: "hidden",
    position: "relative",
    transition: "300ms",
    // transform: 'scale(0.7)',
    cursor: "pointer",
    "&:hover": {
      filter: "brightness(115%)",
    },
  },
  MediaCaption: {
    textOverflow: "ellipsis",
    position: "absolute",
    bottom: 0,
    padding: 40,
    backgroundColor: "black",
    color: "white",
    opacity: 0.6,
    width: "100%",
    height: "10%",
    fontSize: 21,
    fontWeight: 200,
    transition: "300ms",
    cursor: "pointer",
    "&:hover": {
      opacity: 0.8,
    },
  },
  BannerGrid: {
    height: "100%",
    position: "relative",
  },
  //    Banner .Content:hover, Banner .Content:active {
  //   	 backgroundColor: #571111;
  //   },
  //    Banner .Content:hover .ViewButton, Banner .Content:active  {
  //   	 backgroundColor: #f1f1f1;
  //   	 color: #771818;
  //   },
  Title: {
    fontSize: 30,
    fontWeight: 500,
    color: "white",
  },
  Caption: {
    marginTop: 10,
    fontSize: 18,
    color: "white",
  },
});

function CustomCarousel() {
  const items = [
    {
      name: "Random Name #1",
      image: B001,
    },
    {
      name: "Random Name #2",
      image: B002,
    },
    {
      name: "Random Name #3",
      image: B003,
    },
    {
      name: "Random Name #4",
      image: B004,
    },
    {
      name: "Random Name #5",
      image: B005,
    },
    {
      name: "Random Name #6",
      image: B006,
    },
    {
      name: "Random Name #7",
      image: B007,
    },

  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

export function Item({ item }) {
  const classes = useStyles();

  return (
    <Card raised className={classes.Banner}>
      <Grid container spacing={0} className={classes.BannerGrid}>
        <Grid item xs={12} key={item.name}>
          <CardMedia
            className={classes.Media}
            image={item.image}
            title={item.name}
          >
            <Typography className={classes.MediaCaption}>
              {item.name}
            </Typography>
          </CardMedia>
        </Grid>
      </Grid>
    </Card>
  );
}

export default CustomCarousel;
