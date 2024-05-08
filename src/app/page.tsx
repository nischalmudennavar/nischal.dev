'use client'
import { cn } from '@/lib/utils'
import { useScramble } from 'use-scramble'
import Image from 'next/image'
import gif from '@/assets/skull2.gif'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import GridContainer from '@/components/GridContainer'

export default function Home() {
  const [elapsedTime, setElapsedTime] = useState('')

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
    <GridContainer
      className={
        '  bg-black place-items-center '
      }
    >
      <div className='  flex-content -top-20 relative  col-span-12  items-center flex h-fit flex-col  justify-center gap-1 p-2 text-center sm:w-full sm:flex-wrap  sm:text-center  xl:w-fit xl:flex-row xl:gap-0 xl:text-left '>
        <Image
          src={gif}
          alt='gif'
          width={155}
          height={155}
          className='relative mr-5 '
          priority={true}
          unoptimized
        />
        <div className=' flex h-full w-fit flex-col justify-center p-2 sm:items-center  xl:items-start '>
          <p className=' mb-3 text-xl text-white opacity-75' ref={ref2} />
          <Link href='https://www.linkedin.com/in/nischal-mudennavar/'>
            <h1
              ref={ref}
              className={cn(
                ' mb-5 text-5xl text-violet-700 transition-all  duration-300 ease-in-out '
              )}
            />
          </Link>
          <div className='flex'>
            {' '}
            <p
              className='text-wrap text-sm text-white opacity-75 '
              ref={ref3}
            />
            <p className='animate-pulse text-wrap text-sm font-bold  text-white  opacity-75 duration-500  '>
              |{' '}
            </p>
          </div>
        </div>
      </div>
      <div className=' text-md absolute bottom-10 flex w-[80%] flex-col  gap-2  text-wrap text-center font-bold text-white opacity-75 duration-500 '>
        <span className='text-2xl text-yellow-400'>
          {' '}
          {elapsedTime} Days
          <br />
        </span>

        <p className='text-white'>Since I started working on this site 🛠️</p>
      </div>
    </GridContainer>
  )
}
