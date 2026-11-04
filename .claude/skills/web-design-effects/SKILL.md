---
name: web-design-effects
description: The user's default toolkit for any website, webpage, landing page, portfolio, web app UI, artifact page or visual web design. Use it every time the user asks to create, design, redesign or polish a web page, even if they don't mention effects. It covers four libraries to build in where they fit - react-three-fiber (3D scenes), ShaderGradient (animated gradient backgrounds), Liquid Glass JS (Apple-style glass buttons and panels) and Paper Shaders Liquid Metal (liquid-metal logos) - with install commands, working code and performance fallbacks.
---

# Web Design Effects

The user wants these four libraries used whenever they ask for a website or web design. Use them by default, picking the ones that suit the page. A typical page:

- **Hero background:** ShaderGradient (or a react-three-fiber 3D scene)
- **Logo / brand mark:** Liquid Metal (Paper Shaders)
- **Navigation, buttons, cards:** Liquid Glass
- **Product or showcase section:** react-three-fiber

Don't put all four on every screen. Use one main eye-catching effect per screen so the page stays fast and readable. Tell the user which effects you used and where.

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

## Plain HTML or a single-file artifact

If the page isn't a React/Next.js project (e.g. one HTML file or a claude.ai artifact), load the packages as ES modules from jsDelivr with exact versions:

```html
<script type="importmap">
{ "imports": {
  "react": "https://cdn.jsdelivr.net/npm/react@19.1.0/+esm",
  "react-dom/client": "https://cdn.jsdelivr.net/npm/react-dom@19.1.0/client/+esm",
  "three": "https://cdn.jsdelivr.net/npm/three@0.170.0/+esm",
  "@paper-design/shaders": "https://cdn.jsdelivr.net/npm/@paper-design/shaders@0.0.82/+esm"
} }
</script>
```

For artifacts, inline the Liquid Glass files from `assets/liquid-glass/`, because external hosts other than the allowed CDNs are blocked. If a library won't load, use the CSS fallbacks below. Never ship a blank section.

## Always include (performance and accessibility)

1. **Reduced motion:** If `window.matchMedia('(prefers-reduced-motion: reduce)').matches`, pause or freeze the animations (`animate="off"` on ShaderGradient, `speed={0}` on Paper Shaders, `frameloop="demand"` on R3F).
2. **WebGL check / fallback:** If WebGL isn't available, show a static CSS gradient or image instead of the canvas.
3. **Mobile:** Cap pixel density (`dpr={[1, 1.5]}` / `pixelDensity={1}`). Lazy-load 3D sections below the fold (`next/dynamic` with `ssr: false`, or `React.lazy`).
4. **Next.js:** Every component that uses these libraries needs `'use client'`. Load heavy canvases with `dynamic(() => import(...), { ssr: false })`.
5. **Readability:** Keep text on effects readable. Add a subtle dark/light overlay or text shadow over gradients and glass, and check contrast.
6. **Credit:** Keep the MIT `LICENSE` file next to the copied Liquid Glass files.
