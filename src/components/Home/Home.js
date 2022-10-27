import {
    makeStyles, Typography,
  } from "@material-ui/core";
  import { Link, useNavigate } from "react-router-dom";
  import React, { useState } from "react";
  import { getReduxUser } from "../../utils/Common";
  
  const useStyles = makeStyles((theme) => ({    
    root: {
      backgroundColor: '#F8C8DC',
      height: "70vh",
    },
  }));
  
  function Home() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Typography
                variant="subtitle1"
                component="div"
                color="secondary"
                className={classes.typoname}
              ></Typography>
      </div>
    );
  }
  
  export default Home;
  