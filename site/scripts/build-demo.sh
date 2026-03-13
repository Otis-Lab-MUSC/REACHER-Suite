#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SITE_ROOT="$(dirname "$SCRIPT_DIR")"
LABRYNTH_WEB="$SITE_ROOT/../../labrynth/web"

echo "[build-demo] Building Labrynth demo..."
cd "$LABRYNTH_WEB"
VITE_BASE=./ npm run build:demo

echo "[build-demo] Copying demo to public/labrynth-demo/..."
rm -rf "$SITE_ROOT/public/labrynth-demo"
mkdir -p "$SITE_ROOT/public/labrynth-demo"
cp -r dist/* "$SITE_ROOT/public/labrynth-demo/"

echo "[build-demo] Done. Demo available at public/labrynth-demo/"
