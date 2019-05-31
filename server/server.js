const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Route includes
const shiftRouter = require('./routes/shift.router');

// Configure body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setup server-side routes
app.use('/api/shift', shiftRouter);

// Serve the static site files
app.use(express.static('build'));

// Start the server listening on PORT = 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

module.exports = app;
