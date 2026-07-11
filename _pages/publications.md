---
title: "Publications"
layout: gridlay
sitemap: false
permalink: /publications/
---

## Publications

Our research spans computational biology, biomedical artificial intelligence, mathematical modeling, network science, and scientific computing.

Use the search box below to filter publications by title, author, keyword, or year.

<input type="text" class="pub-search" id="pubSearch" placeholder="Filter by title, author, keyword, or year...">

<div class="section-card" id="pubList">

<h3>Preprints and Manuscripts</h3>

{% bibliography --query @unpublished %}

<h3>Peer-Reviewed Journal Articles</h3>

{% bibliography --query @article %}

<h3>Peer-Reviewed Conference Papers</h3>

{% bibliography --query @inproceedings %}

</div>