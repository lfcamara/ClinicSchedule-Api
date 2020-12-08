const express = require('express');
const scheduleService = require('./services/schedule');

const router = express.Router();

router.get('/', (req, res) => {
  try {
    const schedule = scheduleService.getFullSchedule();
    res.send(schedule);
  } catch (err) {
    res.send('Erro ao recuperar horários');
  }
});

router.get('/:dates', (req, res) => {
  const { dates } = req.params;
  const period = dates.split(',');
  res.send(period);
});

router.post('/schedule', (req, res) => {
  const { day } = req.body;
  const { intervals } = req.body;
  const data = {
    day,
    intervals,
  };
  try {
    scheduleService.newSchedule(data);
    res.send('Horário Cadastrado');
  } catch (err) {
    res.send('Erro ao cadastrar horário');
  }
});

router.delete('/schedule/:date', (req, res) => {
  const { date } = req.params;
  try {
    scheduleService.deleteSchedule(date);
    res.send('Horário Deletado');
  } catch (err) {
    res.send('Erro ao deletar horário');
  }
});

module.exports = router;
