const nameOfDay = document.querySelector(".day-of-week");
const utcTime = document.querySelector(".time");

const present = new Date();

const dayOfWeek = present.toLocaleString("default", {
  weekday: "long",
});

const timeUTC = `${present.getUTCHours()}:${present.getUTCMinutes()}:${present.getSeconds()}:${present.getUTCMilliseconds()}`;
utcTime.innerHTML = timeUTC;

nameOfDay.innerHTML = dayOfWeek;
