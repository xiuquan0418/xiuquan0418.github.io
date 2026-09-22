---
layout: page
title: Team
permalink: /people/
description: Research faculty and student researchers working with Dr. Xiuquan Wang.
nav: true
nav_order: 4
---

<style>
/* Research Group page */

.group-profile {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 240px;
  align-items: center;
  gap: 30px;
  margin: 25px 0 35px;
}

.group-profile-info {
  min-width: 0;
}

.group-profile-info h3 {
  margin-top: 0;
  margin-bottom: 14px;
  font-size: 1.6rem;
}

.group-profile-info p {
  margin-bottom: 12px;
  line-height: 1.7;
}

.group-profile-photo img {
  display: block;
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.10);
}

.student-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
  margin: 30px 0 45px;
}

.student-card {
  min-width: 0;
}

.student-card img {
  display: block;
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  object-position: center top;
  border-radius: 10px;
  margin-bottom: 14px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.10);
}

.student-card h3 {
  font-size: 1.12rem;
  line-height: 1.35;
  margin: 0 0 8px;
}

.student-card p {
  font-size: 0.92rem;
  line-height: 1.5;
  margin: 0 0 8px;
  overflow-wrap: anywhere;
}

.student-role {
  font-weight: 600;
}

.student-research {
  margin-top: 12px;
}

@media (max-width: 1000px) {
  .student-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 650px) {
  .group-profile {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .group-profile-photo {
    max-width: 220px;
  }

  .student-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
}
</style>

Our research group develops mathematical and computational approaches
for analyzing complex biological data, with a focus on computational
biology, machine learning, and biomedical artificial intelligence.



## Principal Investigator

<div class="group-profile">

  <div class="group-profile-info">

    <h3>Xiuquan Wang, Ph.D.</h3>

    <p>
      Associate Professor of Mathematics<br>
      H. M. Thompson Endowed Chair in Mathematics<br>
      Chair, Department of Mathematics &amp; Computer Science<br>
      Tougaloo College
    </p>

    <p>
      <strong>Research Interests:</strong><br>
      RNA velocity, nanopore sequencing, computational biology,
      machine learning, and large-scale biological network analysis.
    </p>

    <p>
      <a href="{{ '/' | relative_url }}">
        View Academic Profile →
      </a>
    </p>

  </div>

  <div class="group-profile-photo">

    <img
      src="{{ '/assets/img/prof_pic.jpeg' | relative_url }}"
      alt="Dr. Xiuquan Wang"
    >

  </div>

</div>



## Research Faculty

<div class="group-profile">

  <!-- Faculty information: left -->

  <div class="group-profile-info">

    <h3>Miraj Samarakkody, Ph.D.</h3>

    <p>
      Assistant Professor of Mathematics<br>
      Department of Mathematics &amp; Computer Science<br>
      Tougaloo College
    </p>

    <p>
      <strong>Research Interests:</strong><br>
      Manifold learning and formal proof verification.
    </p>

  </div>

  <!-- Faculty photograph: right -->

  <div class="group-profile-photo">

    <img
      src="{{ '/assets/img/Miraj.JPG' | relative_url }}"
      alt="Dr. Miraj Samarakkody"
      loading="lazy"
    >

  </div>

</div>



## Student Researchers

{% assign students = site.data.group_students %}

{% if students and students.size > 0 %}

<div class="student-grid">

{% for student in students %}

  <div class="student-card">

    {% if student.image %}
      {% assign student_image = '/assets/img/group/' | append: student.image %}

      <img
        src="{{ student_image | relative_url }}"
        alt="{{ student.name | escape }}"
        loading="lazy"
      >
    {% endif %}

    <h3>{{ student.name | escape }}</h3>

    {% if student.role %}
      <p class="student-role">
        {{ student.role | escape }}
      </p>
    {% endif %}

    {% if student.program %}
      <p>{{ student.program | escape }}</p>
    {% endif %}

    {% if student.institution %}
      <p>{{ student.institution | escape }}</p>
    {% endif %}

    {% if student.interests %}
      <p class="student-research">
        <strong>Research Interests:</strong><br>
        {{ student.interests | escape }}
      </p>
    {% endif %}

    {% if student.profile_url %}
      <p>
        <a href="{{ student.profile_url | relative_url }}">
          View Profile →
        </a>
      </p>
    {% endif %}

  </div>

{% endfor %}

</div>

{% else %}

<p>Student researcher profiles will be added here.</p>

{% endif %}

---


## Group Highlights

{% include research_slideshow.liquid slides=site.data.group_slides folder="group" label="Research Group photographs" %}