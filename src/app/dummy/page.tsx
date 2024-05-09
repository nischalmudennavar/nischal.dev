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
  const [elapsedTime, setElapsedTime] = useState('')
  const session = useSession()

  useEffect(() => {
    const startDate: Date = new Date('2024-05-04')
    const currentDate: Date = new Date()

    const elapsedMilliseconds = currentDate.getTime() - startDate.getTime()

    const millisecondsInADay = 1000 * 60 * 60 * 24
    const daysElapsed: Number = Math.floor(
      elapsedMilliseconds / millisecondsInADay
    )

    setElapsedTime(daysElapsed.toString())
  }, [])

  const { ref, replay } = useScramble({
    text: 'nischal.dev',
    speed: 1,
    tick: 2,
    step: 5,
    scramble: 21,
    seed: 2,
    chance: 0.89,
    overdrive: false,
    overflow: false,
  })

  const { ref: ref2 } = useScramble({
    text: 'welcome to',
    range: [65, 125],
    speed: 1,
    tick: 2,
    step: 5,
    scramble: 21,
    seed: 2,
    chance: 0.89,
    overdrive: false,
    overflow: false,
  })
  const { ref: ref3 } = useScramble({
    text: 'Building one-of-a-kind creative portfolio... ',
    range: [65, 125],
    speed: 1.5,
    tick: 2,
    step: 5,
    scramble: 21,
    seed: 2,
    chance: 0.89,
    overdrive: false,
    overflow: false,
  })

  return (
    <GridContainer className={'  relative place-items-center  '}>
      <h1 className='col-start-5'>{JSON.stringify(session)}</h1>
      <h1>{elapsedTime}</h1>
      
    </GridContainer>
  )
}
