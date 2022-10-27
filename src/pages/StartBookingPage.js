import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Controls from '../components/Controls/Controls';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff"
    },
    btn: {
        width: "442px",
        height: "106px",
        color: "#fff",
        fontSize: "25px",
        '&:hover': {
            backgroundColor: "#1f9cc4"
        }
    },
    link: {
        marginLeft: 'auto',
        marginRight: 'auto',
        textDecoration: 'none'
    }
}));

function StartBookingPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Link to="/booking" className={classes.link}>
                <Controls.Button
                    className={classes.btn}
                    type="submit"
                    text="Start booking"
                />
            </Link>
        </div>
    );
}

export default StartBookingPage;