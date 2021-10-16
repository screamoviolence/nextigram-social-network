
export const AUTH = "AUTH";
export const LOGOUT = "LOGOUT";


let initialState = {
  authData: null,
  userId: null,
  email: null,
  login: null,
  isLogin: false,
  captchaUrl: null, // if null then captcha isnt required
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return {
        ...state,
        authData: action?.data,
      };
    case LOGOUT:
      localStorage.clear();
      return {
        ...state,
        authData: null,
      };
    default:
      return state;
  }
};


export default authReducer;
