import {
    AppBar,
    makeStyles,
    Toolbar,
  } from "@material-ui/core";
  import { Link, useNavigate } from "react-router-dom";
  import React, { useState } from "react";
  import { getReduxUser } from "../../utils/Common";
  
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#FF87BA",
      height: "107px",
    },
  }));
  
  function Header() {
    const classes = useStyles();
    const account = getReduxUser();
    const [searchValue, setSearchValue] = useState("")
    const navigate = useNavigate();
  
    return (
      <AppBar position="fixed" className={classes.root} elevation={0}>
        <Toolbar className={classes.toolbar} variant="dense">
        </Toolbar>
      </AppBar>
    );
  }
  
  export default Header;
  