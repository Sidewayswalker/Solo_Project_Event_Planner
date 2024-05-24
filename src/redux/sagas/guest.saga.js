// import axios from 'axios';
// import { put, takeLatest } from 'redux-saga/effects';

// function* fetchGuest() {
//     console.log('In fetchGuest!')

//     try{
//         let response = yield axios({
//           method: 'GET',
//           url: '/api/guest'
//         })
//         // console.log('CLIENT_GET_GUEST_STEP 1',response.data) //* COMPLETE
//           yield put({
//             type: 'SET_GUEST',
//             payload: response.data
//           });
//       } catch (error) {
//         console.log('error with GuestList get request')
//       }
// }


// function* guestSaga() {
//     yield takeLatest('FETCH_GUEST', fetchGuest);
//   }


//   export default guestSaga;