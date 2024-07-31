document.addEventListener("DOMContentLoaded", () => {
  const circularProgress = document.querySelector(".circular-progress");
  const progressValue = circularProgress.querySelector(".progress-value");
  const progress = circularProgress.getAttribute("data-progress");

  let startValue = 0;
  const endValue = parseInt(progress);
  const speed = 20; // Adjust for speed

  const progressInterval = setInterval(() => {
    startValue++;
    progressValue.textContent = `${startValue}%`;
    circularProgress.style.background = `conic-gradient(#6a1b9a ${
      startValue * 3.6
    }deg, #e0e0e0 ${startValue * 3.6}deg)`;

    if (startValue >= endValue) {
      clearInterval(progressInterval);
    }
  }, speed);
});