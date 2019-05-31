const express = require('express');
// const pool = require('../modules/pool');
const router = express.Router();

// Route GET /api/shift
// 
router.get('/', (req, res) => {
    res.sendStatus(200);
});

module.exports = router;