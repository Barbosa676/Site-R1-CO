document.addEventListener('DOMContentLoaded', function() {
   
    const carouselSlide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;
    const totalImages = images.length;
    const imageWidth = images[0].clientWidth;

    
    function updateCarousel() {
        carouselSlide.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    }

    
    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
        updateCarousel();
    });


    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    
    setInterval(function() {
        currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    }, 3000);


    window.addEventListener('resize', function() {
        const newWidth = images[0].clientWidth;
        carouselSlide.style.transform = `translateX(-${currentIndex * newWidth}px)`;
    });
});




function scrollToSection(selector) {
    const section = document.querySelector(selector);
    if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const heroImages = [
        'imagens/hero.jpg',
        'imagens/hero2.jpg',
        'imagens/hero3.webp'
    ];

    let heroIndex = 0;
    const heroImg = document.querySelector('.hero-img');

    // Cria overlay escuro
    if (heroImg && heroImages.length > 0) {
        let overlay = document.createElement('div');
        overlay.className = 'hero-img-overlay';
        overlay.style.position = 'absolute';
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.background = 'rgba(0,0,0,0.6)';
        overlay.style.pointerEvents = 'none';
        overlay.style.opacity = 0;
        overlay.style.transition = 'opacity 1s';
        heroImg.parentElement.style.position = 'relative';
        heroImg.parentElement.appendChild(overlay);

        setInterval(() => {
            // Fade-out escuro
            overlay.style.opacity = 1;
            setTimeout(() => {
                heroIndex = (heroIndex + 1) % heroImages.length;
                heroImg.src = heroImages[heroIndex];
                // Fade-in escuro
                overlay.style.opacity = 0;
            }, 800);
        }, 5000);
    }
});
  