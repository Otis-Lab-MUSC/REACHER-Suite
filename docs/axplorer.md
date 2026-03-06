---
layout: default
title: axplorer
---

# axplorer *(In Progress)*

[![Status](https://img.shields.io/badge/status-In%20Progress-yellow)]()
[![Tech](https://img.shields.io/badge/tech-Python%20%2F%20Plotly.js-blue)]()

Interactive dashboard for peri-event time histogram (PETH) computation and neural response analysis.

---

## Key Features

- **PETH computation** from pynapse tensors
- **Response classification** (excited, inhibited, non-responsive)
- **Behavioral summaries** and session-level statistics
- **Population-level analysis** across animals and conditions
- **Plotly.js dashboard** for interactive exploration
- **Multi-format export**: PNG, SVG, PDF, CSV, HDF5

## Tech Stack

- Python / FastAPI backend
- Plotly.js interactive charts
- React frontend

## How It Fits

`axplorer` is the final stage of the analysis pipeline. It takes peri-event tensors from `pynapse` and provides an interactive dashboard for exploring neural responses to behavioral events, classifying response types, and generating publication-ready figures.

---

[View on GitHub](https://github.com/Otis-Lab-MUSC/axplorer)
