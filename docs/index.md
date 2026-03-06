---
layout: default
title: Home
---

# REACHER Suite

[![Version](https://img.shields.io/badge/version-2.0.0-blue)](https://github.com/Otis-Lab-MUSC/REACHER-Suite)
[![License](https://img.shields.io/badge/license-MIT-green)](https://github.com/Otis-Lab-MUSC/REACHER-Suite/blob/main/LICENSE)
[![Python](https://img.shields.io/badge/python-3.10%E2%80%933.13-blue)](https://www.python.org)
[![Platform](https://img.shields.io/badge/platform-Arduino%20UNO%20%7C%20Windows%20%7C%20Linux%20%7C%20macOS-lightgrey)]()

**Open-source hardware, firmware, and software for head-fixed mouse operant conditioning with two-photon calcium imaging**

The REACHER Suite is a collection of 7 free and open-source tools that together form an end-to-end platform for running behavioral experiments on head-fixed mice while simultaneously capturing neural activity via two-photon imaging. It covers everything from 3D-printable hardware and Arduino firmware, through real-time experiment control, to post-hoc calcium imaging analysis and visualization.

*Written by*: Joshua Boquiren

---

## Architecture

<pre class="mermaid">
flowchart TB
    subgraph Hardware Layer
        HW[reacher-hardware-models<br>3D-printed components]
        ARD[Arduino UNO]
    end

    subgraph Software Layer
        FW[reacher-firmware<br>Paradigm firmware]
        API[reacher<br>FastAPI backend]
        GUI[labrynth<br>React frontend]
    end

    subgraph Analysis Layer
        PY[pynapse<br>Calcium imaging toolkit]
        AX[axplorer<br>PETH dashboard]
        ROI[roigbiv<br>ROI segmentation]
    end

    HW -->|physical assembly| ARD
    FW -->|hex upload via avrdude| ARD
    ARD <-->|serial JSON @ 115200 baud| API
    API <-->|REST / WebSocket :6229| GUI
    API -->|behavioral data export| PY
    ROI -->|ROI masks| PY
    PY -->|peri-event tensors| AX
</pre>

The **Hardware Layer** provides printable mechanical components and an Arduino UNO running paradigm firmware. The **Software Layer** handles real-time experiment control: the firmware communicates over serial JSON with the Python backend, which in turn serves a browser-based GUI. The **Analysis Layer** takes exported behavioral and imaging data through ROI segmentation, signal preprocessing, and peri-event neural analysis.

---

## Repository Overview

| Repository | Description | Tech Stack | Status |
|:-----------|:------------|:-----------|:-------|
| [reacher-firmware]({{ site.baseurl }}/reacher-firmware) | Arduino paradigm firmware with 5 operant conditioning schedules | C++ / Arduino | Stable v2.0.0 |
| [reacher]({{ site.baseurl }}/reacher) | FastAPI backend, serial kernel, and session manager | Python / FastAPI | Stable v2.0.0 |
| [labrynth]({{ site.baseurl }}/labrynth) | Browser-based experiment control GUI | React 19 / TypeScript | Stable v2.0.0 |
| [pynapse]({{ site.baseurl }}/pynapse) | Calcium imaging analysis toolkit | Python / NumPy | Alpha v0.1.0 |
| [axplorer]({{ site.baseurl }}/axplorer) | Peri-event analysis and visualization dashboard | Python / Plotly.js | In Progress |
| [roigbiv]({{ site.baseurl }}/roigbiv) | ROI segmentation via Cellpose fine-tuning | Python / Cellpose | In Progress |
| [reacher-hardware-models]({{ site.baseurl }}/reacher-hardware-models) | 3D-printable hardware for head-fixed rigs | STL / Arduino | Stable v1.0.0 |
