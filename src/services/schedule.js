const calendarService = require('./calendar');

const DATE_REGEX = /(\d{1,2})-(\d{1,2})-(\d{4})/;

const isDate = (string) => string.match(DATE_REGEX);

const newSchedule = (schedule) => {
  const { day } = schedule;
  calendarService.readCalendar().then((calendar) => {
    const calendarObj = JSON.parse(calendar);
    if (isDate(day)) {
      const specificDay = calendarObj.find((rule) => rule.day === day);
      specificDay.intervals.push(schedule.intervals);
    } else {
      const dates = calendarObj.filter((rule) => rule.weekDay.toLowerCase() === day);
      dates.forEach((date) => {
        date.intervals.push(schedule.intervals);
      });
    }
    calendarService.writeCalendar(calendarObj);
  });
};

module.exports = { newSchedule };
