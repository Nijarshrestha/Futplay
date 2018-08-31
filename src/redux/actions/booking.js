import { GET_BOOKINGS_START, GET_BOOKINGS_SUCCESS, GET_BOOKINGS_FAILURE,RESET_BOOKING_LIST } from '../constants';

export function getUserBookings(userId) {
  return dispatch => {
    dispatch({ type: GET_BOOKINGS_START });

    console.log(data);
    axios({
      method: 'get',
      url: 'http://localhost:3000/api/booking/'+userId
    })
      .then(response => {
        dispatch({ type: GET_BOOKINGS_SUCCESS, payload: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: GET_BOOKINGS_FAILURE, payload: err });
      });
  };
}

export function getFilteredBookings(groundId,date) {
  return dispatch => {
    dispatch({ type: GET_BOOKINGS_START });

    console.log(data);
    axios({
      method: 'get',
      url: 'http://localhost:3000/api/booking/'+groundId+'/'+date
    })
      .then(response => {
        dispatch({ type: GET_BOOKINGS_SUCCESS, payload: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: GET_BOOKINGS_FAILURE, payload: err });
      });
  };
}


export function resetBookingList() {
  return dispatch=> dispatch({type:RESET_BOOKING_LIST})
}