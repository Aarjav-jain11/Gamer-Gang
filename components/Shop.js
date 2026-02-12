import { motion } from 'framer-motion'

const gear = [
  { id: 1, name: 'GG Pro Headset', price: '$129' },
  { id: 2, name: 'GG Mechanical', price: '$149' }
]

export default function Shop() {
  return (
    <section id="shop">
      <h3 className="text-3xl font-display mb-6">Shop</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {gear.map((g) => (
          <motion.div whileHover={{ rotateX: 2, scale: 1.02 }} key={g.id} className="p-4 rounded-xl bg-gradient-to-br from-white/2 to-white/1 border border-white/5">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{g.name}</div>
                <div className="text-sm text-white/60">{g.price}</div>
              </div>
              <button className="px-4 py-2 bg-neonBlue text-black rounded-md">Add</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
