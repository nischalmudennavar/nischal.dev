'use client'

import GridContainer from '@/components/ui/GridContainer'
import HeroSection from '@/components/HeroSection'
import DarkModeToggle from '@/components/DarkModeToggle'

export default function Home() {
  return (
    <GridContainer className={'  relative place-items-center  '}>
      <DarkModeToggle />
      <HeroSection />
    </GridContainer>
  )
}
