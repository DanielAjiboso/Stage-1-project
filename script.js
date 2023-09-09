const nameOfDay = document.querySelector(".day-of-week");
const utcTime = document.querySelector(".time");

setInterval(() => {
  const present = new Date();
  const dayOfWeek = present.toLocaleString("default", {
    weekday: "long",
  });

  // const doubleFigure = function (n) {
  //   return ("0" + n).slice(-2);
  // };

  const milliSec = Date.UTC(
    present.getFullYear(),
    present.getMonth(),
    present.getSeconds()
  );
  const timeUTC = `${milliSec}`;
  utcTime.innerHTML = timeUTC;
  nameOfDay.innerHTML = dayOfWeek;
}, 1);
