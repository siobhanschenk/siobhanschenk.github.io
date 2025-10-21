document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.getElementById("nav-links");
  const hamburger = document.getElementById("hamburger");
  const carousel = document.querySelector(".carousel-track");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  function showTab(tabId) {
    document.querySelectorAll(".tab-content").forEach(tab => {
      tab.classList.toggle("active", tab.id === tabId);
    });
  }

  if (!location.hash) location.hash = "#tab-about";
  showTab(location.hash.slice(1));
  window.addEventListener("hashchange", () => {
    showTab(location.hash.slice(1));
    navLinks.classList.remove("active");
  });

  // Swipe for carousel
  let startX = 0;
  let isDown = false;

  carousel.addEventListener("touchstart", e => {
    isDown = true;
    startX = e.touches[0].clientX;
    carousel.style.animationPlayState = "paused";
  });

  carousel.addEventListener("touchmove", e => {
    if (!isDown) return;
    const x = e.touches[0].clientX;
    const walk = (x - startX) * 0.5;
    carousel.scrollLeft -= walk;
    startX = x;
  });

  carousel.addEventListener("touchend", () => {
    isDown = false;
    carousel.style.animationPlayState = "running";
  });
});
