import { useState } from 'react'

export default function AuthModal() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setOpen(true)} className="px-4 py-2 bg-neonBlue text-black rounded">Login</button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-[#0b0b0f] rounded-xl p-6 w-80">
            <h4 className="font-semibold mb-4">Sign in</h4>
            <button className="w-full px-4 py-2 bg-white/5 rounded mb-2">Continue with Discord</button>
            <button onClick={() => setOpen(false)} className="mt-2 text-sm text-white/60">Close</button>
          </div>
        </div>
      )}
    </div>
  )
}
