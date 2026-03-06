---
layout: default
title: Getting Started
---

# Getting Started

## Path A: Running Experiments

Download the standalone installer from the [labrynth releases page](https://github.com/Otis-Lab-MUSC/labrynth/releases). The installer bundles the Python backend, React frontend, and firmware binaries into a single desktop application -- no development environment required.

## Path B: Development

Clone the repositories you need and set up the development environment:

```bash
# Clone the repositories you need
git clone https://github.com/Otis-Lab-MUSC/reacher.git
git clone https://github.com/Otis-Lab-MUSC/labrynth.git
git clone https://github.com/Otis-Lab-MUSC/reacher-firmware.git

# Install the Python backend
cd reacher
pip install -e .

# Build the frontend
cd ../labrynth
npm install
npm run build
```

---

## Prerequisites

| Requirement | Version | Used By |
|:------------|:--------|:--------|
| Python | 3.10+ | reacher, pynapse, axplorer, roigbiv |
| Node.js | 18+ | labrynth |
| Arduino CLI / avrdude | Latest | reacher (firmware uploads) |
| CUDA | 11.8+ (optional) | roigbiv (GPU-accelerated segmentation) |
| 3D Printer | FDM / resin | reacher-hardware-models |

---

## License

All REACHER Suite repositories are released under the [MIT License](https://github.com/Otis-Lab-MUSC/REACHER-Suite/blob/main/LICENSE). See individual repository LICENSE files for details.

---

## Contact

Joshua Boquiren -- [thejoshbq@proton.me](mailto:thejoshbq@proton.me)

GitHub Organization: [Otis-Lab-MUSC](https://github.com/Otis-Lab-MUSC)
