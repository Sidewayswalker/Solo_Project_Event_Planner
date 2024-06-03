import React from "react";
import { useHistory } from 'react-router-dom'; // Import useHistory
import "./EventGuestOverview.css";

function EventGuestOverview() {
  const history = useHistory();

  function BackToEventsList() {
    history.push('/event_list');
  }

  return (
    <div id="Event_Guest_Overview_Table">
      <table>
        <tbody> {/* Wrap table body inside tbody */}
          <tr>
            <th>Event:</th>
            <td>Networking Event</td>
          </tr>
          <tr>
            <th>Date:</th>
            <td>2024-11-05</td>
          </tr>
          <tr>
            <th>Location:</th>
            <td>Lobby Area</td>
          </tr>
          <tr>
            <th>Start Time:</th>
            <td>17:30:00</td>
          </tr>
        </tbody>
      </table>
      <ol>
        <li>Mark: Yes</li>
        <li>Sophie: Yes</li>
        <li>Jake: No</li>
      </ol>
      <button id="Back_to_Event_List_Button" onClick={BackToEventsList}>Back to Event List</button>
    </div>
  );
}

export default EventGuestOverview;
