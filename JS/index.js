let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;
  if (index >= totalSlides) currentIndex = 0;
  else if (index < 0) currentIndex = totalSlides - 1;
  else currentIndex = index;
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Auto slide every 5 seconds
setInterval(() => {
  nextSlide();
}, 2000);


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

//Term&Condition 
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const activeHeader = document.querySelector('.accordion-header.active');
        if (activeHeader && activeHeader !== header) {
            activeHeader.classList.remove('active');
            activeHeader.nextElementSibling.classList.remove('active');
        }
        header.classList.toggle('active');
        header.nextElementSibling.classList.toggle('active');
    });
});
