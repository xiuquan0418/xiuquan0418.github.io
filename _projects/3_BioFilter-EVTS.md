---
layout: page
title: BioFilter-EVTS
description: A biology-guided framework for evaluating and refining RNA velocity visualizations using transition consistency, pseudotime, lineage structure, and marker-gene progression.
img: assets/img/3.jpg
importance: 3
category: work
related_publications: true
---

## Project Overview

**Project Title:** BioFilter-EVTS: Biology-Guided Evaluation and Refinement of RNA Velocity Visualizations

**Research Areas:** Computational Biology · Single-Cell Transcriptomics · RNA Velocity · Developmental Biology · Mathematical Modeling · Biomedical Data Science

RNA velocity estimates the future transcriptional direction of individual cells from spliced and unspliced RNA abundance. Although velocity is inferred in high-dimensional gene-expression space, biological interpretation is usually based on arrows or streamlines projected onto low-dimensional embeddings such as UMAP.

These visualizations can be difficult to evaluate because cells that are close in an embedding are not necessarily biologically valid future states. This issue is especially important in branching developmental systems, where nearby terminal cell types may belong to distinct lineages.

**BioFilter-EVTS** is a biology-guided framework for evaluating and refining projected RNA velocity directions. The method distinguishes two questions:

1. **Is the projected velocity direction consistent with the RNA velocity transition graph?**
2. **Does that direction point toward biologically plausible future cells?**

The framework combines transition probabilities with biological constraints based on pseudotime, branch compatibility, and marker-gene progression.

---

## Methodological Framework

### EVTS: transition-consistency evaluation

The **Embedding Velocity Transition Score (EVTS)** evaluates whether a projected velocity vector points toward high-transition-probability neighbors identified by the RNA velocity transition matrix.

For each cell, EVTS compares the displayed velocity vector with directions toward candidate future neighbors using a transition-probability-weighted cosine similarity.

A high EVTS indicates that the projected arrow is consistent with the transition graph, but transition consistency alone does not guarantee biological plausibility.

### BioFilter: biological plausibility

BioFilter evaluates each candidate transition using three complementary biological constraints:

- **Pseudotime consistency:** candidate future cells should generally lie later along the inferred developmental trajectory.
- **Branch consistency:** candidate cells should remain within the same lineage or follow a biologically valid downstream branch.
- **Marker-gene consistency:** candidate cells should show expected fate-specific marker progression.

These terms are combined into a biological consistency score and used to reweight candidate transition neighbors.

The resulting weights are used both to diagnose potentially ambiguous regions and to recompute a **BioFilter-projected velocity vector**.

---

## Diagnostic Scores

The framework provides several interpretable diagnostics:

- **EVTS:** agreement between the projected velocity vector and transition-probable neighbors.
- **BioCover:** overall biological support among high-transition-probability neighbors.
- **BranchViolation:** proportion of transition probability assigned to biologically invalid cross-branch neighbors.
- **Marker Consistency:** agreement with expected fate-specific marker progression.
- **Vector Similarity (VecSim):** cosine similarity between the original and BioFilter-projected velocity vectors.
- **BioFilter-EVTS:** alignment of the projected velocity direction with biologically plausible future neighbors.

Together, these metrics separate visualization consistency from biological plausibility.

---

## Case Study: Pancreatic Endocrinogenesis

We evaluated BioFilter-EVTS using a well-characterized pancreatic endocrinogenesis dataset analyzed with a scVelo-based workflow.

The dataset contains **3,696 cells and 27,998 genes**, including ductal cells, Ngn3-low and Ngn3-high endocrine progenitors, pre-endocrine cells, and terminal alpha, beta, delta, and epsilon fates.

The analysis revealed two important sources of ambiguity in the original velocity visualization:

- locally circular or unclear flow in progenitor regions;
- possible cross-branch smoothing among nearby terminal endocrine populations.

BioFilter was designed to identify and reduce these local ambiguities while preserving the broader developmental trajectory.

---

## Key Results

The original scVelo projection already showed strong consistency with the transition graph, with a mean EVTS of approximately **0.767**.

After biological filtering:

- BioFilter-EVTS increased slightly to approximately **0.773** when evaluating the original projected vectors;
- BioFilter-EVTS increased to approximately **0.882** after recomputing the BioFilter-projected velocity field;
- mean **BioCover** was approximately **0.352**, indicating that transition consistency and biological support are not equivalent;
- mean **BranchViolation** was low overall, approximately **0.076**, suggesting that strong cross-branch ambiguity is localized rather than global;
- mean **VecSim** was approximately **0.850**, showing that BioFilter preserves the global velocity structure while making local refinements.

Cell-type-level analysis showed stronger biological support in Ngn3-high endocrine progenitors and beta cells, while Ngn3-low progenitors and epsilon cells exhibited greater ambiguity.

Sensitivity analysis across different numbers of transition neighbors showed that the major diagnostic patterns were stable across \(k=5,10,20,\) and \(50\).

---

## Research Significance

BioFilter-EVTS addresses an important gap in RNA velocity analysis: projected velocity arrows can look plausible visually while still being influenced by nearby cells that are not biologically valid future states.

The framework does not replace RNA velocity inference. Instead, it provides an additional layer of evaluation and refinement by asking whether projected directions are both **transition-consistent and biologically plausible**.

This makes BioFilter-EVTS useful as:

- a diagnostic tool for identifying locally ambiguous velocity regions;
- a refinement method for reducing biologically questionable cross-branch influence;
- an interpretable framework for comparing RNA velocity visualizations across methods and datasets.

---

## Future Directions

Ongoing work will extend BioFilter-EVTS to additional developmental and disease datasets and evaluate alternative biological constraints, including:

- lineage priors from external annotations;
- gene-set and pathway-level consistency;
- uncertainty-aware transition weighting;
- integration with long-read and isoform-level single-cell analysis;
- automated refinement of velocity projections across embedding methods.

The broader goal is to develop robust computational tools for evaluating whether low-dimensional representations of cellular dynamics preserve biologically meaningful state-transition structure.

---

## Project Information

**Principal Investigator:** Xiuquan Wang, Ph.D.  
**Institution:** Tougaloo College  
**Mentor:** Kai Wang, Ph.D.  
**Co-author:** Nan Nan, Ph.D.  
**Support:** NSF HBCU-UP RIA Award #2300445; NSF HBCU-UP Implementation Award #2510537; Mississippi INBRE (NIH/NIGMS P20GM103476)

---

*BioFilter-EVTS is an ongoing research project focused on improving the biological interpretability of RNA velocity visualizations. Results presented here are based on current computational analyses and may be refined as the work progresses.*
