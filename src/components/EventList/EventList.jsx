import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './EventList.css';



function EventList() {

    const dispatch = useDispatch();
    const events = useSelector(store => store.event);

    useEffect(() => {
        dispatch({ type: 'FETCH_EVENT' });
    }, []);





    return(
        <div className="container">
            <p>Event List Page</p>
            {/* {JSON.stringify(events)} */}
            {events.map(event => {
                console.log('THE EVENT DUH', event)
                return (
                    <div key={event.id} className='Event_List_Table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Event</th>
                                    <th>Date</th>
                                    <th>Location</th>
                                    <th>Start Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{event.event_name}</td>
                                    <td>{event.date}</td>
                                    <td>{event.date}</td>
                                    <td>{event.start_time}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
            })}

        </div>
    )
}

export default EventList;