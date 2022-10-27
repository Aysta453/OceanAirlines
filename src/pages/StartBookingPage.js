import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#FF87BA",
      height: "107px",
      zIndex: theme.zIndex.drawer + 1,
    },
  }));

function StartBookingPage(props) {
    const classes = useStyles();
    
    return (
        <div>
            
        </div>
    );
}

export default StartBookingPage;