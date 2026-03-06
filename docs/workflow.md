---
layout: default
title: Experimental Workflow
---

# Experimental Workflow

The REACHER Suite supports an 8-step pipeline from hardware assembly through neural data analysis.

---

## 1. BUILD

3D-print the mechanical components from the `reacher-hardware-models` repository. This includes lever assemblies, head fixation mounts, syringe pump housings, and enclosure panels. All models are provided as STL files ready for FDM or resin printing.

## 2. WIRE

Connect the Arduino UNO to the peripheral devices: reward delivery solenoids or syringe pumps, operant levers, lick sensors, and cue lights. The `REACHERDevices` firmware library provides pin abstractions for each device type.

## 3. FLASH

Upload the paradigm firmware to the Arduino UNO. This can be done directly through the `labrynth` GUI, which uses `avrdude` under the hood to flash pre-compiled `.hex` binaries. No Arduino IDE required.

## 4. CONFIGURE

Set session parameters in the browser GUI: animal ID, paradigm type (FR, PR, VI, Omission, or Pavlovian), schedule values, timeout durations, and reward amounts. Configuration is sent to the Arduino over serial JSON before the session begins.

## 5. RUN

Execute the behavioral session. The `labrynth` GUI provides real-time monitoring of events (lever presses, rewards, licks, cue presentations) via WebSocket streaming. Sessions can be run alongside two-photon calcium imaging for simultaneous neural recording.

## 6. EXPORT

Save behavioral event logs and imaging data from the completed session. The backend exports timestamped event records that can be loaded by downstream analysis tools. Two-photon TIFF stacks are saved separately by the imaging software.

## 7. SEGMENT

Run `roigbiv` to identify regions of interest (ROIs) in the two-photon TIFF stacks. The pipeline uses Cellpose models fine-tuned on two-photon data to segment neuronal and astrocytic cell bodies, producing binary masks for each identified ROI.

## 8. ANALYZE

Load behavioral event logs and segmented neural traces into `axplorer` for peri-event time histogram (PETH) analysis. Classify neurons as excited, inhibited, or non-responsive relative to behavioral events. Explore population-level patterns across animals and conditions.
