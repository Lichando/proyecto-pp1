document.addEventListener('DOMContentLoaded', function() {
    const arrow = document.querySelector('.scroll-down-arrow');
    arrow.addEventListener('click', function() {
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    });
  });
  