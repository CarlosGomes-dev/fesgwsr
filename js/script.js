let currentIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.carousel-image');
    slides.forEach((slide, index) => {
        slide.classList.remove('show');
        if (index === currentIndex) {
            slide.classList.add('show');
        }
    });
    currentIndex = (currentIndex + 1) % slides.length;
    setTimeout(showSlides, 3000); // Troca a cada 3 segundos
}

document.addEventListener('DOMContentLoaded', showSlides);