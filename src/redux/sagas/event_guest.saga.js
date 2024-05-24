import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchEventsGuests() {
    console.log('In fetch Events & Guests!')

    try{
        let response = yield axios({
          method: 'GET',
          url: '/api/event_guest'
        })
        console.log('CLIENT_GET_EVENTGUEST_STEP 1',response.data)
          yield put({
            type: 'SET_EVENTS_GUESTS',
            payload: response.data
          });
      } catch (error) {
        console.log('error with GET EVENTS & GUESTS get request')
      }
}


function* EventGuestSaga() {
    yield takeLatest('FETCH_EVENTS_GUESTS', fetchEventsGuests);
  }


  export default EventGuestSaga;