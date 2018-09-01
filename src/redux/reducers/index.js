import { combineReducers } from "redux";
import userReducer from "./userReducer";
import { reducer as formReducer } from 'redux-form'
import userProfileReducer from "./userProfileReducer";
import GroundReducer from "./groundReducer";
import bookingReducer from "./bookingReducer";

export default combineReducers({ login : userReducer,
    userprofile: userProfileReducer,
    form: formReducer,
    ground:GroundReducer,
    booking:bookingReducer
    
});
