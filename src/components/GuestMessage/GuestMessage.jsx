import React from "react";
import { useHistory } from 'react-router-dom';
import "./GuestMessage.css";

function GuestMessage() {
  const history = useHistory();

  function handleClick() {
    history.push('/event_list');
  }

  return (
    <div id="Guest_Message_Table">
      <table>
        <tbody>
          <tr>
            <th>Event:</th>
            <td>Volleyball</td>
          </tr>
          <tr>
            <th>Date:</th>
            <td>2024-06-08</td>
          </tr>
          <tr>
            <th>Location:</th>
            <td>Bde Maka Ska</td>
          </tr>
          <tr>
            <th>Start Time:</th>
            <td>08:00:00</td>
          </tr>
        </tbody>
      </table>
      <div>
        <button id="Yes_Guest_Response" onClick={handleClick}>Yes</button>
        <button id="No_Guest_Response" onClick={handleClick}>No</button> 
      </div>
    </div>
  );
}

export default GuestMessage;

