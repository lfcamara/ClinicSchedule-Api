const fs = require('fs');

const DATE_REGEX = /(\d{1,2})-(\d{1,2})-(\d{4})/;

const isDate = (string) => string.match(DATE_REGEX);

const findByWeekDay = (weekDay) => {
  fs.readFile('./data/calendar.json', 'utf-8', (err, calendar) => {
    if (err) throw err;

    const rules = JSON.parse(calendar);

    const dates = rules.filter((rule) => rule.weekDay.toLowerCase() === weekDay.toLowerCase());
    return dates;
  });
};

const findByDate = (date) => {
  fs.readFile('./data/calendar.json', 'utf-8', (err, calendar) => {
    if (err) throw err;

    const rules = JSON.parse(calendar);

    const specificDay = rules.find((rule) => rule.day === date);
    return specificDay;
  });
};

const newSchedule = (data) => {
  const { day } = data;
  if (isDate(day)) {
    findByDate(day);
  } else {
    findByWeekDay(day);
  }
};
module.exports = { newSchedule };
