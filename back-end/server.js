// load .env data into process.env
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');


// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Express Configuration
App.use(BodyParser.urlencoded({ extended: true }));
App.use(BodyParser.json());
App.use(Express.static('public'));

// Queries
//const spotQueries = require('./queries/spotsQueries');

// Separated Routes for each Resource
const spotsRoutes = require("./routes/spots");

// Mount resource routes
App.use('/spots', spotsRoutes(db));

// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
