// Initialize skill progress bars
document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const value = bar.getAttribute('data-value');
        bar.style.width = `${value}%`;
    });
}); 