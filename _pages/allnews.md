---
title: "News"
layout: gridlay
sitemap: false
permalink: /news/
---

## News

Research updates, student achievements, publications, conference presentations, and other activities from the Wang Research Group.

<div class="section-card" markdown="0">
<div class="news-timeline">
{% for article in site.data.news %}
<div class="news-item">
<span class="news-date">{{ article.date }}</span>
<span class="news-headline">{{ article.headline }}</span>
</div>
{% endfor %}
</div>
</div>