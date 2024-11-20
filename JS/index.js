// Example JavaScript for Navbar Scroll
document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#fff";
        navbar.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
    } else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.boxShadow = "none";
    }
});

// Carousel Script
const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let currentIndex = 0;

document.querySelector('#next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slideCount;
    updateCarousel();
});

document.querySelector('#prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateCarousel();
});

function updateCarousel() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto-slide every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % slideCount;
    updateCarousel();
}, 5000);
