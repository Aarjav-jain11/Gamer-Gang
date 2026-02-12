import { motion } from 'framer-motion'

const games = [
  { id: 1, title: 'Neon Fury', genre: 'FPS' },
  { id: 2, title: 'Cyber Drift', genre: 'Racer' },
  { id: 3, title: 'Apex Warlords', genre: 'MOBA' },
  { id: 4, title: 'Shadow Isles', genre: 'RPG' }
]

export default function FeaturedGames() {
  return (
    <section id="games">
      <h3 className="text-3xl font-display mb-6">Featured Games</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {games.map((g, i) => (
          <motion.div whileHover={{ scale: 1.03 }} key={g.id} className="relative bg-gradient-to-br from-white/2 to-white/1 p-4 rounded-xl border border-white/5 hover:shadow-[0_10px_30px_rgba(0,179,255,0.06)]">
            <div className="aspect-video bg-gradient-to-r from-purpleDeep to-black rounded-lg overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm text-white/60">Thumbnail</div>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div>
                <div className="font-semibold">{g.title}</div>
                <div className="text-xs text-white/60">{g.genre}</div>
              </div>
              <button className="px-3 py-1 bg-neonBlue/10 text-neonBlue rounded">Play</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
