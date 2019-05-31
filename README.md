# Shift Scheduler
Create and view a work schedule. Managers/employees can view all employee shifts and create a shift.

## Utilized Web Stack
- `User Interface` - React, CSS
- `Client` - React, Redux, Redux-Saga
- `Server` - Node.js, Express
- `Database` - PostgreSQL

## Requirements
- Git
- Web browser
- Node
- Nodemon
- PostgreSQL

## Setup and Run
```bash
# 1. Create PostgreSQL database named 'shift_scheduler'
createdb shift_scheduler

# 2. Create the database schema
psql -E -f database_schema.sql -d shift_scheduler

# 3. (Optional) Initalize database with mock data
psql -E -f database_mockup.sql -d shift_scheduler

# 4. Install Node dependencies/libraries using NPM
npm install

# 5. Start the server
npm run server

# 6. Start the client
npm run client

# 7. Application runs locally on PORT 3000
```

**See:** [localhost:3000](http://localhost:3000)

## Features

### Completed Features


### Planned Features


## Authors
Michael Stockman

