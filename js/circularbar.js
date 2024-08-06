document.addEventListener('DOMContentLoaded', () => {
    const circularProgress = document.getElementById('circular-progress');
    const progressValue = document.getElementById('progress-value');
    const endValue = 75; // Set your desired end value here
    const speed = 20; // Adjust for speed

    let startValue = 0;
    const progressInterval = setInterval(() => {
        startValue++;
        progressValue.textContent = `${startValue}%`;
        circularProgress.style.background = `conic-gradient(#6a1b9a ${startValue * 3.6}deg, #e0e0e0 ${startValue * 3.6}deg)`;

        if (startValue >= endValue) {
            clearInterval(progressInterval);
        }
    }, speed);
});