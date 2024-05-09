import { getNowPlaying } from '@/app/lib/getNowPlayingFromSpotify'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

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

const SpotifyWidget: React.FC = () => {
  const [songData, setSongData] = useState<Data>()
  useEffect(() => {
    const fetchNowPlaying = async () => {
      const data = await getNowPlaying()
      setSongData(data)
    }
    fetchNowPlaying()
  }, [])

  return (
    <div className='absolute right-0 top-10 w-72 border border-white p-2 text-white rounded-md'>
      {/* // eslint-disable-next-line jsx-a11y/alt-text */}
      {songData ? (
        <Image
          src={songData?.albumImageUrl.toString()}
          width={75}
          height={75}
          alt='preview'
          className="rounded-sm"
        />
      ) : "Nischal isnt listening to any songs rn"}
    </div>
  ) // Render token or whatever you like
}

export default SpotifyWidget
