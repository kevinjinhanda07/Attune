import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import Lenis from 'lenis'
import { createRoot } from 'react-dom/client'
import { LiquidMetal } from '@paper-design/shaders-react'
import data from './data.json'

gsap.registerPlugin(ScrollTrigger, SplitText)
document.documentElement.classList.add('js')

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const money = (n) => '$' + n.toLocaleString('en-US')

/* ---------- Liquid metal lipstick (Paper Shaders) ---------- */
const lipstick = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 1000">
  <path d="M128 70 L272 20 L272 400 L128 400 Z" fill="#000"/>
  <rect x="108" y="392" width="184" height="118" rx="10" fill="#000"/>
  <rect x="78" y="520" width="244" height="460" rx="16" fill="#000"/>
</svg>`
const lipUrl = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(lipstick)

function hasWebGL() {
  try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')) } catch { return false }
}
const metalEl = document.getElementById('metal')
if (metalEl && hasWebGL()) {
  createRoot(metalEl).render(
    <LiquidMetal
      image={lipUrl}
      colorBack="#0b0b0b"
      colorTint="#ffffff"
      repetition={2.2}
      softness={0.12}
      shiftRed={0.35}
      shiftBlue={0.3}
      distortion={0.08}
      contour={0.45}
      angle={70}
      speed={reduce ? 0 : 0.8}
      scale={0.82}
      fit="contain"
      style={{ width: '100%', height: '100%' }}
    />
  )
} else if (metalEl) {
  metalEl.innerHTML = lipstick.replaceAll('#000', '#d9d9d9')
}

/* ---------- Countdown ---------- */
const doors = new Date(2026, 10, 27, 6, 0, 0)
const clock = document.getElementById('clock')
const pad = (n) => String(n).padStart(2, '0')
function tick() {
  let ms = doors - new Date()
  if (ms <= 0) {
    clock.innerHTML = '<div><span>Open</span><small>now</small></div>'
    document.getElementById('clock-note').textContent = 'The sale is on. Doors close Monday at midnight.'
    return false
  }
  const d = Math.floor(ms / 864e5); ms -= d * 864e5
  const h = Math.floor(ms / 36e5); ms -= h * 36e5
  const m = Math.floor(ms / 6e4); ms -= m * 6e4
  const s = Math.floor(ms / 1e3)
  clock.querySelector('[data-u=d]').textContent = d
  clock.querySelector('[data-u=h]').textContent = pad(h)
  clock.querySelector('[data-u=m]').textContent = pad(m)
  clock.querySelector('[data-u=s]').textContent = pad(s)
  return true
}
if (tick()) setInterval(tick, 1000)

/* ---------- Haul builder ---------- */
const items = data.aisles.flatMap((a) => a.items)
const byId = Object.fromEntries(items.map((i) => [i.id, i]))
const picker = document.getElementById('picker')
const out = {
  count: document.getElementById('t-count'),
  total: document.getElementById('t-total'),
  saved: document.getElementById('t-saved'),
  points: document.getElementById('t-points'),
  fill: document.getElementById('t-fill'),
  gift: document.getElementById('t-gift'),
}
const GIFT = 75
function bump(el) {
  if (!reduce) gsap.fromTo(el, { y: -8, opacity: 0.4 }, { y: 0, opacity: 1, duration: 0.35, ease: 'power3.out' })
}
function update() {
  const chosen = [...picker.querySelectorAll('input:checked')].map((i) => byId[i.value])
  const total = chosen.reduce((s, i) => s + i.now, 0)
  const was = chosen.reduce((s, i) => s + i.was, 0)
  out.count.textContent = chosen.length
  out.total.textContent = money(total)
  out.saved.textContent = money(was - total)
  out.points.textContent = (total * 2).toLocaleString('en-US')
  out.fill.style.width = Math.min(100, (total / GIFT) * 100) + '%'
  out.gift.textContent = total >= GIFT
    ? 'The free six-piece mini set is in your bag.'
    : `${money(GIFT - total)} to go for the free mini set.`
  ;[out.total, out.saved].forEach(bump)
}
picker.addEventListener('change', update)
document.getElementById('checkout').addEventListener('click', (e) => {
  e.preventDefault()
  out.gift.textContent = 'This is a design concept, so checkout is not connected.'
})
update()

/* ---------- Smooth scroll (Lenis driven by GSAP) ---------- */
let lenis
if (!reduce) {
  lenis = new Lenis({ anchors: { offset: -80 } })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((t) => lenis.raf(t * 1000))
  gsap.ticker.lagSmoothing(0)
}

/* ---------- Motion ---------- */
const curtain = document.querySelector('.curtain')
if (reduce) {
  curtain.remove()
} else {
  curtain.innerHTML = '<i></i>'.repeat(12)
  gsap.to(curtain.children, {
    yPercent: -100, duration: 0.9, ease: 'power4.inOut',
    stagger: { each: 0.045, from: 'start' }, delay: 0.15,
    onComplete: () => curtain.remove(),
  })
}

const mm = gsap.matchMedia()
mm.add('(prefers-reduced-motion: no-preference)', () => {
  // headline: letters rise out of the stripes
  const split = SplitText.create('#h1', { type: 'words,chars', mask: 'words' })
  gsap.from(split.chars, { yPercent: 110, duration: 1, ease: 'power4.out', stagger: 0.025, delay: 0.55 })
  gsap.from('.lede, .hero-actions', { y: 24, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08, delay: 1.0 })
  gsap.from('.hero-metal', { opacity: 0, scale: 0.94, duration: 1.4, ease: 'power3.out', delay: 0.7 })

  // the lipstick drifts up as you scroll away
  gsap.to('.hero-metal', {
    yPercent: -12, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
  })

  // section entrances: heading, then text, then the rest
  gsap.utils.toArray('section:not(.hero)').forEach((sec) => {
    const parts = sec.querySelectorAll('.rise')
    if (!parts.length) return
    gsap.from(parts, {
      y: 28, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08,
      scrollTrigger: { trigger: sec, start: 'top 78%', once: true },
    })
  })

  // deal rows slide in aisle by aisle
  gsap.utils.toArray('.aisle').forEach((a) => {
    gsap.from(a.querySelectorAll('.row'), {
      x: 40, opacity: 0, duration: 0.6, ease: 'power3.out', stagger: 0.06,
      scrollTrigger: { trigger: a, start: 'top 82%', once: true },
    })
    gsap.from(a.querySelector('.aisle-name'), {
      y: 24, opacity: 0, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: a, start: 'top 82%', once: true },
    })
  })

  // the members queue fills in like a line forming
  gsap.from('.queue .who', {
    xPercent: -8, duration: 1, ease: 'power3.out', stagger: 0.1,
    scrollTrigger: { trigger: '.queue', start: 'top 75%', once: true },
  })

  // footer word
  gsap.from('.foot-word', {
    yPercent: 40, opacity: 0, duration: 1.1, ease: 'power4.out',
    scrollTrigger: { trigger: '.foot', start: 'top 85%', once: true },
  })
})

// gift sets scroll sideways on wide screens
mm.add('(prefers-reduced-motion: no-preference) and (min-width: 901px)', () => {
  const track = document.getElementById('sets-track')
  const dist = () => Math.max(0, track.scrollWidth - document.documentElement.clientWidth + 80)
  gsap.to(track, {
    x: () => -dist(), ease: 'none',
    scrollTrigger: { trigger: '.sets', start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 0.6, invalidateOnRefresh: true },
  })
  gsap.from('.set-art svg', {
    scale: 1.12, ease: 'none',
    scrollTrigger: { trigger: '.sets', start: 'top bottom', end: () => '+=' + (dist() + innerHeight), scrub: true },
  })
})

window.addEventListener('load', () => ScrollTrigger.refresh())
