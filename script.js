let currentIndex = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel-image');
    const totalImages = images.length;
    const visibleImages = 4;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalImages - visibleImages;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    const offset = currentIndex * (100 / visibleImages);
    carousel.style.transform = `translateX(-${offset}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
    showTab('tab-about');  // Default tab to show
});

function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

