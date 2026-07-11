---
title: "About"
layout: gridlay
sitemap: false
permalink: /about/
---

## About the Wang Research Group

<div class="section-card">
<p>
The Wang Research Group is an interdisciplinary research group in the Department of Mathematics and Computer Science at Tougaloo College. Our work lies at the intersection of <strong>computational biology, biomedical artificial intelligence, network science, and mathematical data science</strong>.
</p>

<p>
We develop computational, mathematical, and machine learning approaches to investigate complex biological and biomedical systems. Our research focuses on high-dimensional biological data, cellular dynamics, disease-related patterns, and large-scale biological networks.
</p>

<p>
Current research directions include <strong>single-cell transcriptomics, RNA velocity, long-read sequencing, large-scale cell-cell similarity networks, biomedical signal analysis, and multimodal artificial intelligence</strong>.
</p>

<p>
A central mission of the group is to provide undergraduate students with meaningful research experiences. Students participate in computational research, scientific programming, data analysis, conference presentations, and scholarly publication.
</p>
</div>


## Principal Investigator

<div class="section-card">
<div class="pi-card">

<img src="{{ site.url }}{{ site.baseurl }}/images/{{ site.photo }}"
     class="pi-photo"
     alt="Xiuquan Wang"
     loading="lazy">

<div>

<h3 class="pi-name">Xiuquan Wang, Ph.D.</h3>

<p style="font-style: italic; color: var(--text-secondary);">
Associate Professor and Chair<br>
Department of Mathematics and Computer Science<br>
Tougaloo College
</p>

<div class="pi-links">

{% if site.email %}
<a href="mailto:{{ site.email }}"
   class="icon-link"
   title="Email">
<i class="fa-solid fa-envelope"></i>
</a>
{% endif %}

{% if site.links.cv and site.links.cv != "" %}
<a href="{{ site.url }}{{ site.baseurl }}/{{ site.links.cv }}"
   class="icon-link"
   title="CV">
<i class="ai ai-cv"></i>
</a>
{% endif %}

{% if site.links.google_scholar and site.links.google_scholar != "" %}
<a href="{{ site.links.google_scholar }}"
   class="icon-link"
   title="Google Scholar"
   target="_blank">
<i class="ai ai-google-scholar"></i>
</a>
{% endif %}

{% if site.links.github and site.links.github != "" %}
<a href="{{ site.links.github }}"
   class="icon-link"
   title="GitHub"
   target="_blank">
<i class="fa-brands fa-github"></i>
</a>
{% endif %}

{% if site.links.researchgate and site.links.researchgate != "" %}
<a href="{{ site.links.researchgate }}"
   class="icon-link"
   title="ResearchGate"
   target="_blank">
<i class="ai ai-researchgate"></i>
</a>
{% endif %}

{% if site.links.orcid and site.links.orcid != "" %}
<a href="{{ site.links.orcid }}"
   class="icon-link"
   title="ORCID"
   target="_blank">
<i class="ai ai-orcid"></i>
</a>
{% endif %}

</div>

<p style="margin-top: var(--space-4);">
Dr. Wang's research integrates artificial intelligence, mathematical modeling, and computational biology to study complex biomedical data. His current work focuses on single-cell transcriptomics, RNA velocity, large-scale biological networks, long-read sequencing, and biomedical artificial intelligence.
</p>

<p>
<strong>Research Interests:</strong><br>
Computational Biology · Biomedical AI · Single-Cell Genomics · Network Science · Machine Learning · Mathematical Data Science
</p>

{% if site.data.pi[0].education %}

<h4>Education</h4>

<ul>
{% for education in site.data.pi[0].education %}
<li>{{ education | replace: "-","&#8211;" }}</li>
{% endfor %}
</ul>

{% endif %}

</div>
</div>
</div>


{% if site.data.grants %}
<div class="section-card">

<h3>Research Support</h3>

<ul>
{% for grant in site.data.grants %}
<li>{{ grant.name }}</li>
{% endfor %}
</ul>

</div>
{% endif %}


{% if site.data.awards %}
<div class="section-card">

<h3>Awards and Recognition</h3>

<ul>
{% for award in site.data.awards %}
<li>{{ award.name | replace: "-","&#8211;" }}</li>
{% endfor %}
</ul>

</div>
{% endif %}


{% if site.data.people %}
<div class="section-card">

<h3>Student Research and Mentoring</h3>

<p>
The Wang Research Group actively mentors undergraduate researchers in mathematics, computer science, data science, and computational biomedical research. Student researchers have presented their work at national and regional conferences, received competitive research awards, and continued into graduate programs in data science and related fields.
</p>

<ul>
{% for student in site.data.people %}
<li>
{{ student.name }}
{% if student.location %}, {{ student.location }}{% endif %}
{% if student.degree %} ({{ student.degree }}{% endif %}
{% if student.year %}, {{ student.year }}{% endif %}
{% if student.degree %}){% endif %}
</li>
{% endfor %}
</ul>

</div>
{% endif %}


{% if site.data.funders %}
<div class="section-card">

<h3>Research Sponsors and Partners</h3>

<div class="sponsor-logos"
     style="display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: var(--space-6);">

{% for funder in site.data.funders %}

<a href="{{ funder.url }}" target="_blank">

<img src="{{ site.url }}{{ site.baseurl }}/images/{{ funder.image }}"
     alt="{{ funder.name | default: 'Research sponsor' }}"
     style="max-height: 80px;
            max-width: 200px;
            border-radius: 0;"
     loading="lazy">

</a>

{% endfor %}

</div>
</div>
{% endif %}