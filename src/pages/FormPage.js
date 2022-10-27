import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import BookingForm from "../components/Forms/BookingForm";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
// import Post from "../components/Post/Post";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflowX: "hidden",
    overflowY: "hidden",
    height: "100vh",
    backgroundColor: "#fff",
    display: "flex",
    alignItem: "center",
    justifyContent: "center"
  },
}));
function FormPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BookingForm />
    </div>
  );
}

export default FormPage;
