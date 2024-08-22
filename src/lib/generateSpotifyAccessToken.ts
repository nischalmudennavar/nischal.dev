import querystring from 'querystring'

export const getAccessToken = async (
  client_id: string,
  client_secret: string,
  refresh_token: string
) => {
  //Creates a base64 code of client_id:client_secret as required by the API
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')

  //The response will contain the access token
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  })

  return response.json()
}
