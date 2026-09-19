---
layout: page
title: Research
permalink: /projects/
description: Research in applied mathematics, computational biology, machine learning, and biomedical AI.
nav: true
nav_order: 3
horizontal: false
---

My research focuses on developing mathematical and computational methods to analyze complex biological data, with applications in computational biology and biomedical artificial intelligence.

The projects below span RNA velocity and cellular dynamics, nanopore sequencing and machine learning, large-scale biological network analysis, and biomedical AI.

---

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