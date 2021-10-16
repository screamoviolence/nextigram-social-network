import * as api from "../../components/api/Api.js";
import { GET_USERS } from "../reducers/usersReducer";

export const getUsersThunk = () => async (dispatch) => {
  try {
    const { data } = await api.getUsers();
    dispatch({ type: GET_USERS, payload: data });
  } catch (error) {
      console.log("some error" + console.error)
  }
};
