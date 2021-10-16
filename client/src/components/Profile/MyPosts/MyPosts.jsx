import React, { useEffect } from "react";
import Post from "./Post/Post";
import { Grid } from "@material-ui/core";
import useStyles from "./styles.js";
import { useSelector } from "react-redux";


const MyPosts = ({ currentId, setCurrentId }) => {
  const posts = useSelector((state) => state.profilePage.postsData);
  const uiClasses = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  

  let postsElements = posts.map(
    (post) =>
      (user?.result?.googleId === post?.creator ||
        user?.result?._id === post?.creator) && (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      )
  );

  return !posts.length ? (
    "Empty."
  ) : (
    <div>
      <h1>{user?.result?.name && "My posts"}</h1>
      <Grid
        className={uiClasses.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {postsElements}
      </Grid>
    </div>
  );
};

export default MyPosts;
