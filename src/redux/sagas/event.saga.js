import axios from 'axios';
import { useSelector } from 'react-redux';
import { put, takeLatest } from 'redux-saga/effects';



function* fetchEvent() {
    console.log('In fetchEvent!')

    try{
        let response = yield axios({
          method: 'GET',
          url: '/api/event'
        })
        console.log('CLIENT_GET_EVENT_STEP 1',response.data)
          yield put({
            type: 'SET_EVENT',
            payload: response.data
          });
      } catch (error) {
        console.log('error with EventList get request')
      }
}



function* eventSaga() {
    yield takeLatest('FETCH_EVENT', fetchEvent);
  }


  export default eventSaga;