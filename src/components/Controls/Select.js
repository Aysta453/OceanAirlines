import React from "react";
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

export default function Select(props) {
  const { name, label, value, error = null, onChange, options, ...other } = props;

  return (
    <FormControl variant="outlined" {...(error && { error: true })} {...other}>
      <InputLabel>{label}</InputLabel>
      <MuiSelect label={label} name={name} value={value} onChange={onChange}>
        <MenuItem value="">None</MenuItem>
        {options?.map((items, index) => (
          <MenuItem key={items.id} value={items.id}>
            {items.title}
          </MenuItem>
        ))}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
