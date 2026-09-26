---
layout: page
title: Topology- and Graph-Guided AI for Cardiometabolic Phenotyping
description: Integrating topological data analysis, patient similarity networks, and graph neural networks to discover cardiometabolic phenotypes and predict longitudinal disease risk in All of Us.
importance: 6
category: work
related_publications: true
---

## Project Overview

**Project Title:** Topology-Informed Graph Neural Networks for Discovery and Longitudinal Prediction of Cardiometabolic Phenotypes in the All of Us Research Program

**Research Areas:** Biomedical Data Science · Topological Data Analysis · Graph Neural Networks · Precision Medicine · Cardiometabolic Disease · Explainable AI

Cardiometabolic diseases such as obesity, hypertension, type 2 diabetes, chronic kidney disease, and cardiovascular disease are commonly treated as distinct diagnostic categories. In practice, however, patients with the same diagnosis can differ substantially in metabolic status, renal function, cardiovascular risk, treatment response, and disease progression.

This project develops a **topology- and graph-guided artificial intelligence framework** to identify hidden cardiometabolic phenotypes and evaluate their clinical relevance using longitudinal data from the **All of Us Research Program**.

The central hypothesis is that high-dimensional clinical data contain nonlinear population structure that is not fully captured by conventional diagnostic labels or standard clustering methods. By integrating topological data analysis, patient similarity networks, graph neural networks, and explainable machine learning, we aim to discover reproducible patient phenotypes and determine whether they improve prediction of future cardiometabolic outcomes.

---

## Research Objectives

### 1. Discover robust cardiometabolic phenotypes using topological data analysis

We will integrate clinical, laboratory, physical measurement, behavioral, and medication information to construct multidimensional cardiometabolic profiles.

Topological data analysis methods, including **Mapper** and **persistent homology**, will be used to identify stable population structure across multiple scales. Bootstrap resampling and parameter-sensitivity analyses will evaluate the reproducibility of discovered phenotypes.

The goal is to identify clinically meaningful subgroups that may cross traditional disease boundaries, such as metabolically healthier obesity, insulin-resistant phenotypes, renal-metabolic phenotypes, and hypertension-dominant profiles.

### 2. Construct and analyze patient similarity networks

Participants will be represented as nodes in a large patient similarity graph, with edges connecting individuals who have similar cardiometabolic profiles.

Graph-based analyses will be used to identify:

- patient communities;
- hubs and locally dense regions;
- boundary or bridge participants;
- community-specific clinical characteristics;
- concordance between graph communities and topology-defined phenotypes.

This network representation provides a systems-level view of population heterogeneity and supports analysis of relationships that may be difficult to capture with conventional tabular models.

### 3. Develop topology-informed graph neural networks for longitudinal risk prediction

We will combine patient-level clinical variables, topological descriptors, and patient-network structure within graph neural network models such as **GraphSAGE** and graph attention networks.

The models will be evaluated for prediction of longitudinal outcomes such as:

- incident type 2 diabetes;
- chronic kidney disease;
- cardiovascular disease.

Performance will be compared with conventional statistical and machine-learning approaches, including logistic regression, Cox regression, random forests, gradient boosting, and multilayer neural networks.

Explainable AI methods will be used to identify the clinical features, network neighborhoods, and topological characteristics that contribute most strongly to predicted risk.

---

## Methodological Framework

The project integrates complementary approaches:

**Topological discovery:** Mapper, persistent homology, multiscale stability analysis.

**Network analysis:** k-nearest-neighbor patient graphs, community detection, centrality, participation coefficients, and bridge-node analysis.

**Graph-based AI:** GraphSAGE, graph attention networks, and topology-informed node representations.

**Longitudinal modeling:** incident-outcome prediction and time-to-event analysis.

**Interpretability:** SHAP, graph explanation methods, feature ablation, and subgroup-specific interpretation.

**Validation:** train/validation/test separation, bootstrap stability, graph-sensitivity analysis, calibration assessment, and subgroup performance evaluation.

---

## Research Significance

The project extends precision-medicine analysis beyond conventional disease labels by asking whether patients can be organized according to reproducible, data-driven cardiometabolic structure.

Rather than using topology, networks, and machine learning as separate tools, the framework connects them sequentially:

**topology discovers hidden structure → graphs represent patient relationships → graph neural networks use those relationships for prediction → explainable AI identifies the clinical features driving risk.**

This approach may provide a more interpretable and biologically meaningful framework for studying heterogeneous cardiometabolic disease and for identifying patient groups with distinct trajectories of disease progression.

---

## Future Extensions

The framework can be extended by incorporating genomic and wearable data available through All of Us.

Genomic analyses may be used to evaluate whether topology-defined phenotypes differ in inherited cardiometabolic risk, while wearable measurements may provide dynamic information on physical activity, heart rate, and sleep.

A longer-term direction is to construct **temporal patient-state graphs** that model transitions among cardiometabolic phenotypes over time, connecting population-level disease progression with broader research on biological state transitions.

---

## Project Information

**Principal Investigator:** Xiuquan Wang, Ph.D.  
**Institution:** Tougaloo College  
**Data Resource:** All of Us Research Program  
**Research Focus:** Topological Data Analysis, Patient Similarity Networks, Graph Neural Networks, and Cardiometabolic Risk Prediction

---

*This project is a methodological research framework for discovering and validating cardiometabolic phenotypes using large-scale longitudinal biomedical data. It is intended for research and hypothesis generation rather than clinical diagnosis.*
