---
layout: default
title: roigbiv
---

# roigbiv *(In Progress)*

[![Status](https://img.shields.io/badge/status-In%20Progress-yellow)]()
[![Tech](https://img.shields.io/badge/tech-Python%20%2F%20Cellpose%20%2F%20PyTorch-blue)]()

ROI segmentation pipeline using fine-tuned Cellpose models for two-photon imaging data.

---

## Key Features

- **Cellpose fine-tuning** from the `cyto3` base model
- **Astrocyte identification** alongside neuronal ROIs
- **TIFF image and mask pipeline** for batch processing
- **CUDA / GPU support** for accelerated inference

## Tech Stack

- Python / Cellpose / PyTorch
- CUDA 11.8+ (optional, for GPU acceleration)
- TIFF image processing

## How It Fits

`roigbiv` operates upstream in the analysis layer. It takes raw two-photon TIFF stacks, segments neuronal and astrocytic cell bodies using fine-tuned Cellpose models, and produces ROI masks. These masks are passed to `pynapse` for extracting fluorescence traces from identified cells.

---

[View on GitHub](https://github.com/Otis-Lab-MUSC/roigbiv)
