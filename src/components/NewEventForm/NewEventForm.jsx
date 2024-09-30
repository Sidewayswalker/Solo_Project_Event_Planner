import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import './NewEventForm.css';

function NewEventForm() {
  const [eventInput, setEventInput] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [timeInput, setTimeInput] = useState('');
  const [guestInputs, setGuestInputs] = useState([{ guestName: '', phoneNumber: '' }]);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleGuestChange = (index, event) => {
    const { name, value } = event.target;
    const newGuestInputs = guestInputs.map((guest, i) => 
      i === index ? { ...guest, [name]: value } : guest
    );
    setGuestInputs(newGuestInputs);
  };

  const addAnotherGuest = () => {
    setGuestInputs([...guestInputs, { guestName: '', phoneNumber: '' }]);
  };

  // This is a Submit for the entire "New Event Form"
  const handleSubmit = (event) => {
    event.preventDefault();
    const newEventPayload = {
      event_name: eventInput,
      date: dateInput,
      location: locationInput,
      start_time: timeInput,
      guests: guestInputs
    };
    console.log('New_Event_Payload',newEventPayload)
    dispatch({
      type: 'ADD_EVENT',
      payload: newEventPayload
    });
    // Clear form fields
    setEventInput('');
    setDateInput('');
    setLocationInput('');
    setTimeInput('');
    setGuestInputs([{ guestName: '', phoneNumber: '' }]);
    history.push('/event_list');
  };



  return (
    <div id="NewEventFormBody">
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
          <br />
          <label htmlFor="date">Date:</label>
          <input
            onChange={(event) => setDateInput(event.target.value)}
            value={dateInput}
            id="date"
            name="date"
            placeholder="YYYY-MM-DD"
          />
          <br />
          <label htmlFor="location">Location:</label>
          <input
            onChange={(event) => setLocationInput(event.target.value)}
            value={locationInput}
            id="location"
            name="location"
            placeholder="Central Park"
          />
          <br />
          <label htmlFor="startTime">Start Time:</label>
          <input
            onChange={(event) => setTimeInput(event.target.value)}
            value={timeInput}
            id="startTime"
            name="startTime"
            placeholder="14:00"
          />
        </div>
        {guestInputs.map((input, index) => (
          <div key={index}>
            <label htmlFor={`guestName${index}`}>Guest Name:</label>
            <input
              onChange={(event) => handleGuestChange(index, event)}
              value={input.guestName}
              id={`guestName${index}`}
              name="guestName"
              placeholder="John Doe"
            />
            <label htmlFor={`phoneNumber${index}`}>Phone Number:</label>
            <input
              onChange={(event) => handleGuestChange(index, event)}
              value={input.phoneNumber}
              id={`phoneNumber${index}`}
              name="phoneNumber"
              placeholder="xxx-xxx-xxxx"
            />
          </div>
        ))}
        <button type="button" onClick={addAnotherGuest} id="addGuestButton">+</button>
        <div>
          <button type="submit" id="SubmitNewEventWithGuests">Submit Guests</button>
        </div>
      </form>
    </div>
  );
}

export default NewEventForm;
