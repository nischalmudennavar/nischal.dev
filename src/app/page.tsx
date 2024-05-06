'use client'
import { cn } from '@/lib/utils'
import { useScramble } from 'use-scramble'
import Image from 'next/image'
import gif from '@/assets/skull2.gif'

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
    text: 'Crafting a digital masterpiece,\n one line at a time...',
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
    <main
      className={cn(
        'flex h-screen flex-col items-center justify-center bg-black  '
      )}
    >
      <div className='  main-content relative -top-10 flex h-fit flex-col items-center justify-between p-2 text-center lg:w-fit gap-4 sm:w-full sm:flex-wrap sm:text-center lg:flex-row lg:gap-0 lg:text-left'>
        <Image
          src={gif}
          alt='gif'
          width={125}
          height={125}
          className='relative mr-5 '
          
          priority={true}
        />
        <div className=' flex h-full flex-col justify-center p-2 lg:items-start sm:items-center  w-fit '>
          <p className=' mb-3 text-xl text-white opacity-75' ref={ref2} />
          <h1
            ref={ref}
            className={cn(
              ' mb-5 text-5xl text-violet-700 transition-all  duration-300 ease-in-out '
            )}
            onMouseOver={replay}
          />
          <p className='text-sm text-white text-wrap opacity-75 '  ref={ref3} />
        </div>
      </div>
    </main>
  )
}
