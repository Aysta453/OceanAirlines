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
      height: "70vh",
    },
    mid: {
      display: "flex",
      a
    },
    typoname: {
      fontSize: "100px",
      fontWeight: "600",
      textAlign: "center",
      color: "#fff",
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
             <Controls.Button
              className={classes.btn}
              type="submit"
              text="Sign In"
            />
        </div>
      </div>
    );
  }
  
  export default Home;
  