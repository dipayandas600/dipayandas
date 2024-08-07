document.addEventListener('DOMContentLoaded', () => {
    const circularProgress = document.getElementById('circular-progress');
    const progressValue = document.getElementById('progress-value');
    const endValue = 96;
    const speed = 20;

    let startValue = 0;
    const progressInterval = setInterval(() => {
        startValue++;
        progressValue.textContent = `${startValue}%`;
        circularProgress.style.background = `conic-gradient(rgb(16, 226, 16) ${startValue * 3.6}deg, white ${startValue * 3.6}deg)`;

        if (startValue >= endValue) {
            clearInterval(progressInterval);
        }
    }, speed);
});

document.addEventListener('DOMContentLoaded', () => {
    const circularProgress = document.getElementById('circularprogress');
    const progressValue = document.getElementById('progressvalue');
    const endValue = 96;
    const speed = 20;

    let startValue = 0;
    const progressInterval = setInterval(() => {
        startValue++;
        progressValue.textContent = `${startValue}%`;
        circularProgress.style.background = `conic-gradient(rgb(16, 226, 16) ${startValue * 3.6}deg, white ${startValue * 3.6}deg)`;

        if (startValue >= endValue) {
            clearInterval(progressInterval);
        }
    }, speed);
});

document.addEventListener('DOMContentLoaded', () => {
    const circularProgress = document.getElementById('circular-bar');
    const progressValue = document.getElementById('progress-data');
    const endValue = 96;
    const speed = 20;

    let startValue = 0;
    const progressInterval = setInterval(() => {
        startValue++;
        progressValue.textContent = `${startValue}%`;
        circularProgress.style.background = `conic-gradient(rgb(16, 226, 16) ${startValue * 3.6}deg, white ${startValue * 3.6}deg)`;

        if (startValue >= endValue) {
            clearInterval(progressInterval);
        }
    }, speed);
});

document.addEventListener('DOMContentLoaded', () => {
    const circularProgress = document.getElementById('circularbar');
    const progressValue = document.getElementById('progressdata');
    const endValue = 96;
    const speed = 20;

    let startValue = 0;
    const progressInterval = setInterval(() => {
        startValue++;
        progressValue.textContent = `${startValue}%`;
        circularProgress.style.background = `conic-gradient(rgb(16, 226, 16) ${startValue * 3.6}deg, white ${startValue * 3.6}deg)`;

        if (startValue >= endValue) {
            clearInterval(progressInterval);
        }
    }, speed);
});