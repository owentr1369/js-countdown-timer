// get HTML Element
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

// New Years Time
const newYears = "1 Jan 2023";

// Functionality for days, hours, minutes, seconds
function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor((totalSeconds / 3600) % 24);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = Math.floor(totalSeconds % 60);

  console.log(days, hours, minutes, seconds);
  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minsEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;
}
// Callback 1 time/sec
setInterval(countdown, 1000);
