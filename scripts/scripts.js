const buttons = document.querySelectorAll('[data-carousel-button]');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
    const slides = button
      .closest('[data-carousel]')
      .querySelector('[data-slides]');

    const activeSlide = slides.querySelector('[data-active');
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;
    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.img-entry');
  let currentIndex = 0;

  setInterval(function () {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
  }, 5000); // Change image every 5 seconds (adjust as needed)
});

document.addEventListener('DOMContentLoaded', function () {
  const textOverlay = document.querySelector('.text-overlay');

  // Add the 'show' class after a delay (e.g., 2 seconds)
  setTimeout(function () {
    textOverlay.classList.add('show');
  }, 5000);
});
