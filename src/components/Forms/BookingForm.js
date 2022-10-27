import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Controls from "../Controls/Controls";
import { Form, useForm } from "./useForm";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#ffffff",
        width: "500px",
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
        fontWeight: "600",
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
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
    gender: "male",
    dob: new Date(),
};

const genderItems = [
    { id: "male", title: "Male" },
    { id: "female", title: "Female" },
];

const cities = [
    { id: 0, title: "Tanger" },
    { id: 1, title: "Cairo" },
    { id: 2, title: "Tripoli" }
];


function BookingForm() {
    const classes = useStyles();

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Box className={classes.root}>
                <Grid container spacing={1}>
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
                            options={cities}
                        />
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
                            label="mm"
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
                            label="mm"
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
                            label="mm"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controls.RadioGroup
                            name="gender"
                            items={genderItems}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controls.DatePicker
                            name="dob"
                            label="Birthday"
                            maxDate={new Date()}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Form>
    );
}

export default BookingForm;
