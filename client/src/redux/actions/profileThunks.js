import * as api from "../../components/api/Api.js";
import { GET_PROFILE } from "../reducers/profileReducer";
import { UPDATE_POST } from "../reducers/profileReducer";


export const getProfileThunk = () => async (dispatch) => {
  try {
    const { data } = await api.getProfile();
    dispatch({ type: GET_PROFILE, payload: data });
  } catch (error) {
      console.log("some error" + console.error)
  }
};

export const updateProfileThunk = (profile) => async (dispatch) => {
  try {
    debugger
    const { data } = await api.updateProfile(profile);
    dispatch({ type: UPDATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};