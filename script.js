window.onload = function() {
    let hr = 0, min = 0, sec = 0, msec = 0;
    let timer;
    let isRunning = false;

    const hrDisplay = document.querySelector('.hr');
    const minDisplay = document.querySelector('.min');
    const secDisplay = document.querySelector('.sec');
    const msecDisplay = document.querySelector('.msec');
    
    const startButton = document.querySelector('.start');
    const stopButton = document.querySelector('.stop');
    const resetButton = document.querySelector('.reset');

    function updateDisplay() {
        hrDisplay.textContent = String(hr).padStart(2, '0');
        minDisplay.textContent = String(min).padStart(2, '0');
        secDisplay.textContent = String(sec).padStart(2, '0');
        msecDisplay.textContent = String(msec).padStart(2, '0');
    }

    function startTimer() {
        if (!isRunning) {
            isRunning = true;
            timer = setInterval(() => {
                msec++;
                if (msec == 100) {
                    msec = 0;
                    sec++;
                }
                if (sec == 60) {
                    sec = 0;
                    min++;
                }
                if (min == 60) {
                    min = 0;
                    hr++;
                }
                updateDisplay();
            }, 10); 
        }
    }

    function stopTimer() {
        if (isRunning) {
            isRunning = false;
            clearInterval(timer);
        }
    }

    function resetTimer() {
        stopTimer();
        hr = 0;
        min = 0;
        sec = 0;
        msec = 0;
        updateDisplay();
    }

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);
};
