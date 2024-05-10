import { useScramble } from 'use-scramble'
import Image from 'next/image'
import gif from '@/assets/gifs/giphy.gif'
import { useState, useEffect } from 'react'
import Link from 'next/link'

import DarkModeToggle from '@/components/DarkModeToggle'
import { useSession } from 'next-auth/react'

const HeroSection = () => {
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
    tick: 3,
    step: 10,
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
    text: 'Still working on my portfolio :)  ',
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
    <>
      <div className=' relative -top-10 col-span-12   flex  h-fit select-none  flex-col items-center justify-center   p-2 text-center selection:select-none sm:w-full sm:flex-wrap  sm:text-center  xl:w-fit xl:flex-col xl:gap-0 xl:text-left '>
        <div className=' flex h-full w-fit flex-col justify-center p-2 sm:items-center  xl:items-center '>
          <p className='  text-xl  opacity-75' ref={ref2} />
          <Link
            href='https://www.linkedin.com/in/nischal-mudennavar/'
            
            className=' flex items-center justify-center text-[46px] text-yellow-400 transition-all duration-500 ease-in-out  hover:font-bold hover:tracking-widest md:text-[76px] xl:text-[96px]'
          >
            <h1 ref={ref} className={' '} />
            <span className=" animate-pulse-slow ">_</span>
          </Link>
          {/* <Authbutton  /> */}
          <div className='flex flex-col items-center justify-between '>
            {' '}
            <p className='text-wrap text-sm  opacity-75 ' ref={ref3} />
            <Image
              src={gif}
              alt='gif'
              width={105}
              height={105}
              className='   mt-6 select-none rounded-full '
              priority={true}
              unoptimized
            />
          </div>
        </div>
      </div>
      <DarkModeToggle />
      <div className=' text-md absolute bottom-10 flex w-[80%] flex-col  gap-2  text-wrap text-center font-bold   duration-500 '>
        <span className='text-2xl text-yellow-400'>
          {' '}
          {elapsedTime} Days
          <br />
        </span>

        <p className=''>Since I started working on this site 🛠️</p>
      </div>
    </>
  )
}

export default HeroSection
