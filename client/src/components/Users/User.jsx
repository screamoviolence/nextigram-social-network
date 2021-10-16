import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/default_userAvatar.png";

let User = ({ user }) => {
  console.log(user.user.name)
  return (
    <div className={classes.usersWrapper}>
      <div>
        <img
          src={user.avatar ? user.avatar : userPhoto}
          alt=""
          className={classes.usersPhoto}
        />
      </div>
      <div className={classes.infoHolder}>
        <div>
          <div>Name: {user.user.name}</div>
          <div>Bio: {user.user.bio}</div>
        </div>
        <div>
          <div>contacts: {"Object.keys(profile.contacts).map"}</div>
        </div>
      </div>
    </div>
  );
};
export default User;
