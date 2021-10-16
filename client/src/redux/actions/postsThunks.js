import * as api from "../../components/api/Api.js";

import {
  CREATE_POST,
  GET_POSTS,
  UPDATE_POST,
  DELETE_POST,
  LIKE_POST,
} from "../reducers/profileReducer";

export const getPostsThunk = () => async (dispatch) => {
  try {
    
    const { data } = await api.getPosts();
    dispatch({ type: GET_POSTS, payload: data });
  } catch (error) {
    console.log("some error" + error);
  }
};

export const createPostThunk = (post) => async (dispatch) => {
  try {
    debugger
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePostThunk = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePostThunk = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE_POST, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePostThunk = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: LIKE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};
