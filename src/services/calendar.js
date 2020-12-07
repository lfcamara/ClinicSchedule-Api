const fs = require('fs');

const CALENDAR_FILE = './data/calendar.json';

const formatDate = (date) => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
};

const writeCalendar = (calendarObj) => {
  const calendar = JSON.stringify(calendarObj, null, 2);
  fs.writeFile(CALENDAR_FILE, calendar, (err) => {
    if (err) throw err;
  });
};

const readCalendar = () => fs.promises.readFile(CALENDAR_FILE, 'utf-8');

const generateCalendar = () => {
  const today = new Date();
  const threeMonthsLater = new Date(today);
  threeMonthsLater.setMonth(threeMonthsLater.getMonth() + 3);

  const week = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];
  const dateArray = [];
  const currentDate = today;

  while (currentDate <= threeMonthsLater) {
    const formattedDate = formatDate(currentDate);

    const data = {
      day: formattedDate,
      weekDay: week[currentDate.getDay()],
      intervals: [],
    };
    dateArray.push(data);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  writeCalendar(dateArray);
};

const getLastDay = () => {
  fs.readFile(CALENDAR_FILE, 'utf-8', (err, calendar) => {
    if (err) throw err;

    const calendarObj = JSON.parse(calendar);
    const lastDay = calendarObj[calendarObj.length - 1];

    return lastDay.day;
  });
};

module.exports = {
  generateCalendar,
  getLastDay,
  writeCalendar,
  readCalendar,
};
