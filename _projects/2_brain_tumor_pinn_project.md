---
layout: page
title: Mechanism-Aware Multiscale Modeling of Glioblastoma
description: A mathematical and computational framework linking tumor infiltration, mechanical mass effect, MRI, and single-cell and spatial transcriptomics.
img: assets/img/7.jpg
importance: 2
category: work
related_publications: true
---

## Project Overview

**Project Title:** Mechanism-Aware Multiscale Modeling of Glioblastoma: Linking Physics-Derived MRI Phenotypes to Single-Cell and Spatial Transcriptomic States

**Research Areas:** Applied Mathematics · Mathematical Biology · Partial Differential Equations · Continuum Mechanics · Inverse Problems · Biomedical Imaging · Physics-Informed Neural Networks · Scientific Machine Learning

Glioblastoma is a highly heterogeneous brain tumor whose radiographic appearance reflects several interacting biological and physical processes. Two mechanisms are particularly important: **diffuse cellular infiltration** into surrounding tissue and **mechanical mass effect**, in which tumor growth deforms and displaces nearby anatomical structures.

This project develops a unified mathematical and computational framework for separating and quantifying these mechanisms from magnetic resonance imaging (MRI). The mathematical core combines an improved **Fisher–KPP proliferation–invasion model** with an **elastic mechanical mass-effect model**, and uses **physics-informed neural networks (PINNs)**, finite-element simulations, differentiable surrogate models, and constrained optimization to solve the associated inverse problems.

The project then extends beyond imaging by connecting physics-derived MRI phenotypes to tumor biology using public transcriptomic resources. Patient-level MRI and bulk transcriptomic data provide a molecular bridge; single-cell RNA sequencing is used to identify the malignant and microenvironmental cell states associated with imaging-derived molecular programs; and spatial transcriptomics is used to examine where those programs are localized within tumor tissue.

The overall framework is

$$
\boxed{
\text{MRI}
\rightarrow
\text{Mathematical Models}
\rightarrow
\text{Physics-Derived Biomarkers}
\rightarrow
\text{Molecular Programs}
\rightarrow
\text{Cell States}
\rightarrow
\text{Spatial Organization}
}
$$

The central scientific question is:

> **To what extent can the anatomy observed in a single MRI be explained by tumor infiltration, mechanical displacement, or a combination of both, and what molecular and cellular programs are associated with these physical behaviors?**

---

## Research Objectives

### Aim 1. Develop identifiable mathematical models of tumor infiltration and mechanical mass effect

Develop two complementary PDE-based models:

1. an improved Fisher–KPP proliferation–invasion model for diffuse tumor infiltration;
2. a continuum-mechanics model for tumor-induced tissue deformation and mass effect.

The models will emphasize **identifiable parameter combinations** rather than attempting to estimate poorly identifiable physical parameters independently from a single MRI.

### Aim 2. Develop physics-informed and surrogate-accelerated inverse solvers

Use PINNs to infer continuous tumor-density and displacement fields while enforcing the governing PDEs. Develop finite-element simulation libraries and differentiable neural-network surrogates to accelerate parameter calibration and compare PINN-based inference with surrogate-based constrained optimization.

### Aim 3. Derive interpretable MRI-based physical biomarkers

Represent each tumor using interpretable quantities that summarize infiltration, mechanical displacement, model fit, and tissue deformation.

### Aim 4. Connect physical tumor phenotypes to molecular and cellular states

Use linked MRI and bulk transcriptomic data to identify molecular programs associated with physics-derived imaging phenotypes. Resolve these programs at single-cell resolution and evaluate their spatial organization using public single-cell and spatial transcriptomic datasets.

---

## Public Datasets and Their Roles

The project uses several complementary public datasets, each serving a distinct role in the multiscale analysis.

### UPENN-GBM

The **UPENN-GBM** collection provides multi-parametric MRI from a large cohort of de novo glioblastoma patients, including T1, contrast-enhanced T1, T2, and FLAIR imaging, expert-reviewed tumor segmentations, radiomic features, clinical information, and selected molecular information.

This dataset will be used primarily for:

- MRI preprocessing and segmentation;
- development of the infiltration and mechanical models;
- PINN and finite-element validation;
- extraction of physics-derived imaging biomarkers.

### TCGA-GBM / TCIA

The **TCGA-GBM / TCIA** resource links glioblastoma MRI with patient-level genomic, transcriptomic, and clinical information.

This cohort provides the key molecular bridge

$$
\boxed{
\text{MRI-derived physical phenotype}
\longleftrightarrow
\text{patient-level gene-expression program}.
}
$$

It will be used to identify gene sets and pathways associated with infiltration- and mass-effect-related imaging features.

### GSE103224: Single-Cell RNA Sequencing

**GSE103224** contains single-cell RNA-seq profiles from human high-grade glioma and captures substantial malignant and microenvironmental heterogeneity.

This dataset will be used to determine which cell populations and cell states carry molecular programs associated with

$$
\lambda_{\mathrm{inf}}
$$

and

$$
M^*.
$$

Candidate populations include malignant glioma states, macrophage/microglial populations, and other components of the tumor microenvironment.

### GSE194329: Spatial Transcriptomics

**GSE194329** provides spatial transcriptomic profiles from malignant glioma specimens.

This dataset will be used to evaluate whether MRI-associated molecular programs show distinct spatial organization across regions such as

- tumor core,
- transition regions,
- invasive boundary,
- surrounding tissue.

The single-cell and spatial datasets are used for **cross-cohort biological interpretation**; they are not assumed to be patient matched to the MRI cohorts.

---

## Mathematical Framework I: Tumor Infiltration

The infiltrative component is based on an extended Fisher–KPP proliferation–invasion model,

$$
\boxed{
\frac{\partial u}{\partial t}
=
\nabla\cdot\left(\mathbf D(x)\nabla u\right)
+
\rho(x)u(1-u)
}
$$

where

- $u(x,t)$ is tumor-cell density,
- $\mathbf D(x)$ is a spatially heterogeneous or anisotropic diffusion tensor,
- $\rho(x)$ is the local proliferation rate.

Compared with a homogeneous Fisher–KPP model, this formulation allows invasion to depend on tissue type and direction. This is important in brain tissue, where tumor migration may differ between white matter and gray matter and may exhibit directional structure.

### Identifiable infiltration scale

Single-snapshot MRI does not generally allow unique recovery of $D$, $\rho$, and tumor age independently. Therefore, the project emphasizes identifiable combinations such as

$$
\boxed{
\lambda_{\mathrm{inf}}
=
\sqrt{\frac{D_{\mathrm{eff}}}{\rho}}
}
$$

where $D_{\mathrm{eff}}$ is an effective invasion coefficient.

The quantity $\lambda_{\mathrm{inf}}$ provides an interpretable measure of the characteristic spatial scale of infiltration.

---

## Mathematical Framework II: Mechanical Mass Effect

Tumor growth can also deform and displace surrounding brain tissue. This process is modeled using linear elasticity.

Let

$$
\Omega\subset\mathbb R^3
$$

denote the brain domain, and let

$$
\mathbf v(x,y,z)
=
\begin{pmatrix}
v_x(x,y,z)\\
v_y(x,y,z)\\
v_z(x,y,z)
\end{pmatrix}
$$

denote the tissue displacement field.

The displacement gradient is

$$
\nabla \mathbf v=
\begin{pmatrix}
\frac{\partial v_x}{\partial x} &
\frac{\partial v_x}{\partial y} &
\frac{\partial v_x}{\partial z}\\
\frac{\partial v_y}{\partial x} &
\frac{\partial v_y}{\partial y} &
\frac{\partial v_y}{\partial z}\\
\frac{\partial v_z}{\partial x} &
\frac{\partial v_z}{\partial y} &
\frac{\partial v_z}{\partial z}
\end{pmatrix}.
$$

The small-strain tensor is

$$
\boxed{
\varepsilon(\mathbf v)
=
\frac12
\left(
\nabla\mathbf v+
(\nabla\mathbf v)^T
\right).
}
$$

Taking the symmetric part removes rigid-body rotation and retains the component of the displacement field associated with actual tissue deformation.

The diagonal terms of $\varepsilon$ describe stretching and compression. The off-diagonal terms describe **shear deformation**, in which neighboring tissue layers undergo relative sliding and local angles change.

<div class="row justify-content-sm-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="lazy" path="assets/img/projects/MRIPINN-shear-deformation.png" title="Normal deformation and shear deformation" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  <strong>Figure 1.</strong> Normal strain changes local length, whereas shear strain changes shape and local angles. A growing brain tumor can generate both compression and shear as surrounding structures are displaced around the lesion.
</div>

---

## Stress–Strain Relationship

For an isotropic linear elastic material,

$$
\boxed{
\sigma(\mathbf v)
=
2\mu\varepsilon(\mathbf v)
+
\lambda_L\operatorname{tr}(\varepsilon(\mathbf v))I
}
$$

where

- $\mu$ is the **shear modulus**,
- $\lambda_L$ is the **first Lamé parameter**,
- $I$ is the identity matrix.

The shear modulus $\mu$ controls resistance to shape change and shear. The Lamé parameter $\lambda_L$ contributes to the stress associated with volumetric deformation.

The trace

$$
\operatorname{tr}(\varepsilon)
=
\varepsilon_{xx}
+
\varepsilon_{yy}
+
\varepsilon_{zz}
$$

approximately measures local volumetric expansion or compression under the small-strain assumption.

Equivalent elastic parameters include Young's modulus $E$ and Poisson's ratio $\nu$:

$$
\mu=\frac{E}{2(1+\nu)},
$$

$$
\lambda_L
=
\frac{E\nu}
{(1+\nu)(1-2\nu)}.
$$

Stress and elastic moduli are commonly expressed in pascals. One kilopascal is

$$
1\text{ kPa}
=
1000\text{ Pa}
=
1000\frac{\text{N}}{\text{m}^2}.
$$

---

## Modeling Tumor-Induced Expansion

Tumor mass effect is represented by adding an isotropic expansion term to the stress tensor:

$$
\boxed{
\sigma(\mathbf v)
=
2\mu\varepsilon(\mathbf v)
+
\lambda_L\operatorname{tr}(\varepsilon(\mathbf v))I
-
m\chi_{\mathrm{tumor}}I
}
$$

where

- $\chi_{\mathrm{tumor}}$ is the tumor indicator function,
- $m$ is an effective tumor-expansion amplitude.

Mechanical equilibrium is governed by

$$
\boxed{
\nabla\cdot\sigma(\mathbf v)=0.
}
$$

<div class="row justify-content-sm-center">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="lazy" path="assets/img/projects/MRIPINN-mechanical-mass-effect-flow.png" title="Mechanical pathway from tumor growth to force balance" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  <strong>Figure 2.</strong> Mechanical pathway from tumor growth to force balance. Tumor expansion produces tissue displacement; spatial changes in displacement generate strain; strain produces stress; and spatial variation in stress determines mechanical equilibrium.
</div>

### Identifiability-aware mass-effect parameter

From a single MRI, the parameters $m$, $\mu$, and $\lambda_L$ are not generally all independently identifiable. Therefore, the project focuses on normalized quantities such as

$$
\boxed{
M^*
=
\frac{m}{\mu}
}
$$

as an interpretable measure of effective tumor mass effect relative to tissue stiffness.

A second normalized quantity is

$$
\Lambda^*
=
\frac{\lambda_L}{\mu}.
$$

In the initial implementation, $\Lambda^*$ may be fixed under a nearly incompressible tissue assumption while $M^*$ is inferred.

---

## Physics-Informed Neural Networks

The inverse problem is challenging because MRI does not directly provide tumor-cell density or tissue displacement.

A PINN approximates the relevant continuous fields, for example

$$
u_\theta(x,t)
$$

for tumor density and

$$
\boxed{
\mathbf v_\phi(x,y,z)
=
\begin{pmatrix}
v_{x,\phi}(x,y,z)\\
v_{y,\phi}(x,y,z)\\
v_{z,\phi}(x,y,z)
\end{pmatrix}
}
$$

for tissue displacement.

Automatic differentiation provides the derivatives required by the PDEs.

For the mechanical branch,

$$
\mathbf v_\phi
\rightarrow
\nabla\mathbf v_\phi
\rightarrow
\varepsilon(\mathbf v_\phi)
\rightarrow
\sigma(\mathbf v_\phi)
\rightarrow
\nabla\cdot\sigma(\mathbf v_\phi).
$$

<div class="row justify-content-sm-center">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="lazy" path="assets/img/projects/MRIPINN-mechanical_pinn_workflow.png" title="Physics-informed neural network for tumor mechanics" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  <strong>Figure 3.</strong> Physics-informed inverse modeling of tumor mass effect. Spatial coordinates and MRI-derived anatomical information are used to infer a continuous displacement field $\mathbf v_\phi$. Automatic differentiation generates strain, stress, and the mechanical PDE residual, while MRI and boundary constraints provide additional supervision.
</div>

The mechanical PDE residual is

$$
R_{\mathrm{Mech}}(x)
=
\nabla\cdot\sigma_\phi(x).
$$

A representative PINN objective is

$$
\boxed{
L_{\mathrm{PINN}}
=
w_{\mathrm{PDE}}L_{\mathrm{PDE}}
+
w_{\mathrm{MRI}}L_{\mathrm{MRI}}
+
w_{\mathrm{BC}}L_{\mathrm{BC}}
+
w_{\mathrm{reg}}L_{\mathrm{reg}}.
}
$$

The terms enforce

- consistency with the governing PDE,
- agreement with observed MRI,
- boundary conditions,
- regularity of the inferred fields.

---

## MRI-Based Observation Model

MRI does not directly measure tissue displacement. If $I_0(x)$ denotes an undeformed reference anatomy, the predicted deformed image can be represented as

$$
I_{\mathrm{pred}}(x)
=
I_0\left(x-\mathbf v_\phi(x)\right).
$$

An image-matching loss is

$$
\boxed{
L_{\mathrm{MRI}}
=
\frac1N
\sum_x
\left[
I_{\mathrm{pred}}(x)
-
I_{\mathrm{MRI}}(x)
\right]^2.
}
$$

Because the true pre-tumor anatomy is not normally observed, the project will evaluate several strategies, including

- registered anatomical templates,
- contralateral symmetry,
- segmentation-derived constraints,
- multi-atlas reference anatomy,
- synthetic deformation benchmarks.

---

## Finite-Element Simulation and Neural-Network Surrogates

PINNs will be complemented by a finite-element simulation framework.

A simulation parameter vector may include

$$
p=
[
M^*,
\Lambda^*,
r_{\mathrm{tumor}},
x_0,
\text{tissue parameters},
\text{boundary conditions}
].
$$

Latin hypercube sampling will be used to generate physically feasible parameter configurations. For each configuration, the finite-element model will generate outputs such as

$$
\mathbf v(x),
\qquad
\varepsilon(x),
\qquad
\sigma(x),
$$

together with MRI-relevant summaries such as

- maximum displacement,
- regional strain,
- ventricular displacement,
- tumor-boundary deformation,
- anatomical landmark shifts.

A differentiable neural-network surrogate

$$
\widehat{\mathcal F}_\psi(p)
$$

will then approximate the computationally expensive finite-element forward model

$$
\mathcal F_{\mathrm{FE}}(p).
$$

The surrogate is trained using

$$
\boxed{
L_{\mathrm{sur}}
=
\frac1N
\sum_{i=1}^{N}
\left\|
\widehat{\mathcal F}_\psi(p_i)
-
\mathcal F_{\mathrm{FE}}(p_i)
\right\|^2.
}
$$

Once trained, the surrogate allows fast repeated evaluation during inverse parameter estimation.

---

## Constrained Parameter Calibration

For a patient MRI, let

$$
y_{\mathrm{MRI}}
$$

denote measured deformation features.

The unknown physical parameters are estimated by solving

$$
\boxed{
p^*
=
\arg\min_{p\in\mathcal P}
L_{\mathrm{cal}}
\left(
\widehat{\mathcal F}_\psi(p),
y_{\mathrm{MRI}}
\right)
}
$$

where $\mathcal P$ denotes the physically feasible parameter space.

Because the surrogate is differentiable, the parameters can be updated using projected gradient descent:

$$
\boxed{
p^{(t+1)}
=
\Pi_{\mathcal P}
\left[
p^{(t)}
-
\eta\nabla_pL_{\mathrm{cal}}
\right].
}
$$

The projection operator $\Pi_{\mathcal P}$ prevents the optimization from producing physically implausible parameter values.

Estimated parameters will be validated by rerunning the original finite-element model rather than relying only on the surrogate prediction.

---

## Mechanism-Aware Model Comparison

A key contribution of the project is to compare competing physical explanations of the same MRI.

Three models will be considered:

$$
\mathcal M_{\mathrm I}
=
\text{infiltration-dominated model},
$$

$$
\mathcal M_{\mathrm M}
=
\text{mechanical mass-effect model},
$$

and

$$
\mathcal M_{\mathrm H}
=
\text{hybrid infiltration + mechanics model}.
$$

Each model produces a residual or mismatch score,

$$
R_{\mathrm{RD}},
\qquad
R_{\mathrm{Mech}},
\qquad
R_{\mathrm{Hybrid}}.
$$

Instead of asking only which tumor class an MRI resembles, the framework asks

> **Which physical mechanism, or combination of mechanisms, most plausibly explains the observed anatomy?**

---

## Physics-Derived MRI Biomarkers

Each tumor will be represented by an interpretable mechanistic feature vector such as

$$
\boxed{
\mathbf z=
[
\lambda_{\mathrm{inf}},
M^*,
R_{\mathrm{RD}},
R_{\mathrm{Mech}},
R_{\mathrm{Hybrid}},
d_{\max},
S_{\mathrm{strain}},
U_M,
x_0
].
}
$$

where

- $\lambda_{\mathrm{inf}}$ is the infiltration length scale,
- $M^*$ is the normalized mass-effect strength,
- $R_{\mathrm{RD}}$ is the reaction–diffusion model residual,
- $R_{\mathrm{Mech}}$ is the mechanical model residual,
- $R_{\mathrm{Hybrid}}$ is the hybrid-model residual,
- $d_{\max}$ is maximum predicted displacement,
- $S_{\mathrm{strain}}$ summarizes tissue deformation,
- $U_M$ quantifies uncertainty in the inferred mass effect,
- $x_0$ describes tumor location.

Additional spatial features may be derived from

$$
\|\mathbf v(x)\|,
\qquad
\|\varepsilon(x)\|_F,
\qquad
\operatorname{tr}\varepsilon(x).
$$

---

## Molecular Bridge: From MRI Physics to Gene Programs

The next stage connects patient-level physical MRI phenotypes to transcriptomic programs.

For example, the association between expression of gene $g_j$ and the physical biomarkers can be modeled as

$$
g_j
=
\beta_0
+
\beta_1M^*
+
\beta_2\lambda_{\mathrm{inf}}
+
\beta_3\mathbf c
+
\epsilon,
$$

where $\mathbf c$ represents relevant clinical covariates.

This analysis will define molecular signatures associated with

$$
G_{\mathrm{mass}}
$$

and

$$
G_{\mathrm{inf}}.
$$

Pathway-level analysis will then be used to characterize the biological programs associated with the physical tumor phenotypes.

---

## Single-Cell Attribution

The MRI-associated gene programs will be projected onto the single-cell dataset.

For each cell $c$, a mass-effect signature score may be defined as

$$
S_{\mathrm{mass}}(c)
=
\frac1{|G_{\mathrm{mass}}|}
\sum_{g\in G_{\mathrm{mass}}}
z_{cg},
$$

with an analogous infiltration score

$$
S_{\mathrm{inf}}(c)
=
\frac1{|G_{\mathrm{inf}}|}
\sum_{g\in G_{\mathrm{inf}}}
z_{cg}.
$$

The analysis will ask:

> **Which malignant and microenvironmental cell states are associated with the MRI-derived infiltration and mass-effect programs?**

RNA velocity may be used as a secondary analysis to test whether these programs are associated with particular cell-state transitions.

---

## Spatial Transcriptomic Validation

The molecular signatures identified from MRI and bulk transcriptomic analysis will be mapped across spatial transcriptomic sections.

This stage will examine whether

$$
S_{\mathrm{mass}}(x)
$$

and

$$
S_{\mathrm{inf}}(x)
$$

exhibit distinct spatial distributions.

Of particular interest are differences among

$$
\text{tumor core}
\rightarrow
\text{transition region}
\rightarrow
\text{invasive boundary}.
$$

The goal is to determine whether macroscopic physical tumor phenotypes inferred from MRI correspond to reproducible microscopic spatial programs.

---

## Project Workflow

The complete workflow is

$$
\boxed{
\text{MRI}
\rightarrow
\begin{cases}
\text{Improved Fisher--KPP model}\\
\text{Mechanical mass-effect model}
\end{cases}
\rightarrow
\text{PINN / FE inverse modeling}
\rightarrow
(\lambda_{\mathrm{inf}},M^*)
}
$$

followed by

$$
\boxed{
(\lambda_{\mathrm{inf}},M^*)
\rightarrow
\text{patient-level gene programs}
\rightarrow
\text{single-cell states}
\rightarrow
\text{spatial niches}.
}
$$

<div class="row justify-content-sm-center">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="lazy" path="assets/img/projects/MRIPINN-gbm-multiscale-workflow.png" title="Mechanism-aware multiscale glioblastoma modeling workflow" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
  <strong>Figure 4.</strong> Proposed multiscale workflow. MRI is first analyzed using complementary infiltration and mechanical models. Physics-informed and finite-element-based inverse methods produce interpretable tumor biomarkers. These imaging phenotypes are then linked to patient-level molecular programs, resolved to specific cell states using single-cell RNA sequencing, and evaluated spatially using spatial transcriptomics.
</div>

---

## Expected Outcomes

The project is expected to produce:

- an identifiable mathematical representation of tumor infiltration and mechanical mass effect;
- a validated PINN-based inverse solver for tumor-density and tissue-displacement fields;
- a finite-element benchmark with known ground-truth mechanical parameters;
- a differentiable surrogate model for efficient parameter calibration;
- interpretable physics-derived MRI biomarkers such as $\lambda_{\mathrm{inf}}$ and $M^*$;
- displacement, strain, and stress maps describing tumor-associated deformation;
- quantitative comparison of infiltrative, mechanical, and hybrid tumor models;
- molecular programs associated with physics-derived MRI phenotypes;
- identification of malignant and microenvironmental cell states carrying those programs;
- spatial validation of those molecular programs within tumor tissue;
- open-source mathematical and computational tools for mathematical oncology and scientific machine learning.

---

## Mathematical Significance

The mathematical contribution of the project extends beyond a single biomedical application. It brings together

- **reaction–diffusion PDEs**,
- **anisotropic diffusion**,
- **continuum mechanics**,
- **tensor calculus**,
- **parameter identifiability**,
- **inverse problems**,
- **numerical PDEs**,
- **finite-element methods**,
- **constrained optimization**,
- **physics-informed neural networks**,
- **surrogate modeling**,
- **uncertainty quantification**.

Several methodological questions arise naturally:

1. Which combinations of tumor-growth and mechanical parameters are identifiable from a single MRI?
2. How stable are the inferred parameters under uncertainty in the unknown pre-tumor anatomy?
3. When does a mechanical model provide information beyond an infiltration-only model?
4. Can PINN-based and finite-element-surrogate inverse methods recover consistent physical biomarkers?
5. Which mathematical model best explains the observed MRI for a given tumor?
6. Do physics-derived MRI phenotypes correspond to reproducible molecular and cellular programs?

The broader objective is to develop **interpretable mathematical models that connect observable imaging phenotypes with the physical and biological mechanisms underlying tumor growth**.

---

## Research Significance

Most MRI-based tumor studies focus on statistical prediction or image classification. This project instead treats tumor imaging as an **inverse mathematical problem**.

The goal is not simply to predict what class an MRI belongs to, but to ask

$$
\boxed{
\text{What physical mechanism generated the observed anatomy?}
}
$$

The project then extends this question across biological scales:

$$
\boxed{
\text{Mathematics}
\rightarrow
\text{Physics}
\rightarrow
\text{Imaging}
\rightarrow
\text{Molecular Programs}
\rightarrow
\text{Cellular States}.
}
$$

This provides a unified research direction at the intersection of applied mathematics, mathematical biology, continuum mechanics, biomedical imaging, and scientific machine learning.

---

## Project Information

**Principal Investigator:** Xiuquan Wang, Ph.D.  
**Institution:** Tougaloo College  
**Research Areas:** Applied Mathematics, Mathematical Biology, Biomedical Imaging, Scientific Machine Learning  
**Core Methods:** Reaction–Diffusion PDEs, Continuum Mechanics, Tensor Calculus, Inverse Problems, Finite-Element Modeling, Physics-Informed Neural Networks, Constrained Optimization, Single-Cell and Spatial Transcriptomics

---

*This project is methodological research intended to investigate mathematically interpretable models of tumor growth and tissue deformation. It is not a clinical diagnostic tool.*
