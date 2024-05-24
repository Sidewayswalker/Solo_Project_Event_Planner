const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const query = `
    SELECT 
    "user".id AS user_id,
    "user".username,
    event.id AS event_id,  
    event.event_name, 
    event.date, 
    event.location, 
    event.start_time,
    STRING_AGG(guest.guest_name, ', ') AS guest_names,
    STRING_AGG(guest.phone_number, ', ') AS phone_numbers,
    STRING_AGG(CAST(guest.response AS VARCHAR), ', ') AS responses,
    STRING_AGG(guest."invite_UUID", ', ') AS invite_UUIDs
FROM 
    "user"
INNER JOIN 
    event ON "user".id = event.user_id
INNER JOIN 
    guest ON event.id = guest.event_id
GROUP BY 
    "user".id, 
    "user".username, 
    event.id, 
    event.event_name, 
    event.date, 
    event.location, 
    event.start_time;
    `;
    pool.query(query)
    .then(result => {
        res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all Events_&_Guests', err);
      res.sendStatus(500)
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;