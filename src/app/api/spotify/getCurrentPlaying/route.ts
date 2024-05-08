import { NextApiResponse } from 'next'
import querystring from 'querystring'

const requestAuthorization = () => {
  const client_id = process.env.NEXT_PUBLIC_CLIENT_ID
  const client_secret = process.env.NEXT_PUBLIC_CLIENT_SECRET
  if (client_id && client_secret) {
    {
      //   localStorage.setItem('client_id', client_id)
      //   localStorage.setItem('client_secret', client_secret)
      let url = process.env.AUTH_URL
      url += '?client_id=' + client_id
      url += '&response_type=code'
      url += '&redirect_uri=' + encodeURI('http://localhost:3000/')
      url += encodeURI(
        '&scope=user-read-private user-read-email user-read-currently-playing user-read-recently-played user-read-playback-state user-read-playback-position user-top-read playlist-read-collaborative playlist-read-private'
      )

      return url
    }
  }
}



export async function GET() {
  const url = requestAuthorization()
  return new Response(url)
}


