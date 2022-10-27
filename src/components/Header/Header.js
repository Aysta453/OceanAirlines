import {
  AppBar,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import React from "react";
import { primary } from '../../constants/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: primary,
    height: "107px",
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.root} elevation={0}>
      <Toolbar className={classes.toolbar} variant="dense">
      </Toolbar>
    </AppBar>
  );
}

export default Header;
