import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

export function useForm(initialFValues) {

    const [values, setValues] = useState(initialFValues)
    const [errors, setErrors] = useState({})

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    
    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiFormControl-root": {
        width: "100%",
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
    },
  }));

export function Form(props) {

    const classes = useStyles();
    const {children, ...other} = props

    return (
        <form className={classes.root} autoComplete='off' {...other}>
            {props.children}
        </form>
    )
}