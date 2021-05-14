require("dotenv").config();

const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
const ENV = process.env.ENV || "development";

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

// Separated Routes for each Resource
const spotsRoutes = require("./routes/spots");
const bookingsRoutes = require("./routes/bookings");
const carsRoutes = require("./routes/cars");
const usersRoutes = require("./routes/users");
const spotRatingRoutes = require("./routes/spotRatings");
const renterRatingRoutes = require("./routes/renterratings");
const bookmarksRoutes = require("./routes/bookmarks");

// Mount resource routes
App.use('/api/spots', spotsRoutes(db));
App.use('/api/bookings', bookingsRoutes(db));
App.use('/api/cars', carsRoutes(db));
App.use('/api/users', usersRoutes(db));
App.use('/api/spotratings', spotRatingRoutes(db));
App.use('/api/renterratings', renterRatingRoutes(db));
App.use('/api/bookmarks', bookmarksRoutes(db));

// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));


App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
