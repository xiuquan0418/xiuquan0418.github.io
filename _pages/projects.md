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

## Research Areas

### RNA Velocity and Cellular Dynamics

Developing mathematical and computational approaches to study cellular state transitions using single-cell transcriptomic data. My work includes evaluating RNA velocity embeddings, investigating transition consistency, and integrating RNA velocity with isoform-level analysis.

### Nanopore Sequencing and Machine Learning

Developing machine-learning and mathematical methods to extract biological information from Oxford Nanopore sequencing data, including DNA methylation detection and analysis of long-read sequencing signals.

### Large-Scale Biological Network Analysis

Applying mathematical and graph-based approaches to investigate large-scale biological networks, including cell-cell similarity networks, community structure, and network topology.

### Biomedical Artificial Intelligence

Developing machine-learning and deep-learning methods for biomedical data analysis, including applications involving transcriptomics and electroencephalography (EEG).

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

### Active Awards

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

#### Nissan Foundation Award

**Increasing the STEM Pipeline**

- **Role:** Principal Investigator
- **Project Period:** April 1, 2026 – March 31, 2027

### Previous Award / Extension Status to Confirm

#### NSF HBCU-UP Research Initiation Award (#2300445)

**Uncovering and Extracting Biological Information from Nanopore Long-Read Sequencing Data with Machine Learning and Mathematical Approaches**

- **Role:** Principal Investigator
- **Award Amount:** $299,882
- **Original Project Period:** August 1, 2023 – July 31, 2026

---

## Research Outcomes

My research program supports scholarly publications, conference presentations, and undergraduate research opportunities.

Explore my [Publications](/publications/) and [Research Group](/people/) for additional information.