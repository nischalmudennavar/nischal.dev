import * as React from 'react'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return (
    <div className='absolute right-0 top-3'>
      <Button variant='outline' size='icon' onClick={toggleTheme}>
        {theme === 'light' ? (
          <SunIcon className='h-[1.2rem] w-[1.2rem]' />
        ) : (
          <MoonIcon className='h-[1.2rem] w-[1.2rem]' />
        )}
        <span className='sr-only'>Toggle theme</span>
      </Button>
    </div>
  )
}
