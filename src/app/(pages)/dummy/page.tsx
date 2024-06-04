import GridContainer from '@/components/ui/GridContainer'
import { useSession } from 'next-auth/react'

export default function Home() {
  const session = useSession()

  return (
    <GridContainer className={'  relative place-items-center  '}>
      <h1 className='col-start-5'>{JSON.stringify(session)}</h1>
      {/* <h1>{elapsedTime}</h1> */}
    </GridContainer>
  )
}
