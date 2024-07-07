'use client'
import { OpeningMessage } from '@/components/OpeningMessage/opening-message'
import SpotifyWidget from '@/components/SpotifyWidget'
import GridContainer from '@/components/ui/GridContainer'

import { useSession } from 'next-auth/react'

export default function Home() {
  const session = useSession()

  const items = ['item', 'item23', 'item4', 'item5', 'item6']

  return (
    <GridContainer className={'relative place-items-center '}>
      <OpeningMessage />
      {/* <SpotifyWidget showWidget /> */}
      <div className='hero-section hero-border relative col-span-12 flex h-[calc(100vh-80px)] w-full flex-col items-start justify-end  gap-10 rounded-t-3xl  border-primary'>
        <h1 className='col-span-12 flex flex-col items-start justify-start gap-0 font-black uppercase sm:text-[120px] md:text-[180px] xl:text-[272px] '>
          <span className='fill-black stroke-white p-0  leading-[80%]'>
            {' '}
            Nischal
          </span>
          <span className='fill-black stroke-white p-0 leading-[80%]'>
            {' '}
            Mudennavar
          </span>
        </h1>
      </div>
    </GridContainer>
  )
}
