import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import AuthModal from '@/components/AuthModal'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [lastY, setLastY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY
      setHidden(y > lastY && y > 100)
      setLastY(y)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastY])

  return (
    <header className={`fixed top-0 left-0 right-0 z-10 transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="backdrop-blur-md bg-black/40 border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/logo.svg" alt="Gamer Gang" className="h-8 w-8" />
            <h1 className="font-display text-lg tracking-wider">Gamer Gang</h1>
          </div>
          <nav className="hidden md:flex gap-6 items-center text-sm text-white/80">
            <a href="#games" className="hover:text-white">Games</a>
            <a href="#tournaments" className="hover:text-white">Tournaments</a>
            <a href="#community" className="hover:text-white">Community</a>
            <AuthModal discordAuthUrl="https://discord.com/oauth2/authorize?client_id=1471350778634698823&response_type=code&redirect_uri=https%3A%2F%2Fredesigned-space-spoon-jj7745qpx6jp3p47j-3000.app.github.dev%2Fapi%2Fauth%2Fcallback%2Fdiscord&scope=email+identify" />
          </nav>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(true)} aria-label="Open menu" className="p-2">
              <Menu />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50">
            {/* overlay (blurred) placed before menu so menu stays clickable */}
            <div onClick={() => setMenuOpen(false)} className="absolute inset-0 bg-black/30 backdrop-blur-md backdrop-brightness-90 z-40" />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className="absolute right-0 top-0 h-full w-80 bg-[#07060a] p-6 shadow-2xl z-50">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <img src="/logo.svg" alt="logo" className="h-8 w-8" />
                  <div className="font-semibold">Gamer Gang</div>
                </div>
                <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="p-2">
                  <X />
                </button>
              </div>
              <nav className="flex flex-col gap-4">
                <a href="#games" onClick={() => setMenuOpen(false)} className="py-2">Games</a>
                <a href="#tournaments" onClick={() => setMenuOpen(false)} className="py-2">Tournaments</a>
                <a href="#community" onClick={() => setMenuOpen(false)} className="py-2">Community</a>
                <AuthModal discordAuthUrl="https://discord.com/oauth2/authorize?client_id=1471350778634698823&response_type=code&redirect_uri=https%3A%2F%2Fredesigned-space-spoon-jj7745qpx6jp3p47j-3000.app.github.dev%2Fapi%2Fauth%2Fcallback%2Fdiscord&scope=email+identify" />
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
