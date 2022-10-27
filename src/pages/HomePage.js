import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
// import Post from "../components/Post/Post";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   width: "100%",
  //   overflowX: "hidden",
  //   overflowY: "hidden",
  // },
  // main: {
  //   display: "flex",
  //   flexDirection: "row",
  //   padding: theme.spacing(2),
  //   backgroundColor: theme.palette.secondary.light,
  //   borderRadius: "30px",
  // },
  // interest: {
  //   padding: theme.spacing(1),
  // },
}));
function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Home />
    </div>
  );
}

export default HomePage;
