const eventGuestReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_EVENTS_GUESTS':
            console.log('CLIENT_GET_EVENTGUEST_STEP 2',action.payload)
            return action.payload;
        default:
            return state;
    }
  };  

  export default eventGuestReducer;