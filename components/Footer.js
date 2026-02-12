export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-20 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="logo" className="h-8 w-8" />
          <div>
            <div className="font-semibold">Gamer Gang</div>
            <div className="text-xs text-white/60">© {new Date().getFullYear()}</div>
          </div>
        </div>
        <div className="flex gap-4">
          <a className="p-2 rounded hover:shadow-[0_0_14px_rgba(0,179,255,0.12)]">Twitter</a>
          <a className="p-2 rounded hover:shadow-[0_0_14px_rgba(255,31,106,0.12)]">Discord</a>
        </div>
      </div>
    </footer>
  )
}
