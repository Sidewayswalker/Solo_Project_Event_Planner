const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const uuid = require('react-uuid');



/**
 * GET route template
 */
router.get('/', (req, res) => {
    // console.log('I AM HERE!!!',req.user);
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
    // console.log('Incoming data:', req.body);
    const { event_name, date, location, start_time, guests } = req.body; // Assuming req.body has these fields
    const userId = req.user.id; // Assuming req.user contains the authenticated user's data
    // console.log('THE REQ.BODY',req.body)
    // console.log('GUESTS MAPPPP',guests);
    // Query to insert a new event
    const insertEventQuery = `
        INSERT INTO event (user_id, event_name, date, location, start_time)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id;
    `;
    const eventValues = [userId, event_name, date, location, start_time];

    pool.query(insertEventQuery, eventValues)
        .then(async eventResult => {
            const createdEventId = eventResult.rows[0].id;
            console.log('New Event Id:', createdEventId);

            // Prepare values for inserting guests
            const insertGuestQuery = `
                INSERT INTO guest (event_id, guest_name, phone_number, "invite_UUID")
                VALUES ($1, $2, $3, $4);
            `;

            // Use Promise.all to insert all guests associated with the event
            const guestPromises = guests.map(guest => {
                const guestUUID = uuid();
                const guestValues = [createdEventId, guest.guestName, guest.phoneNumber, guestUUID];
                // console.log('guest data',guest)
                return pool.query(insertGuestQuery, guestValues);
            });

            return await Promise.all(guestPromises);
        })
        .then(() => {
            res.sendStatus(201);
        })
        .catch(err => {
            console.log('ERROR: Insert event and guests', err);
            res.sendStatus(500);
        });
});


router.delete('/:id', (req, res) => {
    // console.log('req.params.id', req.params.id)
    const queryText = `
      DELETE FROM "event" 
        WHERE id=$1
    `;
    pool.query(queryText, [req.params.id])
      .then(() => { res.sendStatus(200); })
      .catch((err) => {
        console.log('Error in DELETE /api/event_guest/:id', err);
        res.sendStatus(500);
      });
});

//! PUT
router.put('/:id', (req, res) => {
    const updatedPlant = req.body;
  
    const queryText = `
      UPDATE "guest"
        SET 
          "event_id"=$1, 
          "phone_number"=$2, 
          "response"=$3, 
          "invite_uuid"=$4, 
        WHERE
          id=$5;
    `;
  
    const queryValues = [
      updatedPlant.event_name,
      updatedPlant.date,
      updatedPlant.location,
      updatedPlant.start_time,
      updatedPlant.id,
    ];
  
    pool.query(queryText, queryValues)
      .then((result) => { res.sendStatus(200); })
      .catch((err) => {
        console.log('Error in PUT /api/event_guest/:id', err);
        res.sendStatus(500);
      });
  });
//! PUT


module.exports = router;