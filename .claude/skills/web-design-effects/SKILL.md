---
name: web-design-effects
description: The user's default toolkit for any website, webpage, landing page, portfolio, web app UI, artifact page or visual web design. Use it every time the user asks to create, design, redesign or polish a web page, even if they don't mention effects. It covers eight libraries to build in where they fit - Lenis (smooth scrolling), GSAP + ScrollTrigger (animation and scroll effects), React Bits (animated React components and text effects), react-three-fiber (3D scenes), ShaderGradient (animated gradient backgrounds), Vanta (animated 3D backgrounds), Liquid Glass JS (Apple-style glass buttons and panels) and Paper Shaders Liquid Metal (liquid-metal logos) - with install commands, working code and performance fallbacks.
---

# Web Design Effects

The user wants these libraries used whenever they ask for a website or web design. Use them by default, picking the ones that suit the page. A typical page:

- **Whole site:** Lenis smooth scrolling + GSAP ScrollTrigger reveals as sections scroll in
- **Hero background:** ShaderGradient, a Vanta effect, a React Bits background, or a react-three-fiber 3D scene (pick one)
- **Headline:** a React Bits text animation (e.g. SplitText, BlurText) or GSAP SplitText
- **Logo / brand mark:** Liquid Metal (Paper Shaders)
- **Navigation, buttons, cards:** Liquid Glass, or React Bits components
- **Product or showcase section:** react-three-fiber

Don't stack every effect on one screen. Use one main eye-catching background per screen so the page stays fast and readable. Tell the user which effects you used and where.

For detailed GSAP usage, follow the official GSAP skills (`gsap-core`, `gsap-react`, `gsap-scrolltrigger`, `gsap-timeline`, `gsap-plugins`, `gsap-performance`, `gsap-utils`, `gsap-frameworks`) when they're installed.

## 1. react-three-fiber — 3D in React

Repo: https://github.com/pmndrs/react-three-fiber (helpers: https://github.com/pmndrs/drei)

```bash
npm i three @react-three/fiber @react-three/drei
```

R3F v9 needs React 19 (`>=19 <19.4`). Use v8 only for a React 18 project.

```tsx
'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import type { Mesh } from 'three'

function Blob() {
  const ref = useRef<Mesh>(null!)
  useFrame((_, dt) => (ref.current.rotation.y += dt * 0.3))
  return (
    <Float speed={2} floatIntensity={1.5}>
      <mesh ref={ref}>
        <torusKnotGeometry args={[1, 0.35, 256, 32]} />
        <meshPhysicalMaterial color="#8ab4ff" roughness={0.1} metalness={0.6} clearcoat={1} />
      </mesh>
    </Float>
  )
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
      <ambientLight intensity={0.4} />
      <Environment preset="city" />
      <Blob />
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
```

To load a 3D model, use `useGLTF('/model.glb')` from drei.

## 2. ShaderGradient — animated gradient backgrounds

Repo: https://github.com/ruucm/shadergradient · Visual editor: https://www.shadergradient.co/customize

```bash
npm i @shadergradient/react @react-three/fiber three three-stdlib camera-controls
npm i -D @types/three
```

Next.js 15+ App Router: React 19 + R3F v9. Vite / Next Pages: React 18 or 19 with matching R3F 8.x/9.x.

```tsx
'use client'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

export default function GradientBg() {
  return (
    <ShaderGradientCanvas
      style={{ position: 'absolute', inset: 0, zIndex: -1 }}
      pixelDensity={1.5}
      fov={45}
      pointerEvents="none"
    >
      <ShaderGradient
        control="query"
        urlString="https://www.shadergradient.co/customize?animate=on&cDistance=3.6&cPolarAngle=90&color1=%2352ff89&color2=%23dbba95&color3=%23d0bce1&lightType=3d&shader=defaults&type=plane&uFrequency=5.5&uSpeed=0.4&uStrength=4"
      />
    </ShaderGradientCanvas>
  )
}
```

Set colors to match the site's palette by changing `color1`, `color2` and `color3` in the URL. `type` can be `plane`, `sphere` or `waterPlane`. You can also pass the same values as props, e.g. `<ShaderGradient type="sphere" color1="#ff5005" uSpeed={0.3} />`.

## 3. Liquid Glass JS — Apple-style glass UI

Repo: https://github.com/dashersw/liquid-glass-js (MIT). **It is not on npm.** The npm package named `liquid-glass-js` belongs to a different author, so don't install it. Copy the bundled files from this skill's `assets/liquid-glass/` folder (`container.js`, `button.js`, `glass.css`, `LICENSE`) into the site's `public/` or static folder.

```html
<link rel="stylesheet" href="/liquid-glass/glass.css" />
<script src="https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"></script>
<script src="/liquid-glass/container.js"></script>
<script src="/liquid-glass/button.js"></script>
<script>
  const nav = new Container({ type: 'pill', borderRadius: 32, tintOpacity: 0.25 })
  nav.addChild(new Button({ text: 'Home', size: 18, type: 'pill' }))
  nav.addChild(new Button({ text: 'Work', size: 18, type: 'pill' }))
  nav.addChild(new Button({ text: '→', size: 18, type: 'circle', warp: true }))
  document.querySelector('#nav').appendChild(nav.element)
</script>
```

- `Container({ type: 'rounded'|'circle'|'pill', borderRadius, tintOpacity })` with `.addChild(el)` / `.removeChild(el)`
- `Button({ text, size, type, onClick, warp, tintOpacity })`
- The glass samples the page behind it (html2canvas), so it looks best over a colorful background such as a ShaderGradient or an image.
- In React/Next.js, load the scripts with `next/script` (`strategy="afterInteractive"`) and create the elements in a `useEffect` on a ref'd div.
- If the glass can't run (no WebGL), or it's only needed for a simple card, use a CSS fallback: `backdrop-filter: blur(20px) saturate(180%); background: rgb(255 255 255 / .12); border: 1px solid rgb(255 255 255 / .25);`

## 4. Liquid Metal logo — Paper Shaders

Repo: https://github.com/paper-design/liquid-logo · Try it: https://liquid.paper.design · Library: https://github.com/paper-design/shaders

```bash
npm i @paper-design/shaders-react
```

```tsx
'use client'
import { LiquidMetal } from '@paper-design/shaders-react'

export default function LiquidLogo() {
  return (
    <LiquidMetal
      image="/logo.svg"        // the logo, best as a solid black shape on a transparent background
      colorBack="#00000000"
      colorTint="#ffffff"
      shape="none"            // or 'circle' | 'daisy' | 'diamond' | 'metaballs' if there's no logo
      repetition={2}
      softness={0.1}
      distortion={0.07}
      contour={0.4}
      speed={1}
      style={{ width: 240, height: 240 }}
    />
  )
}
```

Plain JS (no React): `npm i @paper-design/shaders`, which exposes the same shader through `ShaderMount`. The same package also has other effects worth using: `MeshGradient`, `GrainGradient`, `Dithering` and `Metaballs`.

## 5. Lenis — smooth scrolling

Repo: https://github.com/darkroomengineering/lenis

```bash
npm i lenis
```

Plain JS:

```js
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
const lenis = new Lenis({ autoRaf: true, anchors: true })
```

React / Next.js (put it once, near the root):

```tsx
'use client'
import { ReactLenis } from 'lenis/react'
import 'lenis/dist/lenis.css'
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return <ReactLenis root options={{ anchors: true }}>{children}</ReactLenis>
}
```

**With GSAP ScrollTrigger, drive Lenis from GSAP's ticker so they stay in sync:**

```tsx
'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ReactLenis, type LenisRef } from 'lenis/react'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null)
  useEffect(() => {
    const update = (time: number) => lenisRef.current?.lenis?.raf(time * 1000)
    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)
    const lenis = lenisRef.current?.lenis
    lenis?.on('scroll', ScrollTrigger.update)
    return () => {
      gsap.ticker.remove(update)
      lenis?.off('scroll', ScrollTrigger.update)
    }
  }, [])
  return <ReactLenis root options={{ autoRaf: false, anchors: true }} ref={lenisRef}>{children}</ReactLenis>
}
```

Lenis respects `prefers-reduced-motion` on its own. Add `data-lenis-prevent` to inner scrollable areas (modals, dropdowns, code blocks).

## 6. GSAP — animation and scroll effects

Repo: https://github.com/greensock/GSAP · Official AI skills: https://github.com/greensock/gsap-skills

GSAP is **100% free, including every plugin** (SplitText, ScrollSmoother, MorphSVG, etc.), from the public npm package. No Club membership, auth token or `.npmrc` is needed.

```bash
npm i gsap @gsap/react
```

Scroll-in reveal in React:

```tsx
'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.reveal', {
        y: 60, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      })
    })
  }, { scope: ref })
  return <div ref={ref}>{children}</div>
}
```

Always use `useGSAP` (not plain `useEffect`) so animations are cleaned up. Animate `transform`/`opacity`, not layout properties. Good GSAP extras: pinned sections (`pin: true`), horizontal scroll sections, scrubbed timelines (`scrub: true`), `SplitText` headline reveals and `Flip` layout transitions.

## 7. Vanta — animated 3D backgrounds

Repo: https://github.com/tengbao/vanta · Pick and tune effects: https://www.vantajs.com

Effects: `birds`, `cells`, `clouds`, `clouds2`, `dots`, `fog`, `globe`, `halo`, `net`, `rings`, `ripple`, `topology`, `trunk`, `waves`. Most use three.js. `topology` and `trunk` use p5.js.

**Vanta needs an older three.js (r134) on `window.THREE`.** Don't pass it the project's modern `three` from npm, which breaks some effects. Load r134 separately with a script tag:

```html
<div id="hero" style="height:100vh">Foreground content</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.waves.min.js"></script>
<script>
  const effect = VANTA.WAVES({ el: '#hero', color: 0x0b1e3f, shininess: 40, waveHeight: 18, waveSpeed: 0.8, zoom: 0.9, mouseControls: true, touchControls: true, gyroControls: false })
  // effect.setOptions({ color: 0xff88cc }) · effect.resize() · effect.destroy()
</script>
```

React / Next.js: `npm i vanta`, load three r134 with `next/script` (`strategy="beforeInteractive"`, or in `index.html` for Vite), then:

```tsx
'use client'
import { useEffect, useRef } from 'react'

export default function VantaBg({ children }: { children?: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let effect: { destroy(): void } | undefined
    let cancelled = false
    // @ts-expect-error vanta ships no types
    import('vanta/dist/vanta.net.min').then(({ default: NET }) => {
      if (!cancelled && ref.current) effect = NET({ el: ref.current, color: 0x7c5cff, backgroundColor: 0x0a0a14, points: 10, maxDistance: 22 })
    })
    return () => { cancelled = true; effect?.destroy() }
  }, [])
  return <div ref={ref} style={{ minHeight: '100vh' }}>{children}</div>
}
```

Use only one Vanta effect per page, and always `destroy()` it on unmount.

## 8. React Bits — animated React components

Repo: https://github.com/DavidHDev/react-bits · Browse: https://reactbits.dev

There are 215+ free components across text animations, animations (cursor, hover, borders), components (cards, nav, carousels, galleries), micro-interactions and backgrounds. Each comes as `JS` or `TS`, styled with `CSS` or `TW` (Tailwind). The suffix chooses the version.

```bash
# shadcn CLI (preferred). Pick TS-TW for TypeScript + Tailwind projects, JS-CSS for plain ones
npx shadcn@latest add @react-bits/SplitText-TS-TW
# or without shadcn setup
npx jsrepo@latest add https://reactbits.dev/r/SplitText-TS-TW
```

For the `@react-bits/` shortcut, add the registry to `components.json`: `"registries": { "@react-bits": "https://reactbits.dev/r/{name}.json" }`. Using the full `https://reactbits.dev/r/<Name>-TS-TW` URL also works.

Good picks: **text** – `SplitText`, `BlurText`, `ShinyText`, `GradientText`, `RotatingText`, `TextType`, `ScrollReveal`, `DecryptedText`. **Backgrounds** – `Aurora`, `Silk`, `Iridescence`, `Particles`, `Waves`, `Threads`, `LiquidChrome`, `Galaxy`, `DotGrid`. **Components** – `Dock`, `MagicBento`, `CircularGallery`, `ProfileCard`, `SpotlightCard`, `TiltedCard`, `InfiniteMenu`, `FlowingMenu`. **Animations** – `ClickSpark`, `Magnet`, `SplashCursor`, `StarBorder`, `AnimatedContent`, `FadeContent`.

- Components are copied into the project as source (usually `src/components/`), so edit them freely to match the design.
- Install the dependencies the CLI lists (often `gsap`, `motion`, `three`/`@react-three/fiber` or `ogl`).
- Component names change over time. If one isn't found, check https://reactbits.dev for the current name.
- License is MIT + Commons Clause. They're fine to use in the user's websites, including commercial ones, but the components themselves can't be resold as a component pack.

## Plain HTML or a single-file artifact

If the page isn't a React/Next.js project (e.g. one HTML file or a claude.ai artifact), load the packages as ES modules from jsDelivr with exact versions:

```html
<script type="importmap">
{ "imports": {
  "react": "https://cdn.jsdelivr.net/npm/react@19.1.0/+esm",
  "react-dom/client": "https://cdn.jsdelivr.net/npm/react-dom@19.1.0/client/+esm",
  "three": "https://cdn.jsdelivr.net/npm/three@0.170.0/+esm",
  "@paper-design/shaders": "https://cdn.jsdelivr.net/npm/@paper-design/shaders@0.0.82/+esm",
  "lenis": "https://cdn.jsdelivr.net/npm/lenis@1.3.27/+esm",
  "gsap": "https://cdn.jsdelivr.net/npm/gsap@3.15.1/+esm",
  "gsap/ScrollTrigger": "https://cdn.jsdelivr.net/npm/gsap@3.15.1/ScrollTrigger/+esm"
} }
</script>
```

Or use classic script tags: `https://cdn.jsdelivr.net/npm/gsap@3.15.1/dist/gsap.min.js` + `.../dist/ScrollTrigger.min.js`, and `https://unpkg.com/lenis@1.3.27/dist/lenis.min.js` (+ `lenis.css`). Vanta is always loaded with script tags (see section 7). React Bits components need a React build step. In a single file, recreate the effect with GSAP or a Paper Shaders background instead.

For artifacts, inline the Liquid Glass files from `assets/liquid-glass/`, because external hosts other than the allowed CDNs are blocked. If a library won't load, use the CSS fallbacks below. Never ship a blank section.

## Always include (performance and accessibility)

1. **Reduced motion:** If `window.matchMedia('(prefers-reduced-motion: reduce)').matches`, pause or freeze the animations (`animate="off"` on ShaderGradient, `speed={0}` on Paper Shaders, `frameloop="demand"` on R3F, skip Vanta, wrap GSAP in `gsap.matchMedia()`). Lenis handles this itself.
2. **WebGL check / fallback:** If WebGL isn't available, show a static CSS gradient or image instead of the canvas.
3. **Mobile:** Cap pixel density (`dpr={[1, 1.5]}` / `pixelDensity={1}`). Lazy-load 3D sections below the fold (`next/dynamic` with `ssr: false`, or `React.lazy`).
4. **Next.js:** Every component that uses these libraries needs `'use client'`. Load heavy canvases with `dynamic(() => import(...), { ssr: false })`.
5. **Readability:** Keep text on effects readable. Add a subtle dark/light overlay or text shadow over gradients and glass, and check contrast.
6. **Credit:** Keep the MIT `LICENSE` file next to the copied Liquid Glass files.
