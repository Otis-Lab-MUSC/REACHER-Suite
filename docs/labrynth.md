---
layout: default
title: labrynth
---

# labrynth

[![Status](https://img.shields.io/badge/status-Stable%20v2.0.0-brightgreen)]()
[![Tech](https://img.shields.io/badge/tech-React%2019%20%2F%20TypeScript-blue)]()

Browser-based GUI for configuring, running, and monitoring REACHER experiments.

---

## Key Features

- **React 19 + TypeScript** single-page application
- **5 panels**: Monitor, Session, Hardware, Program, and Data
- **6 color themes** for user preference
- **PyInstaller packaging** bundles the backend + frontend into a standalone desktop app
- **Firmware git submodule** for automatic paradigm updates
- **InnoSetup Windows installer** for one-click deployment

## Tech Stack

- React 19 / TypeScript / Vite
- Zustand state management
- WebSocket real-time updates
- PyInstaller + InnoSetup for distribution

## How It Fits

`labrynth` is the user-facing layer of the software stack. It communicates with the `reacher` backend via REST and WebSocket APIs on port 6229, providing a visual interface for configuring experiments, flashing firmware, monitoring sessions in real time, and exporting data.

---

[View on GitHub](https://github.com/Otis-Lab-MUSC/labrynth)
