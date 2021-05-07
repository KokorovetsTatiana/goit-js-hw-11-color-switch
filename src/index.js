const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
    btnStart: document.querySelector('[data-action=start]'),
    btnStop: document.querySelector('[data-action=stop]'),
    body: document.querySelector('body')
}

refs.btnStart.addEventListener('click', onStartClick),
refs.btnStop.addEventListener('click', onStopClick)

let intervalId;

function onStartClick() {
    intervalId = setInterval(() => {
        refs.body.style.background = colors[randomIntegerFromInterval(0, 5)];
    }, 1000);
    refs.btnStart.disabled = true;
}

function onStopClick() {
    clearInterval(intervalId);
    refs.btnStart.disabled = false;
}