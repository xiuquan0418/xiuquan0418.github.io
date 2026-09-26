---
layout: page
title: Nanopore Long-Read Sequencing and Computational Genomics
description: Machine learning and mathematical approaches for RNA velocity and DNA methylation analysis using Nanopore long-read sequencing.
importance: 5
category: work
related_publications: true
---

## Project Overview

**Project Title:** Uncovering and Extracting Biological Information from Nanopore Long-Read Sequencing Data with Machine Learning and Mathematical Approaches

**Research Areas:** Computational Biology · Bioinformatics · Nanopore Sequencing · RNA Velocity · DNA Methylation · Machine Learning · Mathematical Modeling

Long-read sequencing provides information that is difficult to recover from conventional short-read technologies, including full-length transcript structure, alternative splicing, isoform diversity, and signal-level information associated with DNA modifications. This project develops computational and mathematical methods that use these advantages to study **cellular dynamics and epigenetic regulation** from Nanopore DNA and RNA sequencing data.

The project has two complementary directions. The first develops RNA velocity methods tailored to long-read RNA sequencing in order to infer transcriptional dynamics and cell-state transitions. The second develops a transformer-based approach for detecting DNA methylation directly from Nanopore ionic-current signals.

The broader goal is to create a computational toolbox that links **transcriptional dynamics, isoform-level information, and DNA methylation** to improve the study of gene regulation and disease-associated cellular processes.

---

## Research Objectives

### 1. Infer transcriptional dynamics from long-read RNA sequencing

RNA velocity estimates the direction and speed of transcriptional change by modeling spliced and unspliced RNA abundance. Most existing methods were developed for short-read single-cell RNA-seq and may not fully exploit the transcript-level information available from long-read sequencing.

This project develops a likelihood-based framework for estimating transcriptional kinetics directly from long-read RNA data. The approach models transcription, splicing, and degradation rates together with latent time and transcriptional state, and uses these estimates to reconstruct cellular trajectories and identify initial, intermediate, and terminal cell states.

The framework is benchmarked against steady-state and expectation-maximization formulations using simulated and real datasets.

### 2. Compare RNA velocity with time-series trajectory inference

When time-series single-cell data are available, sampling time provides an additional source of directionality.

The project therefore compares RNA velocity-based trajectories with time-informed trajectory inference using methods such as Tempora. Predicted trajectories are evaluated using graph-based measures, including precision, recall, and F1 score, to determine how well inferred transitions reproduce known or expected developmental relationships.

This comparison provides a way to assess when RNA velocity alone is sufficient and when explicit temporal information improves trajectory reconstruction.

### 3. Detect DNA methylation directly from Nanopore signals

Nanopore sequencing measures raw ionic-current signals as DNA passes through a pore. Because modified bases alter these signals in a context-dependent manner, the raw signal contains information that can potentially be used to identify methylated nucleotides directly.

The project develops a transformer-based model that treats Nanopore signal interpretation as a sequence-translation problem. Self-attention is used to learn relationships among neighboring sequence contexts and to distinguish canonical and modified bases.

The intended output includes calls for standard nucleotides together with common modifications such as **5mC** and **6mA**, with the longer-term goal of extending the model to rarer modifications through transfer learning.

---

## Computational Framework

The project integrates mathematical modeling, statistical inference, and deep learning.

**RNA velocity analysis**
- Spliced and unspliced RNA quantification
- Differential-equation models of transcriptional kinetics
- Likelihood-based parameter estimation
- Expectation-maximization algorithms
- Latent-time and trajectory inference
- Comparison with time-series trajectory methods

**Nanopore signal analysis**
- Raw signal preprocessing and normalization
- Sequence-context feature construction
- Positional encoding
- Transformer and self-attention architectures
- Cross-genome and cross-species evaluation
- Methylation classification using precision, recall, F1 score, and AUC

**Long-read transcriptomics**
- Full-length transcript characterization
- Isoform expression analysis
- Alternative splicing analysis
- Integration of transcriptomic and epigenetic information

---

## Preliminary Work

The project builds on prior experience in long-read sequencing, RNA-velocity modeling, and transformer-based methylation detection.

For RNA analysis, long-read isoform quantification is supported by methods such as LIQA, which uses read-quality and isoform-specific length information to improve transcript assignment and expression estimation.

For methylation detection, preliminary transformer-based experiments demonstrated strong classification performance on benchmark data, with reported F1 scores of approximately **0.94 on E. coli** and **0.86 on the NA12878 human genome**.

These results support the feasibility of using self-attention to capture context-dependent signal patterns associated with DNA methylation.

---

## Research Impact

This project brings together two complementary sources of biological information available from long-read sequencing: **dynamic transcriptional state** and **DNA modification status**.

By extending RNA velocity to long-read data, the project aims to improve inference of cellular trajectories and transcriptional dynamics. By detecting DNA methylation directly from Nanopore signals, it seeks to extract regulatory information without separating basecalling and modification detection into independent steps.

Together, these approaches support a broader goal of developing quantitative models that connect genome regulation, transcript diversity, and cellular dynamics in human disease.

---

## Student Training and Broader Impacts

The project is designed to engage undergraduate students in computational biology, data science, and scientific computing.

Student researchers gain experience in:

- machine learning and deep learning;
- bioinformatics and genomic data analysis;
- numerical and statistical modeling;
- high-performance computing;
- Linux and Git/GitHub workflows;
- data visualization;
- scientific writing and conference presentation.

The research also supports the development of interdisciplinary projects connecting mathematics, computer science, biology, and data science, while expanding research opportunities for students at Tougaloo College.

---

## Project Information

**Principal Investigator:** Xiuquan Wang, Ph.D.  
**Institution:** Tougaloo College  
**Program:** NSF HBCU-UP Research Initiation Award  
**Research Focus:** Computational Biology, Long-Read Sequencing, Machine Learning, and Mathematical Modeling

---

*This project develops computational methods for extracting dynamic and regulatory information from Nanopore long-read sequencing data. The work combines mathematical modeling, statistical inference, and machine learning to study RNA velocity, transcript structure, and DNA methylation.*
