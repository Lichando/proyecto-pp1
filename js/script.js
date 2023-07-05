document.addEventListener('DOMContentLoaded', function() {
    const arrow = document.querySelector('.scroll-down-arrow');
    arrow.addEventListener('click', function() {
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    });
  });
  window.addEventListener("scroll", function() {
    var goTopButton = document.getElementById("goTopButton");
  
    if (window.pageYOffset > 100) {
      goTopButton.classList.add("active");
    } else {
      goTopButton.classList.remove("active");
    }
  });
  
  document.getElementById("goTopButton").addEventListener("click", function() {
    scrollToTop(1000); // 1000 ms (1 segundo) de duración del desplazamiento
  });
  
  function scrollToTop(duration) {
    var start = window.pageYOffset,
      startTime = "now" in window.performance ? performance.now() : new Date().getTime();
  
    function scroll() {
      var now = "now" in window.performance ? performance.now() : new Date().getTime(),
        time = Math.min(1, (now - startTime) / duration),
        easedTime = time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
  
      window.scrollTo(0, start - start * easedTime);
  
      if (time < 1) {
        requestAnimationFrame(scroll);
      }
    }
  
    requestAnimationFrame(scroll);
  }
  