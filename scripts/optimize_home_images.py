"""Optional one-time export helper; requires Pillow with WebP support.

Run from the repository root: python scripts/optimize_home_images.py
Preserves approved PNG masters. No cropping, filters, or upscaling.
This helper is not part of the Vite build or the application runtime.
"""

from pathlib import Path
import json
from PIL import Image

ROOT = Path(__file__).resolve().parents[1] / "src/assets/images/home"

for source in sorted(ROOT.rglob("*.png")):
    with Image.open(source) as original:
        image = original.convert("RGB")
        hero = source.parent.name == "hero"
        widths = (960, 1536) if hero else (640, min(1280, image.width))
        exports = []
        for width in widths:
            width = min(width, image.width)
            height = round(image.height * width / image.width)
            derivative = image.resize((width, height), Image.Resampling.LANCZOS)
            target = source.with_name(f"{source.stem}-{width}.webp")
            derivative.save(target, "WEBP", quality=86 if hero else 84, method=6)
            exports.append({"file": str(target.relative_to(ROOT)), "width": width,
                            "height": height, "bytes": target.stat().st_size})
        print(json.dumps({"source": str(source.relative_to(ROOT)), "width": image.width,
                          "height": image.height, "bytes": source.stat().st_size,
                          "exports": exports}))
