# Shift Scheduler
Create and view an hourly work schedule. Managers/employees can view a list of all employee shifts and add new shifts.

You can view a live hosted instance of this project on Heroku: [https://mysterious-tundra-83088.herokuapp.com](https://mysterious-tundra-83088.herokuapp.com)

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
- Heroku CLI (Optional for hosting on Heroku)

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

# 6. Start the client (runs locally on PORT 3000)
npm run client

# 7. Optional run unit tests using Jest
npm run test
```
**See:** [localhost:3000](http://localhost:3000)

## Deploying to Heroku

```bash
# 1. From the project directory run the following to setup Heroku
heroku create

# 2. Push the 'master' branch to the newly created 'heroku' remote
git push heroku master

# 3. Add Heroku addon for PostgreSQL databases
heroku addons:create heroku-postgresql:hobby-dev

# 4. Create the database schema for the remote database
heroku pg:psql -f database_schema.sql

# 5. Insert mock data for the remote database
heroku pg:psql -f database_mockup.sql
```

## Features

### Completed Features
- [x] Allows users to log new shifts
- [x] The current shift schedule can be listed (ordered by the start time)
- [x] An employee's shift cannot overlap with any existing shifts for the same employee
- [x] Basic CSS styling and basic quality of life user experience
- [x] When entering shift data start and end times, the user interface attempts to anticipate user desires and reduce the chance for non-valid entries 
- [x] Project hosted on Heroku. See [https://mysterious-tundra-83088.herokuapp.com](https://mysterious-tundra-83088.herokuapp.com/)

### Planned Features
- [ ] Unit/Functional testing
- [ ] Postman file
- [ ] API documentation
- [ ] Calendar display for all shifts
- [ ] Add an authentication/authorization system
- [ ] Add a user system with manager and employee roles (restrict creation to only manager roles)

## Authors
Michael Stockman

