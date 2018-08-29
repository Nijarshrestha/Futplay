import { combineReducers } from "redux";
import userReducer from "./userReducer";
import { reducer as formReducer } from 'redux-form'
import userProfileReducer from "./userProfileReducer";

export default combineReducers({ login : userReducer,
    userprofile: userProfileReducer,
    form: formReducer});
