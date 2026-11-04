"""Builds dist/index.html: one self-contained file (CSS, font, JS and art inlined)."""
import base64, json, pathlib, subprocess

ROOT = pathlib.Path(__file__).parent
SRC = ROOT / "src"
DIST = ROOT / "dist"
data = json.loads((SRC / "data.json").read_text())

def deals():
    out = []
    for a in data["aisles"]:
        rows = "".join(
            f'<div class="row"><span class="name">{i["name"]}</span>'
            f'<span class="was"><span class="sr">Was </span>${i["was"]}</span>'
            f'<span class="now">${i["now"]}</span>'
            f'<span class="off">{round((1 - i["now"] / i["was"]) * 100)}% off</span></div>'
            for i in a["items"]
        )
        out.append(
            f'<div class="aisle" id="aisle-{a["id"]}"><div class="aisle-name">'
            f'<h3 class="h3">{a["name"]}</h3><p>Up to {a["upto"]}% off</p></div>'
            f'<div class="rows">{rows}</div></div>'
        )
    return "\n".join(out)

def picker():
    out = []
    for a in data["aisles"]:
        for i in a["items"]:
            out.append(
                f'<label class="pick"><input type="checkbox" name="item" value="{i["id"]}">'
                f'<span>{i["name"]}<b>${i["now"]}</b></span></label>'
            )
    return "\n".join(out)

INK, PAPER, RED, GREY, MID = "#0b0b0b", "#ffffff", "#e4002b", "#d9d9d9", "#8a8a8a"

def lip(x, top, h, bullet=RED, case=INK):
    # a lipstick standing on the shelf at y=440: case, sleeve, slanted bullet
    base = 440
    return (
        f'<rect x="{x}" y="{base-h}" width="64" height="{h}" fill="{case}"/>'
        f'<rect x="{x+6}" y="{base-h-34}" width="52" height="34" fill="{MID}"/>'
        f'<path d="M{x+12} {base-h-34} L{x+12} {top+22} L{x+52} {top} L{x+52} {base-h-34} Z" fill="{bullet}"/>'
    )

ART1 = (
    '<svg viewBox="0 0 400 500" aria-hidden="true">'
    + lip(58, 150, 150) + lip(168, 92, 200, bullet="#b5001f") + lip(278, 176, 130, bullet="#ff4a5f")
    + f'<rect x="20" y="440" width="360" height="12" fill="{INK}"/>'
    + f'<g transform="rotate(-16 200 470)"><rect x="40" y="462" width="300" height="12" fill="{INK}"/>'
    f'<path d="M340 462 L366 468 L340 474 Z" fill="{RED}"/></g></svg>'
)

ART2 = (
    '<svg viewBox="0 0 400 500" aria-hidden="true">'
    # dropper bottle
    f'<rect x="56" y="210" width="92" height="230" fill="{PAPER}"/>'
    f'<rect x="78" y="150" width="48" height="60" fill="{MID}"/>'
    f'<rect x="88" y="96" width="28" height="56" rx="14" fill="{RED}"/>'
    # jar
    f'<rect x="168" y="330" width="176" height="110" fill="{GREY}"/>'
    f'<rect x="160" y="296" width="192" height="40" fill="{PAPER}"/>'
    # tube lying down
    f'<rect x="168" y="246" width="150" height="40" rx="20" fill="{MID}"/>'
    f'<rect x="318" y="254" width="30" height="24" fill="{PAPER}"/>'
    f'<rect x="20" y="440" width="360" height="12" fill="{PAPER}"/>'
    '</svg>'
)

def vials():
    s = ""
    for r in range(2):
        for c in range(4):
            x, y = 54 + c * 80, 110 + r * 170
            fill = PAPER if (r + c) % 2 == 0 else "#ffd3d9"
            s += f'<rect x="{x}" y="{y+26}" width="52" height="118" rx="6" fill="{fill}"/>'
            s += f'<rect x="{x+12}" y="{y}" width="28" height="30" fill="{INK}"/>'
    return s

ART3 = (
    '<svg viewBox="0 0 400 500" aria-hidden="true">' + vials()
    + f'<rect x="40" y="446" width="320" height="14" fill="{INK}"/></svg>'
)

def brushes():
    s = ""
    for k in range(8):
        ang = -42 + k * 12
        tip = RED if k % 3 == 0 else INK
        w = 14 + (k % 3) * 6
        s += (
            f'<g transform="rotate({ang} 200 430)">'
            f'<rect x="{200 - 5}" y="200" width="10" height="230" fill="{INK}"/>'
            f'<rect x="{200 - 8}" y="160" width="16" height="44" fill="{MID}"/>'
            f'<rect x="{200 - w/2}" y="{110 - (k%2)*14}" width="{w}" height="{54 + (k%2)*14}" rx="{w/2}" fill="{tip}"/></g>'
        )
    return s

ART4 = (
    '<svg viewBox="0 0 400 500" aria-hidden="true">' + brushes()
    + f'<rect x="60" y="380" width="280" height="90" fill="{INK}"/>'
    + f'<rect x="60" y="400" width="280" height="14" fill="{RED}"/></svg>'
)

def main():
    subprocess.run(["npx", "vite", "build", "--logLevel", "warn"], cwd=ROOT, check=True)
    js = next((ROOT / "build" / "assets").glob("*.js")).read_text()
    font = base64.b64encode((SRC / "archivo.woff2").read_bytes()).decode()
    css = (SRC / "style.css").read_text().replace("FONTURL", "data:font/woff2;base64," + font)
    css += ".sr{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)}"
    html = (SRC / "template.html").read_text()
    html = (html.replace("/*CSS*/", css)
                .replace("<!--DEALS-->", deals())
                .replace("<!--PICKER-->", picker())
                .replace("<!--ART1-->", ART1).replace("<!--ART2-->", ART2)
                .replace("<!--ART3-->", ART3).replace("<!--ART4-->", ART4))
    html = html.replace("<script>/*JS*/</script>", "<script>" + js.replace("</script", "<\\/script") + "</script>")
    DIST.mkdir(exist_ok=True)
    (DIST / "index.html").write_text(html)
    print("wrote", DIST / "index.html", round(len(html) / 1024), "KB")

if __name__ == "__main__":
    main()
