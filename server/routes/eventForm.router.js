const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//! ROUTER for POSTING INFO to 2 TABLES (events & guests)
//TODO *******PAUSE*******
/**
 * POST route template
 */

router.post('/', (req, res) => {
    console.log(req.body);
    const insertEventQuery = `
        INSERT INTO "event"
            ("event_name", "date", "location", "start_time")
            VALUES
            ($1, $2, $3, $4)
            RETURNING "id";
    `;
    const insertEventValues = [
        req.body.event_name,
        req.body.date,
        req.body.location,
        req.body.start_time
    ];

    pool.query(insertEventQuery, insertEventValues)
        .then(result => {
            // ID IS HERE!
            console.log('New Event Id:', result.rows[0].id);
            const createdEventId = result.rows[0].id;

            const insertGuestQuery = `
                INSERT INTO "guest"
                    ("event_id", "guest_name", "phone_number")
                    VALUES
                    ($1, $2, $3)
            `;
            const insertGuestValues = [
                createdEventId,
                req.body.guest_name,
                req.body.phone_number
            ];

            pool.query(insertGuestQuery, insertGuestValues)
                .then(result => {
                    // Guest Insert Successful
                    res.sendStatus(201);
                })
                .catch(err => {
                    console.log('ERROR: Insert guest', err);
                    res.sendStatus(500);
                });
        })
        .catch(err => {
            console.log('ERROR: Insert event', err);
            res.sendStatus(500);
        });
});

module.exports = router;