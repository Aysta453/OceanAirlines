import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
  } from "@material-ui/pickers";
  import DateFnsUtils from "@date-io/date-fns";
  import React from "react";
  
  function DatePicker(props) {
    const { name, label, value, onChange, ...other } = props;
  
    const convertToDefEventPara = (name, value) => ({
      target: {
        name,
        value,
      },
    });
  
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          inputVariant="outlined"
          label={label}
          format="dd/MM/yyyy"
          name={name}
          value={value}
          {...other}
          onChange={(date) => onChange(convertToDefEventPara(name, date))}
        />
      </MuiPickersUtilsProvider>
    );
  }
  
  export default DatePicker;
  