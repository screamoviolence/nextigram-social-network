import React, { useEffect, useState } from "react";
import classes from "./Header.module.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import logo from "../../assets/images/github_logo.png";
import {  Avatar, Button, Typography } from "@material-ui/core";
import useStyles from "./styles.js";
import decode from 'jwt-decode'
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../redux/reducers/authReducer";


const Header = () => {
  const uiClasses = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const history = useHistory();
  const location = useLocation();

  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: LOGOUT });
    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    if(token) {
      const decodedToken = decode(token)
      if (decodedToken.exp * 1000 < new Date().getTime()) logout()
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);


  return (

    <header className={classes.header}>
      <img src={logo} alt="icon" height="60" />
      <div className={classes.loginBlock}>
        {user ? (
          <div className={uiClasses.profile}>
            <Avatar
              className={uiClasses.purple}
              alt={user?.result.name}
              src={user?.result.imageUrl}
            >
              {user?.result.name.charAt(0)}
            </Avatar>
            <Typography className={uiClasses.userName} variant="h6">
              {user?.result.name}
            </Typography>
            <Button
              variant="contained"
              className={uiClasses.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button component={Link} to="/auth">
            sign in
          </Button>
        )}
      </div>
    </header>
  );
};
export default Header;
