import { Hero } from '@/components/sections/Hero'
import { StatsBar } from '@/components/sections/StatsBar'
import { UseCases } from '@/components/sections/UseCases'
import { ModulesGrid } from '@/components/sections/ModulesGrid'
import { TechStack } from '@/components/sections/TechStack'
import { Security } from '@/components/sections/Security'
import { Roadmap } from '@/components/sections/Roadmap'
import { Waitlist } from '@/components/sections/Waitlist'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <StatsBar />
      <UseCases />
      <ModulesGrid />
      <TechStack />
      <Security />
      <Roadmap />
      <Waitlist />
      <Footer />
    </main>
  )
}
