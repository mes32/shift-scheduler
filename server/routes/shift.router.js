const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Route GET /api/shift
// Returns a list all shifts ordered by the shift start time
router.get('/', (req, res) => {
    const queryText = `
    SELECT  
        employee_id
        , start_time
        , end_time
    FROM employee_shift
    ORDER BY start_time
    LIMIT 10000;
    `;
    pool.query(queryText).then((queryResponse) => {
        res.send(queryResponse.rows);
    }).catch((queryError) => {
        console.log('SQL error using GET /api/shift,', queryError);
        res.sendStatus(500);
    });
});

module.exports = router;