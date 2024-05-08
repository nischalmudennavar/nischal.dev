import React, { useEffect, useState } from 'react'

const CurrentlyPlayingOnSpotify = () => {
  const [token, setToken] = useState('')
  const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID
  const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET

  // login method / authroize method 
  // token method 
  // fetch method 

  useEffect(() => {
    // Fetching access token
    const fetchToken = async () => {
      try {
        const authParameters = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body:
            'grant_type=client_credentials&client_id=' +
            CLIENT_ID +
            '&client_secret=' +
            CLIENT_SECRET,
        }
        const response = await fetch(
          'https://accounts.spotify.com/api/token',
          authParameters
        )
        const data = await response.json()

        setToken(data.access_token)
      } catch (error) {
        console.error('Error fetching token:', error)
      }
    }

    fetchToken()
  }, [CLIENT_ID, CLIENT_SECRET]) // Depend on CLIENT_ID and CLIENT_SECRET to rerun the effect if they change

  useEffect(() => {
    
    const fetchCurrentlyPlaying = async () => {
      console.log(token)
      try {
        const url = 'https://api.spotify.com/v1/me/player/currently-playing'
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        })
        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.error('Error fetching currently playing track:', error)
      }
    }

    if (token) {
      fetchCurrentlyPlaying()
    }
  }, [token])

  return <>{token}</> // Render token or whatever you like
}

export default CurrentlyPlayingOnSpotify
