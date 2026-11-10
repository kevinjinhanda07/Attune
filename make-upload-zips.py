"""Make one .zip per skill (for uploading to claude.ai / Claude desktop).
Usage: python3 make-upload-zips.py [Category ...]   (no args = all categories)
Output: upload-zips/<Category>/<skill>.zip, each with the skill folder at its root."""
import os, sys, zipfile
here = os.path.dirname(os.path.abspath(__file__))
cats = sys.argv[1:] or sorted(os.listdir(os.path.join(here, "skills")))
n = 0
for cat in cats:
    base = os.path.join(here, "skills", cat)
    for tool in sorted(os.listdir(base)):
        for skill in sorted(os.listdir(os.path.join(base, tool))):
            src = os.path.join(base, tool, skill)
            out = os.path.join(here, "upload-zips", cat); os.makedirs(out, exist_ok=True)
            with zipfile.ZipFile(os.path.join(out, skill + ".zip"), "w", zipfile.ZIP_DEFLATED) as z:
                for dp, _, fs in os.walk(src):
                    for f in fs:
                        p = os.path.join(dp, f); z.write(p, os.path.join(skill, os.path.relpath(p, src)))
            n += 1
print(f"{n} zips in {os.path.join(here, 'upload-zips')}")
