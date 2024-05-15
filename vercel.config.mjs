module.exports = {
  async redirects() {
    return [
      {
        source: '/console',
        destination: 'https://console.nischal.dev/',
        permanent: true, // Use `permanent: true` for 301 redirect
      },
    ]
  },
}
