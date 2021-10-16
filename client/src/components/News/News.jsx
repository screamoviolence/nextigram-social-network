import React, { useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getPostsThunk } from "../../redux/actions/postsThunks";
import { useState } from "react";
import AllPosts from "./AllPosts/AllPosts";

const News = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsThunk());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid item xs={12} sm={12}>
          <AllPosts setCurrentId={setCurrentId} />
        </Grid>
      </Container>
    </Grow>
  );
};

export default News;
