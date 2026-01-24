import { Hero } from '@/components/sections/Hero'
import { UseCases } from '@/components/sections/UseCases'
import { ModulesGrid } from '@/components/sections/ModulesGrid'
import { Security } from '@/components/sections/Security'
import { Roadmap } from '@/components/sections/Roadmap'
import { Waitlist } from '@/components/sections/Waitlist'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <UseCases />
      <ModulesGrid />
      <Security />
      <Roadmap />
      <Waitlist />
      <Footer />
    </main>
  )
}
