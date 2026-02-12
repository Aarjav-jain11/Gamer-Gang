import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FeaturedGames from '@/components/FeaturedGames'
import Tournaments from '@/components/Tournaments'
import Community from '@/components/Community'
import Shop from '@/components/Shop'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="bg-bg min-h-screen text-white">
      <Navbar />
      <main>
        <Hero />
        <section className="container mx-auto px-6 py-20">
          <FeaturedGames />
        </section>
        <section className="container mx-auto px-6 py-20">
          <Tournaments />
        </section>
        <section className="container mx-auto px-6 py-20">
          <Community />
        </section>
        <section className="container mx-auto px-6 py-20">
          <Shop />
        </section>
      </main>
      <Footer />
    </div>
  )
}
