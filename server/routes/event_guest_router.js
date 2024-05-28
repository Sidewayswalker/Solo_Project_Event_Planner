const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log('I AM HERE!!!',req.user);
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
WHERE 
    event.user_id = $1
GROUP BY 
    "user".id, 
    "user".username, 
    event.id, 
    event.event_name, 
    event.date, 
    event.location, 
    event.start_time;
    `;
    const userIdValues = req.user.id;
    const values = [userIdValues]
    pool.query(query, values)
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
    console.log('Incoming data:', req.body);
    const { event_name, date, location, start_time, guests } = req.body; // Assuming req.body has these fields
    const userId = req.user.id; // Assuming req.user contains the authenticated user's data

    // Query to insert a new event
    const insertEventQuery = `
        INSERT INTO event (user_id, event_name, date, location, start_time)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id;
    `;
    const eventValues = [userId, event_name, date, location, start_time];

    pool.query(insertEventQuery, eventValues)
        .then(eventResult => {
            const createdEventId = eventResult.rows[0].id;
            console.log('New Event Id:', createdEventId);

            // Prepare values for inserting guests
            const insertGuestQuery = `
                INSERT INTO guest (event_id, guest_name, phone_number, response, invite_UUID)
                VALUES ($1, $2, $3, $4, $5);
            `;

            // Use Promise.all to insert all guests associated with the event
            const guestPromises = guests.map(guest => {
                const guestValues = [createdEventId, guest.guest_name, guest.phone_number, guest.response, guest.invite_UUID];
                return pool.query(insertGuestQuery, guestValues);
            });

            return Promise.all(guestPromises);
        })
        .then(() => {
            res.sendStatus(201);
        })
        .catch(err => {
            console.log('ERROR: Insert event and guests', err);
            res.sendStatus(500);
        });
});

module.exports = router;