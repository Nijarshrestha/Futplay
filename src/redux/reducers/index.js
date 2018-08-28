import { combineReducers } from "redux";
import userReducer from "./userReducer";
import { reducer as formReducer } from 'redux-form'

export default combineReducers({ login : userReducer,
    form: formReducer});
