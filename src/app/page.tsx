import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/sections/Hero"
import { Mission } from "@/components/sections/Mission"
import { Vision } from "@/components/sections/Vision"
import { Roadmap } from "@/components/sections/Roadmap"
import { News } from "@/components/sections/News"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="border-t border-neutral-900">
          <Mission />
        </div>
        <div className="border-t border-neutral-900">
          <Vision />
        </div>
        <div className="border-t border-neutral-900">
          <Roadmap />
        </div>
        <div className="border-t border-neutral-900">
          <News />
        </div>
      </main>
      <Footer />
    </>
  )
}
