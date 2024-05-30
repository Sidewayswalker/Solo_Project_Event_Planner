import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './EventList.css';

function EventList() {
    const dispatch = useDispatch();
    const Events_Guests = useSelector(store => store.eventGuest);

    useEffect(() => {
        dispatch({ type: 'FETCH_EVENTS_GUESTS' });
    }, [dispatch]);


    //! DELETE FUNCTION
    const deleteEvent = (deleteId) => {
        // console.log('DEBUG: TO BE DELETED!!!!!!!',deleteId)
        dispatch({ type: 'DELETE_EVENT', payload: deleteId });
        dispatch({ type: 'FETCH_EVENTS_GUESTS' });
    };
    //! DELETE FUNCTION
    


    return (
        <div className="container">
            <p>Event List Page</p>
            {Events_Guests.map(combinedData => {
                // Split the guest names into an array if it's a string
                const guestNames = combinedData.guest_names ? combinedData.guest_names.split(', ') : [];
                const responses = combinedData.responses ? combinedData.responses.split(', ') : [];

                return (
                    <div key={combinedData.event_id} className='Event_List_Table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Event</th>
                                    <th>Date</th>
                                    <th>Location</th>
                                    <th>Start Time</th> 
                                    <th>Guests</th>
                                    <th>Responses</th>
                                    <th>UUID</th>
                                    <th>Add Guest</th>
                                    <th>Remove Event</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{combinedData.event_name}</td>
                                    <td>{combinedData.date}</td>
                                    <td>{combinedData.location}</td>
                                    <td>{combinedData.start_time}</td>
                                    <td>
                                        <ol>
                                            {guestNames.map((guest, index) => (
                                                <li key={index}>{guest}</li>
                                            ))}
                                        </ol>
                                    </td>
                                    <td>
                                        <ul id='invisible_bulletpoint_list'>
                                            {responses.map((response, index) => (
                                                <li key={index}>{response === 'true' ? 'Yes' : 'No'}</li>
                                            ))}
                                        </ul>
                                    </td>
                                    <td>{combinedData.invite_UUID}</td>
                                    <td>
                                        <button>Add Guest</button>
                                    </td>
                                    <td>
                                    <button onClick={() => deleteEvent(combinedData.event_id)}>Delete Event<br />❌</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );
            })}
        </div>
    );
}

export default EventList;
