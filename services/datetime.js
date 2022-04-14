const daysIndexes = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

const monthsIndexes = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

export const getWeekDayFromDatetime = (datetime) =>
  daysIndexes[new Date(datetime).getDay()];

export const getDate = (datetime) => {
  const d = new Date(datetime);

  // const hours = String(d.getHours()).padStart(2, "0");

  // const minutes = String(d.getMinutes()).padStart(2, "0");

  const weekDay = getWeekDayFromDatetime(datetime);

  const month = monthsIndexes[d.getMonth()];

  const day = String(d.getDate());

  return `${weekDay}, ${day} ${month}`;
};
