---
layout: page
title: Mechanism-Aware Brain Tumor MRI Analysis
description: Physics-informed neural networks for identifiable tumor-growth inference and mechanism-aware MRI classification.
importance: 2
category: work
related_publications: true
---

## Project Overview

**Project Title:** Mechanism-Aware Brain Tumor MRI Analysis: Identifiable Growth Parameters from Single-Snapshot Scans via Physics-Informed Neural Networks

**Research Areas:** Computational Mathematics · Mathematical Biology · Physics-Informed Neural Networks · Medical Imaging · Inverse Problems · Scientific Machine Learning

Deep-learning models can classify brain tumor MRI images with high reported accuracy, but their predictions may rely heavily on image texture, acquisition artifacts, or dataset-specific shortcuts rather than tumor-growth mechanisms. This project develops a **physics-informed approach to brain tumor MRI analysis** by connecting image-based prediction with mathematical models of tumor growth.

The central question is: **What tumor-growth information can actually be identified from a single MRI snapshot?**

For the Fisher–KPP proliferation–invasion model, a single snapshot cannot uniquely determine the diffusion coefficient \(D\), proliferation rate \(\rho\), and lesion age \(T\) separately. Instead, the image supports two identifiable combinations:

\[
\lambda = \sqrt{D/\rho},
\qquad
\tau = 2\rho T,
\]

where \(\lambda\) represents an infiltration length scale and \(\tau\) a dimensionless tumor age.

The project therefore focuses on estimating **physically identifiable quantities**, rather than attempting to recover parameters that the available data cannot uniquely support.

---

## Research Framework

The project combines mathematical analysis, synthetic simulation, physics-informed neural networks, and medical-image classification.

- **Identifiability analysis:** Determine which tumor-growth parameters can be recovered from a single MRI snapshot.
- **Synthetic benchmarking:** Generate simulated tumor images with known parameters to provide ground truth for inverse-model validation.
- **Amortized PINN inference:** Train a conditional physics-informed neural network that maps an MRI image directly to identifiable tumor-growth parameters.
- **Mechanism-aware classification:** Distinguish infiltrative and displacive tumor behavior using physics-derived features rather than texture alone.
- **Benchmark auditing:** Evaluate source confounding, near-duplicate leakage, and robustness in a widely used public brain tumor MRI dataset.

The main dataset contains **7,023 T1-weighted MRI images** across four classes: glioma, meningioma, pituitary tumor, and no tumor.

---

## Research Objectives

### 1. Establish what is identifiable from a single MRI scan

We analyze the Fisher–KPP tumor-growth model to determine which parameter combinations can be uniquely inferred from one image.

The key result is that the forward model depends on \(D\), \(\rho\), and \(T\) through the dimensionless combinations \(\lambda\) and \(\tau\). Thus, a single snapshot cannot separate the three original parameters.

This identifiability-first perspective provides a mathematically defensible target for inverse modeling and avoids over-interpreting information that is not present in the data.

### 2. Develop a cohort-scale physics-informed inference model

A conventional inverse PINN must be optimized separately for each patient or image, which can be computationally expensive.

To address this limitation, the project develops an **amortized conditional PINN** with two coupled components:

- an image encoder that predicts physics parameters such as \(\lambda\), \(\tau\), tumor seed location, and mass-effect amplitude;
- a conditional neural field that enforces the governing PDE through the loss function.

The model is first calibrated on synthetic data where ground-truth parameters are known, and only then applied to real MRI images.

### 3. Build a mechanism-aware tumor classifier

Gliomas typically exhibit diffuse infiltration, while meningiomas and pituitary adenomas are more sharply circumscribed and displacive.

The project uses this mechanistic distinction directly:

- **infiltrative growth:** larger \(\lambda\), smaller mass-effect amplitude;
- **displacive growth:** \(\lambda \approx 0\), larger mass-effect amplitude;
- **no tumor:** both near zero.

Classification is framed as **model selection between competing physical mechanisms**, supplemented by anatomical location when physics alone cannot separate tumor types.

### 4. Audit the reliability of the MRI benchmark

The project also evaluates whether commonly reported classification performance may be inflated by properties of the dataset itself.

The audit focuses on:

- class–source confounding;
- probable patient-level leakage from near-duplicate slices;
- differences between random and duplicate-group-disjoint splits;
- leave-one-source-out evaluation;
- robustness to image corruption, noise, rotation, and compression.

This analysis is designed to distinguish genuine tumor-related learning from shortcut learning.

---

## Validation Strategy

A major principle of the project is **synthetic-first validation**.

Three-dimensional tumor-growth simulations are generated with known parameters and then converted into T1-like images through a parameterized observation model. These simulations provide the exact benchmark needed to test whether the inverse model can recover \(\lambda\) and \(\tau\).

The synthetic cohort is also used to quantify **2D slice bias**, since a 2D MRI slice represents only part of an underlying 3D process. This allows the project to estimate when single-slice inversion is trustworthy and when it should be rejected or corrected.

---

## Computational Methods and Technologies

**Mathematical modeling:** Fisher–KPP reaction–diffusion equations, non-dimensionalization, identifiability analysis, reduced elastostatic modeling.

**Scientific machine learning:** Physics-informed neural networks, conditional neural fields, amortized inverse modeling, automatic differentiation.

**Medical imaging:** Brain extraction, intensity normalization, image registration, synthetic image generation, robustness testing.

**Machine learning evaluation:** Transfer-learning CNN baselines, balanced accuracy, macro-F1, source-stratified testing, duplicate-group-disjoint evaluation, corruption sweeps.

**Reproducibility:** Open-source software, continuous integration, automated testing, documentation, and reproducible benchmark splits.

---

## Research Impact

This project connects mathematical modeling with modern medical-image analysis in three ways.

First, it establishes a principled limit on what can be inferred from a single MRI snapshot. Second, it develops a scalable physics-informed framework for performing PDE-constrained inference across thousands of images. Third, it tests whether mechanism-derived features are more robust than texture-based deep-learning features under distribution shift and dataset bias.

The broader goal is to develop **interpretable and reproducible scientific machine-learning methods** that connect image-based prediction with identifiable physical mechanisms.

---

## Student Training and Broader Impacts

The project is designed to involve undergraduate researchers in computational mathematics, medical imaging, and scientific machine learning.

Student projects can include:

- forward simulation of tumor-growth PDEs;
- synthetic MRI generation;
- image preprocessing and brain extraction;
- near-duplicate detection and benchmark auditing;
- robustness experiments;
- visualization of inferred tumor-growth fields.

These activities provide hands-on experience with numerical modeling, machine learning, version control, testing, reproducible research, and technical communication.

---

## Project Information

**Principal Investigator:** Miraj Samarakkody, Ph.D.  
**Institution:** Tougaloo College  
**Program:** Computational Mathematics / Mathematical Biology  
**Project Duration:** 6 months  
**Software Deliverable:** PhysMRI  
**Primary Data Resource:** Kaggle Brain Tumor MRI Dataset

---

*This project is methodological research using public, de-identified retrospective MRI data. It is not a clinical diagnostic tool, and the proposed model is designed to evaluate identifiable mechanisms and benchmark robustness rather than make clinical claims.*
