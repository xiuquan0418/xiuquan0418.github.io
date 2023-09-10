---
title: "Publications | Wang Research Group | Department of Mathematics and Computer Science at Tougaloo College"
layout: gridlay
excerpt: "Publications | Wang Research Group | Department of Mathematics and Computer Science at Tougaloo College"
sitemap: false
permalink: /education/
---

# Teaching and Education

{% assign number_printed = 0 %}
{% for edu in site.data.education %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if edu.highlight == 1 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
 <div class="well">
  <h3>{{ edu.title }}</h3> <!-- Updated from <pubtit> -->
  <img src="{{ site.url }}{{ site.baseurl }}/images/respic/{{ edu.image }}" class="img-responsive" width="33%" style="float: left" />
  <p>{{ edu.description }}</p>
  <p><em>{{ edu.authors }}</em></p>
  <p><strong><a href="{{ edu.link.url }}">{{ edu.link.display }}</a></strong></p>
  <p class="text-danger"><strong> {{ edu.news1 }}</strong></p>
  <p> {{ edu.news2 }}</p>
 </div>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

<p> &nbsp; </p>
