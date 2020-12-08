const calendarService = require('./calendar');

const DATE_REGEX = /(\d{1,2})-(\d{1,2})-(\d{4})/;

const isDate = (string) => string.match(DATE_REGEX);

const newSchedule = (schedule) => {
  const { day } = schedule;
  const calendar = calendarService.readCalendar();
  const calendarObj = JSON.parse(calendar);
  if (isDate(day)) {
    const specificDay = calendarObj.find((rule) => rule.day === day);
    specificDay.intervals = specificDay.intervals.concat(schedule.intervals);
  } else {
    const dates = calendarObj.filter((rule) => rule.weekDay.toLowerCase() === day);
    dates.forEach((date) => {
      date.intervals = date.intervals.concat(schedule.intervals);
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
};
