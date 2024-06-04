import Image from 'next/image'
import Link from 'next/link'
import notfoundgif from '../assets/404.gif'

export default function NotFound() {
  return ( 
    <main
      className={'flex h-screen flex-col items-center justify-center bg-black '}
    >
      <div className='relative -top-20 flex flex-col items-center justify-center'>
        <Image
          src={notfoundgif}
          className='selection:none pointer-events-none select-none'
          alt='404'
          height={120}
          unoptimized
          priority
        />
        <h2 className='text-white'>
          Page not found in{' '}
          <Link className='hover:text-violet-700 hover:opacity-100' href='/'>
            nischal.dev
          </Link>
        </h2>
      </div>
    </main>
  )
}
