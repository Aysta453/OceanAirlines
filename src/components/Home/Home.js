import {
  makeStyles, Typography,
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { getReduxUser } from "../../utils/Common";
import Controls from "../Controls/Controls";
import { systemWhite, secondary, systemBlack, primaryButton, secondaryButton } from "../../constants/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: secondary,
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
    marginTop: theme.spacing(10),
    fontWeight: "400",
    textAlign: "center",
    color: systemWhite,
  },
  btn: {
    borderSize: '20px',
    borderStyle: 'solid',
    borderColor: systemBlack,
    marginTop: theme.spacing(10),
    backgroundColor: primaryButton,
    paddingLeft: '60px',
    paddingRight: '60px',
    color: systemWhite,
    borderRadius: '25px',
    fontSize: "25px",
    '&:hover': {
      backgroundColor: secondaryButton,
      borderColor: systemBlack,
      borderStyle: 'solid',
      borderSize: '1px',
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
            variant="outlined"
          />
        </Link>
      </div>
    </div>
  );
}

export default Home;
