import {USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_PROFILE_FAILURE} from './../constants/userProfileConstrants'

const init_state = {
    loading: false,
    error: '',
    data: {}, 
}

const userProfileReducer = (state = init_state,action)=>{
    let newState = JSON.parse(JSON.stringify(state));
    console.log(action.payload);
  switch (action.type) {
    case USER_PROFILE_REQUEST:
        newState.loading = true;
        newState.error = '';
        newState.data = '';
        return newState;

    case USER_PROFILE_SUCCESS:
        newState.loading = false;
        newState.error = '';
        newState.data = action.payload;
        console.log(action.payload, newState,'yo ho');
        return newState;

    case USER_PROFILE_FAILURE:
        newState.loading = false;
        newState.error = action.payload;
        newState.data = '';
        return newState;


    default:
      return state;
  }
}
export default userProfileReducer;