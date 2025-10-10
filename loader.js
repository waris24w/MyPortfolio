let progress = 0;
const percentageEl = document.getElementById('percentage');
const barFillEl = document.getElementById('barFill');
const loaderEl = document.getElementById('loader');

function updateProgress() {
    if (progress < 100) {
        progress += Math.random() * 15; // Random increment for realistic feel
        if (progress > 100) progress = 100;
        
        const displayProgress = Math.floor(progress);
        percentageEl.textContent = displayProgress + '%';
        barFillEl.style.width = displayProgress + '%';
        
        setTimeout(updateProgress, 90); // Update every 150ms
    } else {
        // Hide loader after completion
        setTimeout(() => {
            loaderEl.classList.add('hidden');
        }, 300);
    }
}

// Start loader when page loads
window.addEventListener('load', () => {
    updateProgress();
});