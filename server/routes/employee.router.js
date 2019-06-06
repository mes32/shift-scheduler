const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Route GET /api/employee
// Returns a list all employees (ordered by employee last names)
router.get('/', (req, res) => {
    const selectText = `
    SELECT
        id
        , first_name
        , last_name
    FROM employee
    ORDER BY last_name
    LIMIT 10000;
    `;
    pool.query(selectText).then((queryResponse) => {
        res.send(queryResponse.rows);
    }).catch((queryError) => {
        console.log('SQL error using GET /api/employee,', queryError);
        res.sendStatus(500);
    });
});

module.exports = router;