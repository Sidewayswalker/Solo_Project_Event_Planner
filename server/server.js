const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 5001;

// Middleware Includes
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route Includes
const userRouter = require('./routes/user.router');
// const eventRouter = require('./routes/event.router');
// const guestRouter = require('./routes/guest.router');
const event_guest_Router = require('./routes/event_guest_router');
const eventFormRouter = require('./routes/eventForm.router') //TODO  *******PAUSE*******

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('build'));

// Passport Session Configuration
app.use(sessionMiddleware);

// Start Passport Sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/user', userRouter);
// app.use('/api/event', eventRouter);
// app.use('/api/guest', guestRouter);
app.use('/api/event_guest', event_guest_Router);
app.use('/api/eventForm', eventFormRouter); //TODO  *******PAUSE*******

// Listen Server & Port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
