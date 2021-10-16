import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "../../Profile/MyPosts/styles.js";
import { useSelector } from "react-redux";
import Post from "../../Profile/MyPosts/Post/Post";

const AllPosts = ({currentId, setCurrentId}) => {
  const posts = useSelector((state) => state.profilePage.postsData);
  const uiClasses = useStyles();


 // console.log(posts);

  let postsElements = posts.map((post) => (
    <Grid key={post._id} item xs={12} sm={6}>
      <Post post={post} setCurrentId={setCurrentId} />
    </Grid>
  ));

  return !posts.length ? (
    'Empty.'
  ) : (
    <div>
      <h1>Posts</h1>
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

export default AllPosts;
