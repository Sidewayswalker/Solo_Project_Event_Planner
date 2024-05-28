import axios from "axios";
import { put, takeLatest, takeEvery } from "redux-saga/effects";

function* fetchEventsGuests() {
  console.log("In fetch Events & Guests!");

  try {
    let response = yield axios({
      method: "GET",
      url: "/api/event_guest",
    });
    console.log("CLIENT_GET_EVENTGUEST_STEP 1", response.data);
    yield put({
      type: "SET_EVENTS_GUESTS",
      payload: response.data,
    });
  } catch (error) {
    console.log("error with GET EVENTS & GUESTS get request");
  }
}

function* addEvent(action) {
  console.log("In CREATE Events & Guests!", action.payload);
  try {
    yield axios({
      method: "POST",
      url: "/api/event_guest",
      data: {
        event_name: action.payload.event_name,
        date: action.payload.date,
        location: action.payload.location,
        start_time: action.payload.start_time,
        guest_name: action.payload.guest_name,
        phone_number: action.payload.phone_number
      },
    });
    yield put({ type: "SET_EVENTS_GUESTS" });
  } catch (err) {
    console.log(err);
  }
}

function* EventGuestSaga() {
  yield takeLatest("FETCH_EVENTS_GUESTS", fetchEventsGuests);
  yield takeEvery("ADD_EVENT", addEvent);
}

export default EventGuestSaga;
