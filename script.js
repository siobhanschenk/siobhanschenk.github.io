document.addEventListener("DOMContentLoaded", function () {
    // Initially show the first tab
    showTab('tab-about');

    // Add event listeners to navigation links
    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const tabName = this.getAttribute('href').substring(1); // Get tab ID from href
            showTab(tabName);
            window.location.hash = tabName; // Update URL hash
        });
    });

    // Set interval for automatic carousel slide
    setInterval(autoSlide, 5000);
});

let slideIndex = 0;
const carouselImages = document.querySelectorAll('.carousel-image');
const carousel = document.querySelector('.carousel');

function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        if (tab.id === tabName) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

function moveCarousel(n) {
    slideIndex += n;
    showCarousel();
}

function showCarousel() {
    let start = slideIndex * 4;
    let end = start + 4;
    if (start < 0) {
        slideIndex = Math.ceil(carouselImages.length / 4) - 1;
        start = slideIndex * 4;
        end = carouselImages.length;
    } else if (end > carouselImages.length) {
        slideIndex = 0;
        start = 0;
        end = 4;
    }

    carousel.style.transform = `translateX(-${(slideIndex * 100)}%)`;
}

function autoSlide() {
    moveCarousel(1);
}
