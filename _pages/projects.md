---
layout: page
title: Research
permalink: /projects/
description: Research in applied mathematics, computational biology, machine learning, and biomedical AI.
nav: true
nav_order: 2
horizontal: false
---

## Research Overview

My research lies at the intersection of **applied mathematics, computational biology, machine learning, and biomedical artificial intelligence**. I develop mathematical and computational approaches to extract meaningful information from complex biological data, investigate cellular dynamics, and understand biological systems through quantitative analysis.

My current research focuses on RNA velocity and cellular state transitions, nanopore long-read sequencing, large-scale biological network analysis, and machine learning for biomedical applications.

---

<style>
  .research-slideshow {
    max-width: 1100px;
    margin: 35px auto 45px;
  }

  .research-slideshow .slide-container {
    position: relative;
    overflow: hidden;
    border-radius: 14px;
    background: #f5f5f5;
  }

  .research-slideshow .research-slide {
    display: none;
    position: relative;
  }

  .research-slideshow .research-slide.active {
    display: block;
  }

  .research-slideshow .research-slide img {
    display: block;
    width: 100%;
    height: 480px;
    object-fit: contain;
  }

  .research-slideshow .slide-caption {
    padding: 14px 20px;
    background: rgba(0, 0, 0, 0.75);
    color: white;
    text-align: center;
    font-size: 16px;
  }

  .research-slideshow .slide-arrow {
    position: absolute;
    top: 45%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.4);
    color: white;
    border: none;
    border-radius: 50%;
    width: 46px;
    height: 46px;
    font-size: 28px;
    cursor: pointer;
    z-index: 2;
  }

  .research-slideshow .slide-arrow:hover {
    background: rgba(0, 0, 0, 0.75);
  }

  .research-slideshow .prev-slide {
    left: 16px;
  }

  .research-slideshow .next-slide {
    right: 16px;
  }

  .research-slideshow .slide-dots {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 18px 0;
  }

  .research-slideshow .slide-dot {
    width: 12px;
    height: 12px;
    padding: 0;
    border: none;
    border-radius: 50%;
    background: #aaa;
    cursor: pointer;
  }

  .research-slideshow .slide-dot.active {
    background: #333;
  }

  .research-slideshow .slide-credit {
    margin-top: 5px;
    text-align: center;
    font-size: 13px;
    color: #666;
  }

  @media (max-width: 768px) {
    .research-slideshow .research-slide img {
      height: 280px;
    }

    .research-slideshow .slide-caption {
      font-size: 14px;
    }
  }
</style>

<div class="research-slideshow" id="research-slideshow"
     role="region" aria-label="Research image slideshow"
     aria-roledescription="carousel">

  <div class="slide-container">

    <!-- Slide 1: RNA Velocity -->
    <div class="research-slide active">
      <img
        src="{{ '/assets/img/1.jpg' | relative_url }}"
        alt="RNA velocity and cellular state transition visualization"
      >
      <div class="slide-caption">
        RNA Velocity and Cellular Dynamics
      </div>
    </div>

    <!-- Slide 2: Nanopore Sequencing -->
    <div class="research-slide">
      <img
        src="{{ '/assets/img/2.jpg' | relative_url }}"
        alt="Nanopore sequencing and machine learning research"
        loading="lazy"
      >
      <div class="slide-caption">
        Nanopore Sequencing and Machine Learning
      </div>
    </div>

    <!-- Slide 3: Biological Networks -->
    <div class="research-slide">
      <img
        src="{{ '/assets/img/3.jpg' | relative_url }}"
        alt="Large-scale biological network visualization"
        loading="lazy"
      >
      <div class="slide-caption">
        Large-Scale Biological Network Analysis
      </div>
    </div>

    <!-- Slide 4: Biomedical AI -->
    <div class="research-slide">
      <img
        src="{{ '/assets/img/4.jpg' | relative_url }}"
        alt="Biomedical artificial intelligence research visualization"
        loading="lazy"
      >
      <div class="slide-caption">
        Biomedical Artificial Intelligence
      </div>
    </div>

    <!-- Navigation arrows -->
    <button class="slide-arrow prev-slide"
            type="button"
            aria-label="Previous research image">
      &#10094;
    </button>

    <button class="slide-arrow next-slide"
            type="button"
            aria-label="Next research image">
      &#10095;
    </button>

  </div>

  <!-- Navigation dots -->
  <div class="slide-dots" aria-label="Choose a research image">
    <button class="slide-dot active" type="button"
            aria-label="Show image 1" aria-current="true"></button>
    <button class="slide-dot" type="button"
            aria-label="Show image 2"></button>
    <button class="slide-dot" type="button"
            aria-label="Show image 3"></button>
    <button class="slide-dot" type="button"
            aria-label="Show image 4"></button>
  </div>

  <p class="slide-credit">
    Research figures: Xiuquan Wang and collaborators.
    Update this credit to reflect the actual source of each image.
  </p>

</div>

<script>
document.addEventListener("DOMContentLoaded", function () {

  const carousel = document.getElementById("research-slideshow");

  if (!carousel) return;

  const slides = carousel.querySelectorAll(".research-slide");
  const dots = carousel.querySelectorAll(".slide-dot");

  const prev = carousel.querySelector(".prev-slide");
  const next = carousel.querySelector(".next-slide");

  let currentSlide = 0;
  let timer = null;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  function showSlide(index) {

    currentSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === currentSlide);
      slide.setAttribute("aria-hidden", i !== currentSlide);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === currentSlide);

      if (i === currentSlide) {
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

    if (reducedMotion || slides.length < 2) return;

    timer = setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000);
  }

  prev.addEventListener("click", () => {
    showSlide(currentSlide - 1);
    startAutoplay();
  });

  next.addEventListener("click", () => {
    showSlide(currentSlide + 1);
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
</script>

---

## Research Projects

The following projects illustrate my ongoing research in computational biology, applied mathematics, and biomedical AI.

<div class="projects">
  {% assign sorted_projects = site.projects | sort: "importance" %}

  {% if page.horizontal %}
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2">
        {% for project in sorted_projects %}
          {% include projects_horizontal.liquid %}
        {% endfor %}
      </div>
    </div>
  {% else %}
    <div class="row row-cols-1 row-cols-md-3">
      {% for project in sorted_projects %}
        {% include projects.liquid %}
      {% endfor %}
    </div>
  {% endif %}
</div>

---

## Research Funding

#### MS-INBRE Project Development Grant

**Integrating RNA Velocity and Isoform-Level Analysis to Define Macrophage State Transitions in Non-Small Cell Lung Cancer**

- **Role:** Principal Investigator
- **Award Amount:** $200,000
- **Project Period:** September 1, 2026 – August 31, 2028

#### NSF HBCU-UP Implementation Project (#2510537)

**Strengthening the Diverse STEM Pipeline through a Holistic Multi-layer Approach**

- **Role:** Co-Principal Investigator, Lead Author, and Technical Lead
- **Total Project Award:** $2,245,846
- **Project Period:** August 1, 2025 – July 31, 2030


#### NSF HBCU-UP Research Initiation Award (#2300445)

**Uncovering and Extracting Biological Information from Nanopore Long-Read Sequencing Data with Machine Learning and Mathematical Approaches**

- **Role:** Principal Investigator
- **Award Amount:** $299,882
- **Original Project Period:** August 1, 2023 – July 31, 2026

#### Nissan Foundation Award

**Increasing the STEM Pipeline**

- **Role:** Principal Investigator
- **Project Period:** April 1, 2026 – March 31, 2027
---


Explore my [Publications](/publications/) and [Research Group](/people/) for additional information.