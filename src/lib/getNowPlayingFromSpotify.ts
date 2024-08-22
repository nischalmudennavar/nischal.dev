import { getAccessToken } from './generateSpotifyAccessToken'

//Uses the access token to fetch the currently playing song

export const getNowPlaying = async () => {
  try {
    //Generating an access token
    const { access_token } = await getAccessToken(
      '148a1a0d43fb40afb01c0d83a8172f52',
      '7f5e59507f674fa19b1235bc696314f9',
      'AQDegS98QEtGnAZMotYEjs_i-WAYzDl-TedVY-FXn9xNDjOqm2eo0rYuWh22Sg3wopUDvvU-vzcLgRura5s4fidQeRcylk6dVUEw8HDzx0Wqe1JnuR839U4T2nXax8NM0Ik'
    )

    //Fetching the response
    const response = await fetch(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    )

    if (response.status > 400) {
      throw new Error('Unable to Fetch Song')
    } else if (response.status === 204) {
      //The response was fetched but there was no content
      throw new Error('Currently Not Playing')
    }

    //Extracting the required data from the response into seperate variables
    const song = await response.json()
    const albumImageUrl = song.item.album.images[0].url
    const artist = song.item.artists.map((artist: { name: any }) => artist.name).join(', ')
    const isPlaying = song.is_playing
    const songUrl = song.item.external_urls.spotify
    const title = song.item.name
    const timePlayed = song.progress_ms
    const timeTotal = song.item.duration_ms
    const artistUrl = song.item.album.artists[0].external_urls.spotify

    //Returning the song details
    return {
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
      timePlayed,
      timeTotal,
      artistUrl,
    }
  } catch (error) {
    console.log('Error fetching currently playing song: ', error)
  }
}
