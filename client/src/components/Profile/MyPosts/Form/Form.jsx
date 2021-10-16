import React from "react";
import useStyles from "./styles.js";
import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  createPostThunk,
  updatePostThunk,
} from "../../../../redux/actions/postsThunks.js";
import { useSelector } from "react-redux";

const PostForm = ({ currentId, setCurrentId }) => {
  
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    selectedFile: "",
  });


  const post = useSelector((state) => currentId ? state.profilePage.postsData.find((p) => p._id === currentId) : null)
  const dispatch = useDispatch();
  const uiClasses = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'))

  useEffect(() => {
    if(post) {
    
     setPostData(post)
    }
 } ,[post])


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === null) {
      dispatch(createPostThunk({...postData, name: user?.result?.name}));
      clear()
    } else {
      dispatch(updatePostThunk(currentId, {...postData, name: user?.result?.name}));
      clear()
    }
  };

  const clear = () => {
    
    setCurrentId(null);
    setPostData({title: '', message: '', selectedFile: ''})
  };

  if (!user?.result?.name) {
    return (
      <Paper className={uiClasses.paper}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own posts and like other's posts.
        </Typography>
      </Paper>
    );
  }

  return (
    <Grid className={uiClasses.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${uiClasses.root} ${uiClasses.form} `}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">{currentId ? 'Editing' : 'Create'} post</Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          multiline
          rows={4}
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
       
        <div className={uiClasses.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          ></FileBase>
        </div>
        <Button
          className={uiClasses.buttonSubmit}
          variant="container"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Add post
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Grid>
  );
};

export default PostForm;
