const express = require('express');
const scheduleService = require('../services/schedule');

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
  const start = period[0];
  const end = period[1];

  try {
    const result = scheduleService.getPeriod(start, end);
    res.send(result);
  } catch (err) {
    res.send('Erro ao buscar pelo periodo informado');
  }
});

router.post('/schedule', (req, res) => {
  const day = req.body.day.split(',');
  const { intervals } = req.body;
  const data = [];
  day.forEach((element) => {
    const rule = {
      day: element,
      intervals,
    };
    data.push(rule);
  });

  try {
    scheduleService.newSchedule(data);
    res.send('Horário Cadastrado');
  } catch (err) {
    res.send('Erro ao cadastrar horário');
  }
});

router.delete('/schedule/:date', (req, res) => {
  const days = req.params.date.split(',');
  try {
    scheduleService.deleteSchedule(days);
    res.send('Horário Deletado');
  } catch (err) {
    res.send('Erro ao deletar horário');
  }
});

module.exports = router;
