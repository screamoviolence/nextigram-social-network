export const  GET_USERS = "GET_USERS";

let initialState = {
  usersData: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        usersData: action.payload,
      };
    default:
      return state;
  }
};



export default usersReducer;
