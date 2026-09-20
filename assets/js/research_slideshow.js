document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-research-carousel]").forEach(function (carousel) {
    const slides = Array.from(carousel.querySelectorAll(".research-carousel-slide"));
    const dots = Array.from(carousel.querySelectorAll(".research-carousel-dot"));
    const previous = carousel.querySelector(".research-carousel-arrow.previous");
    const next = carousel.querySelector(".research-carousel-arrow.next");

    if (slides.length < 2) return;

    let current = 0;
    let timer = null;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function showSlide(index) {
      current = (index + slides.length) % slides.length;

      slides.forEach((slide, i) => {
        slide.hidden = i !== current;
        slide.classList.toggle("active", i === current);
      });

      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === current);

        if (i === current) {
          dot.setAttribute("aria-current", "true");
        } else {
          dot.removeAttribute("aria-current");
        }
      });
    }

    function stopAutoplay() {
      if (timer !== null) {
        clearInterval(timer);
        timer = null;
      }
    }

    function startAutoplay() {
      stopAutoplay();

      if (reducedMotion || document.hidden) return;

      timer = setInterval(() => {
        showSlide(current + 1);
      }, 5000);
    }

    previous.addEventListener("click", () => {
      showSlide(current - 1);
      startAutoplay();
    });

    next.addEventListener("click", () => {
      showSlide(current + 1);
      startAutoplay();
    });

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index);
        startAutoplay();
      });
    });

    carousel.addEventListener("mouseenter", stopAutoplay);
    carousel.addEventListener("mouseleave", startAutoplay);
    carousel.addEventListener("focusin", stopAutoplay);

    carousel.addEventListener("focusout", (event) => {
      if (!carousel.contains(event.relatedTarget)) {
        startAutoplay();
      }
    });

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        stopAutoplay();
      } else {
        startAutoplay();
      }
    });

    showSlide(0);
    startAutoplay();
  });
});