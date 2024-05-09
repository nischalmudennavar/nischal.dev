import NextAuth, { NextAuthConfig, User } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const BASE_PATH = '/api/auth'

const authOptions: NextAuthConfig = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'enter username',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'password',
        },
      },
      async authorize(credentials): Promise<User | null> {
        const users = [
          {
            id: 'test-user-1',
            userName: 'nischalmdnvr',
            password: 'HST8ht*qweasd',
            email: 'nischalmudennavar@gmail.com',
          },
        ]
        const user = users.find(
          (user) =>
            user.userName === credentials?.username &&
            user.password === credentials?.password
        )

        return user
          ? {
              id: user.id,
              name: user.userName,
              email: user.email,
            }
          : null
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  basePath: BASE_PATH,
}

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions)
