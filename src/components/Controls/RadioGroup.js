import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup as MuiRadioGroup,
  } from "@material-ui/core";
  import React from "react";
  
  function RadioGroup(props) {
    const { name, label, value, onChange, items, ...other } = props;
  
    return (
      <FormControl {...other}>
        <FormLabel color="primary" style={{ textAlign: "left" }}>
          {label}
        </FormLabel>
        <MuiRadioGroup row name={name} value={value} onChange={onChange}>
          {items?.map((item, index) => {
            return (
              <FormControlLabel
                key={item.id}
                value={item.id}
                control={<Radio color="primary" />}
                label={item.title}
              />
            )
          })}
        </MuiRadioGroup>
      </FormControl>
    );
  }
  
  export default RadioGroup;
  