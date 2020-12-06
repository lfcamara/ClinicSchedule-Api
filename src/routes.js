const express = require('express');
const schedule = require('./services/schedule');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Lista de horarios');
});

router.post('/schedule', (req, res) => {
  const { day } = req.body;
  const { intervals } = req.body;

  const data = {
    day,
    intervals,
  };

  schedule.saveSchedule(data);
});

module.exports = router;
