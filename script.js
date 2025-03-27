const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const setTimeButton = document.getElementById('setTime');
const hoursInput = document.getElementById('hoursInput');
const minutesInput = document.getElementById('minutesInput');
const secondsInput = document.getElementById('secondsInput');

let timerInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;

function updateTimer() {
    if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(timerInterval);
        isRunning = false;
        alert("Время вышло!"); // Или другая индикация окончания таймера
        return;
    }

    if (seconds > 0) {
        seconds--;
    } else {
        if (minutes > 0) {
            minutes--;
            seconds = 59;
        } else {
            if (hours > 0) {
                hours--;
                minutes = 59;
                seconds = 59;
            }
        }
    }

    const secondsText = seconds < 10 ? '0' + seconds : seconds;
    const minutesText = minutes < 10 ? '0' + minutes : minutes;
    const hoursText = hours < 10 ? '0' + hours : hours;

    secondsDisplay.textContent = secondsText;
    minutesDisplay.textContent = minutesText;
    hoursDisplay.textContent = hoursText;

    // RGB эффект
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgbColor = `rgb(${r}, ${g}, ${b})`;

    document.querySelector('.timer').style.borderColor = rgbColor;
    document.querySelector('.timer').style.color = rgbColor;
}

startButton.addEventListener('click', () => {
    if (!isRunning && (hours > 0 || minutes > 0 || seconds > 0)) { // Проверка, что время установлено
        timerInterval = setInterval(updateTimer, 1000);
        isRunning = true;
    }
});

pauseButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    isRunning = false;
});

resetButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    secondsDisplay.textContent = '00';
    minutesDisplay.textContent = '00';
    hoursDisplay.textContent = '00';
    document.querySelector('.timer').style.borderColor = 'white';
    document.querySelector('.timer').style.color = 'white';
    isRunning = false;
});

setTimeButton.addEventListener('click', () => {
    hours = parseInt(hoursInput.value) || 0; // Преобразует в число, если не число - 0
    minutes = parseInt(minutesInput.value) || 0;
    seconds = parseInt(secondsInput.value) || 0;

    // Обновляем отображение сразу после установки времени
    const secondsText = seconds < 10 ? '0' + seconds : seconds;
    const minutesText = minutes < 10 ? '0' + minutes : minutes;
    const hoursText = hours < 10 ? '0' + hours : hours;

    secondsDisplay.textContent = secondsText;
    minutesDisplay.textContent = minutesText;
    hoursDisplay.textContent = hoursText;
});
