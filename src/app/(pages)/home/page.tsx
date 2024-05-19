'use client'
import SpotifyWidget from '@/components/SpotifyWidget'
import GridContainer from '@/components/ui/GridContainer'

import { useSession } from 'next-auth/react'

export default function Home() {
  const session = useSession()

  return (
    <GridContainer className={'relative place-items-center '}>
      <h1>Home</h1>
      {/* <SpotifyWidget showWidget /> */}
    </GridContainer>
  )
}
