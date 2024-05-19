'use client'
import { getNowPlaying } from '@/lib/getNowPlayingFromSpotify'
import { Music2Icon } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import spotifyLogo from '@/assets/images/spotify-2.svg'
import Link from 'next/link'

type Data = {
  albumImageUrl: string
  artist: string
  isPlaying: boolean
  songUrl: string
  title: string
  timePlayed: number
  timeTotal: number
  artistUrl: string
}
type Props = {
  showWidget: boolean
}

const SpotifyWidget: React.FC<Props> = (props) => {
  const [songData, setSongData] = useState<Data>()
  useEffect(() => {
    const fetchNowPlaying = async () => {
      const data = await getNowPlaying()
      console.log(data)
      setSongData(data)
    }
    fetchNowPlaying()
  }, [])

  return (
    <>
      {props.showWidget && (
        <div className='  absolute right-24 top-20 z-50 h-fit  w-fit overflow-hidden rounded-xl border  border-secondary transition-all duration-300 hover:-translate-y-2 hover:cursor-pointer'>
          {/* // eslint-disable-next-line jsx-a11y/alt-text */}
          {songData ? (
            <div className='flex h-full w-full items-start justify-start'>
              <Image
                src={songData?.albumImageUrl.toString()}
                width={75}
                height={75}
                alt='preview'
                className=' - relative  rounded-r-none border-none'
              />
              <div className='song-details flex h-[75px] w-[220px]  flex-col items-start justify-center gap-1  overflow-x-hidden p-3  '>
                <div className='artist-container w-[80%] overflow-x-hidden text-ellipsis'>
                  <h1 className='  text-ellipsis whitespace-nowrap  text-nowrap  truncate  text-[15px] text-primary'>
                    {songData.title}
                  </h1>
                </div>

                <h3 className='overflow-hidden text-[12px] font-bold text-white/30'>
                 
                  <Link
                    href={songData.artistUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {songData.artist}
                  </Link>
                </h3>

                <Image
                  src={spotifyLogo}
                  width={20}
                  height={20}
                  alt='preview'
                  className='grayscale-100 absolute right-2 top-2  animate-pulse rounded filter transition duration-1000'
                />
              </div>
            </div>
          ) : (
            <Image
              src={spotifyLogo}
              width={45}
              height={45}
              alt='preview'
              className='grayscale-100  rounded filter transition duration-1000 animate-in'
            />
          )}
        </div>
      )}
    </>
  ) // Render token or whatever you like
}

export default SpotifyWidget
