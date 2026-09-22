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

Tumor-associated macrophages (TAMs) play important roles in the tumor microenvironment of non-small cell lung cancer (NSCLC). These immune cells exhibit remarkable plasticity, adopting diverse functional states associated with inflammation, antigen presentation, tissue remodeling, and immune suppression.

Although single-cell RNA sequencing has revealed substantial macrophage heterogeneity, conventional analyses primarily characterize static cell populations. A critical challenge is understanding how macrophages transition between functional states and whether these transitions are accompanied by changes in transcript isoform usage that cannot be detected through gene-level analysis alone.

**Our goal is to develop an integrated computational framework that connects macrophage state transitions with transcript isoform variation by combining RNA velocity, single-cell trajectory inference, and long-read RNA sequencing.**

This research seeks to uncover dynamic transcriptional programs associated with tumor-related macrophage states and identify candidate transcript isoforms for future mechanistic investigation.

---

## Overall Research Framework

Our approach integrates two complementary analytical branches:

- **Short-read single-cell RNA sequencing:** Characterize macrophage heterogeneity, infer potential state transitions, and identify transition-associated genes using RNA velocity and complementary trajectory methods.
- **Long-read single-cell RNA sequencing:** Quantify transcript isoforms, identify known and candidate novel isoforms, and investigate isoform usage changes using SCOTCH.

The results from these two branches will be integrated to prioritize transcript isoforms associated with tumor-enriched macrophage programs.

<div class="row justify-content-sm-center">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/nsclc-workflow.png" title="Overall computational framework integrating RNA velocity and transcript isoform analysis" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
    <strong>Figure 1.</strong> Overview of the proposed computational framework. Short-read single-cell RNA sequencing is used to characterize macrophage states and infer transcriptional transitions, while long-read sequencing provides transcript isoform information. The two analytical branches are integrated to prioritize candidate isoforms associated with tumor-related macrophage programs.
</div>

---

## Research Objectives

### Aim 1. Reconstruct macrophage state transitions in NSCLC

We investigate macrophage heterogeneity and potential state transitions using published short-read single-cell RNA-seq datasets from NSCLC tumor and peritumoral tissues.

Our computational workflow incorporates:

- Single-cell quality control, normalization, and dimensionality reduction.
- High-resolution macrophage clustering and cell-state annotation.
- Tumor-versus-peritumoral comparisons of macrophage composition.
- RNA velocity and complementary pseudotime analysis.
- Identification of transition-associated genes and tumor-enriched macrophage states.

RNA velocity uses spliced and unspliced RNA abundances to estimate the likely direction of transcriptional change. We interpret these predictions together with biological markers, tissue context, and complementary trajectory analyses rather than treating projected velocity arrows as definitive evidence of lineage progression.

The objective is to construct a macrophage-focused transition map and identify transcriptional programs associated with inflammatory, antigen-presenting, suppressive TAM-like, and tissue-remodeling states.

### Aim 2. Characterize transcript isoform variation using long-read sequencing

Gene-level expression analysis cannot distinguish alternative transcript isoforms produced from the same gene.

To address this limitation, we are establishing a long-read single-cell RNA-seq workflow using SCOTCH to:

- Process long-read single-cell sequencing data.
- Quantify known transcript isoforms.
- Identify candidate novel isoforms.
- Generate transcript- and isoform-level expression matrices.
- Investigate differential isoform usage and isoform switching.

Because matched long-read NSCLC macrophage datasets remain limited, this component emphasizes establishing a reproducible analytical workflow using available public datasets and identifying transcript-level candidates relevant to macrophage transition programs.

### Aim 3. Integrate macrophage dynamics and transcript isoform changes

The final component integrates RNA velocity-associated genes, macrophage state information, and transcript-level results.

Candidate isoforms will be prioritized based on multiple sources of evidence:

1. Association with tumor-enriched macrophage states.
2. Evidence of involvement in inferred macrophage state transitions.
3. Magnitude and confidence of isoform-level changes.
4. Biological relevance to immune regulation, macrophage activation, and tissue remodeling.

The expected outcome is a focused set of candidate transcript isoforms for future mechanistic studies.

When short-read and long-read datasets are not matched, the integrated results will be interpreted as hypothesis-generating rather than definitive evidence of isoform regulation during a particular cellular transition.

---

## Preliminary Results

### Single-Cell Characterization of Macrophage Heterogeneity in NSCLC

As an initial feasibility study, we analyzed the publicly available NSCLC single-cell RNA-seq dataset **GSE131907**, focusing on the monocyte/macrophage compartment.

The analysis identified **34,420 monocyte/macrophage-lineage cells**, including monocytes, monocyte-derived macrophages, alveolar macrophages, and pleural macrophages.

Dimensionality reduction and high-resolution clustering revealed substantial heterogeneity within the macrophage population. Major myeloid populations were distinguishable using published annotations, while Leiden clustering resolved finer transcriptional states.

<div class="row justify-content-sm-center">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include figure.liquid loading="lazy" path="assets/img/projects/nsclc-umap.png" title="Single-cell macrophage embedding and cell-state characterization" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
    <strong>Figure 2.</strong> Preliminary single-cell analysis of the NSCLC macrophage compartment. UMAP visualizations illustrate macrophage heterogeneity, published subtype annotations, higher-resolution Leiden clusters, and the distribution of tumor-related and non-tumor cells.
</div>

### Tumor-Associated Changes in Macrophage Composition

Comparative analysis revealed differences in macrophage composition between tumor-related and non-tumor samples.

Tumor-related samples were enriched for monocyte-derived macrophages, whereas non-tumor samples were dominated by alveolar macrophages.

Higher-resolution Leiden clustering also revealed distinct cluster-enrichment patterns across tissue contexts.

These observations suggest that the tumor microenvironment is associated with changes in macrophage population structure and provide a foundation for investigating potential state transitions.

<div class="row justify-content-sm-center">

    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="lazy" path="assets/img/projects/nsclc-composition.png" title="Macrophage subtype composition in tumor-related and non-tumor samples" class="img-fluid rounded z-depth-1" %}
    </div>

    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid loading="lazy" path="assets/img/projects/nsclc-clusters.png" title="Distribution of macrophage Leiden clusters across tumor status" class="img-fluid rounded z-depth-1" %}
    </div>

</div>

<div class="caption">
    <strong>Figure 3.</strong> Preliminary comparisons of macrophage composition across tissue contexts. Left: Relative abundance of major monocyte/macrophage populations. Right: Distribution of higher-resolution Leiden clusters in tumor-related and non-tumor samples.
</div>

### Biological Characterization of Macrophage States

Marker-gene analysis revealed distinct transcriptional programs among macrophage clusters, including:

- **Inflammatory programs:** IL1B, CXCL8, and TNF.
- **Antigen presentation:** HLA-DRA.
- **Lipid-associated activation:** APOE, SPP1, and TREM2.
- **Extracellular matrix remodeling:** MMP9, VCAN, and TIMP1.

These marker-expression patterns provide biological support for the computationally identified macrophage states and help define candidate programs for subsequent trajectory and transcript-level analyses.

<div class="row justify-content-sm-center">
    <div class="col-sm-10 mt-3 mt-md-0">
        {% include figure.liquid loading="lazy" path="assets/img/projects/nsclc-markers.png" title="Marker-gene expression across macrophage Leiden clusters" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="caption">
    <strong>Figure 4.</strong> Preliminary marker-gene expression analysis across macrophage Leiden clusters, highlighting inflammatory, antigen-presenting, lipid-associated, and tissue-remodeling transcriptional programs.
</div>

---

## Computational Methods and Technologies

This research combines computational methods from single-cell bioinformatics, transcriptomics, and statistical analysis.

**Single-cell analysis:** Scanpy, dimensionality reduction, neighborhood graphs, Leiden clustering, and marker-gene analysis.

**Dynamic inference:** scVelo, RNA velocity, pseudotime, and trajectory analysis.

**Isoform analysis:** Long-read single-cell RNA sequencing, SCOTCH, transcript quantification, and isoform usage analysis.

**Integration and reproducibility:** Python, evidence-based candidate prioritization, version-controlled analysis pipelines, and high-performance computing.

---

## Expected Outcomes and Research Impact

This project is designed to generate three major outcomes:

1. A macrophage state-transition map characterizing tumor-associated macrophage programs in NSCLC.
2. A reproducible computational workflow for long-read single-cell transcript isoform analysis.
3. A prioritized set of candidate transcript isoforms associated with macrophage transitions and tumor-related functional states.

By integrating inferred cellular dynamics with transcript-level regulation, this research aims to move beyond static cell-state descriptions and provide a more detailed computational framework for studying macrophage plasticity in cancer.

The resulting analytical methods and candidate isoforms will support future mechanistic investigations, collaborative research, and the development of computational approaches for studying dynamic cellular processes in other disease contexts.

---

## Project Information

**Principal Investigator:** Xiuquan Wang, Ph.D.

**Institution:** Tougaloo College

**Research Program:** Computational Biology and Bioinformatics

**Project:** MS-INBRE Project Development Grant

**Project Period:** 2026–2028

---

*Figures and findings presented in the preliminary results section are from ongoing research. Additional computational analyses and experimental validation are planned.*