const express = require('express');
const router = require('./controller/routes');
const calendarService = require('./services/calendar');

const app = express();

app.use(express.json());
app.use(router);

calendarService.generateCalendar();

module.exports = app;
