import NextAuth, { NextAuthConfig, User } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export const BASE_PATH = '/api/auth'

interface ExtenduserOptions extends User {
  role?: string
}

const authOptions: NextAuthConfig = {
  session: {
    strategy: 'jwt',
  },
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
      async authorize(credentials): Promise<ExtenduserOptions | null> {
        const users = [
          {
            id: 'test-user-1',
            userName: 'nischalmdnvr',
            password: 'nischal@123',
            email: 'nischalmudennavar@gmail.com',
            role: 'admin',
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
              role: user.role,
            }
          : null
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  basePath: BASE_PATH,
}

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions)
