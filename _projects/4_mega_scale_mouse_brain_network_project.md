---
layout: page
title: Mega-Scale Cell-Cell Similarity Network Analysis
description: Scalable graph analysis of more than one million embryonic mouse brain cells to identify developmental modules and transition-associated cells.
img: assets/img/4.jpg
importance: 4
category: work
related_publications: true
---

## Project Overview

**Project Title:** Mega-Scale Cell-Cell Similarity Network Analysis of Embryonic Mouse Brain Transcriptomes

**Research Areas:** Computational Biology · Single-Cell Transcriptomics · Graph Analytics · Network Science · Developmental Biology · Biomedical Data Science

Single-cell RNA sequencing has transformed the study of cellular heterogeneity and developmental processes, but most analyses focus on clustering or trajectory inference directly from gene-expression matrices. This project takes a complementary **network-science approach** by representing cells as nodes in a large cell-cell similarity graph and transcriptomic relationships as edges.

The dataset contains more than **1.0 million embryonic mouse brain cells** and approximately **24.7 million similarity edges**, creating a mega-scale network that captures relationships among cells across developmental states.

Our goal is to determine whether large-scale graph structure can reveal biologically meaningful organization that is difficult to detect through clustering alone, particularly **developmental modules, hub cells, and transitional “bridge” cells** located between established cell populations.

---

## Research Objectives

### 1. Characterize the global structure of the cell-cell similarity network

We quantify large-scale network architecture using scalable graph measures, including:

- degree distributions;
- connected-component structure;
- clustering coefficient distributions;
- connectivity patterns;
- approximate effective diameter using sampling-based shortest paths.

These analyses provide a systems-level description of the organization and connectivity of the embryonic brain transcriptomic landscape.

### 2. Identify developmental modules using community detection

We apply **Leiden and Louvain community detection** to identify mesoscale network structure.

Detected communities are evaluated using modularity, stability across resolution parameters, and alignment with diffusion pseudotime. Developmental marker-gene enrichment is used to assess whether network modules correspond to biologically interpretable developmental states.

The goal is to determine whether graph communities capture developmental organization that complements conventional single-cell clustering.

### 3. Detect candidate transition-associated cells

Developmental transitions may be represented by cells positioned between otherwise distinct network communities.

We use scalable centrality and boundary measures—including degree centrality, eigenvector centrality, approximate betweenness centrality, and participation coefficient—to identify cells that connect multiple modules.

These boundary-spanning cells are prioritized as **candidate developmental transition cells** that may represent intermediate states between neural progenitors and differentiating populations.

---

## Computational Strategy

Analysis of a million-node biological network requires methods designed for scalability.

The workflow uses:

- sparse graph representations;
- compressed sparse row (CSR) storage;
- optimized graph libraries such as `igraph` and `NetworKit`;
- parallelized Leiden community detection;
- sampling-based shortest-path estimation;
- approximate centrality calculations;
- representative subgraph analysis;
- multi-resolution community stability analysis and consensus clustering.

This design avoids computationally prohibitive operations such as exact all-pairs shortest paths while preserving the ability to characterize global and mesoscale network organization.

---

## Research Significance

Embryonic brain development involves continuous transitions among neural progenitors and differentiating cell populations. Conventional clustering can identify major cell groups, but it may obscure cells that occupy intermediate positions between canonical states.

By integrating **graph topology with developmental pseudotime**, this project provides a complementary framework for investigating developmental organization at unprecedented scale.

The expected outcomes include:

- a quantitative description of the global architecture of the embryonic brain cell network;
- biologically interpretable developmental modules;
- a prioritized set of candidate transition-associated cells;
- a reproducible computational workflow adaptable to other large single-cell datasets.

---

## Student Training and Broader Impacts

This project is designed as an undergraduate research experience in biomedical data science.

Students gain hands-on experience in:

- single-cell transcriptomic analysis;
- large-scale graph algorithms;
- community detection;
- centrality and network topology;
- high-performance and memory-efficient computing;
- biological interpretation using developmental markers;
- reproducible computational research;
- scientific communication and conference presentation.

The project connects mathematics, computer science, network science, and developmental biology while providing students with experience analyzing a biological network containing more than one million cells.

---

## Project Information

**Principal Investigator:** Xiuquan Wang, Ph.D.  
**Institution:** Tougaloo College  
**Program:** MS-INBRE SURF  
**Research Focus:** Large-Scale Single-Cell Network Analysis and Biomedical Data Science  
**Dataset Scale:** 1,018,524 cells and 24,735,503 similarity edges

---

*This project develops scalable graph-based approaches for analyzing large single-cell transcriptomic networks and identifying developmental modules and candidate transition-associated cells in the embryonic mouse brain.*
