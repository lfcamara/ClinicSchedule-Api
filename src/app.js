const express = require('express');
const router = require('./routes');
const calendar = require('../data/calendar');

const app = express();

app.use(express.json());
app.use(router);

calendar.generateCalendar();

module.exports = app;
