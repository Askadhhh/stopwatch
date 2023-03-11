const btnStartStop = document.getElementById("btnStartStop")
const timerText = document.getElementById("timerText")
const circleList = document.getElementById('circleList')
const btnAddCircle = document.getElementById("btnAddCircle")
const btnReset = document.getElementById("btnReset")

let startTime = 0;
let isStarted = false;
let idInterval;

btnReset.addEventListener("click", function() {
  if (isStarted === true) {
    return;
  }
  circleList.innerText = "";
  startTime = 0;
  timerText.innerText = startTime;
})

btnAddCircle.addEventListener("click", function() {
  if (isStarted === false) {
    return;
  }
  const li = document.createElement("li")
  li.innerText = `${startTime} сек. `
  li.className = 'timer-list_item';
  circleList.append(li)
})



btnStartStop.addEventListener("click", function() {
  if (isStarted === true) {
    isStarted = false;
    btnStartStop.innerText = "Старт"
    clearInterval(idInterval);
  } else {
    isStarted = true;
    btnStartStop.innerText = "Стоп"
    if (startTime === 0) {
      startTime = Date.now();
    }
    idInterval = setInterval(function() {
      timerText.innerText = Date.now() - startTime;
    }, 50);
  }
});

function formatTime(ms) {  
}