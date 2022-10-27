import {
  makeStyles, Typography,
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { getReduxUser } from "../../utils/Common";
import Controls from "../Controls/Controls";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#F8C8DC',
    height: "100%",
  },
  mid: {
    display: "flex",
    flexDirection: "column",
    alignItem: "center",
    justifyContent: "center",
    paddingBottom: theme.spacing(10),
    paddingTop: theme.spacing(10),
  },
  typoname: {
    fontSize: "100px",
    fontWeight: "600",
    textAlign: "center",
    color: "#fff",
  },
  btn: {
    width: "442px",
    height: "106px",
    marginTop: theme.spacing(10),
    color: "#fff",
    fontSize: "25px",
    '&:hover': {
      backgroundColor: "#43b4d9"
    }
  },
  link: {
    marginLeft: 'auto',
    marginRight: 'auto',
    textDecoration: 'none'
  }
}));

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.mid}>
        <Typography
          variant="h1"
          component="h1"
          color="secondary"
          className={classes.typoname}
        >Oceanic World Airlines</Typography>
        <Link to="/startbooking" className={classes.link}>
          <Controls.Button
            className={classes.btn}
            type="submit"
            text="Get Started"
          />
        </Link>
      </div>
    </div>
  );
}

export default Home;
