'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'
import type { PropsWithChildren } from 'react'

export const Providers = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <ThemeProvider attribute="class">
      <NextUIProvider>{children}</NextUIProvider>
    </ThemeProvider>
  )
}
