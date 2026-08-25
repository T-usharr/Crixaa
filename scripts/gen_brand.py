from PIL import Image, ImageDraw, ImageFont

SANS_BOLD = "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"
MONO_BOLD = "/usr/share/fonts/truetype/liberation/LiberationMono-Bold.ttf"
PUB = "/app/frontend/public"

INK = (15, 23, 42)
SLATE = (71, 85, 105)
SLATE_LT = (148, 163, 184)
EMERALD = (4, 120, 87)
EMERALD_LT = (52, 211, 153)
BG = (250, 251, 253)
DARK = (9, 19, 31)


def draw_mark(draw, ox, oy, scale, dark=False):
    def r(x, y, w, h, fill):
        draw.rectangle([ox + x * scale, oy + y * scale, ox + (x + w) * scale, oy + (y + h) * scale], fill=fill)
    r(4, 6, 40, 5, (248, 250, 252) if dark else INK)
    r(12, 17, 24, 5, (203, 213, 225) if dark else SLATE)
    r(19, 28, 10, 5, (100, 116, 139) if dark else SLATE_LT)
    pts = [(19, 39), (24.5, 44.5), (35, 33)]
    pts = [(ox + x * scale, oy + y * scale) for x, y in pts]
    draw.line(pts, fill=EMERALD_LT if dark else EMERALD, width=max(2, int(4.5 * scale)), joint="curve")
    # square caps
    cap = 4.5 * scale / 2
    for x, y in (pts[0], pts[-1]):
        draw.rectangle([x - cap, y - cap, x + cap, y + cap], fill=EMERALD_LT if dark else EMERALD)


def favicon_png(size, path):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([0, 0, size - 1, size - 1], radius=int(size * 0.19), fill=DARK + (255,))
    pad = size * 0.125
    scale = (size - 2 * pad) / 48
    draw_mark(d, pad, pad, scale, dark=True)
    img.save(path)


def og_image():
    W, H = 1200, 630
    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img, "RGBA")
    for x in range(0, W, 56):
        d.line([(x, 0), (x, H)], fill=(15, 23, 42, 11), width=1)
    for y in range(0, H, 56):
        d.line([(0, y), (W, y)], fill=(15, 23, 42, 11), width=1)
    d.rectangle([0, H - 10, W, H], fill=EMERALD)

    draw_mark(d, 96, 208, 3.2, dark=False)

    f_word = ImageFont.truetype(SANS_BOLD, 96)
    f_tag = ImageFont.truetype(SANS_BOLD, 40)
    f_mono = ImageFont.truetype(MONO_BOLD, 24)
    d.text((300, 216), "Crixaa", font=f_word, fill=INK)
    d.text((300, 350), "The underwriting layer for MSME borrowers", font=f_tag, fill=SLATE)
    d.text((300, 410), "your bureau can't see yet.", font=f_tag, fill=SLATE)
    d.text((98, 540), "NEW-TO-CREDIT MSME UNDERWRITING  ·  GST + ACCOUNT AGGREGATOR + BUREAU", font=f_mono, fill=EMERALD)
    img.save(f"{PUB}/og-image.png")


favicon_png(32, f"{PUB}/favicon-32.png")
favicon_png(180, f"{PUB}/apple-touch-icon.png")
og_image()
print("brand assets written")
