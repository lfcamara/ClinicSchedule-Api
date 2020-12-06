const fs = require('fs');

const formatDate = (date) => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
};

const generateCalendar = () => {
  const today = new Date();
  const threeMonthsLater = new Date(today);
  threeMonthsLater.setMonth(threeMonthsLater.getMonth() + 3);

  const week = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const dateArray = [];
  const currentDate = today;

  while (currentDate < threeMonthsLater) {
    const formattedDate = formatDate(currentDate);

    const data = {
      day: formattedDate,
      weekDay: week[currentDate.getDay()],
      intervals: [{
        start: '',
        end: '',
      }],
    };
    dateArray.push(data);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const calendar = JSON.stringify(dateArray, null, 2);

  fs.writeFile('./data/calendar.json', calendar, (err) => {
    if (err) throw err;
  });
};

module.exports = {
  generateCalendar,
};
