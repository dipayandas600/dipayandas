document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress');
    const percentages = document.querySelectorAll('.percentage');

    progressBars.forEach(progress => {
        const value = progress.getAttribute('data-skill');
        progress.style.width = `${value}%`;
    });

    percentages.forEach(percentage => {
        const value = percentage.getAttribute('data-skill');
        let start = 0;
        const interval = setInterval(() => {
            if (start >= value) {
                clearInterval(interval);
            } else {
                start++;
                percentage.textContent = `${start}%`;
            }
        }, 20);
    });
});