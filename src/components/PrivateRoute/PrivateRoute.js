import { makeStyles } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
// import { useAuth } from "../../contexts/AuthContext";
// import { signOut } from "../../services/AuthService";
import { getReduxUser, getUser, removeUserStorage } from "../../utils/Common";
import Header from "../Header/Header";

const useStyles = makeStyles((theme) => ({
    root: {
        background: "#888888"
    },
    content: {
        flexGrow: 1,
    },
    toolbar: {
        minHeight: "56px",
    },
}));

const useAuth = () => {
    const user = {loggedIn: true};
    return user && user.loggedIn;
  }

function PrivateRoute({ component: Component, ...rest }) {
    const isAuth = useAuth();
    const classes = useStyles();
    const account = getReduxUser();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //   async function handleLogout() {
    //     logout();
    //     await signOut(logout, dispatch, navigate);
    //   }

    //   if (!account || !currentUser) {
    //     handleLogout()
    //   }
    console.log(isAuth);
    return isAuth ? (
        <>
            <Header />
            <div className={classes.root}>
                <Outlet />
            </div>
        </>
    ) : (
        <Navigate to="/homepage " />
    );

}

export default PrivateRoute;
