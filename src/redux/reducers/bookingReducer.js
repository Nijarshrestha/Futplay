import { GET_BOOKINGS_START, GET_BOOKINGS_SUCCESS, GET_BOOKINGS_FAILURE,RESET_BOOKING_LIST } from '../constants';

const initial_state = {
  loading: false,
  list: [],
  error: ''
};

export default function bookingReducer(state = initial_state, action) {
  let newState = JSON.parse(JSON.stringify(state)); //change newstate values and send it as normal,prevents mutation of state ;)

  switch (action.type) {
    case GET_BOOKINGS_START:
      newState.loading = true;
      newState.list = [];
      newState.error = '';

    case GET_BOOKINGS_SUCCESS:
      newState.loading = false;
      newState.list = action.payload;
      newState.error = '';
      return newState;

    case GET_BOOKINGS_FAILURE:
      newState.loading = false;
      newState.list = [];
      newState.error = action.payload;
      return newState;
    
    case RESET_BOOKING_LIST:
      newState.loading= false;
      newState.list= [];
      newState.error='';
      return newState;
    default:
      return state;
  }
}
