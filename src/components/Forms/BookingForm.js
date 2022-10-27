import { Box, CircularProgress, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Controls from "../Controls/Controls";
import { Form, useForm } from "./useForm";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#ffffff",
        width: "550px",
        paddingTop: theme.spacing(10),
        borderRadius: "30px",
    },
    verify: {
        backgroundColor: "#ffffff",
        padding: theme.spacing(3),
        marginBottom: theme.spacing(2),
        borderRadius: "5px",
    },
    error: {
        backgroundColor: "#f7d3d0",
        padding: theme.spacing(3),
        marginBottom: theme.spacing(2),
        borderRadius: "5px",
    },
    typoverify: {
        fontSize: "18px",
    },
    typotitle: {
        textAlign: "center",
        fontSize: "30px",
        marginBottom: theme.spacing(5),
    },
    typotitle2: {
        textAlign: "center",
        fontSize: "25px",
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
    },
    typosubtitle: {
        fontSize: "20px",
    },
    typo: {
        textAlign: "center",
    },
    btn: {
        width: "100%",
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(5),
        color: "#fff",
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
        },
    },
    loading: {
        color: "#ffffff",
        minWidth: "25px",
        minHeight: "25px",
        maxWidth: "25px",
        maxHeight: "25px",
    },
    verifyicon: {
        minWidth: "25px",
        minHeight: "25px",
        maxWidth: "25px",
        maxHeight: "25px",
        marginRight: theme.spacing(1),
    },
}));

const initialFValues = {
    departure: "",
    arrival: "",
    weight: "",
    width: 0,
    length: 0,
    height: 0,
    weapons: false,
    caution: false,
    refrigerated: false
};

const cities = [
    { id: 0, title: "Tanger" },
    { id: 1, title: "Cairo" },
    { id: 2, title: "Tripoli" }
];


function BookingForm() {
    const classes = useStyles();
    const [error, setError] = useState({
        open: false,
        text: "",
    });
    const { values, setValues, errors, setErrors, handleInputChange } =
        useForm(initialFValues);

    const validate = () => {
        let temp = {};
        temp.weight =
            values.weight !== 0
                ? ""
                : "Weight can not be 0 or less!";
        temp.width =
            values.width !== 0
                ? ""
                : "Width can not be 0 or less!";
        temp.length =
            values.length >= 0
                ? ""
                : "Length can not be 0 or less!";
        temp.height =
            values.height >= 0
                ? ""
                : "Height can not be 0 or less!";
        setErrors({
            ...temp,
        });
        return Object.values(temp).every((x) => x === "");
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Box className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h1"
                            component="h1"
                            color="secondary"
                            className={classes.typotitle}
                        >Package Information</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography
                            variant="h1"
                            component="h1"
                            color="secondary"
                            className={classes.typosubtitle}
                        >Departure</Typography>
                        <Controls.Select
                            name="departure"
                            style={{ width: "100%" }}
                            value={values.departure}
                            options={cities}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography
                            variant="h1"
                            component="h1"
                            color="secondary"
                            className={classes.typosubtitle}
                        >Arrival</Typography>
                        <Controls.Select
                            name="departure"
                            style={{ width: "100%" }}
                            value={values.arrival}
                            options={cities}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            variant="h1"
                            component="h1"
                            color="secondary"
                            className={classes.typotitle2}
                        >Dimension</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography
                            variant="h1"
                            component="h1"
                            color="secondary"
                            className={classes.typosubtitle}
                        >Width</Typography>
                        <Controls.Input
                            name="width"
                            type="number"
                            label="mm"
                            value={values.width}
                            InputLabelProps={{ shrink: true }}  
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography
                            variant="h1"
                            component="h1"
                            color="secondary"
                            className={classes.typosubtitle}
                        >Lenght</Typography>
                        <Controls.Input
                            name="length"
                            type="number"
                            label="mm"
                            value={values.length}
                            InputLabelProps={{ shrink: true }}  
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography
                            variant="h1"
                            component="h1"
                            color="secondary"
                            className={classes.typosubtitle}
                        >Height</Typography>
                        <Controls.Input
                            name="height"
                            type="number"
                            label="mm"
                            value={values.height}
                            InputLabelProps={{ shrink: true }}  
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography
                            variant="h1"
                            component="h1"
                            color="secondary"
                            className={classes.typosubtitle}
                        >Weight</Typography>
                        <Controls.Input
                            name="weight"
                            type="number"
                            label="kg"
                            value={values.weight}
                            InputLabelProps={{ shrink: true }}  
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Controls.Checkbox
                            name="weapons"
                            label="Weapons"
                            value={values.weapons}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Controls.Checkbox
                            name="caution"
                            label="Caution Parcels"
                            value={values.caution}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Controls.Checkbox
                            name="refigerated"
                            label="Refigerated goods"
                            value={values.refrigerated}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controls.Button
                            className={classes.btn}
                            type="submit"
                            text="Back"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        {false ? (
                            <Controls.Button
                                className={classes.btn}
                                type="submit"
                                text={<CircularProgress className={classes.loading} />}
                            />
                        ) : (
                            <Controls.Button
                                className={classes.btn}
                                type="submit"
                                text="Proceed"
                            />
                        )}
                    </Grid>
                </Grid>
            </Box>
        </Form>
    );
}

export default BookingForm;
