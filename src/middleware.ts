import { NextResponse } from 'next/server'
import { auth, BASE_PATH } from '@/auth'

export const config = {
  matcher: ['/dummy','/dashboard'],
}

export default auth((req) => {
  const reqUrl = new URL(req.url)
  if (!req.auth && reqUrl.pathname !== '/') {
    return NextResponse.redirect(
      new URL(
        `${BASE_PATH}/signin?callbackUrl=${encodeURI(reqUrl?.pathname)}`,
        req.url
      )
    )
  }
})
