import React, { useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import PostForm from "./MyPosts/Form/Form";
import { getPostsThunk } from "../../redux/actions/postsThunks";
import { useState } from "react";
import MyPosts from "./MyPosts/MyPosts";
import userPhoto from "../../assets/images/default_userAvatar.png";
import useStyles from "./MyPosts/styles.js";
import { getProfileThunk, updateProfileThunk } from "../../redux/actions/profileThunks";
import { updateProfile } from "../api/Api";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";


const Profile = ({ profile, getProfile }) => {
  const [currentId, setCurrentId] = useState(null);
  let [editMode, setEditMode] = useState(false);

  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const uiClasses = useStyles();

  useEffect(() => {
    dispatch(getProfileThunk());
    dispatch(getPostsThunk());
  }, [currentId]);

  const onSubmit = (formData) => {
    debugger
    dispatch(updateProfileThunk(formData))
      .then(() => {
        setEditMode(false);
      })
      .catch();
  };

  return (
    <div>
      <Grow in>
        <Container>
  {profile && (<div>
        {editMode ? (
          <ProfileDataForm
            initialValues={profile}
            onSubmit={onSubmit}
            profile={profile}
          />
        ) : (
          <div>
            <img
              className={uiClasses.userProfileImg}
              src={!user?.result.avatar && userPhoto}
            />
            <div>
              <button onClick={() => setEditMode(true)}>edit</button>
            </div>
            <div> name: {profile.user.name}</div>
            <div>bio: {profile.bio} </div>
            <div>
              contacts:{" "}
              {Object.keys(profile.contacts).map((key) => {
                return (
                  <div>
                    <b>{key}:</b>
                    {profile.contacts[key]}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        </div>)}


          {/* {profile && (
            <div>
              <img
                className={uiClasses.userProfileImg}
                src={!user?.result.avatar && userPhoto}
              />
              <div>
                <button onClick={() => setEditMode(true)}>edit</button>
              </div>
              <div> name: {profile.user.name}</div>
              <div>bio: {profile.bio} </div>
              <div>
                contacts:{" "}
                {Object.keys(profile.contacts).map((key) => {
                  return (
                    <div>
                      <b>{key}:</b>
                      {profile.contacts[key]}
                    </div>
                  );
                })}
              </div>
            </div>
          )}  */}

          <Grid item xs={12} sm={12}>
            <PostForm currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <MyPosts setCurrentId={setCurrentId} />
          </Grid>
        </Container>
      </Grow>
    </div>
  );
};

export default Profile;
