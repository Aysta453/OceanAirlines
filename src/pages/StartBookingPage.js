import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

import Controls from '../components/Controls/Controls';
import { primaryButton, secondaryButton, systemBlack, systemWhite } from '../constants/colors'

const useStyles = makeStyles((theme) => ({
    root: {
        pading: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff"
    },
    btn: {
        borderSize: '20px',
        borderStyle: 'solid',
        borderColor: systemBlack,
        marginTop: theme.spacing(45),
        backgroundColor: primaryButton,
        paddingLeft: '60px',
        paddingRight: '60px',
        color: systemWhite,
        borderRadius: '25px',
        fontSize: "25px",
        '&:hover': {
            backgroundColor: secondaryButton,
            borderColor: systemBlack,
            borderStyle: 'solid',
            borderSize: '1px',
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