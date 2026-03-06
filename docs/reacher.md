---
layout: default
title: reacher
---

# reacher

[![Status](https://img.shields.io/badge/status-Stable%20v2.0.0-brightgreen)]()
[![Tech](https://img.shields.io/badge/tech-Python%20%2F%20FastAPI-blue)]()

Python backend serving as the bridge between Arduino hardware and the browser UI.

---

## Key Features

- **FastAPI REST API** on port 6229 for session management, hardware control, and data export
- **WebSocket streaming** for real-time event delivery to the frontend
- **3-thread serial kernel** (reader, writer, heartbeat) for reliable Arduino communication
- **SessionManager** with port locking for coordinating multiple simultaneous sessions
- **FirmwareUploader** for flashing `.hex` files to Arduinos via `avrdude`
- **71-command registry** covering all experiment control operations

## Tech Stack

- Python / FastAPI / pyserial
- WebSocket event streaming
- avrdude integration for firmware uploads

## How It Fits

The backend sits between the Arduino hardware and the `labrynth` GUI. It translates REST/WebSocket requests from the frontend into serial JSON commands for the firmware, and streams hardware events back to the browser in real time.

---

[View on GitHub](https://github.com/Otis-Lab-MUSC/reacher)
