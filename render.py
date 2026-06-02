#!/usr/bin/env python3
"""
Rendu HTML -> PNG pour la charte Nouvelle Énergie.
Usage:
    python3 render.py templates/proposition.html exemples/proposition-3.png
    python3 render.py <input.html> <output.png> [--scale 2] [--selector .ne-canvas]
Rend l'élément .ne-canvas (1080x1350 par défaut) en PNG net (scale 2 = 2160x2700).
"""
import sys, asyncio
from pathlib import Path
from playwright.async_api import async_playwright

async def main():
    args = sys.argv[1:]
    if len(args) < 2:
        print(__doc__); sys.exit(1)
    inp = Path(args[0]).resolve()
    out = Path(args[1]).resolve()
    scale = 2
    selector = ".ne-canvas"
    if "--scale" in args:    scale = int(args[args.index("--scale")+1])
    if "--selector" in args: selector = args[args.index("--selector")+1]
    out.parent.mkdir(parents=True, exist_ok=True)

    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(device_scale_factor=scale)
        await page.goto(inp.as_uri())
        await page.wait_for_timeout(350)          # laisser les @font-face se charger
        try:
            await page.evaluate("document.fonts.ready")
        except Exception:
            pass
        el = await page.query_selector(selector)
        if el is None:
            print(f"!! sélecteur introuvable: {selector}"); sys.exit(2)
        await el.screenshot(path=str(out))
        await browser.close()
    print(f"OK -> {out}")

asyncio.run(main())
