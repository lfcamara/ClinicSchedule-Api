const calendarService = require('./calendar');

const DATE_REGEX = /(\d{1,2})-(\d{1,2})-(\d{4})/;
const week = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado'];

const DataException = (message) => {
  this.message = message;
  this.name = DataException;
};

const isDate = (string) => string.match(DATE_REGEX);

const newSchedule = (schedule) => {
  const calendar = calendarService.readCalendar();
  const calendarObj = JSON.parse(calendar);

  if (schedule[0].day === 'diariamente') {
    calendarObj.forEach((rule) => {
      rule.intervals = rule.intervals.concat(schedule[0].intervals);
    });
  } else {
    schedule.forEach((element) => {
      let { day } = element;
      day = day.trim();
      const { intervals } = element;
      if (isDate(day)) {
        const specificDay = calendarObj.find((rule) => rule.day === day);
        specificDay.intervals = specificDay.intervals.concat(intervals);
      } else {
        const isValid = week.includes(day.toLowerCase());
        if (isValid) {
          // eslint-disable-next-line max-len
          const dates = calendarObj.filter((rule) => rule.weekDay.toLowerCase() === day.toLowerCase());
          dates.forEach((date) => {
            date.intervals = date.intervals.concat(intervals);
          });
        } else {
          throw new DataException('Dia invalido');
        }
      }
    });
  }

  calendarService.writeCalendar(calendarObj);
};

const getFullSchedule = () => {
  const calendar = calendarService.readCalendar();
  const calendarObj = JSON.parse(calendar);

  const workDays = calendarObj.filter((rule) => rule.intervals.length > 0);
  const result = workDays.length > 0 ? workDays : 'Não há horários cadastrados';

  return result;
};

const getPeriod = (start, end) => {
  const calendar = calendarService.readCalendar();
  const calendarObj = JSON.parse(calendar);

  const startIndex = calendarObj.findIndex((rule) => rule.day === start);
  const endIndex = calendarObj.findIndex((rule) => rule.day === end);
  const periodSchedule = calendarObj.slice(startIndex, endIndex + 1);
  const result = periodSchedule.filter((rule) => rule.intervals.length > 0);

  return result;
};

const deleteSchedule = (day) => {
  const calendar = calendarService.readCalendar();
  const calendarObj = JSON.parse(calendar);

  if (isDate(day)) {
    const specificDay = calendarObj.find((rule) => rule.day === day);
    specificDay.intervals = [];
  } else {
    const rules = calendarObj.filter((rule) => rule.weekDay.toLowerCase() === day);
    rules.forEach((rule) => {
      rule.intervals = [];
    });
  }
};

module.exports = {
  newSchedule,
  getFullSchedule,
  deleteSchedule,
  getPeriod,
};
