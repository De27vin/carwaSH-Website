document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.carousel');
  
  carousels.forEach((carousel, index) => {
      let currentIndex = 0;
      const carouselInner = carousel.querySelector('.carousel-inner');
      const slides = carousel.querySelectorAll('.carousel-item');
      const nextButton = carousel.querySelector('.carousel-control.next');
      const prevButton = carousel.querySelector('.carousel-control.prev');
      
      nextButton.addEventListener('click', () => {
          showSlide(index, currentIndex + 1);
      });

      prevButton.addEventListener('click', () => {
          showSlide(index, currentIndex - 1);
      });

      function showSlide(carouselIndex, index) {
          if (index >= slides.length) {
              currentIndex = 0;
          } else if (index < 0) {
              currentIndex = slides.length - 1;
          } else {
              currentIndex = index;
          }
          const offset = -currentIndex * 100;
          carouselInner.style.transform = `translateX(${offset}%)`;
          slides.forEach((slide, i) => {
              slide.style.opacity = i === currentIndex ? '1' : '0';
          });
      }

      showSlide(index, currentIndex);
  });
});


function copyToClipboard(type, text) {
  navigator.clipboard.writeText(text).then(function() {
  });
}