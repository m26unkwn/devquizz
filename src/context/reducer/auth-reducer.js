/** @format */

export default function authReducer(state, action) {
  switch (action.type) {
    case "ADD_AUTH_DATA":
      return {
        ...state,
        token: action.payload.token,
        userDetails: action.payload.userData,
      };

    case "ADD_LOGIN_ERROR":
      return {
        ...state,
        authError: { ...state.authError, login: action.error },
      };
    case "ADD_SIGNUP_ERROR":
      return {
        ...state,
        authError: { ...state.authError, signup: action.error },
      };
    case "LOGOUT_USER":
      return {
        token: "",
        userDetails: "",
        authError: {
          login: "",
          signup: "",
        },
      };
    default:
      return state;
  }
}
