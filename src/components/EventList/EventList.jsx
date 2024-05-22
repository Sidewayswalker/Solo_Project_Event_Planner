import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


function EventList() {

    const dispatch = useDispatch();
    const events = useSelector(store => store.event);

    useEffect(() => {
        dispatch({ type: 'FETCH_EVENT' });
    }, []);





    return(
        <div className="container">
            <p>Event List Page</p>
            {JSON.stringify(events)}
            {/* {events} */}
        </div>
    )
}

export default EventList;