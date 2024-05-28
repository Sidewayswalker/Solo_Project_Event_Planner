import { useState } from "react";
import { useDispatch } from "react-redux";


function NewEventForm() {

    const [eventInput, setEventInput] = useState('');
    const [dateInput, setDateInput] = useState('');
    const [locationInput, setLocationInput] = useState('');
    const [timeInput, setTimeInput] = useState('');
    const [guestInput, setGuestInput] = useState('');
    const [phoneInput, setPhoneInput] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const newEventPayload = {
            event_name: eventInput,
            date: dateInput,
            location: locationInput,
            start_time: timeInput,
            guest_name: guestInput,
            phone_number: phoneInput
        };
        dispatch({
          type: 'ADD_EVENT', 
          payload: newEventPayload
        })
            //HISTORY.push add it in for event list.
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>New Event Form</h2>
                    <label htmlFor="event">Event:</label>
                    <input
                        onChange={(event) => setEventInput(event.target.value)}
                        value={eventInput}
                        id="event"
                        name="event"
                        placeholder="Birthday Party"
                    /> 
                    <br/>
                    <label htmlFor="date">Date:</label>
                    <input
                        onChange={(event) => setDateInput(event.target.value)}
                        value={dateInput}
                        id="date"
                        name="date"
                        placeholder="2024-06-15"
                    />
                    <br/>
                    <label htmlFor="location">Location:</label>
                    <input
                        onChange={(event) => setLocationInput(event.target.value)}
                        value={locationInput}
                        id="location"
                        name="location"
                        placeholder="Central Park"
                    />
                    <br/>
                    <label htmlFor="startTime">Start Time:</label>
                    <input
                        onChange={(event) => setTimeInput(event.target.value)}
                        value={timeInput}
                        id="startTime"
                        name="startTime"
                        placeholder="14:00"
                    />
                </div>
                <div>
                    <label htmlFor="guestName">Guest Name:</label>
                    <input
                        onChange={(event) => setGuestInput(event.target.value)}
                        value={guestInput}
                        id="guestName"
                        name="guestName"
                        placeholder="John Doe"
                    />
                    <br/>
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        onChange={(event) => setPhoneInput(event.target.value)}
                        value={phoneInput}
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="555-123-4567"
                    />
                    <button type="button">+</button>
                </div>
                <div>
                    <button type="submit">Submit Guests</button>
                </div>
            </form>
        </div>
    );
}

export default NewEventForm;