import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useEffect, useState } from 'react'

export function OpeningMessage() {
  const [openMessage, setOpenMessage] = useState(false)

  useEffect(() => {
    setOpenMessage(true)
  }, [])

  return (
    <>
      <Dialog open={openMessage} onOpenChange={setOpenMessage}>
        <DialogContent className='flex   w-full flex-col border-none bg-primary/0 text-center  '>
          <span className='text-4xl'>⚠️</span>
          <div className='grid gap-4 py-4'>
            Before we go through my portfolio...
          </div>
          <p>
            / Did you drink enough water today ? take a couple of minutes to sit
            back, have a glass of water /
          </p>
          <p>
            you can click outside / the message will vanish after the timer ends
          </p>
        </DialogContent>
      </Dialog>
    </>
  )
}
