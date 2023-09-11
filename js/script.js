const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const day = days[new Date().getDay()];
document.getElementById("day").innerHTML = day;

const timer = setInterval(myTimer, 750);

function myTimer() {
  const date = new Date();
  document.getElementById("utcTime").innerHTML = date.getUTCMilliseconds();
}
