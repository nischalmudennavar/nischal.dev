import { getNowPlaying } from '@/app/lib/getNowPlayingFromSpotify'
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

const SpotifyWidget:React.FC = () => {
  const [songData, setSongData] = useState<Data>()
  useEffect(() => {
    const fetchNowPlaying = async () => {
      const data = await getNowPlaying()
      setSongData(data)
    }
    fetchNowPlaying()
  }, [])

  return (
    <div className='h-8 w-24 border border-white text-white p-2 absolute right-0'>
      {songData?.title}
    </div>
  ) // Render token or whatever you like
}

export default SpotifyWidget
