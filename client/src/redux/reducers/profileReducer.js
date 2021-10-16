export const GET_POSTS = "GET_POSTS";
export const CREATE_POST = "CREATE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";
export const LIKE_POST = "LIKE_POST";

export const GET_PROFILE = "GET_PROFILE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";


let initialState = {
  postsData: [],
  profiles: [],
  profile: null,
  status: "",
}; 

const profileReducer = (state = initialState, action) => {
  switch (action.type) {

    
    case GET_PROFILE:
      case UPDATE_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    case CREATE_POST:
      return {
        ...state,
        postsData: [...state.postsData, action.payload],
      };
    case GET_POSTS:
      return {
        ...state,
        postsData: action.payload
      }
      case UPDATE_POST:
      case LIKE_POST  :
        return {
        ...state,
        postsData: state.postsData.map((post) => post._id === action.payload._id ? action.payload : post)
      }
      case DELETE_POST  :
        return {
        ...state,
        postsData: state.postsData.filter((post) => post._id !== action.payload)
      }
    default:
      return state;
  }
};


export default profileReducer;
