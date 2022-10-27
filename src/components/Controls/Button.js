import React from "react";
import { Button as MuiButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  label: {
    textTransform: "none"
  }
}));

export default function Button(props) {
  const classes = useStyles();
  const { text, size, color, variant, onClick, ...other } = props;

  return (
    <MuiButton
      variant={variant || "contained"}
      size={size || "large"}
      color={color || "primary"}
      classes={{ root: classes.root, label: classes.label }}
      onClick={onClick}
      {...other}
    >
      {text}
    </MuiButton>
  );
}
