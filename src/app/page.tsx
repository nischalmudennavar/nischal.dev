'use client'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { useScramble } from 'use-scramble'

export default function Home() {
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
    speed: 0.4,
    tick: 2,
    step: 5,
    scramble: 21,
    seed: 2,
    chance: 0.89,
    overdrive: false,
    overflow: false,
  })
   const { ref: ref3 } = useScramble({
     text: 'the portfolio is under construction  ',
     range: [65, 125],
     speed: 0.3,
     tick: 2,
     step: 5,
     scramble: 21,
     seed: 2,
     chance: 0.89,
     overdrive: false,
     overflow: false,
   })



  return (
    <main
      className={cn(
        'flex h-screen flex-col items-center justify-center bg-black p-24'
      )}
    >
      <div className='main-content relative -top-10 text-center'>
        <p className='text-4xl text-white opacity-80' ref={ref2} />
        <h1
          ref={ref}
          className={cn(
            'text-[72px] ',
            ' mb-3 text-violet-700 transition-all duration-300  ease-in-out '
          )}
          onMouseOver={replay}
          // onMouseEnter={() => setIsHovered(true)}
          // onMouseLeave={() => setIsHovered(false)}
          // style={{
          //   fontVariationSettings: isHovered ? "'wght' 700" : "'wght' 400",
          // }}
        />
        <p className='text-xl text-white' ref={ref3}/>
      </div>
    </main>
  )
}
