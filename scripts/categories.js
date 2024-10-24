function closeAd() {
  const adBar = document.getElementById("ad-bar");
  adBar.classList.add("hidden");
}

let countdownTime = 24 * 60 * 60;

function updateCountdown() {
  let hours = Math.floor(countdownTime / 3600);
  let minutes = Math.floor((countdownTime % 3600) / 60);
  let seconds = countdownTime % 60;

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById(
    "countdown"
  ).textContent = `${hours}h ${minutes}m ${seconds}s`;

  countdownTime--;

  if (countdownTime < 0) {
    clearInterval(timerInterval);
    document.getElementById("countdown").textContent = "00h 00m 00s";
  }
}

const timerInterval = setInterval(updateCountdown, 1000);
