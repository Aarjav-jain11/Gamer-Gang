import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

function Typing({ lines = [] }) {
  const [text, setText] = useState('')
  useEffect(() => {
    let idx = 0
    let line = 0
    let timeout
    function tick() {
      if (line >= lines.length) return
      const full = lines[line]
      setText(full.slice(0, idx))
      if (idx++ <= full.length) timeout = setTimeout(tick, 40)
      else {
        idx = 0
        line++
        timeout = setTimeout(tick, 800)
      }
    }
    tick()
    return () => clearTimeout(timeout)
  }, [lines])
  return <span className="text-neonBlue">{text}</span>
}

function initParticles(canvas) {
  if (!canvas) return () => {}
  const ctx = canvas.getContext('2d')
  let w = (canvas.width = canvas.clientWidth)
  let h = (canvas.height = canvas.clientHeight)
  const particles = []
  const count = Math.max(40, Math.floor((w * h) / 15000))

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 1 + Math.random() * 2,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      hue: 190 + Math.random() * 40
    })
  }

  function resize() {
    w = canvas.width = canvas.clientWidth
    h = canvas.height = canvas.clientHeight
  }

  function draw() {
    ctx.clearRect(0, 0, w, h)
    for (const p of particles) {
      p.x += p.vx
      p.y += p.vy
      if (p.x < 0) p.x = w
      if (p.x > w) p.x = 0
      if (p.y < 0) p.y = h
      if (p.y > h) p.y = 0
      ctx.beginPath()
      ctx.fillStyle = `hsla(${p.hue},100%,60%,0.075)`
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  gsap.ticker.add(draw)
  window.addEventListener('resize', resize)

  return () => {
    gsap.ticker.remove(draw)
    window.removeEventListener('resize', resize)
  }
}

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const cleanup = initParticles(canvasRef.current)
    return () => cleanup()
  }, [])

  return (
    <section className="relative h-screen overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#0b0b0f,_#09070a)]"></div>
      <canvas ref={canvasRef} id="particles" className="absolute inset-0 w-full h-full" />
      <div className="container mx-auto px-6 z-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
          <h2 className="font-display text-5xl md:text-7xl leading-tight">LEVEL UP YOUR GAMING EXPERIENCE</h2>
          <p className="mt-6 text-lg text-white/80">Welcome to the arena — <Typing lines={["Pro matches, ladders, and exclusive events.", "Join the community and dominate the battlefield."]} /></p>
          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-neonBlue text-black rounded-md font-semibold hover:shadow-[0_0_20px_rgba(0,179,255,0.4)] transition-shadow">Play Now</button>
            <a href="https://discord.gg/Ur53mT9vxq" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-white/10 rounded-md hover:bg-white/5 inline-flex items-center">Join Community</a>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-6 right-6 z-30 opacity-30">
        <svg width="160" height="160" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="#00b3ff" strokeWidth="0.6" fill="none" />
        </svg>
      </div>
    </section>
  )
}
