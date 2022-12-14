import React from "react";
import TextField  from "@material-ui/core/TextField";

export default function Input(props) {
  const { name, type, label, value, error = null, onChange, ...other } = props;
  
  return (
    <TextField
      variant="outlined"
      type={type || 'text'}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...other}
      {...(error && {error: true, helperText: error})}
    />
  );
}
