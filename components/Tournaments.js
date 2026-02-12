import { motion } from 'framer-motion'

export default function Tournaments() {
  return (
    <section id="tournaments">
      <h3 className="text-3xl font-display mb-6">Tournaments</h3>
      <div className="space-y-6">
        <motion.div className="p-6 border rounded-xl bg-gradient-to-br from-black/30 to-black/10 border-neonBlue/10" whileHover={{ scale: 1.01 }}>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold">Spring Arena Invitational</div>
              <div className="text-sm text-white/60">Open Bracket - Solo</div>
            </div>
            <div className="text-right">
              <div className="text-sm">Starts in</div>
              <div className="font-mono text-lg">02:14:23</div>
            </div>
          </div>
          <div className="mt-4">
            <button className="px-4 py-2 bg-neonRed text-black rounded-md">Register Now</button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
