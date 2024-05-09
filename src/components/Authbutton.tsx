import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "./ui/button"

const AuthButton = () => {
  const { data: session } = useSession()
  
  if (session) {
    return (
      <>
        {session?.user?.name}
        <br />
        <Button onClick={() => signOut()}>Sign Out</Button>
      </>
    )
  }
  return (
    <>
      Not Signed in <br />
      <Button onClick={() => signIn()}>Sign in</Button>
    </>
  )
}

export default AuthButton;