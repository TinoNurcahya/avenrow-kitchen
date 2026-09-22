import os
from pathlib import Path
import numpy as np
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
PUBLIC_DIR = ROOT / "public"
ICONS_DIR = PUBLIC_DIR / "icons"
SOCIAL_DIR = PUBLIC_DIR / "social"

ICONS_DIR.mkdir(parents=True, exist_ok=True)
SOCIAL_DIR.mkdir(parents=True, exist_ok=True)

# Find the source image
source_path = PUBLIC_DIR / "ChatGPT Image 22 Sep 2026, 09.59.55.png"
if not source_path.exists():
    raise FileNotFoundError(f"Source image not found at {source_path}")

print(f"Loading source image from: {source_path}")
with Image.open(source_path) as source_img:
    rgb_img = source_img.convert("RGB")
    
    # 1. Favicons
    print("Generating favicon-16x16.png...")
    fav16 = rgb_img.resize((16, 16), Image.Resampling.LANCZOS)
    fav16.save(PUBLIC_DIR / "favicon-16x16.png", "PNG", optimize=True)

    print("Generating favicon-32x32.png...")
    fav32 = rgb_img.resize((32, 32), Image.Resampling.LANCZOS)
    fav32.save(PUBLIC_DIR / "favicon-32x32.png", "PNG", optimize=True)

    print("Generating favicon.ico (multi-size: 16, 32, 48)...")
    fav48 = rgb_img.resize((48, 48), Image.Resampling.LANCZOS)
    # Save multi-resolution ICO
    fav48.save(
        PUBLIC_DIR / "favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
        append_images=[fav16, fav32]
    )

    # 2. Apple Touch Icon (180x180)
    print("Generating apple-touch-icon.png (180x180)...")
    apple_icon = rgb_img.resize((180, 180), Image.Resampling.LANCZOS)
    apple_icon.save(PUBLIC_DIR / "apple-touch-icon.png", "PNG", optimize=True)

    # 3. PWA Icons (192x192, 512x512)
    print("Generating icons/icon-192.png...")
    icon192 = rgb_img.resize((192, 192), Image.Resampling.LANCZOS)
    icon192.save(ICONS_DIR / "icon-192.png", "PNG", optimize=True)

    print("Generating icons/icon-512.png...")
    icon512 = rgb_img.resize((512, 512), Image.Resampling.LANCZOS)
    icon512.save(ICONS_DIR / "icon-512.png", "PNG", optimize=True)

    # 4. Social Open Graph Image (1200x630)
    print("Generating social/og-image.jpg (1200x630)...")
    # Exact average border color
    arr = np.array(rgb_img)
    border_pixels = np.concatenate([arr[0, :], arr[-1, :], arr[:, 0], arr[:, -1]])
    bg_color = tuple(np.round(border_pixels.mean(axis=0)).astype(int)) # (45, 26, 16)
    
    og_canvas = Image.new("RGB", (1200, 630), color=bg_color)
    
    # Place monogram logo nicely on the left side with feathered edge
    logo_size = 460
    logo_resized = rgb_img.resize((logo_size, logo_size), Image.Resampling.LANCZOS)
    
    # Feather mask for seamless blending
    feather = 40
    mask_arr = np.ones((logo_size, logo_size), dtype=float)
    for i in range(feather):
        factor = (1 - np.cos(np.pi * i / feather)) / 2 # smooth cosine fade
        mask_arr[i, :] = np.minimum(mask_arr[i, :], factor)
        mask_arr[logo_size - 1 - i, :] = np.minimum(mask_arr[logo_size - 1 - i, :], factor)
        mask_arr[:, i] = np.minimum(mask_arr[:, i], factor)
        mask_arr[:, logo_size - 1 - i] = np.minimum(mask_arr[:, logo_size - 1 - i], factor)
        
    mask_img = Image.fromarray((mask_arr * 255).astype(np.uint8), mode="L")
    
    logo_x = 90
    logo_y = (630 - logo_size) // 2
    
    # Paste using mask
    bg_patch = Image.new("RGB", (logo_size, logo_size), color=bg_color)
    blended_logo = Image.composite(logo_resized, bg_patch, mask_img)
    og_canvas.paste(blended_logo, (logo_x, logo_y))
    
    draw = ImageDraw.Draw(og_canvas)
    
    # Fonts
    win_fonts = Path(os.environ.get("WINDIR", "C:\\Windows")) / "Fonts"
    georgia_path = win_fonts / "georgia.ttf"
    georgiab_path = win_fonts / "georgiab.ttf"
    arial_path = win_fonts / "arial.ttf"
    arial_bold_path = win_fonts / "arialbd.ttf"
    
    font_category = ImageFont.truetype(str(arial_bold_path) if arial_bold_path.exists() else str(arial_path), 15)
    font_title = ImageFont.truetype(str(georgiab_path) if georgiab_path.exists() else str(georgia_path), 66)
    font_subtitle = ImageFont.truetype(str(georgia_path) if georgia_path.exists() else str(arial_path), 30)
    font_desc = ImageFont.truetype(str(arial_path), 20)
    font_url = ImageFont.truetype(str(arial_bold_path) if arial_bold_path.exists() else str(arial_path), 16)
    
    text_x = 600
    
    # Subtle vertical dividing line
    draw.line([(560, 120), (560, 510)], fill=(75, 48, 34), width=1)
    
    # Palette
    ivory = (243, 239, 231)
    taupe = (181, 165, 142)
    clay = (175, 110, 80)
    
    # Category / Location
    draw.text((text_x, 150), "BROOKLYN, NEW YORK  •  EST. 2026", fill=clay, font=font_category)
    
    # Main Wordmark
    draw.text((text_x, 186), "AVENROW", fill=ivory, font=font_title)
    draw.text((text_x, 264), "K I T C H E N", fill=taupe, font=font_subtitle)
    
    # Accent rule
    draw.line([(text_x, 325), (text_x + 160, 325)], fill=clay, width=2)
    
    # Description
    desc_line1 = "Contemporary American cuisine shaped by seasonal"
    desc_line2 = "ingredients, honest craft, and neighborhood warmth."
    draw.text((text_x, 350), desc_line1, fill=ivory, font=font_desc)
    draw.text((text_x, 382), desc_line2, fill=ivory, font=font_desc)
    
    # Subtle URL badge
    draw.text((text_x, 455), "avenrow-kitchen.vercel.app", fill=taupe, font=font_url)

    # Inset delicate border around entire card
    draw.rectangle([(20, 20), (1179, 609)], outline=(65, 40, 28), width=1)

    og_canvas.save(SOCIAL_DIR / "og-image.jpg", "JPEG", quality=95, optimize=True)

print("All visual assets successfully generated!")
