import axios from "axios";
import * as userConstants from "./../constants/userConstants";

export function userLogin(data) {
  return dispatch => {
    dispatch({ type: userConstants.USER_LOGIN_REQUEST, payload: null });
    const Username = data.Username;
    const Password = data.Password;
    console.log(data);
    axios({
        method: 'post',
        url: "http://localhost:3000/api/login",
        data: {
            Username: Username,
            Password: Password
        }
    })
      .then(response => {
        localStorage.setItem("FutsalUser", Username);
        dispatch({ type: userConstants.USER_LOGIN_SUCCESS, payload: Username });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: userConstants.USER_LOGIN_FAILURE, payload: err });
      });
  };
}

export function userlogout() {
  return dispatch => {
    localStorage.removeItem("FutsalUser");
   dispatch({type: userConstants.USER_LOGOUT});
  }
}

export function resetError() {
  return dispatch => dispatch({ type: userConstants.RESET_ERROR });
}

export function checkLogin() {
  return dispatch => {
    const user=localStorage.getItem("FutsalUser");
    if(user) {
      dispatch({ type: userConstants.USER_LOGIN_SUCCESS, payload: user });
    }
  }
}
// export function forceLogin()