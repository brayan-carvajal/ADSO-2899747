// Slider

const track = document.querySelector('.slider-track');
      const slides = document.querySelectorAll('.slide');
      let currentIndex = 0;
    
      function updateSlider() {
        slides.forEach((slide, index) => {
          slide.classList.remove('active');
        });
        slides[currentIndex].classList.add('active');
    
        const slideWidth = slides[0].offsetWidth + 20; // 20px es el margen lateral
        const offset = (slideWidth * currentIndex) - ((window.innerWidth / 2) - (slideWidth / 2));
        track.style.transform = `translateX(${-offset}px)`;
      }
    
      function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
      }
    
      setInterval(nextSlide, 3000); // Cambia cada 3 segundos
    
      window.addEventListener('resize', updateSlider);
    
      updateSlider();