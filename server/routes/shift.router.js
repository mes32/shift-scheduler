const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Route GET /api/shift
// Returns a list all shifts ordered by the shift start time
router.get('/', (req, res) => {
    const selectText = `
    SELECT
        id
        , employee_id
        , start_time
        , end_time
    FROM employee_shift
    ORDER BY start_time
    LIMIT 10000;
    `;
    pool.query(selectText).then((queryResponse) => {
        res.send(queryResponse.rows);
    }).catch((queryError) => {
        console.log('SQL error using GET /api/shift,', queryError);
        res.sendStatus(500);
    });
});

// Route POST /api/shift
// Inserts a new work shift
router.post('/', (req, res) => {
    const employeeID = req.body.id;
    const startTime = req.body.startTime;
    const endTime = req.body.endTime;
    const insertText = `
    INSERT INTO employee_shift
        (employee_id, start_time, end_time)
    VALUES
        ($1, $2, $3);
    `;
    pool.query(insertText, [employeeID, startTime, endTime]).then(() => {
        res.sendStatus(201);
    }).catch((queryError) => {
        console.log('SQL error using POST /api/shift,', queryError);
        res.sendStatus(500);
    });
});

module.exports = router;