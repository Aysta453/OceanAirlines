import {
    AppBar,
    makeStyles,
    Toolbar,
  } from "@material-ui/core";
  import React from "react";
  
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#FF87BA",
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
  