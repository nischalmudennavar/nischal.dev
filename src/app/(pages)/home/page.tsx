'use client'
import SpotifyWidget from '@/components/SpotifyWidget'
import GridContainer from '@/components/ui/GridContainer'

import './home.css'

export default function Home() {
  return (
    <GridContainer className={'relative place-items-center  '}>
      {/* <h1>Home</h1>
      <SpotifyWidget showWidget /> */}

      <div className='hero-section hero-border relative col-span-12 flex h-[calc(100vh-80px)] w-full flex-col items-start justify-end  gap-10 rounded-t-3xl border-[0.5px] border-b-0 border-primary'>
        <div className='hero-inner'></div>
        <h1 className='col-span-12 flex flex-col items-start justify-start gap-0 font-black uppercase sm:text-[120px] md:text-[180px] xl:text-[272px] '>
          <span className='fill-black stroke-white p-0  leading-[80%]'>
            {' '}
            Nischal
          </span>
          <span className='stroke-whit fill-black p-0 leading-[80%]'>
            {' '}
            Mudennavar
          </span>
        </h1>
      </div>
    </GridContainer>
  )
}
