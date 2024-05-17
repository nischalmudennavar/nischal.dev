'use client'
import { useScramble } from 'use-scramble'
import Image from 'next/image'
import gif from '@/assets/skull2.gif'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import GridContainer from '@/components/ui/GridContainer'
import SpotifyWidget from '@/components/SpotifyWidget/spotify-widget'
import DarkModeToggle from '@/components/DarkModeToggle'
import { useSession } from 'next-auth/react'

export default function Home() {

  const session = useSession()

  return (
    <GridContainer className={'  relative place-items-center  '}>
      <h1 className='col-start-5'>{JSON.stringify(session)}</h1>
      {/* <h1>{elapsedTime}</h1> */}
      
    </GridContainer>
  )
}
