import axios from "axios";
import { put, takeLatest, takeEvery } from "redux-saga/effects";

function* fetchEventsGuests() {
  try {
    let response = yield axios({
      method: "GET",
      url: "/api/event_guest",
    });
    yield put({
      type: "SET_EVENTS_GUESTS",
      payload: response.data,
    });
  } catch (error) {
    console.log("Error with GET EVENTS & GUESTS get request:", error);
  }
}

function* addEvent(action) {
  try {
    yield axios({
      method: "POST",
      url: "/api/event_guest",
      data: {
        event_name: action.payload.event_name,
        date: action.payload.date,
        location: action.payload.location,
        start_time: action.payload.start_time,
        guests: action.payload.guests
      },
    });
    yield put({ type: "FETCH_EVENTS_GUESTS" });
  } catch (err) {
    console.log("Error in adding event:", err);
  }
}

function* deleteEvent(action) {
  // console.log('DEBUG: ACTION',action)
  try {
    yield axios.delete(`/api/event_guest/${action.payload}`);
    yield put({
      type: 'DELETE_ITEM',
      payload: action.payload
    });
  }
  catch (err) {
    console.log('Error in Delete:', err)
  }
}

function* EventGuestSaga() {
  yield takeLatest("FETCH_EVENTS_GUESTS", fetchEventsGuests);
  yield takeEvery("ADD_EVENT", addEvent);
  yield takeLatest('DELETE_EVENT', deleteEvent);
}

export default EventGuestSaga;
