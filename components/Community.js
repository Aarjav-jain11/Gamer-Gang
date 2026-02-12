import { motion } from 'framer-motion'

export default function Community() {
  return (
    <section id="community">
      <h3 className="text-3xl font-display mb-6">Community & Stats</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div whileHover={{ y: -6 }} className="p-6 rounded-xl bg-gradient-to-br from-white/2 to-white/1 border border-white/5">
          <div className="text-4xl font-bold">12.3k</div>
          <div className="text-sm text-white/60">Players Online</div>
        </motion.div>
        <motion.div whileHover={{ y: -6 }} className="p-6 rounded-xl bg-gradient-to-br from-white/2 to-white/1 border border-white/5">
          <div className="text-4xl font-bold">456k</div>
          <div className="text-sm text-white/60">Matches Played</div>
        </motion.div>
        <motion.div whileHover={{ y: -6 }} className="p-6 rounded-xl bg-gradient-to-br from-white/2 to-white/1 border border-white/5">
          <div className="text-4xl font-bold">82k</div>
          <div className="text-sm text-white/60">Wins</div>
        </motion.div>
      </div>
      <div className="mt-8">
        <button className="px-5 py-3 bg-neonBlue text-black rounded-md">Connect Discord</button>
      </div>
    </section>
  )
}
