---
layout: page
title: Macrophage State Transitions in Lung Cancer
description: Integrating RNA velocity and long-read single-cell transcriptomics to investigate macrophage plasticity in non-small cell lung cancer.
img: assets/img/projects/nsclc-workflow.png
importance: 1
category: work
related_publications: true
---

## Project Overview

**Project Title:** Integrating RNA Velocity and Isoform-Level Analysis to Define Macrophage State Transitions in Non-Small Cell Lung Cancer

**Research Areas:** Computational Biology · Bioinformatics · Single-Cell Transcriptomics · RNA Velocity · Long-Read Sequencing · Cancer Immunology

Tumor-associated macrophages (TAMs) are highly plastic immune cells that contribute to inflammation, antigen presentation, tissue remodeling, and immune suppression in non-small cell lung cancer (NSCLC). Although single-cell RNA sequencing has revealed substantial macrophage heterogeneity, most analyses provide a largely static view of cell populations.

**Our goal is to develop an integrated computational framework that connects macrophage state transitions with transcript isoform variation by combining RNA velocity, trajectory inference, and long-read single-cell RNA sequencing.** This approach is designed to identify dynamic transcriptional programs associated with tumor-related macrophage states and prioritize candidate transcript isoforms for future mechanistic investigation.

---

## Research Framework

The project integrates two complementary analytical branches:

- **Short-read single-cell RNA sequencing:** characterize macrophage heterogeneity, compare tumor-related and non-tumor cell populations, infer potential state transitions, and identify transition-associated genes using RNA velocity and complementary trajectory methods.
- **Long-read single-cell RNA sequencing:** quantify known and candidate novel transcript isoforms, investigate isoform usage changes, and establish a reproducible SCOTCH-based analysis workflow.

These results are integrated to prioritize transcript isoforms associated with tumor-enriched macrophage programs and inferred cellular transitions.

<div class="row justify-content-sm-center">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/nsclc-workflow.png" title="Overall computational framework integrating RNA velocity and transcript isoform analysis" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  <strong>Figure 1.</strong> Computational framework integrating short-read single-cell analysis of macrophage states and transitions with long-read transcript isoform analysis.
</div>

---

## Research Objectives

1. **Reconstruct macrophage state transitions in NSCLC** using single-cell clustering, RNA velocity, pseudotime, and tumor-versus-peritumoral comparisons.
2. **Characterize transcript isoform variation** using long-read single-cell RNA sequencing and SCOTCH, including isoform quantification and candidate isoform switching.
3. **Integrate cellular dynamics with transcript-level changes** to prioritize candidate isoforms associated with tumor-enriched macrophage states and transition-related programs.

Because matched short-read and long-read NSCLC macrophage datasets remain limited, cross-dataset integration is interpreted as hypothesis-generating rather than definitive evidence of isoform regulation during a specific cellular transition.

---

## Key Preliminary Results

Using the publicly available NSCLC single-cell RNA-seq dataset **GSE131907**, we analyzed **34,420 monocyte/macrophage-lineage cells**, including monocytes, monocyte-derived macrophages, alveolar macrophages, and pleural macrophages.

Our preliminary analysis shows:

- **Substantial macrophage heterogeneity:** dimensionality reduction and high-resolution Leiden clustering resolved multiple transcriptionally distinct macrophage states.
- **Tumor-associated shifts in macrophage composition:** tumor-related samples were enriched for monocyte-derived macrophages, whereas non-tumor samples were dominated by alveolar macrophages.
- **Distinct functional programs:** marker-gene analysis identified inflammatory (**IL1B, CXCL8, TNF**), antigen-presenting (**HLA-DRA**), lipid-associated (**APOE, SPP1, TREM2**), and extracellular-matrix-remodeling (**MMP9, VCAN, TIMP1**) signatures.

These findings provide a foundation for identifying potential macrophage state transitions and linking dynamic cell-state programs with transcript-level regulation.

<div class="row justify-content-sm-center">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="lazy" path="assets/img/projects/nsclc-umap.png" title="Single-cell macrophage embedding and cell-state characterization" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  <strong>Figure 2.</strong> Single-cell characterization of the NSCLC macrophage compartment, illustrating macrophage heterogeneity, published subtype annotations, higher-resolution Leiden clusters, and tumor-related versus non-tumor distributions.
</div>

<div class="row justify-content-sm-center">
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="lazy" path="assets/img/projects/nsclc-composition.png" title="Macrophage subtype composition in tumor-related and non-tumor samples" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-6 mt-3 mt-md-0">
    {% include figure.liquid loading="lazy" path="assets/img/projects/nsclc-clusters.png" title="Distribution of macrophage Leiden clusters across tumor status" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  <strong>Figure 3.</strong> Tumor-associated differences in macrophage composition and higher-resolution cluster distributions across tissue contexts.
</div>

---

## Computational Methods

**Methods and technologies:** Scanpy, scVelo, RNA velocity, pseudotime and trajectory analysis, Leiden clustering, marker-gene analysis, long-read single-cell RNA sequencing, SCOTCH, transcript isoform analysis, Python, version-controlled workflows, and high-performance computing.

---

## Research Impact

This project aims to move beyond static descriptions of macrophage heterogeneity by linking inferred cellular dynamics with transcript isoform regulation. The expected outcomes include a macrophage-focused transition map, a reproducible long-read single-cell isoform analysis workflow, and a prioritized set of candidate transcript isoforms associated with tumor-related macrophage programs.

More broadly, the computational framework can support future mechanistic studies and be adapted to investigate dynamic cellular processes in other disease systems.

---

## Project Information

**Principal Investigator:** Xiuquan Wang, Ph.D.  
**Institution:** Tougaloo College  
**Research Program:** Computational Biology and Bioinformatics  
**Funding:** MS-INBRE Project Development Grant  
**Project Period:** 2026–2028

---

*Figures and findings presented here are from ongoing research. Additional computational analyses and experimental validation are planned.*
