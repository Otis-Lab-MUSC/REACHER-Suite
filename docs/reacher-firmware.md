---
layout: default
title: reacher-firmware
---

# reacher-firmware

[![Status](https://img.shields.io/badge/status-Stable%20v2.0.0-brightgreen)]()
[![Tech](https://img.shields.io/badge/tech-C++%20%2F%20Arduino-blue)]()

Arduino firmware powering the behavioral paradigms on the REACHER rig.

---

## Key Features

- **5 paradigms**: Fixed Ratio (FR), Progressive Ratio (PR), Variable Interval (VI), Omission, and Pavlovian
- **REACHERDevices library** for abstracted hardware control (levers, pumps, lick sensors, cue lights)
- **Scheduler engine** for non-blocking, millisecond-precision event timing
- **JSON serial protocol** for bidirectional communication with the Python backend
- **Pre-compiled `.hex` binaries** for flash-and-go deployment without the Arduino IDE

## Tech Stack

- C++ / Arduino
- JSON serial protocol @ 115200 baud
- Pre-compiled hex binaries via avr-gcc

## How It Fits

The firmware runs on the Arduino UNO at the hardware layer. It receives configuration commands from the `reacher` backend over serial JSON and executes the selected behavioral paradigm, reporting events (lever presses, rewards, licks, cue presentations) back in real time.

---

[View on GitHub](https://github.com/Otis-Lab-MUSC/reacher-firmware)
