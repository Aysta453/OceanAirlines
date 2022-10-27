import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 0,
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
    "& .MuiButton-label": {
      color: theme.palette.primary.dark,
    },
  },
  secondary: {
    backgroundColor: theme.palette.secondary.dark,
    "& .MuiButton-label": {
      color: theme.palette.secondary.main,
    },
  },
}));

function ActionButton(props) {
  const { color, children, onClick, ...other } = props;
  const classes = useStyles();

  return (
    <Button className={`${classes.root} ${classes[color]}`} {...other} onClick={onClick}>
      {children}
    </Button>
  );
}

export default ActionButton;
