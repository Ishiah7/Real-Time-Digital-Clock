function currentTime() {
  const timeElement = document.getElementById("time");
  const date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let time = `${hours}:${minutes}:${seconds}`;

  timeElement.innerText = time;

  let currentCtn = document.querySelector(".container");
  let currentClock = document.querySelector(".clock");
  let status = document.querySelector(".status");

  if (hours >= 20 || hours <= 6) {
    currentCtn.classList.add("containerNight");
    currentClock.classList.add("clockNight");

    status.innerHTML = `<i class="material-icons">
    nights_stay
    </i>`;
  } else {
    status.innerHTML = `<i class="material-icons">
    wb_sunny
    </i>`;
  }
}

setInterval(currentTime, 0001);
