import React, { useEffect } from "react";
import User from "./User";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import {useDispatch} from 'react-redux'
import { getUsersThunk } from "../../redux/actions/UsersThunk";

let Users = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsersThunk())
  } , [dispatch])
  const users = useSelector((state) => state.usersPage.usersData);


  console.log(users);

  let usersElements = users.map((user) => (
    <Grid key={user._id} item xs={12} sm={12}>
      <User user={user} />
    </Grid>
  ));

  return (
    <div>
      {/* <Pagination
        currentPage={currentPage}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        onPageChanged={onPageChanged}
      /> */}
      <div>
        {usersElements}
      </div>
    </div>
  );
};
export default Users;
