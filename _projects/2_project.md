---
layout: page
title: Computation
description: Developing numerical strategies and solvers
img: assets/img/spectral.jpg
importance: 2
category: work
related_publications: gorin_distinguishing_2023,carilli_biophysical_2023,gorin_spectral_2022,gorin_special_2020,vastola_analytic_2021,chari_biophysically_2023
---

> **In brief**: I design and implement novel computational methods to efficiently and accurately fit sequencing datasets.

Despite the advantages of stochastic modeling, many challenges remain. Practically all interesting biophysical systems are intractable, and require approximation to solve. In other words, to do statistics, we need to compute likelihoods; these likelihoods cannot typically be written down in a simple form. To fit data, it is necessary to create new algorithms.

A considerable portion of my Ph.D. work entailed the development of solvers for biological stochastic process distributions. The *Monod* numerical package is designed to fit and analyze distributions for thousands of genes, using a generating function-based method tailored to multimodal data.

However, this approach requires numerically intensive integration and Fourier transformation, which limits its applicability to relatively simple systems and questions. To bypass these problems, I designed several alternative approaches, approximating spliced and unspliced RNA distributions by special functions and combinations of basis distributions.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/monod.jpg" title="Monod, a numerical package" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/special.jpg" title="A special function-based approximator to a bivariate system." class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/spectral.jpg" title="A spectral approximator to a bivariate system." class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Fitting multimodal data requires accurate solvers, based on a variety of principles. 
</div>