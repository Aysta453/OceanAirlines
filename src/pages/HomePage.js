import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
// import Post from "../components/Post/Post";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflowX: "hidden",
    overflowY: "hidden",
  },
}));
function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Home />
    </div>
  );
}

export default HomePage;
