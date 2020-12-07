const express = require('express');
const schedule = require('./services/schedule');
const calendarService = require('./services/calendar');

const router = express.Router();

router.get('/', (req, res) => {
  calendarService.readCalendar().then((calendar) => {
    const calendarObj = JSON.parse(calendar);
    const workDays = calendarObj.filter((day) => day.intervals.length > 0);
    res.send(workDays.length > 0 ? workDays : 'Não há horários cadastrados');
  });
});

router.post('/schedule', (req, res) => {
  const { day } = req.body;
  const { intervals } = req.body;
  const data = {
    day,
    intervals,
  };
  schedule.newSchedule(data);
  res.send('OK');
});

module.exports = router;
