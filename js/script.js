const timer = setInterval(myTimer, 750);

function myTimer() {
  const date = new Date();
  document.getElementById("utcTime").innerHTML = date.getUTCMilliseconds();
}
