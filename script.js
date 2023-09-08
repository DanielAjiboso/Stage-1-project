const nameOfDay = document.querySelector(".day-of-week");
const utcTime = document.querySelector(".time");

const present = new Date();

const dayOfWeek = present.toLocaleString("default", {
  weekday: "long",
});

const doubleFigure = function (n) {
  return ("0" + n).slice(-2);
};

const timeUTC = `${doubleFigure(present.getUTCHours())}:${doubleFigure(
  present.getUTCMinutes()
)}:${doubleFigure(present.getSeconds())}:${present.getUTCMilliseconds()}`;
utcTime.innerHTML = timeUTC;

nameOfDay.innerHTML = dayOfWeek;
